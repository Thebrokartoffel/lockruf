// Spieler: Bewegung, Kamera, Taschenlampe (Handy), Schritte, Interaktion, Godmode-Flug/Noclip
import * as THREE from 'three';
import { G } from './state.js';
import { Input } from './input.js';
import { clamp, damp, angleDiff } from './util.js';
import { cookieTex } from './textures.js';
import { rand } from './timers.js';

const STANCE = {
  stand: { h: 1.75, eye: 1.62, speed: 2.5 },
  crouch: { h: 1.15, eye: 0.98, speed: 1.3 },
  crawl: { h: 0.72, eye: 0.48, speed: 0.85 },
};
// Rennen: 2.5 m/s * 2.3 = 5.75 m/s. Volle Ausdauer reicht für 12 s Dauersprint.
const SPRINT_MUL = 2.3, SPRINT_SECS = 12, REGEN_SECS = 7, REGEN_IDLE_SECS = 4.5, EXHAUST_UNTIL = 0.3;

export class Player {
  constructor(camera, scene) {
    this.cam = camera;
    this.p = new THREE.Vector3();
    this.vel = new THREE.Vector3();
    this.vy = 0;
    this.yaw = 0; this.pitch = 0; this.roll = 0;
    this.stance = 'stand';
    this.forceStance = null;
    this.eyeY = 1.62;
    this.bob = 0; this.bobAmt = 0;
    this.stepDist = 0;
    this.stamina = 1; this.exhausted = 0;
    this.canMove = true;
    this.canLook = true;
    this.canSprint = true;
    this.canInteract = true;
    this.onGround = true;
    this.shakeAmt = 0; this.shakeT = 0;
    this.extraPitch = 0; this.extraRoll = 0; this.eyeOffset = 0;
    this.lookTarget = null;
    this.holding = null; this.holdT = 0;
    this.current = null;
    this.radius = 0.3;
    this.flashOn = false;
    this.speedMul = 1;
    this.fovKick = 0;
    this.blockedBy = [];

    // Handy-Taschenlampe
    const fl = new THREE.SpotLight(0xf2f0ff, 0, 40, 0.5, 0.55, 1.25);
    fl.castShadow = true;
    fl.shadow.mapSize.set(1024, 1024);
    fl.shadow.camera.near = 0.15; fl.shadow.camera.far = 38;
    fl.shadow.bias = -0.0004; fl.shadow.normalBias = 0.03;
    fl.map = cookieTex();
    this.flash = fl;
    this.flashTarget = new THREE.Object3D();
    scene.add(fl); scene.add(this.flashTarget);
    fl.target = this.flashTarget;
    this.flashDir = new THREE.Vector3(0, 0, -1);
    this.flashIntensity = 15;
    this.flashFlicker = 0;
    // schwaches Umgebungslicht direkt am Spieler (Display-Schein), damit man in totaler Dunkelheit nicht blind ist
    this.glow = new THREE.PointLight(0x9fb0d0, 0, 4, 2);
    scene.add(this.glow);
  }

  teleport(x, y, z, yaw = this.yaw, pitch = 0) {
    this.p.set(x, y, z); this.vel.set(0, 0, 0); this.vy = 0;
    // flüchtige Zustände zurücksetzen (wichtig für exaktes Rückspulen)
    this.stepDist = 0; this.bob = 0; this.bobAmt = 0; this.stuckT = 0; this.holding = null; this.holdT = 0;
    this.shakeT = 0; this.shakeAmt = 0; this.flashFlicker = 0; this.onGround = true; this.sprinting = false; this._breathT = 0;
    this.yaw = yaw; this.pitch = pitch; this.eyeY = y + STANCE[this.stance].eye;
    this.lookTarget = null;
    this.trail = [];
    this.updateCamera(0);
    this.flashDir.copy(this.forward());
  }

  forward() {
    return new THREE.Vector3(-Math.sin(this.yaw) * Math.cos(this.pitch), Math.sin(this.pitch), -Math.cos(this.yaw) * Math.cos(this.pitch));
  }

  get height() { return STANCE[this.stance].h; }
  get eyeHeight() { return STANCE[this.stance].eye; }

  setFlash(on) {
    const ph = G.phone;
    if (on && (ph.battery <= 0 || ph.dropped || G.flags.noFlash)) on = false;
    if (on !== this.flashOn) G.audio.click();
    this.flashOn = on;
  }

  shake(a = 0.5, t = 0.5) { this.shakeAmt = Math.max(this.shakeAmt, a); this.shakeT = Math.max(this.shakeT, t); }

  tryStance(want) {
    if (want === this.stance) return;
    const order = ['crawl', 'crouch', 'stand'];
    if (order.indexOf(want) > order.indexOf(this.stance)) {
      // aufstehen nur wenn Platz
      const test = this.p.clone();
      G.world.resolve(test, this.radius, this.p.y, this.p.y + STANCE[want].h);
      if (test.distanceToSquared(this.p) > 0.0004) return;
      if (G.flags.lowCeiling && G.flags.lowCeiling(this.p, STANCE[want].h)) return;
    }
    this.stance = want;
  }

  // Ein Schritt: Ton, Geräusch für Zuhörer (Vater), Story-Rückruf
  emitStep(surf, kind) {
    const k = kind === 'sprint' ? 1.35 : kind === 'crouch' ? 0.5 : kind === 'crawl' ? 0.45 : 0.9;
    G.audio.footstep(surf, k, null, kind);
    if (G.noise) G.noise.step(surf, kind, this.p);
    if (this.onStep) this.onStep(surf, kind === 'sprint', kind);
  }

  update(dt) {
    const w = G.world;
    const D = G.dev || {};

    // ---- Blick ----
    if (this.canLook) { this.yaw -= Input.st.lx; this.pitch -= Input.st.ly; }
    if (this.lookTarget) {
      const lt = this.lookTarget;
      const d = new THREE.Vector3().subVectors(lt.pos, this.cam.position);
      const ty = Math.atan2(-d.x, -d.z);
      const tp = Math.atan2(d.y, Math.hypot(d.x, d.z));
      const kk = 1 - Math.exp(-(lt.speed || 4) * dt);
      this.yaw += angleDiff(this.yaw, ty) * kk;
      this.pitch += (tp - this.pitch) * kk;
    }
    this.pitch = clamp(this.pitch, -1.45, 1.45);

    if (D.fly) { this.updateFly(dt, D); return; }

    if (this.scripted) {
      this.vel.set(0, 0, 0); this.vy = 0; this.bobAmt = damp(this.bobAmt, 0, 5, dt);
      this.sprinting = false;
      this.regen(dt, false);
      this.updateInteract(dt);
      if (Input.actHit('flash') && !G.flags.lockFlash) this.setFlash(!this.flashOn);
      this.updateCamera(dt);
      return;
    }

    // ---- Haltung ----
    let want = 'stand';
    if (Input.act('crouch')) want = 'crouch';
    if (this.forceStance) want = this.forceStance;
    this.tryStance(want);
    const st = STANCE[this.stance];

    // ---- Bewegung ----
    let ix = 0, iz = 0;
    if (this.canMove) {
      if (Input.st.ax || Input.st.az) { ix = Input.st.ax; iz = Input.st.az; }   // Touch-Stick (analog)
      else {
        if (Input.act('forward')) iz -= 1;
        if (Input.act('back')) iz += 1;
        if (Input.act('left')) ix -= 1;
        if (Input.act('right')) ix += 1;
      }
    }
    const len = Math.hypot(ix, iz);
    const mag = Math.min(1, len);                 // halb gedrückter Stick = langsamer gehen
    if (len > 0) { ix /= len; iz /= len; }
    // Rennen: vorwärts oder schräg vorwärts, stehend. Nach völliger Erschöpfung erst wieder ab 30 %.
    const sprintKey = Input.act('sprint');
    const sprintDir = len > 0 && iz < -0.25;
    if (this.exhausted > 0 && this.stamina >= EXHAUST_UNTIL) this.exhausted = 0;
    const sprinting = this.canSprint && sprintKey && sprintDir && this.stance === 'stand' && this.exhausted <= 0 && this.stamina > 0;
    if (sprinting && G.phoneOpen && !G.flags.keepPhone) G.ui.togglePhone(false);
    let speed = st.speed * (sprinting ? SPRINT_MUL : Math.max(0.35, mag)) * this.speedMul;
    if (G.phoneOpen) speed *= 0.75;
    if (sprinting) {
      this.stamina = Math.max(0, this.stamina - dt / SPRINT_SECS);
      if (this.stamina <= 0) { this.exhausted = 1; G.audio.breath(1.3); }
    } else this.regen(dt, len > 0);
    if (this.stamina < 0.4 && (this._breathT = (this._breathT || 0) - dt) < 0) { G.audio.breath(1 - this.stamina); this._breathT = this.exhausted ? 0.8 : 1.15; }

    const sin = Math.sin(this.yaw), cos = Math.cos(this.yaw);
    const tx = (ix * cos + iz * sin) * speed;
    const tz = (-ix * sin + iz * cos) * speed;
    // schneller Antritt beim Sprinten, weiches Abbremsen
    const acc = this.onGround ? (sprinting ? 14 : len > 0 ? 11 : 9) : 2.2;
    this.vel.x = damp(this.vel.x, tx, acc, dt);
    this.vel.z = damp(this.vel.z, tz, acc, dt);

    const before = this.p.clone();
    if (D.noclip) { this.p.x += this.vel.x * dt; this.p.z += this.vel.z * dt; this.blockedBy = []; }
    else {
      // Teilschritte: auch bei großen Zeitschritten nie durch dünne Wände
      const n = Math.max(1, Math.ceil(dt / 0.034)), sdt = dt / n;
      const rec = D.on ? [] : null;
      let reg = null;
      for (let i = 0; i < n; i++) {
        this.p.x += this.vel.x * sdt; this.p.z += this.vel.z * sdt;
        w.resolve(this.p, this.radius, this.p.y + 0.35, this.p.y + st.h, rec);
        reg = w.constrain(this.p, this.radius * 0.5, !!rec) || reg;
      }
      if (rec) this.blockedBy = rec.concat(reg ? [reg] : []).map((c) => ({ c }));
    }

    // Springen
    if (this.canMove && Input.actHit('jump') && this.onGround && this.stance === 'stand') {
      this.vy = 4.3; this.onGround = false;
      if (G.noise) G.noise.add(0.12, this.p, 'Sprung');
    }

    // ---- Boden ----
    const ground = w.groundAt(this.p.x, this.p.z, this.p.y, 0.55);
    if (ground === -Infinity) { /* nichts drunter: bleiben */ }
    else if (this.p.y > ground + 0.02 || this.vy > 0) {
      this.vy -= 17 * dt;
      this.p.y += this.vy * dt;
      if (this.p.y <= ground) {
        if (this.vy < -5) {
          G.audio.footstep(w.surfaceAt(this.p.x, this.p.y, this.p.z), 1.4);
          this.shake(0.15, 0.2);
          if (G.noise) G.noise.add(Math.min(0.6, -this.vy * 0.06), this.p, 'Landung');
        }
        this.p.y = ground; this.vy = 0; this.onGround = true;
      } else this.onGround = false;
    } else { this.p.y = ground; this.vy = 0; this.onGround = true; }

    // Spur für Verfolger
    const moved = Math.hypot(this.p.x - before.x, this.p.z - before.z);
    if (!this.trail) this.trail = [];
    const lastT = this.trail[this.trail.length - 1];
    if (!lastT || Math.hypot(lastT.x - this.p.x, lastT.z - this.p.z) > 0.8) { this.trail.push(this.p.clone()); if (this.trail.length > 600) this.trail.shift(); }

    // ---- Festhängen erkennen ----
    if (len > 0 && this.canMove && !D.noclip) {
      if (moved < 0.002) this.stuckT = (this.stuckT || 0) + dt; else this.stuckT = 0;
      if (this.stuckT > 1.2) {
        this.stuckT = 0;
        // in Blickrichtung ein Stück schieben und erneut auflösen
        const tryP = this.p.clone(); tryP.x += -Math.sin(this.yaw) * 0.4; tryP.z += -Math.cos(this.yaw) * 0.4;
        w.resolve(tryP, this.radius, this.p.y + 0.35, this.p.y + st.h); w.constrain(tryP, this.radius * 0.5);
        if (tryP.distanceTo(this.p) > 0.05) this.p.copy(tryP);
      }
    } else this.stuckT = 0;

    // ---- Schritte & Kopfwippen ----
    const hs = moved / Math.max(dt, 1e-4);
    if (this.onGround && hs > 0.3) {
      this.stepDist += moved;
      this.bob += moved * (sprinting ? 2.4 : this.stance === 'stand' ? 3.4 : 4.5);
      this.bobAmt = damp(this.bobAmt, sprinting ? 1.6 : this.stance === 'stand' ? 1 : 0.6, 6, dt);
      const stride = this.stance === 'crawl' ? 0.45 : sprinting ? 1.1 : this.stance === 'crouch' ? 0.55 : 0.78;
      if (this.stepDist > stride) {
        this.stepDist = 0;
        const surf = this.stance === 'crawl' ? (G.flags.inShaft ? 'metal' : 'crawl') : w.surfaceAt(this.p.x, this.p.y, this.p.z);
        this.emitStep(surf, this.stance === 'crawl' ? 'crawl' : this.stance === 'crouch' ? 'crouch' : sprinting ? 'sprint' : 'walk');
      }
    } else this.bobAmt = damp(this.bobAmt, 0, 5, dt);
    this.sprinting = sprinting;
    this.speedNow = hs;

    // ---- Interaktion ----
    this.updateInteract(dt);

    // ---- Taschenlampe ----
    if (Input.actHit('flash') && !G.flags.lockFlash) this.setFlash(!this.flashOn);
    if (G.phone.battery <= 0 && this.flashOn) this.setFlash(false);

    this.updateCamera(dt);
  }

  regen(dt, moving) {
    if (this.stamina >= 1) return;
    const secs = moving ? REGEN_SECS : REGEN_IDLE_SECS;
    this.stamina = Math.min(1, this.stamina + dt / (this.exhausted > 0 ? secs * 1.25 : secs));
  }

  // Godmode: freier Flug ohne Kollision
  updateFly(dt, D) {
    let ix = Input.st.ax || 0, iz = Input.st.az || 0, iy = 0;
    if (Input.act('forward')) iz -= 1;
    if (Input.act('back')) iz += 1;
    if (Input.act('left')) ix -= 1;
    if (Input.act('right')) ix += 1;
    if (Input.act('jump')) iy += 1;
    if (Input.act('crouch')) iy -= 1;
    const spd = (D.flySpeed || 8) * (Input.act('sprint') ? 4 : 1);
    const f = this.forward();
    const r = new THREE.Vector3(Math.cos(this.yaw), 0, -Math.sin(this.yaw));
    const tv = new THREE.Vector3().addScaledVector(f, -iz).addScaledVector(r, ix);
    tv.y += iy;
    if (tv.lengthSq() > 1) tv.normalize();
    tv.multiplyScalar(spd);
    this.vel.x = damp(this.vel.x, tv.x, 8, dt); this.vel.z = damp(this.vel.z, tv.z, 8, dt);
    this.vy = damp(this.vy, tv.y, 8, dt);
    this.p.x += this.vel.x * dt; this.p.z += this.vel.z * dt; this.p.y += this.vy * dt;
    this.stance = 'stand'; this.onGround = false; this.sprinting = false; this.bobAmt = damp(this.bobAmt, 0, 5, dt);
    this.regen(dt, false);
    this.blockedBy = [];
    this.updateInteract(dt);
    if (Input.actHit('flash')) this.setFlash(!this.flashOn);
    this.updateCamera(dt);
  }

  updateInteract(dt) {
    const ui = G.ui;
    if (!this.canInteract) { ui.prompt(null); this.current = null; return; }
    const dir = this.forward();
    const it = G.world.findInteract(this.cam.position, dir);
    this.current = it;
    if (!it) { ui.prompt(null); this.holding = null; return; }
    const txt = typeof it.text === 'function' ? it.text() : it.text;
    if (it.hold > 0) {
      if (Input.act('use')) {
        if (this.holding !== it) { this.holding = it; this.holdT = 0; if (it.onHoldStart) it.onHoldStart(); }
        this.holdT += dt;
        if (it.onHold) it.onHold(dt, this.holdT / it.hold);
        ui.prompt(txt, Math.min(1, this.holdT / it.hold), true);
        if (this.holdT >= it.hold) { this.holding = null; this.use(it); }
      } else { this.holding = null; this.holdT = 0; ui.prompt(txt, 0, true); }
    } else {
      ui.prompt(txt);
      if (Input.actHit('use')) this.use(it);
    }
  }

  use(it) {
    if (it.once) it.used = true;
    G.ui.prompt(null);
    if (it.onUse) it.onUse(it);
    if (it._resolvers) { for (const r of it._resolvers) r(); it._resolvers = []; }
  }

  updateCamera(dt) {
    const st = STANCE[this.stance];
    this.eyeY = damp(this.eyeY, this.p.y + st.eye + this.eyeOffset, dt > 0 ? 14 : 1000, dt || 1);
    const bobY = Math.sin(this.bob * 2) * 0.045 * this.bobAmt;
    const bobX = Math.cos(this.bob) * 0.03 * this.bobAmt;
    let sx = 0, sy = 0;
    if (this.shakeT > 0 && dt > 0) {
      this.shakeT -= dt;
      const a = this.shakeAmt * Math.min(1, this.shakeT * 3);
      sx = (rand() - 0.5) * a * 0.12; sy = (rand() - 0.5) * a * 0.12;
      if (this.shakeT <= 0) this.shakeAmt = 0;
    }
    const c = this.cam;
    const right = new THREE.Vector3(Math.cos(this.yaw), 0, -Math.sin(this.yaw));
    c.position.set(this.p.x, this.eyeY + bobY, this.p.z).addScaledVector(right, bobX);
    // leichtes Atmen im Stand
    const idle = Math.sin(G.time * 1.3) * 0.006;
    c.rotation.order = 'YXZ';
    c.rotation.y = this.yaw + sx;
    c.rotation.x = this.pitch + this.extraPitch + sy + idle;
    c.rotation.z = this.roll + this.extraRoll + Math.sin(this.bob) * 0.006 * this.bobAmt;
    if (dt > 0) this.fovKick = damp(this.fovKick, this.sprinting ? 6 : 0, 5, dt);
    c.fov = G.settings.fov + this.fovKick;
    c.updateProjectionMatrix();
    c.updateMatrixWorld();

    // Taschenlampe folgt mit leichter Verzögerung (wirkt wie in der Hand)
    const f = new THREE.Vector3(0, 0, -1).applyQuaternion(c.quaternion);
    if (dt > 0) this.flashDir.lerp(f, 1 - Math.exp(-12 * dt)).normalize();
    else this.flashDir.copy(f);
    const hand = new THREE.Vector3(0.16, -0.17, -0.1).applyQuaternion(c.quaternion).add(c.position);
    this.flash.position.copy(hand);
    this.flashTarget.position.copy(hand).addScaledVector(this.flashDir, 5);
    let fi = this.flashOn ? this.flashIntensity : 0;
    if (this.flashOn && G.phone.battery < 6) fi *= 0.55 + 0.45 * (Math.sin(G.time * 31) > -0.92 ? 1 : 0.2);
    if (this.flashFlicker > 0) { this.flashFlicker -= dt; fi *= Math.sin(G.time * 97) > 0 ? 0.1 : 1; }
    this.flash.intensity = fi;
    this.glow.position.copy(hand);
    this.glow.intensity = (G.phoneOpen && !G.phone.dropped) ? 0.6 : 0;
  }
}
