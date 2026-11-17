// Der Vater: schläft im Elternschlafzimmer, hört Geräusche und reagiert gestaffelt.
// Stufen: schnarcht → Schnarchen bricht ab → Bett knarzt, Murmeln → Licht unter der Tür, Schritte/Schatten
// → Klinke, Tür geht auf, er schaut in den Flur. Sieht er Leon, ist die Nacht vorbei (Checkpoint).
// Zusätzlich gibt es eine geskriptete Runde runter in die Küche (nach dem Schlüssel-Klirren).
import * as THREE from 'three';
import { G } from './state.js';
import { clamp, damp, angleDiff } from './util.js';
import { rand } from './timers.js';

const yawTo = (dx, dz) => Math.atan2(-dx, -dz);

export class Father {
  constructor(H) {
    this.H = H;          // Hausobjekte aus home.js
    this.man = H.dad;    // makeHuman
    this.reset();
  }

  reset(mode = 'sleep') {
    const H = this.H;
    this.mode = mode;     // 'sleep' | 'check' | 'patrol' | 'return' | 'off'
    this.alert = 0; this.stage = 0; this.sus = 0; this.t = 0;
    this.route = null; this.ri = 0; this.pause = 0; this.lookYaw = null;
    this.caught = false; this.say = null; this.stepT = 0; this._huh = false; this._fridgeOpen = false; this.snoreAt = 0; this.onBack = null;
    this.man.root.visible = false;
    this.pos = new THREE.Vector3(...H.bedPos);
    this.yaw = Math.PI / 2;
    H.lump.visible = mode !== 'off';
    H.parentsDoor.set(0);
    H.gapLight(0); H.feet.visible = false;
    H.bedLamp(false); H.hallLamp(false); H.kitchenLamp(false); H.fridge(false);
    this.snoring = mode === 'sleep';
    if (G.audio.ready) {
      if (mode === 'off') G.audio.stopLoop('snore', 0.2);
      else { if (!G.audio.loops.snore) G.audio.snore(H.snorePos); G.audio.setLoop('snore', 0.7, 0.3); }
    }
  }

  // Geräusch empfangen
  hear(amount, pos, src) {
    if (this.mode === 'off' || (G.dev && G.dev.ignore)) return;
    if (this.mode !== 'sleep') { // wach und unterwegs: laute Geräusche ziehen seine Aufmerksamkeit
      if (amount > 0.15 && this.man.root.visible) { const d = this.pos.distanceTo(pos); if (d < 7) { this.lookYaw = yawTo(pos.x - this.pos.x, pos.z - this.pos.z); this.pause = Math.max(this.pause, 1.2); this.sus = Math.min(0.9, this.sus + amount * 0.6); } }
      return;
    }
    const b = this.H.bedPos;
    const d = Math.hypot(pos.x - b[0], pos.z - b[2]);
    const floor = Math.abs(pos.y - b[1]) > 1.5 ? 0.3 : 1;     // andere Etage: gedämpft
    const att = floor / (1 + (d / 3.2) ** 2);
    this.alert = Math.min(1.3, this.alert + amount * att * 2.4);
  }

  // geskriptete Runde: runter in die Küche, Wasser trinken, wieder hoch
  wakeAndPatrol() {
    if (this.mode === 'off') return;
    const R = this.H.route;
    this.mode = 'patrol';
    this.alert = 1;
    this.route = [
      { p: R.bedside }, { p: R.doorIn, door: 1 }, { p: R.hall, lamp: 'hall' }, { p: R.landing }, { p: R.stairTop }, { p: R.stairBot },
      { p: R.diele, pause: 1.3, look: R.lookLiving, say: 'Leon …?' }, { p: R.corrN }, { p: R.kitchenDoor, lamp: 'kitchen' },
      { p: R.fridge, pause: 4.2, fridge: true, look: R.fridgeLook },
      { p: R.kitchenDoor, lampOff: 'kitchen' }, { p: R.corrN, closet: true }, { p: R.diele, pause: 2.0, look: R.lookLiving, say: 'Bist du wach?' },
      { p: R.stairBot }, { p: R.stairTop }, { p: R.landing }, { p: R.hall, lampOff: 'hall' }, { p: R.doorIn, door: 0 }, { p: R.bedside, end: true },
    ];
    this.ri = 0;
    this.beginWalk();
  }

  beginWalk() {
    const H = this.H;
    this.snoring = false;
    G.audio.setLoop('snore', 0, 0.2);
    G.audio.creak(new THREE.Vector3(...H.bedPos), 1.0, 0.9);
    H.lump.visible = false;
    H.bedLamp(true);
    this.man.root.visible = true;
    this.pos.set(...this.route[0].p);
    this.man.stand();
  }

  // Tür auf, kurz schauen, wieder hinlegen
  check() {
    const R = this.H.route;
    this.mode = 'check';
    this.route = [{ p: R.bedside }, { p: R.doorIn, door: 1 }, { p: R.doorOut, pause: 3.6, look: R.lookHall, say: 'Leon? Bist du das?' }, { p: R.doorIn, door: 0 }, { p: R.bedside, end: true }];
    this.ri = 0;
    this.beginWalk();
  }

  backToBed() {
    const H = this.H;
    this.mode = 'sleep'; this.route = null; this.man.root.visible = false;
    H.lump.visible = true; H.bedLamp(false); H.gapLight(0); H.feet.visible = false;
    this.alert = 0.3; this.stage = 1; this.sus = 0;
    this.snoreAt = G.time + 9;
    G.audio.creak(new THREE.Vector3(...H.bedPos), 0.7, 0.8);
    if (this.onBack) { const f = this.onBack; this.onBack = null; f(); }
  }

  update(dt) {
    if (this.mode === 'off') return;
    const H = this.H, A = G.audio;
    this.t += dt;
    if (this.mode === 'sleep') {
      this.alert = Math.max(0, this.alert - dt * (this.alert > 0.6 ? 0.035 : 0.06));
      const s = this.alert >= 1 ? 4 : this.alert > 0.72 ? 3 : this.alert > 0.5 ? 2 : this.alert > 0.25 ? 1 : 0;
      if (s !== this.stage) this.enterStage(s, this.stage);
      this.stage = s;
      if (this.stage === 0 && !this.snoring && G.time > (this.snoreAt || 0)) { this.snoring = true; A.setLoop('snore', 0.7, 2); }
      // Schatten der Füße unter der Tür
      if (this.stage >= 3) { H.feet.visible = true; H.feet.position.z = H.feetZ + Math.sin(G.time * 0.9) * 0.25; }
      return;
    }
    // unterwegs
    this.walk(dt);
    this.spot(dt);
  }

  enterStage(s, prev) {
    const H = this.H, A = G.audio;
    if (s > prev) {
      if (s >= 1 && this.snoring) { this.snoring = false; A.setLoop('snore', 0, 0.15); }
      if (s === 2) { A.creak(new THREE.Vector3(...H.bedPos), 0.9, 1.1); this.mumble('Mmh …?'); }
      if (s === 3) { H.bedLamp(true); H.gapLight(1); A.heavyStep(new THREE.Vector3(...H.bedPos), 0.45); A.creak(H.doorPos, 0.4, 0.6); }
      if (s === 4) { H.handle(); A.burst({ pos: H.doorPos, f: 2400, q: 5, d: 0.08, peak: 0.35 }); this.check(); }
      if (G.story && G.story.onDadStage) G.story.onDadStage(s);
    } else {
      if (s <= 2) { H.gapLight(0); H.feet.visible = false; H.bedLamp(false); }
      if (s === 0) this.snoreAt = G.time + 5;
    }
  }

  mumble(t) { G.ui.say(t, 2.2, 'Papa (gedämpft)'); }

  walk(dt) {
    const H = this.H, man = this.man;
    if (!this.route) return;
    const wp = this.route[this.ri];
    if (this.pause > 0) {
      this.pause -= dt;
      man.stand();
      if (this.lookYaw !== null) this.yaw += angleDiff(this.yaw, this.lookYaw) * (1 - Math.exp(-3 * dt));
      this.apply();
      return;
    }
    const tgt = new THREE.Vector3(...wp.p);
    const dx = tgt.x - this.pos.x, dz = tgt.z - this.pos.z, d = Math.hypot(dx, dz);
    const spd = 1.25;
    if (d > 0.08) {
      const k = Math.min(1, spd * dt / d);
      this.pos.x += dx * k; this.pos.z += dz * k;
      this.yaw += angleDiff(this.yaw, yawTo(dx, dz)) * (1 - Math.exp(-6 * dt));
      man.walk(dt, spd);
      this.stepT = (this.stepT || 0) - dt;
      if (this.stepT < 0) { this.stepT = 0.55; G.audio.footstep(this.pos.y > 1.5 && this.pos.z > 7.2 && this.pos.z < 11.2 ? 'stairs' : 'woodfloor', 0.75, this.pos.clone().add(new THREE.Vector3(0, 0.05, 0))); }
    } else {
      // Wegpunkt erreicht
      if (wp.door !== undefined) H.parentsDoor.set(wp.door, true);
      if (wp.lamp === 'hall') H.hallLamp(true);
      if (wp.lamp === 'kitchen') H.kitchenLamp(true);
      if (wp.lampOff === 'hall') H.hallLamp(false);
      if (wp.lampOff === 'kitchen') H.kitchenLamp(false);
      if (wp.fridge) { H.fridge(true); this._fridgeOpen = true; }
      else if (this._fridgeOpen) { H.fridge(false); this._fridgeOpen = false; }
      if (wp.say) this.mumble(wp.say);
      this.lookYaw = wp.look ? yawTo(wp.look[0] - this.pos.x, wp.look[2] - this.pos.z) : null;
      this.pause = wp.pause || (wp.door !== undefined ? 1.1 : 0);
      // auf dem Rückweg bleibt er vor der Abstellkammer stehen, wenn Leon drin ist
      if (wp.closet && G.player.hidden) { const c = H.route.closet; this.lookYaw = yawTo(c[0] - this.pos.x, c[2] - this.pos.z); this.pause = 2.6; G.audio.heartbeat(true, 2.6); if (G.story) G.story.mark('Papa vor der Kammer'); }
      if (wp.end) { this.backToBed(); return; }
      this.ri = Math.min(this.route.length - 1, this.ri + 1);
      if (wp.fridge) { G.audio.burst({ pos: this.pos, f: 300, q: 1, d: 0.3, peak: 0.3 }); }
    }
    // Höhe folgt Treppe/Boden
    const gy = G.world.groundAt(this.pos.x, this.pos.z, this.pos.y + 0.4, 0.5);
    if (isFinite(gy)) this.pos.y = damp(this.pos.y, gy, 18, dt);
    this.apply();
  }

  apply() {
    this.man.root.position.copy(this.pos);
    this.man.root.rotation.y = this.yaw;
    if (this.lookYaw !== null && this.pause > 0) this.man.neck.rotation.y = clamp(angleDiff(this.yaw, this.lookYaw), -0.7, 0.7);
    else this.man.neck.rotation.y = 0;
  }

  // Kann er Leon sehen?
  spot(dt) {
    if (this.caught || (G.dev && G.dev.ignore)) { this.sus = 0; return; }
    const pl = G.player;
    if (pl.hidden) { this.sus = Math.max(0, this.sus - dt); return; }
    const eye = new THREE.Vector3(this.pos.x, this.pos.y + 1.66, this.pos.z);
    const tp = G.camera.position;
    const dx = tp.x - eye.x, dz = tp.z - eye.z, d = Math.hypot(dx, dz);
    if (Math.abs(tp.y - eye.y) > 2.6) { this.sus = Math.max(0, this.sus - dt * 0.5); return; }   // andere Etage
    const lit = this.H.isLit(pl.p) || pl.flashOn;
    const maxD = pl.flashOn ? 14 : lit ? 9 : 5.2;
    let see = 0;
    if (d < maxD) {
      const ang = Math.abs(angleDiff(this.yaw + this.man.neck.rotation.y, yawTo(dx, dz)));
      if (ang < 1.0 || d < 1.4) {
        const blk = G.world.segmentBlocked(eye.x, eye.z, tp.x, tp.z, (eye.y + tp.y) / 2 - this.pos.y + this.pos.y);
        if (!blk) {
          const hz = this.H.hideZones.find((z) => pl.p.x > z.minX && pl.p.x < z.maxX && pl.p.z > z.minZ && pl.p.z < z.maxZ && Math.abs(pl.p.y - z.y) < 1);
          const crouched = pl.stance !== 'stand';
          if (hz && crouched && d > 1.8) see = 0;
          else see = (1 - d / maxD) * (crouched ? 1.1 : 2.0) * (pl.flashOn ? 2 : 1) + (d < 2.5 ? 1.5 : 0);
        }
      }
    }
    if (see > 0) {
      this.sus += dt * see * 1.25;
      if (this.sus > 0.35 && !this._huh) { this._huh = true; this.mumble('Hm?'); this.pause = Math.max(this.pause, 0.9); this.lookYaw = yawTo(dx, dz); }
    } else { this.sus = Math.max(0, this.sus - dt * 0.6); if (this.sus < 0.1) this._huh = false; }
    if (this.sus >= 1 || d < 1.0) {
      this.caught = true;
      if (G.story && G.story.caughtByDad) G.story.caughtByDad(this);
    }
  }

  get visible() { return this.man.root.visible; }
}

// kleine Zufallshilfe für spätere Erweiterungen (deterministisch)
export const coin = () => rand() < 0.5;
