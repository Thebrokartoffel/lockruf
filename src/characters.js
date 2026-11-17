// Figuren aus MakeHuman/MPFB (CC0) mit Animationen der Universal Animation Library (Quaternius, CC0).
// Gleiche Schnittstelle wie der frühere Baukasten: root, stand(), walk(dt, speed), sit(), neck.rotation (Kopf drehen),
// chest/hips/handR (Anbauteile), dazu play(clip), say(sekunden) für Mundbewegung, lookAt(punkt).
import * as THREE from 'three';
import { clone as skClone } from 'three/examples/jsm/utils/SkeletonUtils.js';
import { G } from './state.js';
import { Assets } from './assets.js';

const _q = new THREE.Quaternion(), _q2 = new THREE.Quaternion(), _rq = new THREE.Quaternion(), _pq = new THREE.Quaternion();
const _v = new THREE.Vector3(), _e = new THREE.Euler(0, 0, 0, 'YXZ');
// natürliche Geschwindigkeit der Clips (m/s bei 1,0 m Hüfthöhe), daraus die Abspielgeschwindigkeit
const NATURAL = { walk: 1.15, jog: 3.6, sprint: 6.4, crouch_walk: 0.85 };
const ALL = new Set();

export class Character {
  constructor(name, { height = null, hood = false, shadow = true, tint = null } = {}) {
    const g = Assets.gltf(name);
    this.name = name;
    this.root = new THREE.Group();
    this.root.name = 'char_' + name;
    this.model = skClone(g.scene);
    this.model.rotation.y = Math.PI;               // glTF schaut nach +Z, das Spiel nach -Z
    this.root.add(this.model);
    this.bones = {}; this.meshes = []; this.morphs = [];
    this.model.traverse((o) => {
      if (o.isBone) this.bones[o.name] = o;
      if (o.isMesh) {
        this.meshes.push(o);
        o.castShadow = shadow; o.receiveShadow = true;
        const m = o.material = o.material.clone();
        if (m.transparent || m.alphaTest > 0) {      // Haare, Brauen, Wimpern: Alpha-Test statt Sortierung
          m.transparent = false; m.alphaTest = 0.22; m.side = THREE.DoubleSide; m.depthWrite = true;
          m.polygonOffset = true; m.polygonOffsetFactor = -2; m.polygonOffsetUnits = -4; o.renderOrder = 2;
        }
        m.envMapIntensity = 0;
        if (tint) m.color.multiply(new THREE.Color(tint));
        if (o.morphTargetDictionary) this.morphs.push(o);
      }
    });
    // Höhe anpassen (Ruhepose messen)
    this.model.updateMatrixWorld(true);
    const box = new THREE.Box3();
    for (const m of this.meshes) { m.geometry.computeBoundingBox(); const b = m.geometry.boundingBox.clone().applyMatrix4(m.matrixWorld); box.union(b); }
    this.restHeight = Math.max(0.5, box.max.y - Math.max(0, box.min.y));
    const hb = this.bones.pelvis || this.bones['DEF-spine'];
    const rawHip = hb ? hb.getWorldPosition(_v).y : this.restHeight * 0.53;
    const k = height ? height / this.restHeight : 1;
    if (height) this.model.scale.setScalar(k);
    this.height = height || this.restHeight;
    this.hipH = rawHip * k;
    // Sichtbarkeitstest: großzügige Kugel um die ganze Figur (passt für jede Pose: Sitzen, Knien, Tragen),
    // damit Figuren außerhalb des Blickfelds nicht gezeichnet werden
    this.model.updateMatrixWorld(true);
    { const c = new THREE.Vector3(0, this.height * 0.5, 0), r = Math.max(1.45, this.height * 0.85), inv = new THREE.Matrix4();
      for (const m of this.meshes) { inv.copy(m.matrixWorld).invert(); m.boundingSphere = new THREE.Sphere(c.clone().applyMatrix4(inv), r / m.matrixWorld.getMaxScaleOnAxis()); } }

    this.mixer = new THREE.AnimationMixer(this.model);
    this.clips = {}; for (const c of g.animations) this.clips[c.name] = c;
    this.actions = {}; this.cur = null; this.curName = '';
    // Kompatibilität mit dem alten Baukasten
    this.neck = new THREE.Object3D();              // rotation.y = Kopf links/rechts, rotation.x = nicken
    this.chest = new THREE.Object3D(); this.hips = new THREE.Object3D(); this.handR = new THREE.Object3D(); this.headObj = new THREE.Object3D();
    this.root.add(this.chest, this.hips, this.handR, this.headObj);
    this.armR = { sh: new THREE.Object3D(), el: new THREE.Object3D() }; this.armL = { sh: new THREE.Object3D(), el: new THREE.Object3D() };
    this.idleClip = 'idle';
    this.mouth = 0; this.talkT = 0; this.blinkT = 2 + Math.random() * 3; this.blink = 0; this.smile = 0;
    this.lookTarget = null;
    if (hood) this.addHood();
    this.stand();
    const up = (dt) => this.update(dt); up.visual = true;
    if (G.world) G.world.updaters.push(up);
    ALL.add(this);
  }

  // Kapuze und Schatten statt Gesicht (der Mann)
  addHood() {
    const k = this.height / 1.9;
    const mat = new THREE.MeshLambertMaterial({ color: 0x15171a, side: THREE.DoubleSide });
    const hood = new THREE.Mesh(new THREE.SphereGeometry(0.16 * k, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.64), mat);
    hood.position.set(0, 0.06 * k, 0.03 * k); hood.rotation.x = 0.32; hood.castShadow = true;
    const back = new THREE.Mesh(new THREE.CylinderGeometry(0.15 * k, 0.22 * k, 0.22 * k, 12, 1, true), mat);
    back.position.set(0, -0.1 * k, 0.04 * k); back.castShadow = true;
    const shade = new THREE.Mesh(new THREE.CircleGeometry(0.1 * k, 14), new THREE.MeshBasicMaterial({ color: 0x020202 }));
    shade.position.set(0, 0.035 * k, -0.118 * k); shade.rotation.y = Math.PI;
    this.headObj.add(hood, back, shade);
    this.hood = hood;
  }

  action(name) {
    if (!this.clips[name]) return null;
    if (!this.actions[name]) this.actions[name] = this.mixer.clipAction(this.clips[name]);
    return this.actions[name];
  }
  // Clip abspielen (weich überblenden). once: einmal abspielen und stehen bleiben
  play(name, { fade = 0.3, once = false, timeScale = 1, restart = false } = {}) {
    if (!this.clips[name]) name = this.clips[this.idleClip] ? this.idleClip : Object.keys(this.clips)[0];
    const a = this.action(name);
    if (this.curName === name && !restart) { a.timeScale = timeScale; return a; }
    a.reset(); a.timeScale = timeScale;
    a.setLoop(once ? THREE.LoopOnce : THREE.LoopRepeat, Infinity); a.clampWhenFinished = once;
    a.enabled = true; a.setEffectiveWeight(1);
    if (this.cur && this.cur !== a) { a.crossFadeFrom(this.cur, fade, false); }
    a.play();
    this.cur = a; this.curName = name;
    return a;
  }
  has(name) { return !!this.clips[name]; }
  stand(clip) { this.play(clip || this.idleClip, { fade: 0.35 }); }
  sit(clip) { this.play(clip || 'sit', { fade: 0.4 }); }
  walk(dt, speed) {
    const s = Math.abs(speed), scale = 1 / Math.max(0.5, this.hipH);
    if (s < 0.05) { this.stand(); return; }
    let name = 'walk';
    if (s > 4.6 && this.clips.sprint) name = 'sprint';
    else if (s > 2.1 && this.clips.jog) name = 'jog';
    const nat = NATURAL[name] / scale;
    this.play(name, { fade: 0.25 });
    this.cur.timeScale = THREE.MathUtils.clamp(s / nat, 0.55, 1.7);
  }
  // Mund bewegen, während Untertitel laufen (Sekunden)
  say(sec = 2) { this.talkT = Math.max(this.talkT, sec); }
  lookAt(p) { this.lookTarget = p; }

  setMorph(name, v) {
    for (const m of this.morphs) { const i = m.morphTargetDictionary[name]; if (i !== undefined) m.morphTargetInfluences[i] = v; }
  }

  // Kopf zusätzlich drehen (Weltachsen der Figur), nach dem Mixer
  applyLook(dt) {
    let yaw = this.neck.rotation.y, pitch = this.neck.rotation.x;
    if (this.lookTarget) {
      this.root.updateMatrixWorld();
      const h = this.bones.head || this.bones.Head;
      if (h) {
        const hp = h.getWorldPosition(_v);
        const d = this.lookTarget.clone().sub(hp);
        this.root.getWorldQuaternion(_rq);
        d.applyQuaternion(_rq.clone().invert());
        const wantYaw = THREE.MathUtils.clamp(Math.atan2(-d.x, -d.z), -1.1, 1.1);
        const wantPitch = THREE.MathUtils.clamp(Math.atan2(d.y, Math.hypot(d.x, d.z)), -0.5, 0.6);
        this._ly = (this._ly || 0) + (wantYaw - (this._ly || 0)) * (1 - Math.exp(-4 * dt));
        this._lp = (this._lp || 0) + (wantPitch - (this._lp || 0)) * (1 - Math.exp(-4 * dt));
        yaw += this._ly; pitch += this._lp;
      }
    }
    if (Math.abs(yaw) < 1e-4 && Math.abs(pitch) < 1e-4) return;
    this.root.getWorldQuaternion(_rq);
    const chain = [[this.bones.neck_01, 0.4], [this.bones.head || this.bones.Head, 0.6]];
    for (const [b, k] of chain) {
      if (!b) continue;
      b.parent.updateMatrixWorld(true);
      b.parent.getWorldQuaternion(_pq);
      _e.set(pitch * k, yaw * k, 0, 'YXZ');
      _q.setFromEuler(_e);                                  // Drehung im Figurenraum
      _q2.copy(_rq).multiply(_q).multiply(_rq.clone().invert()); // in Weltkoordinaten
      // lokal: parent^-1 * welt * parent * lokal
      const inv = _pq.clone().invert();
      b.quaternion.premultiply(inv.multiply(_q2).multiply(_pq));
    }
  }

  // Anbauteile auf Knochen setzen (Ausrichtung bleibt die der Figur, wie beim alten Baukasten)
  syncAttach(obj, bone) {
    if (!bone) return;
    bone.getWorldPosition(_v);
    this.root.worldToLocal(_v);
    obj.position.copy(_v);
  }

  update(dt) {
    if (!this.root.visible || !this.root.parent) return;
    const cam = G.camera;
    if (cam) { this.root.getWorldPosition(_v); if (_v.distanceToSquared(cam.position) > 90 * 90) return; }
    this.mixer.update(dt);
    this.model.updateMatrixWorld(true);
    this.applyLook(dt);
    // Blinzeln, Mund
    this.blinkT -= dt;
    if (this.blinkT < 0) { this.blink = 1; this.blinkT = 2.5 + Math.random() * 4; }
    this.blink = Math.max(0, this.blink - dt * 7);
    const b = this.blink > 0.5 ? (1 - this.blink) * 2 : this.blink * 2;
    this.setMorph('blink', THREE.MathUtils.clamp(b * 1.6, 0, 1));
    if (this.talkT > 0) {
      this.talkT -= dt;
      const t = G.time * 9;
      this.mouth = 0.18 + 0.22 * Math.abs(Math.sin(t) * Math.sin(t * 0.37 + 1.3));
    } else this.mouth = Math.max(0, this.mouth - dt * 3);
    this.setMorph('talk', this.mouth);
    this.setMorph('smile', this.smile);
    // Anbauteile
    this.model.updateMatrixWorld(true);
    this.syncAttach(this.chest, this.bones.spine_03 || this.bones['DEF-spine.003']);
    this.syncAttach(this.hips, this.bones.pelvis || this.bones['DEF-spine']);
    this.syncAttach(this.handR, this.bones.hand_r || this.bones['DEF-hand.R']);
    const hb = this.bones.head || this.bones.Head;
    if (hb) {
      this.syncAttach(this.headObj, hb);
      // Kapuze folgt der Kopfdrehung
      hb.getWorldQuaternion(_q); this.root.getWorldQuaternion(_rq);
      const rel = _rq.clone().invert().multiply(_q);
      if (!this._headRest) this._headRest = rel.clone();
      this.headObj.quaternion.copy(rel).multiply(this._headRest.clone().invert());
    }
  }
}

export function makeCharacter(name, opts) { return new Character(name, opts); }
export function allCharacters() { return [...ALL]; }
