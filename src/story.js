// Story: Kapitel, Skript-Ablauf, Ereignisse. Linear wie bei Fears to Fathom.
// Alles läuft in Spielzeit (G.time) und lässt sich beim Kapitelwechsel abbrechen (Token).
import * as THREE from 'three';
import { G, saveProgress } from './state.js';
import { P, schX } from './level/outside.js';
import { HUT } from './level/hut.js';
import { HOME } from './level/home.js';
import { clamp, angleDiff } from './util.js';
import { K } from './input.js';
import { after as gAfter, rand } from './timers.js';
import { Father } from './father.js';

export class Abort extends Error {}

export const CHAPTERS = [
  { id: 0, name: 'Prolog', sub: 'Der Keller' },
  { id: 1, name: '01:43', sub: 'Zuhause' },
  { id: 2, name: '01:52', sub: 'Wendelsweg' },
  { id: 3, name: '02:08', sub: 'Hügelschneise' },
  { id: 4, name: '02:17', sub: 'Abseits' },
  { id: 5, name: '02:39', sub: 'Die Hütte' },
  { id: 6, name: '03:14', sub: 'Flucht' },
  { id: 7, name: '03:24', sub: 'Kleingärten' },
  { id: 8, name: '03:31', sub: 'Zuhause' },
];
// Checkpoints innerhalb eines Kapitels (für Neustart nach dem Erwischtwerden und den Godmode)
export const CHECKPOINTS = { 1: [['start', 'Zimmer'], ['og', 'Obergeschoss'], ['eg', 'Erdgeschoss'], ['mama', 'Schlüssel holen']], 6: [['start', 'Schacht-Ausgang'], ['tor', 'Am Tor']] };

const yawTo = (fx, fz) => Math.atan2(-fx, -fz);
const V = (x, y, z) => new THREE.Vector3(x, y, z);

export class Story {
  constructor() {
    this.token = 0;
    this.waiters = [];
    this.chapter = -1;
    this.ups = [];
    this.chase = null;
    this.resolved = 0;
  }

  // ---------------- Skript-Werkzeuge ----------------
  _w(fn) {
    const tok = this.token;
    return new Promise((res, rej) => this.waiters.push({ fn, res, rej, tok }));
  }
  wait(sec) { const until = G.time + sec; return this._w(() => G.time >= until); }
  until(fn) { return this._w(fn); }
  reach(x, z, r = 3) { return this._w(() => Math.hypot(G.player.p.x - x, G.player.p.z - z) < r); }
  use(it) { return this._w(() => it.used); }
  async say(text, dur = 3.4, who = null) { G.ui.say(text, dur, who, !who); await this.wait(dur * 0.92); }
  obj(t) { G.ui.objective(t); }
  // Spielzeit-Timer, der beim Kapitelwechsel verfällt
  after(sec, fn) { const tok = this.token; return gAfter(sec, () => { if (tok === this.token) fn(); }); }
  look(pos, speed = 4, dur = 1.2) {
    G.player.lookTarget = { pos: pos.clone ? pos.clone() : V(...pos), speed };
    this.after(dur, () => { G.player.lookTarget = null; });
    return this.wait(dur);
  }
  // UI-Übergänge mit Abbruchprüfung (damit ein alter Skriptstrang nie weiterläuft)
  async fade(v, d) { const tok = this.token; await G.ui.fade(v, d); if (tok !== this.token) throw new Abort(); }
  async card(a, b, d) { const tok = this.token; await G.ui.card(a, b, d); if (tok !== this.token) throw new Abort(); }
  async narr(p, o) { const tok = this.token; await G.ui.narration(p, o); if (tok !== this.token) throw new Abort(); }
  // mehrere Untertitel nacheinander, ohne Fehler bei Abbruch
  sayLines(lines, gap = 3.3) { (async () => { for (const l of lines) { G.ui.say(l, 3.4); await this.wait(gap); } })().catch(() => {}); }
  mark(label) { if (G.dev) G.dev.mark(label); }
  msg(text, opts = {}) {
    G.ui.addMsg('them', text);
    if (!G.phone.dropped) {
      if (G.phone.charging) G.audio.vibrate(G.objects.chargingPhone.mesh.position);
      else G.audio.vibrate();
      if (!G.phoneOpen && !opts.silent) G.ui.notify('Deniz', text);
      if (G.phoneOpen) G.audio.ding();
    }
  }
  async reply(options) {
    if (!G.phoneOpen) G.ui.hint(`<b>${K('phone')}</b> Handy öffnen &nbsp; <b>${K('reply1')}</b>/<b>${K('reply2')}</b> antworten`, 6);
    const i = await this.raceAbort(G.ui.setReply(options));
    return i;
  }
  raceAbort(p) {
    const tok = this.token;
    return Promise.race([p, this._w(() => false)]).then((v) => { if (tok !== this.token) throw new Abort(); return v; });
  }
  setClock(hhmm) {
    const [h, m] = hhmm.split(':').map(Number);
    G.phone.clockBase = h * 60 + m; G.phone.clockAcc = 0;
    this.updateClock();
  }
  updateClock() {
    const t = G.phone.clockBase + Math.floor(G.phone.clockAcc / 40);
    const s = String(Math.floor(t / 60) % 24).padStart(2, '0') + ':' + String(t % 60).padStart(2, '0');
    if (s !== G.phone.time) G.ui.setTime(s);
  }
  addUp(fn) { const tok = this.token; this.ups.push({ fn, tok }); }

  interact(o) { return G.world.addInteract(o); }

  // ---------------- Haupt-Loop ----------------
  update(dt) {
    let n = 0;
    for (let i = this.waiters.length - 1; i >= 0; i--) {
      const w = this.waiters[i];
      if (w.tok !== this.token) { this.waiters.splice(i, 1); w.rej(new Abort()); n++; continue; }
      let ok = false;
      try { ok = w.fn(); } catch (e) { ok = false; }
      if (ok) { this.waiters.splice(i, 1); w.res(); n++; }
    }
    this.resolved += n;
    this.ups = this.ups.filter((u) => u.tok === this.token);
    for (const u of this.ups) u.fn(dt);
    if (G.noise) G.noise.update(dt);
    if (this.dad) this.dad.update(dt);
    // Akku
    const ph = G.phone;
    if (ph.charging) ph.battery = Math.min(100, ph.battery + dt / 3.2);
    else if (G.flags.hasPhone && !ph.dropped) ph.battery = Math.max(ph.minBattery || 0, ph.battery - dt / (G.player.flashOn ? 10 : 70));
    ph.clockAcc = (ph.clockAcc || 0) + dt;
    this.updateClock();
    if (Math.floor(G.time * 2) !== this._lastRefresh) { this._lastRefresh = Math.floor(G.time * 2); G.ui.refreshStatus(); }
    if (this.chase) this.updateChase(dt);
    return n;
  }

  // ---------------- Kapitel starten ----------------
  async run(ch, fresh = true, cp = null, keepChase = false) {
    // Frische Starts immer an einer Frame-Grenze ausführen (gleiche Reihenfolge live und beim Rückspulen)
    if (fresh && !G.replaying && !this.directRun) { G.pendingRun = [ch, fresh, cp, keepChase]; return; }
    if (fresh && G.dev && !G.replaying) G.dev.beginSegment(ch, cp);
    this.token++;
    for (const w of this.waiters) w.rej(new Abort());
    this.waiters = [];
    this.ups = [];
    if (!keepChase) this.chase = null;
    for (const k of Object.keys(this)) if (k.startsWith('_') && k !== '_lastRefresh') delete this[k];
    // alte, kapitelgebundene Interaktionen entfernen
    G.world.interacts = G.world.interacts.filter((i) => !i.story);
    this.chapter = ch;
    if (!G.replaying && !(G.dev && G.dev.everOn)) saveProgress(ch);
    G.ui.say(null); G.ui.prompt(null); G.ui.hint(null); G.ui.hideNotif();
    this.mark(CHAPTERS[ch].name + ' ' + CHAPTERS[ch].sub + (cp && cp !== 'start' ? ' · ' + cp.toUpperCase() : ''));
    if (fresh) await this.setup(ch, cp);
    const fn = this['ch' + ch];
    try { await fn.call(this, fresh, cp); }
    catch (e) { if (!(e instanceof Abort)) console.error(e); }
  }

  // Grundzustand der Welt pro Kapitel
  async setup(ch, cp = null) {
    const O = G.objects, pl = G.player, A = G.audio, H = O.home;
    G.ui.togglePhone(false);
    G.ui.closeNote();
    G.ui.reply = null;
    G.flags = {};
    pl.canMove = true; pl.canLook = true; pl.canSprint = true; pl.canInteract = true; pl.scripted = false; pl.hidden = false;
    pl.forceStance = null; pl.stance = 'stand'; pl.extraPitch = 0; pl.extraRoll = 0; pl.eyeOffset = 0; pl.speedMul = 1; pl.stamina = 1; pl.exhausted = 0;
    pl.onStep = null; pl.lookTarget = null;
    document.getElementById('slats').classList.remove('show');
    // Inventar
    G.inv = new Set();
    if (ch >= 2) ['phone', 'jacket', 'homeKeys'].forEach((k) => G.inv.add(k));
    if (ch === 1 && cp && cp !== 'start') ['phone', 'jacket'].forEach((k) => G.inv.add(k));
    if (ch >= 6) ['torKey', 'screwdriver'].forEach((k) => G.inv.add(k));
    G.flags.hasPhone = ch >= 2 || ch === 0 || (ch === 1 && cp && cp !== 'start');
    // Handy
    const bat = [12, 31, 30, 26, 19, 3, 15, 13, 12][ch];
    Object.assign(G.phone, { battery: bat, charging: false, network: ![4, 5].includes(ch), dropped: false, mapUnlocked: ch >= 6, minBattery: ch <= 5 ? 2 : 1 });
    G.chat = chatFor(ch, cp);
    G.ui.phoneTab = 'chat';
    this.setClock(ch === 1 && cp === 'mama' ? '01:57' : ch === 1 && cp === 'eg' ? '01:51' : ch === 1 && cp === 'og' ? '01:48' : ['03:12', '01:43', '01:52', '02:08', '02:17', '02:39', '03:14', '03:24', '03:31'][ch]);
    G.ui.clockShow(G.flags.hasPhone);
    // Objekte
    O.pile.reset(); if (ch >= 4) O.pile.clear(true);
    O.hutDoor.set(false);
    O.hatch.set(ch === 5);
    O.fan.reset(ch <= 5);
    O.tube.set(true);
    O.drawer.set(false); O.drawer.screwdriver.visible = true;
    O.fuseState = [true, ch <= 5, true];
    for (let i = 0; i < 3; i++) O.fuse.setVisual(i, O.fuseState[i]);
    O.gate.reset();
    for (const r of G.world.regions) if (['bank', 'stream', 'alley', 'gardens'].includes(r.id)) r.enabled = ch >= 7;
    O.man.show(false);
    O.silhouette.root.visible = false;
    O.deniz.root.visible = ch === 8;
    O.groundPhone.hide();
    O.chargingPhone.mesh.visible = false;
    O.flood.off();
    O.keys.torKey.visible = ch < 6;
    O.homePhone.group.visible = ch === 1 && (!cp || cp === 'start'); O.homePhone.light(false);
    O.jacket.group.visible = ch === 1 && (!cp || cp === 'start');
    O.homeKeys.group.visible = ch === 1;
    O.beanie.visible = ch <= 5;
    O.ventTop.grate.position.x = O.ventTop.pos.x; O.ventTop.grate.rotation.z = 0;
    this.resetBranch(ch >= 7);
    O.fogPuffs.enabled = true;
    H.frontDoor.set(0);
    // Haus: Türen, Mama, Fernseher, Schatten
    H.roomDoor.set(ch === 1 && cp && cp !== 'start' ? 1 : 0);
    H.bathDoor.set(0); H.curtain(false); H.figure('kitchen', false); H.figure('living', false);
    const momDown = ch === 1 && cp !== 'mama';
    H.momLump.visible = ch === 1 && cp === 'mama';
    H.mom.root.visible = momDown; H.tv(momDown);
    if (momDown) { H.mom.root.position.set(...H.sofaSeat); H.mom.root.rotation.y = -Math.PI / 2; H.mom.sit(); H.mom.neck.rotation.y = 0; }
    this._hideSpot = null;
    document.getElementById('veil').className = '';
    // Audio
    for (const n of ['humIn', 'humOut', 'tube', 'snore', 'stream', 'traffic', 'fridge']) A.stopLoop(n, 0.3);
    A.heartbeat(false);
    if (ch === 0 || ch === 5) { A.hum('humIn', O.fan.pos, 1); A.hum('humOut', O.ventTop.pos, 0.7, true); A.tubeBuzz(O.tube.pos); }
    if (ch >= 6) A.stream(new THREE.Vector3(P.streamX, -0.3, P.gateZ));
    if (ch === 2 || ch === 8) A.traffic(true);
    // Vater + Geräusche
    if (!this.dad) this.dad = new Father(H);
    G.noise.reset();
    if (ch === 1) {
      this.dad.reset('sleep');
      G.noise.listen((a, p, s) => this.dad.hear(a, p, s));
      const S = HOME.stairs;
      for (const [x, z, r] of [[502.6, 6.85, 0.45], [503.55, 7.75, 0.4], [502.95, 5.5, 0.35], [503.6, 14.55, 0.4]]) G.noise.addCreak(x, z, r, z > 10 ? 0 : 3.0, 1);
      for (const i of [11, 7, 3]) { const z = S.zBot - (i + 0.5) * S.run; G.noise.addCreak(504.85, z, 0.32, (i + 1) * S.rise, 1.2); }
      A.loop('fridge', (g) => { const o = A.osc('sawtooth', 50); const l = A.filter('lowpass', 160, 0.7); o.connect(l); l.connect(g); const p = A.panner(V(505.0, 1.0, 3.2), 1.2, 1.6); g.connect(p); p.connect(A.amb); o.start(); return [o]; }, 0.07);
    } else this.dad.reset('off');
    // Spieler
    const sp = {
      0: [...HUT.coldOpen, 0, 0.35],
      1: cp === 'mama' ? [504.85, 0, 11.95, yawTo(0, -1), 0.05] : cp === 'eg' ? [...HOME.egSpawn, yawTo(-0.4, 1), 0] : cp === 'og' ? [...HOME.ogSpawn, yawTo(0, 1), -0.05] : [...HOME.spawn, yawTo(0.5, -1), -0.1],
      2: [...P.homeSpawn, -Math.PI / 2, 0],
      3: [0, 0, -31, Math.PI, 0],
      4: [-9.5, 0, 55.5, yawTo(-0.7, 0.6), 0],
      5: [-67.5, 0, 133.2, yawTo(0.6, 0.8), 0],
      6: [...HUT.ventExit, 0, 0],
      7: [-85.5, 0, P.gateZ, -Math.PI / 2 * -1 + Math.PI, 0],
      8: [1.2, 0, -110, 0, 0],
    }[ch];
    let y = sp[1];
    if (ch >= 2 && ch !== 8 && ch !== 0) y = G.world.groundAt(sp[0], sp[2], 50);
    if (ch === 8 || ch === 2) y = G.world.groundAt(sp[0], sp[2], 5);
    pl.teleport(sp[0], y, sp[2], sp[3], sp[4]);
    pl.setFlash(false);
    pl.flashOn = [3, 4, 5].includes(ch) || ch === 6;
    if (ch === 7) pl.yaw = Math.PI / 2;
    G.ui.objective(null);
    G.ui.crosshair(true);
  }

  // Spieler an den letzten sicheren Punkt setzen, ohne die Story zurückzusetzen
  unstuck() {
    const pl = G.player;
    pl.canMove = true; pl.scripted = false; pl.lookTarget = null; pl.forceStance = null;
    if (pl.hidden) this.unhide();
    const tr = (pl.trail || []).slice(-12);
    let p = tr.length > 6 ? tr[0] : null;
    if (!p) { const r = G.world.regions.find((q) => q.enabled && q.type === 'box' && pl.p.x > q.minX - 30 && pl.p.x < q.maxX + 30 && pl.p.z > q.minZ - 30 && pl.p.z < q.maxZ + 30); p = r ? V((r.minX + r.maxX) / 2, pl.p.y, (r.minZ + r.maxZ) / 2) : pl.p.clone(); }
    const y = G.world.groundAt(p.x, p.z, pl.p.y + 2);
    pl.teleport(p.x, isFinite(y) ? y : pl.p.y, p.z, pl.yaw, 0);
  }

  resetBranch(fallen) {
    const b = G.objects.branch.group;
    const [tx, tz] = G.branchTree;
    const gy = G.terrain.height(tx - 2.4, tz);
    if (fallen) { b.position.set(tx - 0.3, gy + 0.25, tz); b.rotation.set(0, 0, Math.PI / 2); }
    else { b.position.set(tx - 0.3, gy + 6.4, tz); b.rotation.set(0, 0.0, 1.78); }
    if (this.branchCol) this.branchCol.enabled = fallen;
    else this.branchCol = G.world.addOBB(tx - 2.6, tz, 2.3, 0.35, 0, -50, gy + 0.5, { enabled: fallen, label: 'Umgestürzter Ast' });
  }

  async transition(nextCh, text) {
    G.player.canMove = false;
    await this.fade(1, 1.2);
    if (text) await this.card('', text, 2.4);
    this.run(nextCh, true);
  }

  // ---------------- Verstecken (Abstellkammer, Schränke, Bett, Duschvorhang) ----------------
  hide(spot = G.objects.home.spots.kammer) {
    const pl = G.player, H = G.objects.home;
    if (pl.hidden) return;
    pl.hidden = true; pl.scripted = true; this._hideSpot = spot;
    pl.forceStance = spot.lying ? 'crawl' : 'crouch'; pl.stance = pl.forceStance;
    G.audio.creak(spot.pos, 0.45, 0.6);
    pl.teleport(spot.inside[0], spot.inside[1], spot.inside[2], spot.yaw, spot.lying ? 0.25 : -0.05);
    pl.setFlash(false);
    if (spot.id === 'dusche') H.curtain(true);
    if (spot.overlay === 'slats') document.getElementById('slats').classList.add('show');
    else document.getElementById('veil').className = 'show ' + spot.overlay;
    // „Rauskommen“ liegt immer direkt vor der Kamera
    const f = pl.forward();
    this._outIt = this.interact({ story: true, pos: G.camera.position.clone().addScaledVector(f, 0.9), radius: 1.2, range: 2.4, once: true, text: 'Rauskommen', onUse: () => this.unhide() });
    G.ui.hint(G.touchOn ? 'Benutzen: rauskommen' : `<b>${K('use')}</b> rauskommen`, 4);
  }
  unhide() {
    const pl = G.player, H = G.objects.home, spot = this._hideSpot || H.spots.kammer;
    if (!pl.hidden) return;
    pl.hidden = false; pl.scripted = false; pl.forceStance = null;
    G.audio.creak(spot.pos, 0.55, 0.5);
    if (G.noise) G.noise.add(0.08, V(...spot.out), 'Versteck');
    pl.teleport(spot.out[0], spot.out[1], spot.out[2], spot.yaw, 0);
    if (spot.id === 'dusche') H.curtain(false);
    document.getElementById('slats').classList.remove('show');
    document.getElementById('veil').className = '';
    if (this._outIt) { this._outIt.used = true; this._outIt = null; }
    this._hideSpot = null;
  }
  // Verstecke im Haus anbieten (Abstellkammer, Kleiderschränke, Bett, Duschvorhang)
  offerHideSpots() {
    const pl = G.player, H = G.objects.home;
    for (const sp of Object.values(H.spots)) {
      this.interact({ story: true, pos: sp.pos, radius: sp.id === 'bett' ? 0.6 : 0.5, range: 2.3, once: false, text: sp.name, enabled: () => !pl.hidden, onUse: () => this.hide(sp) });
    }
    // Badtür
    this.interact({ story: true, pos: H.bathDoor.pos, radius: 0.5, range: 2.2, once: false, text: () => (H.bathDoor.open ? 'Badtür zumachen' : 'Badtür öffnen'),
      onUse: () => { const o = !H.bathDoor.open; H.bathDoor.set(o ? 1 : 0, true); G.audio.creak(H.bathDoor.pos, 0.25, 0.5); G.noise.add(0.05, H.bathDoor.pos, 'Badtür'); } });
  }
  looksAt(pos, minDot) {
    const d = new THREE.Vector3().subVectors(pos, G.camera.position); const l = d.length() || 1;
    return G.player.forward().dot(d.divideScalar(l)) > minDot;
  }
  // NPC einen Weg ablaufen lassen (abbruchsicher über until)
  async npcWalk(man, pts, spd = 1.1, onWp = null) {
    let i = 0, done = false, stepT = 0;
    const pos = V(...pts[0]); man.root.position.copy(pos); man.stand(); man.root.visible = true;
    let yaw = man.root.rotation.y;
    this.addUp((dt) => {
      if (done) return;
      const t = V(...pts[i]); const dx = t.x - pos.x, dz = t.z - pos.z, d = Math.hypot(dx, dz);
      if (d < 0.06) { if (onWp) onWp(i); i++; if (i >= pts.length) { done = true; man.stand(); } return; }
      const k = Math.min(1, spd * dt / d); pos.x += dx * k; pos.z += dz * k;
      yaw += angleDiff(yaw, yawTo(dx, dz)) * (1 - Math.exp(-6 * dt)); man.root.rotation.y = yaw;
      const gy = G.world.groundAt(pos.x, pos.z, pos.y + 0.4, 0.5); if (isFinite(gy)) pos.y += (gy - pos.y) * (1 - Math.exp(-18 * dt));
      man.root.position.copy(pos); man.walk(dt, spd);
      stepT -= dt; if (stepT < 0) { stepT = 0.62; G.audio.footstep(pos.y > 0.2 && pos.y < 2.8 ? 'stairs' : 'woodfloor', 0.45, pos.clone().add(V(0, 0.05, 0))); }
    });
    await this.until(() => done);
  }
  // Schatten hinter einem Fenster: taucht im Augenwinkel auf, weg, sobald man genau hinsieht. Kein Text, kein Ton.
  windowGlimpse(which, maxD = 6.5) {
    const H = G.objects.home, fig = H.figureMesh(which), pl = G.player;
    let state = 0, t0 = 0;
    this.addUp(() => {
      if (state === 2) return;
      const d = fig.position.distanceTo(G.camera.position);
      const dot = pl.forward().dot(fig.position.clone().sub(G.camera.position).divideScalar(d || 1));
      if (state === 0) { if (d < maxD && d > 2.2 && dot > 0.5 && dot < 0.88 && pl.p.y < 1.5) { state = 1; t0 = G.time; H.figure(which, true); this.mark('Schatten am Fenster'); } }
      else if (dot > 0.975 || d < 2.0 || G.time - t0 > 1.1) { state = 2; H.figure(which, false); }
    });
  }
  // Gestalt draußen (Silhouette): im Augenwinkel sichtbar, verschwindet beim genauen Hinsehen oder läuft weg
  glimpse(x, z, { yaw = null, walk = null, minD = 9, maxD = 32, show = 0.45, gone = 0.965, dur = 1.4, when = () => true, label = 'Schatten' } = {}) {
    const sil = G.objects.silhouette, pl = G.player;
    let state = 0, t0 = 0;
    const p = V(x, G.terrain.height(x, z), z);
    this.addUp((dt) => {
      if (state === 2) return;
      if (state === 0) {
        if (!when()) return;
        const d = Math.hypot(p.x - pl.p.x, p.z - pl.p.z);
        const dir = V(p.x - G.camera.position.x, p.y + 1.2 - G.camera.position.y, p.z - G.camera.position.z).normalize();
        const dot = pl.forward().dot(dir);
        if (d > minD && d < maxD && dot > show && dot < gone) {
          state = 1; t0 = G.time; sil.root.position.copy(p); sil.root.rotation.y = yaw ?? yawTo(pl.p.x - p.x, pl.p.z - p.z); sil.stand(); sil.root.visible = true; this.mark(label);
        }
        return;
      }
      const sp = sil.root.position;
      if (walk) { const [wx, wz, spd] = walk; const dx = wx - sp.x, dz = wz - sp.z, l = Math.hypot(dx, dz); if (l > 0.1) { const k = Math.min(1, spd * dt / l); sp.x += dx * k; sp.z += dz * k; sp.y = G.terrain.height(sp.x, sp.z); sil.root.rotation.y = yawTo(dx, dz); sil.walk(dt, spd); } }
      const dir = V(sp.x - G.camera.position.x, sp.y + 1.2 - G.camera.position.y, sp.z - G.camera.position.z); const d = dir.length(); dir.divideScalar(d);
      if ((!walk && pl.forward().dot(dir) > gone) || G.time - t0 > dur || d < minD * 0.6) { state = 2; sil.root.visible = false; }
    });
  }

  // ================================================================
  // KAPITEL 0: Cold Open im Keller
  // ================================================================
  async ch0() {
    const O = G.objects, pl = G.player, A = G.audio;
    G.ui.fade(0, 2.2);
    pl.canMove = false;
    await this.wait(1.6);
    this.mark('Luke knallt zu');
    A.slam(O.hatch.pos, 1.3); pl.shake(0.8, 0.5); G.post.scare(0.4);
    await this.wait(0.5);
    A.bolt(O.hatch.pos);
    await this.wait(0.7);
    A.drag(O.hatch.pos, 1.8);
    pl.canMove = true;
    await this.say('Nein. Nein, nein, nein …', 2.6);
    this.obj('Raus hier.');
    this.interact({ story: true, pos: [-63.25, -0.2, 139.0], radius: 0.7, range: 3.2, text: 'Luke aufdrücken', once: false, onUse: () => { A.burst({ pos: O.hatch.pos, type: 'lowpass', f: 300, d: 0.2, peak: 0.6 }); A.creak(O.hatch.pos, 0.6, 0.4); G.ui.say('Sie geht nicht auf. Er hat was draufgestellt.', 3, null, true); this._triedHatch = true; } });
    // Schritte oben
    this.addUp((dt) => {
      this._stepT = (this._stepT || 2) - dt;
      if (this._stepT < 0) { this._stepT = 0.9 + rand() * 0.6; A.heavyStep(V(-62 + Math.sin(G.time * 0.7) * 1.5, 0.4, 140 + Math.cos(G.time * 0.5)), 0.9); }
    });
    // spätestens nach 16 s geht es weiter, sonst sobald die Luke probiert wurde
    const t0 = G.time;
    await this.until(() => this._triedHatch || G.time - t0 > 16);
    await this.wait(1.5);
    this.mark('Licht aus, Schrei');
    O.tube.set(false);
    A.burst({ type: 'highpass', f: 2000, d: 0.05, peak: 0.4, pos: O.tube.pos });
    A.stopLoop('humIn', 3); A.stopLoop('tube', 0.1);
    pl.canMove = false;
    await this.wait(2.2);
    A.scream(V(-62, 0.6, 140), 'distant', 0.9);
    await this.wait(2.6);
    await this.fade(1, 0.05);
    A.stopLoop('humOut', 0.2);
    await this.wait(1.2);
    await this.card('', 'Drei Stunden vorher.', 2.6);
    await this.narr([
      'Ich heiße Leon. Das ist letztes Jahr passiert, in der Halloween-Nacht.',
      'Wir wohnen in Sachsenhausen, zehn Minuten vom Stadtwald.',
      'Mein bester Freund Deniz hatte in der Nacht Stress zuhause und wollte bei mir pennen.',
      'Wir wollten nur kurz zum Goetheturm. Eine Mutprobe.',
      'Ich erzähl das, weil ich bis heute nicht weiß, wer mir in dieser Nacht geschrieben hat.',
    ]);
    this.run(1, true);
  }

  // ================================================================
  // KAPITEL 1: Zuhause – Zimmer, Obergeschoss, Treppe, Erdgeschoss
  // ================================================================
  async ch1(fresh, cp) {
    const O = G.objects, pl = G.player, A = G.audio, H = O.home, D = this.dad;
    G.noise.listening = true;
    this._cp = cp || 'start';
    if (this._cp === 'start') {
      G.ui.clockShow(false);
      G.ui.fade(0, 2.5);
      G.ui.card('01:43', 'Sachsenhausen', 3);
      await this.wait(1.5);
      // Handy vibriert auf dem Tisch
      let buzzing = true;
      this.addUp((dt) => {
        if (!buzzing) return;
        this._bz = (this._bz ?? 0.2) - dt;
        if (this._bz < 0) { this._bz = 3.2; A.vibrate(O.homePhone.pos); O.homePhone.light(true); this.after(2.6, () => O.homePhone.light(false)); }
      });
      await this.say('…Wer schreibt mir um die Uhrzeit?', 3);
      this.obj('Geh an dein Handy');
      const ph = this.interact({ story: true, pos: O.homePhone.pos, radius: 0.15, text: 'Handy nehmen', onUse: () => { A.pickup(); buzzing = false; O.homePhone.light(false); O.homePhone.group.visible = false; G.inv.add('phone'); G.flags.hasPhone = true; G.ui.clockShow(true); } });
      await this.use(ph);
      this.mark('Handy genommen');
      G.ui.hint(G.touchOn ? `<b>${K('phone')}</b> Handy &nbsp;&nbsp; <b>${K('flash')}</b> Licht` : `<b>${K('phone')}</b> Handy &nbsp;&nbsp; <b>${K('flash')}</b> Taschenlampe`, 7);
      G.ui.addMsg('them', 'bist du noch wach', '01:41');
      G.ui.togglePhone(true);
      await this.wait(1.4);
      this.msg('hab stress mit meinem vater');
      await this.wait(1.6);
      this.msg('kann ich heute bei dir schlafen?');
      await this.say('Deniz. Schon wieder Stress mit seinem Vater.', 3.2);
      let r = await this.reply(['klar, komm vorbei', 'was ist passiert?']);
      await this.wait(1.4);
      if (r === 1) { this.msg('erzähl ich dir gleich'); await this.wait(1.2); this.msg('geht das klar?'); r = await this.reply(['ja klar, komm']); await this.wait(1.2); }
      this.msg('danke');
      await this.wait(2.2);
      this.msg('bin eh grad am goetheturm');
      await this.wait(1.6);
      this.msg('komm kurz hin, ist halloween 🎃 wir drehen ne runde durch den wald');
      await this.wait(1.6);
      this.msg('aber ohne maps, nur mit taschenlampe');
      await this.say('Er ist schon unterwegs. Natürlich ist er das.', 3.2);
      await this.reply(['ok, bin in 10 min da', 'es ist 2 uhr nachts … ok, ich komm']);
      await this.wait(1.3);
      this.msg('bis gleich');
      await this.wait(1.5);
      G.ui.togglePhone(false);
      this.obj('Zieh deine Jacke an');
      const jk = this.interact({ story: true, pos: O.jacket.pos, radius: 0.3, text: 'Jacke anziehen', onUse: () => { A.zip(); O.jacket.group.visible = false; G.inv.add('jacket'); } });
      await this.use(jk);
      this.mark('Jacke an');
      await this.say('Okay. Leise jetzt. Papa schläft.', 3);
      // Zimmertür: langsam aufmachen
      this.obj('Mach leise deine Tür auf');
      const rd = this.interact({ story: true, pos: H.roomDoor.pos, radius: 0.55, range: 2.4, hold: 1.2, text: 'Tür langsam öffnen',
        onHoldStart: () => A.creak(H.roomDoor.pos, 0.2, 0.35), onHold: (dt) => { if (rand() < dt * 1.4) A.creak(H.roomDoor.pos, 0.1, 0.25); },
        onUse: () => { H.roomDoor.set(1, true); G.noise.add(0.05, H.roomDoor.pos, 'Zimmertür'); } });
      await this.use(rd);
      this.mark('Zimmertür auf');
      this._cp = 'og';
    } else {
      G.ui.fade(0, 1.4);
      const lbl = { og: ['01:48', 'Zuhause'], eg: ['01:51', 'Erdgeschoss'], mama: ['01:57', 'Der Schlüssel'] }[cp] || ['01:48', 'Zuhause'];
      G.ui.card(lbl[0], lbl[1], 2.2);
      await this.wait(0.8);
    }
    this.offerHideSpots();

    // ---------- Obergeschoss: am Schlafzimmer vorbei ----------
    if (this._cp === 'og') {
      this.obj('Schleich dich runter');
      G.ui.hint(`<b>${K('crouch')}</b> ducken = leiser &nbsp;&nbsp; nicht rennen`, 7);
      this.addUp(() => {
        if (!this._creakSaid && G.noise.lastCreak && G.time - G.noise.lastCreak < 0.1 && pl.p.y > 1) { this._creakSaid = true; G.ui.say('Die Dielen … Ducken, leiser gehen.', 3); }
      });
      this.onDadStage = (s) => {
        if (s === 1 && !this._s1) { this._s1 = true; G.ui.say('…Er schnarcht nicht mehr.', 2.6); }
        if (s === 3 && !this._s3) { this._s3 = true; G.ui.say('Licht. Er ist wach. Weg von der Tür!', 3); }
        if (s === 4) { this.mark('Papa schaut in den Flur'); this.obj('Versteck dich! In dein Zimmer oder runter'); D.onBack = () => { G.ui.say('…Puh.', 2); this.obj('Schleich dich runter'); }; }
      };
      await this.until(() => pl.p.y < 0.5 && pl.p.z > 11.3 && D.mode === 'sleep');
      this.mark('Unten angekommen');
      this._cp = 'eg';
    }

    // ---------- Erdgeschoss: Haustür zu, Mama auf dem Sofa ----------
    let triedDoor = false, momTalked = this._cp === 'mama';
    this.interact({ story: true, pos: H.frontDoor.pos, radius: 0.45, once: false, text: 'Tür öffnen', enabled: () => !G.inv.has('homeKeys'),
      onUse: () => {
        A.burst({ pos: H.frontDoor.pos, f: 600, q: 2, d: 0.1, peak: 0.3 });
        if (momTalked) G.ui.say('Zu. Der Schlüssel liegt oben bei ihm.', 2.8);
        else if (!triedDoor) { triedDoor = true; G.ui.say('Abgeschlossen. …Und der Schlüssel hängt nicht am Brett.', 3.6); this.obj('Such den Hausschlüssel'); }
        else G.ui.say('Zu. Ohne Schlüssel komm ich hier nicht raus.', 2.8);
      } });
    this.interact({ story: true, pos: V(505.36, 1.45, 14.85), radius: 0.25, range: 2.2, once: false, text: 'Schlüsselbrett ansehen', onUse: () => G.ui.say(momTalked ? 'Leer. Er hat ihn oben.' : 'Leer. Wo ist der Schlüssel?', 2.6) });
    this.interact({ story: true, pos: V(504.69, 1.35, 3.0), radius: 0.15, range: 2.2, text: 'Zettel lesen', onUse: () => this.sayLines(['„LEON: Müll raus!! – Papa“', 'Natürlich.']) });
    if (this._cp === 'eg') {
      this.onDadStage = null;
      await this.say('Unten. Jetzt raus, bevor er was merkt.', 3);
      this.obj('Geh zur Haustür');
      this.windowGlimpse('kitchen');
      // Mama sitzt im Dunkeln vor dem stummen Fernseher – man sieht sie erst, wenn man um die Ecke kommt
      const seat = V(H.sofaSeat[0], 1.05, H.sofaSeat[2]);
      await this.until(() => { if (pl.p.y > 1 || pl.p.x > 501.9 || pl.p.z < 5.6) return false; const d = Math.hypot(pl.p.x - seat.x, pl.p.z - seat.z); return d < 3.3 || (d < 6.2 && this.looksAt(seat, 0.93)); });
      await this.momScene(seat);
      momTalked = true;
      this._cp = 'mama';
    }

    // ---------- Schlüssel aus dem Elternschlafzimmer ----------
    this.windowGlimpse('living', 7.5);
    this.obj('Hol den Schlüssel aus dem Schlafzimmer');
    G.ui.hint('Geduckt und langsam. Im Schlafzimmer hört er jeden Schritt.', 6);
    this.onDadStage = (s) => {
      if (s === 1 && !this._s1) { this._s1 = true; G.ui.say('…Er schnarcht nicht mehr.', 2.6); }
      if (s === 2 && !this._s2) { this._s2 = true; G.ui.say('Nicht bewegen …', 2); }
      if (s === 3 && !this._s3) { this._s3 = true; G.ui.say('Licht! Er wird wach!', 2.6); }
      if (s === 4) { this.mark('Papa schaut in den Flur'); this.obj('Versteck dich!'); D.onBack = () => { G.ui.say('…Puh.', 2); this.obj(G.inv.has('homeKeys') ? 'Raus. Leise.' : 'Hol den Schlüssel aus dem Schlafzimmer'); }; }
    };
    this.addUp(() => {
      if (!this._momWarn && D.mode === 'sleep' && D.alert > 0.42 && pl.p.y > 2 && pl.p.x < 502.2 && pl.p.z > 4.4) { this._momWarn = true; G.ui.say('…Leon? Bist du verrückt? Raus hier …', 3, 'Mama (flüstert)'); }
    });
    let pOpen = false;
    this.interact({ story: true, pos: H.doorPos, radius: 0.5, range: 2.2, hold: 1.6, text: 'Tür ganz langsam öffnen', enabled: () => !pOpen && D.mode === 'sleep',
      onHoldStart: () => A.creak(H.doorPos, 0.16, 0.35), onHold: (dt) => { if (rand() < dt * 1.2) A.creak(H.doorPos, 0.09, 0.25); },
      onUse: () => { pOpen = true; H.parentsDoor.set(0.6, true); G.noise.add(0.05, H.doorPos, 'Elterntür'); this.mark('Elterntür auf'); } });
    // Schlüssel ganz vorsichtig nehmen – wer zu früh loslässt, lässt ihn klirren
    let taken = false, holding = false, holdP = 0;
    const keys = this.interact({ story: true, pos: O.homeKeys.pos, radius: 0.16, range: 1.9, hold: 2.0, text: 'Schlüssel ganz vorsichtig nehmen',
      onHoldStart: () => { holding = true; holdP = 0; },
      onHold: (dt, p) => { holdP = p; if (rand() < dt * 2) A.burst({ pos: O.homeKeys.pos, f: 5200, q: 8, d: 0.03, peak: 0.05 }); },
      onUse: () => { holding = false; taken = true; this.onDadStage = null; O.homeKeys.group.visible = false; G.inv.add('homeKeys'); A.pickup(); } });
    this.addUp(() => {
      if (holding && pl.holding !== keys && !taken) { holding = false; if (holdP > 0.05) { A.keys(O.homeKeys.pos); G.noise.add(0.34, O.homeKeys.pos, 'Schlüssel'); G.ui.say('Shit …', 1.2); } }
    });
    await this.until(() => taken || keys.used);
    this.mark('Schlüssel genommen');
    // Er wird trotzdem wach – kurzer Vorsprung, dann sucht er
    this.onDadStage = null;
    await this.wait(1.0);
    D.alert = Math.max(D.alert, 0.3); A.setLoop('snore', 0, 0.2); D.snoring = false;
    A.creak(V(...H.bedPos), 0.8, 1.0);
    this.obj('Raus hier!');
    await this.wait(2.2);
    D.mumble('Hm … wer …?');
    A.heartbeat(true, 1.4);
    await this.wait(3.4);
    await this.until(() => D.mode === 'sleep');
    this.mark('Papa sucht');
    D.searchPatrol();
    let dadDone = false;
    D.onBack = () => { dadDone = true; };
    this.obj('Versteck dich!');
    G.ui.hint('Kleiderschrank · dein Bett · Duschvorhang im Bad · Abstellkammer · hinter dem Sofa', 8);
    await this.until(() => dadDone);
    A.heartbeat(false);
    this.mark('Papa wieder im Bett');
    await this.wait(2.5);
    await this.say('…Er liegt wieder.', 2.4);
    await this.wait(2.0);
    if (pl.hidden) G.ui.hint(G.touchOn ? 'Benutzen: rauskommen' : `<b>${K('use')}</b> rauskommen`, 4);
    this.obj('Raus. Leise.');
    let chainOff = false;
    const chain = this.interact({ story: true, pos: H.frontDoor.chainPos, radius: 0.25, range: 2.2, hold: 1.1, text: 'Kette lösen', enabled: () => !chainOff,
      onHold: (dt) => { if (rand() < dt * 3) A.burst({ pos: H.frontDoor.chainPos, f: 4200, q: 6, d: 0.04, peak: 0.12 }); } });
    const unlock = this.interact({ story: true, pos: H.frontDoor.pos, radius: 0.45, range: 2.3, hold: 1.8, text: 'Tür leise aufschließen', enabled: () => chainOff,
      onHold: (dt) => { if (rand() < dt * 4) A.keys(H.frontDoor.pos); } });
    await this.use(chain);
    chainOff = true;
    A.burst({ pos: H.frontDoor.chainPos, f: 3600, q: 5, d: 0.12, peak: 0.25 });
    await this.use(unlock);
    this.mark('Haustür auf');
    // ---------- Tür auf: kalte Luft, Straßenlicht, raus ----------
    pl.scripted = true; G.flags.lockFlash = true;
    A.bolt(H.frontDoor.pos);
    await this.wait(0.5);
    pl.lookTarget = { pos: V(503.6, 1.5, 16.5), speed: 3 };
    H.frontDoor.set(1, true);
    A.doorCreak(H.frontDoor.pos);
    A.setLoop('wind', 0.5, 1.2); A.traffic(true);
    await this.wait(1.6);
    await this.fade(1, 1.0);
    A.stopLoop('fridge', 0.3);
    this.run(2, true);
  }

  // Mama auf dem Sofa: Schreck, Warnung, sie geht hoch ins Bett
  async momScene(seat) {
    const pl = G.player, A = G.audio, H = G.objects.home, mom = H.mom;
    this.mark('Mama auf dem Sofa');
    A.sting('soft'); G.post.scare(0.5); pl.shake(0.45, 0.3);
    mom.neck.rotation.y = clamp(angleDiff(mom.root.rotation.y, yawTo(pl.p.x - seat.x, pl.p.z - seat.z)), -1.2, 1.2);
    pl.canMove = false;
    pl.lookTarget = { pos: seat, speed: 6 };
    G.ui.say('Leon?!', 1.6, 'Mama');
    await this.wait(1.6);
    pl.lookTarget = null;
    await this.say('Mama! …Was machst du hier im Dunkeln?', 2.8, 'Leon');
    await this.say('Ich konnte nicht schlafen.', 2.2, 'Mama');
    await this.say('Und du? Es ist zwei Uhr nachts.', 2.6, 'Mama');
    await this.say('Ich … wollte nur was trinken.', 2.4, 'Leon');
    await this.wait(0.5);
    await this.say('Mit Jacke?', 1.8, 'Mama');
    await this.wait(1.0);
    await this.say('…Ich will es gar nicht wissen. Pass bloß auf, dein Vater ist heute nicht gut drauf.', 4.2, 'Mama');
    await this.say('Den Hausschlüssel hat er mit hochgenommen. Wie immer, wenn er sauer ist.', 4.0, 'Mama');
    await this.say('Ich geh ins Bett. Mach keinen Ärger, okay?', 3.0, 'Mama');
    pl.canMove = true;
    A.switchClick(V(501.7, 0.9, 9.0)); H.tv(false);
    mom.neck.rotation.y = 0;
    const R = H.momRoute;
    await this.npcWalk(mom, [[499.25, 0, 8.95], ...R], 1.0, (i) => { if (i === 10) { H.parentsDoor.set(1, true); A.creak(H.doorPos, 0.3, 0.5); } });
    mom.root.visible = false; H.momLump.visible = true; H.parentsDoor.set(0, true);
    A.creak(V(...H.bedPos), 0.5, 0.7); A.burst({ pos: H.doorPos, f: 2400, q: 5, d: 0.06, peak: 0.2 });
    await this.say('…Also oben. Bei ihm. Super.', 2.6);
  }

  caughtByDad(D) {
    if (this._dying) return;
    const pl = G.player, A = G.audio, H = G.objects.home;
    if (G.dev && G.dev.god) {
      // Godmode: Schreck ja, Game Over nein
      A.sting('hard'); G.post.scare(0.7); pl.shake(0.8, 0.4);
      G.ui.say('LEON?! … (Godmode: nicht erwischt)', 2.2, 'Papa');
      D.sus = 0; this.after(2.5, () => { D.caught = false; });
      return;
    }
    this._dying = true;
    pl.canMove = false; pl.scripted = true;
    this.mark('Von Papa erwischt');
    const eye = V(D.pos.x, D.pos.y + 1.62, D.pos.z);
    pl.lookTarget = { pos: eye, speed: 10 };
    D.pause = 99; D.lookYaw = yawTo(pl.p.x - D.pos.x, pl.p.z - D.pos.z); D.yaw = D.lookYaw;
    // er macht einen Schritt auf Leon zu – Gesicht direkt vor der Kamera
    const dir = V(pl.p.x - D.pos.x, 0, pl.p.z - D.pos.z); const len = dir.length();
    if (len > 0.8) D.pos.addScaledVector(dir.normalize(), len - 0.75);
    D.apply();
    if (D.pos.y > 1.5) H.hallLamp(true); else H.kitchenLamp(true);
    A.sting('hard'); G.post.scare(1); pl.shake(1.3, 0.6);
    G.ui.say('LEON! WAS MACHST DU DA?!', 2.4, 'Papa');
    this.after(1.7, () => G.ui.death(true, 'PAPA HAT DICH ERWISCHT.', 'Checkpoint wird geladen …'));
    this.after(4.4, () => { G.ui.death(false); this._dying = false; this.run(1, true, this._cp === 'start' ? 'og' : this._cp); });
  }

  // ================================================================
  // KAPITEL 2: Straße + Goetheturm
  // ================================================================
  async ch2() {
    const O = G.objects, A = G.audio, pl = G.player;
    G.ui.fade(0, 1.6);
    A.slam(V(P.homeSpawn[0] - 1.2, 1, P.homeSpawn[2]), 0.25);
    G.ui.card('01:52', 'Wendelsweg', 2.6);
    this.obj('Geh zum Goetheturm');
    this.glimpse(7.4, -84.5, { minD: 12, maxD: 36, when: () => pl.p.z > -120 && pl.p.z < -92, label: 'Schatten an der Straße' });
    await this.wait(2.5);
    await this.say('Halloween. Und die ganze Straße schläft.', 3.2);
    await this.until(() => pl.p.z > -102);
    await this.say('Der Kürbis brennt noch.', 2.6);
    await this.until(() => pl.p.z > -73);
    this.setClock('02:01');
    this.mark('Am Spielplatz');
    await this.say('Der Goetheturm. Nachts sieht der noch höher aus.', 3.4);
    this.obj('Finde Deniz am Turm');
    this.glimpse(19.5, -43.5, { minD: 10, maxD: 30, when: () => pl.p.z > -68, label: 'Schatten hinter dem Turm' });
    let canSeen = false;
    this.interact({ story: true, pos: O.can.position, radius: 0.12, range: 2.2, text: 'Dose ansehen', onUse: () => { canSeen = true; G.ui.say('Deniz\' Energy. Noch kalt. Er war hier.', 3.6); } });
    this.interact({ story: true, pos: G.towerSign, radius: 0.5, range: 3, text: 'Schild lesen', onUse: () => G.ui.say('„Vom 01.11. bis 31.03. geschlossen.“ Also ab morgen.', 3.6) });
    await this.until(() => Math.hypot(pl.p.x - P.tower[0], pl.p.z - P.tower[1]) < 13 || canSeen);
    await this.say('Deniz?', 1.8, 'Leon');
    await this.wait(1.2);
    A.owl(V(-30, 12, -20));
    await this.say('Keiner da.', 2.2);
    // Dose gefunden, an der Bank oder spätestens nach 10 s weiter
    const t0 = G.time;
    await this.until(() => canSeen || Math.hypot(pl.p.x - P.canBench[0], pl.p.z - P.canBench[1]) < 4 || G.time - t0 > 10);
    await this.wait(4);
    this.mark('Deniz schreibt: im Wald');
    this.msg('bin schon im wald');
    await this.wait(1.6);
    this.msg('nimm den kiesweg hinterm spielplatz, einfach geradeaus');
    await this.say('Der wartet nicht mal auf mich.', 3);
    await this.reply(['warum wartest du nicht?', 'ernsthaft?']);
    await this.wait(1.4);
    this.msg('komm einfach');
    this.obj('Folge der Hügelschneise in den Wald');
    await this.until(() => pl.p.z > -30.5);
    this.run(3, false);
  }

  // ================================================================
  // KAPITEL 3: Hügelschneise
  // ================================================================
  async ch3(fresh) {
    const O = G.objects, pl = G.player, A = G.audio;
    if (fresh) G.ui.fade(0, 1.6);
    G.ui.card('02:08', 'Hügelschneise', 2.6);
    this.setClock('02:08');
    this.obj('Geh die Schneise entlang');
    this.glimpse(10.5, 22.0, { walk: [-3.5, 22.8, 3.4], minD: 12, maxD: 28, show: 0.6, dur: 4.2, when: () => pl.p.z > -4 && pl.p.z < 9, label: 'Gestalt kreuzt den Weg' });
    // Sicherung: wer schon hinter dem Durchschlupf ist, bevor die Story so weit ist, wird nicht festgehalten
    this.addUp(() => {
      if (this._ch3end || pl.p.x > -8.4 || pl.p.z < 50) return;
      this._ch3end = true; O.pile.clear(true); G.ui.reply = null; G.ui.renderPhone(); G.ui.hint(null); this.mark('Abkürzung durchs Gebüsch');
      this.run(4, false);
    });
    // Äste von Anfang an wegräumbar: wer früher dort ist als Deniz' Nachricht, kommt trotzdem durch
    const pile = this.interact({ story: true, pos: [P.pile[0] + 0.4, G.terrain.height(...P.pile) + 0.7, P.pile[1]], radius: 0.9, range: 2.6, hold: 2.0, text: 'Äste wegräumen',
      onHold: (dt) => { if (rand() < dt * 6) A.burst({ f: 1500, q: 0.6, d: 0.2, peak: 0.25 }); },
      onUse: () => { O.pile.clear(); A.burst({ f: 900, q: 0.5, d: 0.6, peak: 0.5 }); } });
    if (pl.p.z < -20) await this.wait(3);
    if (!pl.flashOn) { await this.say('Ich seh fast nichts. Taschenlampe an.', 3); G.ui.hint(`<b>${K('flash')}</b> Taschenlampe`, 5); }
    await this.until(() => pl.p.z > 8);
    A.owl(V(14, 10, 30));
    await this.say('Eulen. Nur Eulen.', 2.6);
    await this.until(() => pl.p.z > 19);
    this.msg('ich seh dein licht');
    await this.say('Wo ist er?', 2);
    await this.until(() => pl.p.z > 26);
    this.msg('bleib mal kurz stehen');
    await this.wait(3);
    this.mark('Da steht wer hinter dir');
    this.msg('da steht wer hinter dir');
    // Silhouette hinter dem Spieler auf dem Weg
    const sil = O.silhouette;
    const sz = Math.max(-25, pl.p.z - 24);
    sil.root.position.set(schX(sz) + 0.6, G.terrain.height(schX(sz) + 0.6, sz), sz);
    sil.root.rotation.y = Math.PI;
    sil.stand(); sil.root.visible = true;
    const t0 = G.time;
    await this.until(() => {
      const d = new THREE.Vector3().subVectors(sil.root.position, G.camera.position).normalize();
      return pl.forward().dot(d) > 0.94 || G.time - t0 > 14;
    });
    const looked = G.time - t0 <= 14;
    if (looked) {
      A.sting('soft'); G.post.scare(0.35); pl.flashFlicker = 0.5;
      await this.wait(0.9);
      // geht seitlich in den Wald
      const start = sil.root.position.clone();
      let k = 0;
      this.addUp((dt) => { if (k >= 1) { sil.root.visible = false; return; } k += dt / 1.1; sil.root.position.x = start.x - k * 5; sil.root.rotation.y = -Math.PI / 2; sil.walk(dt, 2.8); });
      await this.wait(1.3);
      sil.root.visible = false;
      await this.say('Da war … da war doch was.', 3);
    } else sil.root.visible = false;
    await this.wait(1.5);
    this.msg('spaß');
    await this.say('Ich hätte fast nen Herzinfarkt gekriegt.', 3.4);
    await this.reply(['nicht lustig', 'alter, lass das']);
    await this.wait(1.4);
    this.msg('sorry 😂');
    this.obj('Geh weiter');
    await this.until(() => pl.p.z > 51);
    this.mark('Sperrung');
    await this.say('Gesperrt. Forstarbeiten.', 2.6);
    this.msg('der weg ist gesperrt oder? geh links durchs gebüsch, da kommst du durch');
    this.obj('Zwäng dich links durchs Gebüsch');
    // kurzer Blick-Hinweis Richtung Durchschlupf
    if (pl.p.x > -2) { pl.lookTarget = { pos: V(P.pile[0] + 1.5, 1.0, P.pile[1]), speed: 2.2 }; this.after(1.1, () => { pl.lookTarget = null; }); }
    await this.until(() => pl.p.x < -2.4 && pl.p.z > 52);
    G.ui.hint(`<b>${K('crouch')}</b> ducken`, 5);
    await this.use(pile);
    this._ch3end = true;
    await this.until(() => pl.p.x < -9);
    this.run(4, false);
  }

  // ================================================================
  // KAPITEL 4: Abseits – verlaufen, Schreie, Handy fällt
  // ================================================================
  async ch4(fresh) {
    const O = G.objects, pl = G.player, A = G.audio;
    if (fresh) G.ui.fade(0, 1.6);
    G.ui.card('02:17', 'Abseits', 2.6);
    this.setClock('02:17');
    if (G.phone.battery > 19) G.phone.battery = 19;
    this.msg('ich hab band an die bäume gemacht. geh dem einfach nach');
    this.obj('Folge den Markierungen');
    this.addUp(() => {
      if (this._ch4end || Math.hypot(pl.p.x + 67, pl.p.z - 133.5) > 4.5) return;
      this._ch4end = true; this.mark('Abkürzung zur Hütte');
      if (G.phone.dropped) { O.groundPhone.hide(); G.phone.dropped = false; G.phone.battery = Math.min(G.phone.battery, 6); }
      G.ui.reply = null; G.ui.renderPhone(); G.phone.network = false; G.flags.ambient = false; A.heartbeat(false);
      this.run(5, false);
    });
    G.flags.ambient = true;
    await this.until(() => pl.p.x < -13.5);
    await this.say('Flatterband. Hat Deniz das hingemacht?', 3.2);
    await this.until(() => pl.p.z > 66);
    G.phone.network = false; G.ui.refreshStatus();
    await this.say('Kein Netz. Super.', 2.4);
    await this.until(() => Math.hypot(pl.p.x + 24.6, pl.p.z - 73.2) < 5);
    await this.say('Komischer Baum. Gespalten, wie vom Blitz.', 3.2);
    // Gestalt zwischen den Bäumen – verschwindet, sobald man genau hinsieht
    {
      const sil = O.silhouette, sp = V(-33.5, 0, 79.0); sp.y = G.terrain.height(sp.x, sp.z);
      sil.root.position.copy(sp); sil.root.rotation.y = yawTo(pl.p.x - sp.x, pl.p.z - sp.z); sil.stand(); sil.root.visible = true;
      this.mark('Gestalt zwischen den Bäumen');
      const ts = G.time;
      await this.until(() => { const d = new THREE.Vector3().subVectors(sp, G.camera.position); const l = d.length(); return (l < 26 && pl.forward().dot(d.divideScalar(l)) > 0.985) || G.time - ts > 9 || l < 6; });
      if (G.time - ts <= 9) { A.sting('soft'); pl.flashFlicker = 0.4; await this.wait(0.4); }
      sil.root.visible = false;
    }
    // Schrei 1
    await this.until(() => pl.p.x < -35);
    this.mark('Schrei 1');
    A.scream(P.speaker, 'distant', 1);
    const tScream = G.time;
    await this.wait(2.2);
    A.sting('soft');
    await this.say('Was war das?!', 2.2);
    await this.say('Eine Frau? …Nein. Ein Fuchs. Füchse schreien so. Glaub ich.', 4);
    this.obj('Weiter. Folge dem Band');
    await this.reply(['deniz?? war das du']);
    await this.wait(0.8);
    G.chat.push({ from: 'day', text: 'Nicht zugestellt' }); G.ui.renderPhone();
    await this.say('Nicht zugestellt.', 2.2);
    await this.until(() => Math.hypot(pl.p.x + 58, pl.p.z - 90.4) < 6);
    await this.say('Moment. Den Baum hatte ich doch schon.', 3);
    await this.say('…Lauf ich im Kreis?', 2.4);
    // Schrei 2 – exakt gleich
    await this.until(() => G.time - tScream > 48 && pl.p.z > 91);
    this.mark('Schrei 2');
    A.scream(P.speaker, 'distant', 1.2);
    await this.wait(1.8);
    A.heartbeat(true, 1.6);
    await this.say('Derselbe Schrei. Genau derselbe.', 3);
    this.obj('Lauf!');
    const from = pl.p.clone();
    await this.until(() => pl.p.distanceTo(from) > 5 || pl.p.z > 99);
    // Sturz
    this.mark('Sturz, Handy fällt');
    pl.canMove = false;
    const fwd = pl.forward(); fwd.y = 0; fwd.normalize();
    A.bodyFall();
    pl.shake(1, 0.4);
    let ft = 0;
    this.addUp((dt) => { if (ft > 1) return; ft += dt; pl.extraPitch = -Math.sin(Math.min(1, ft * 2.5) * Math.PI / 2) * 0.55; pl.extraRoll = Math.sin(Math.min(1, ft * 2.5) * Math.PI / 2) * 0.35; pl.eyeOffset = -Math.min(1, ft * 3) * 1.15; });
    pl.setFlash(false);
    G.phone.dropped = true; G.ui.togglePhone(false);
    const ppos = pl.p.clone().addScaledVector(fwd, 2.4).add(V(fwd.z, 0, -fwd.x).multiplyScalar(0.8));
    G.world.constrain(ppos, 0.6);
    A.phoneDrop(ppos);
    O.groundPhone.place(ppos.x, G.terrain.height(ppos.x, ppos.z), ppos.z);
    await this.wait(1.6);
    await this.say('Scheiße! Das Handy!', 2.4);
    let ut = 0;
    this.addUp((dt) => { if (ut > 1) return; ut += dt * 0.9; const k = 1 - Math.min(1, ut); pl.extraPitch = -0.55 * k; pl.extraRoll = 0.35 * k; pl.eyeOffset = -1.15 * k; });
    await this.wait(1.1);
    pl.canMove = true;
    this.obj('Finde dein Handy');
    this.addUp((dt) => { if (G.phone.dropped) { O.groundPhone.pulse(G.time); this._gv = (this._gv ?? 2) - dt; if (this._gv < 0) { this._gv = 3.5; A.vibrate(O.groundPhone.group.position); } } });
    const gp = this.interact({ story: true, pos: O.groundPhone.group.position.clone().add(V(0, 0.05, 0)), radius: 0.35, range: 2.6, text: 'Handy aufheben', onUse: () => { A.pickup(); O.groundPhone.hide(); G.phone.dropped = false; G.phone.battery = 6; pl.setFlash(true); } });
    await this.use(gp);
    A.heartbeat(true, 1.2);
    await this.say('Sechs Prozent. Bitte nicht ausgehen.', 3);
    this.obj('Weiter. Weg von dem Schrei');
    await this.until(() => pl.p.x < -70 && pl.p.z > 102);
    A.heartbeat(false);
    await this.say('Ein Zaun.', 2);
    await this.say('Da hinten sind Lichter. Häuser!', 3);
    this.obj('Komm irgendwie über den Zaun');
    const gate = this.interact({ story: true, pos: O.gate.lockPos, radius: 0.35, range: 2.6, text: 'Tor öffnen', onUse: () => { A.padlock(O.gate.lockPos); A.fenceRattle(O.gate.lockPos, 0.8); } });
    this.interact({ story: true, pos: [-79, 1.4, 109], radius: 1.2, range: 2.2, text: 'Hochklettern', once: false, onUse: () => { A.fenceRattle(V(-79, 1.5, 109), 0.7); G.ui.say('Zu hoch. Und oben Stacheldraht.', 2.6); } });
    await this.until(() => gate.used || pl.p.z > 112);
    if (gate.used) { await this.wait(0.8); await this.say('Abgeschlossen. Kette mit Schloss.', 3); }
    this.obj('Folge dem Zaun');
    G.phone.battery = Math.min(G.phone.battery, 5);
    await this.until(() => pl.p.z > 117);
    A.scream(P.speaker, 'distant', 1.5);
    await this.wait(2);
    await this.say('Er kommt von da vorne. Ganz nah.', 3);
    this._ch4end = true;
    await this.until(() => Math.hypot(pl.p.x + 67, pl.p.z - 133.5) < 4);
    G.flags.ambient = false;
    this.run(5, false);
  }

  // ================================================================
  // KAPITEL 5: Hütte & Keller – eingesperrt, Rätsel
  // ================================================================
  async ch5(fresh) {
    const O = G.objects, pl = G.player, A = G.audio;
    if (fresh) G.ui.fade(0, 1.6);
    G.ui.card('02:39', 'Die Hütte', 2.6);
    this.setClock('02:39');
    G.phone.battery = Math.min(G.phone.battery, 3); G.phone.minBattery = 2;
    if (!A.loops.humIn) { A.hum('humIn', O.fan.pos, 1); A.hum('humOut', O.ventTop.pos, 0.7, true); A.tubeBuzz(O.tube.pos); }
    if (!O.hatch.state.open) O.hatch.set(true);
    await this.say('Eine Hütte. Hier draußen?', 2.8);
    this.obj('Untersuch die Hütte');
    this.addUp(() => {
      if (!this._ventSaid && pl.p.y > -0.5 && O.ventTop.pos.distanceTo(pl.p) < 3) { this._ventSaid = true; G.ui.say('Da brummt was. Wie ne alte Mikrowelle.', 3.2); }
    });
    const door = this.interact({ story: true, pos: O.hutDoor.pos, radius: 0.45, text: 'Tür öffnen', onUse: () => O.hutDoor.open() });
    await this.use(door);
    await this.wait(1.2);
    await this.say('Hallo?', 1.6, 'Leon');
    const beanie = this.interact({ story: true, pos: O.beanie.position, radius: 0.15, text: 'Mütze ansehen' });
    await this.until(() => pl.p.x < -59.6 && pl.p.x > -64.4 && pl.p.z < 142 && pl.p.y > 0);
    await this.say('Licht. Da unten. Und es brummt.', 3);
    this.obj('Sieh dich in der Hütte um');
    await this.use(beanie);
    this.mark('Deniz\' Mütze');
    A.sting('soft');
    await this.say('Das ist Deniz\' Mütze.', 2.4);
    await this.say('DENIZ?!', 1.8, 'Leon');
    await this.wait(1.4);
    await this.say('Da unten ist Strom. Mein Handy …', 3);
    this.obj('Geh runter in den Keller');
    await this.until(() => pl.p.y < -2.6 && pl.p.z > 141.4);
    this.mark('Im Keller');
    await this.say('Hallo …?', 2, 'Leon');
    this.obj('Lade dein Handy');
    // Steckdosenleiste
    const charge = this.interact({ story: true, pos: O.strip.pos, radius: 0.18, text: 'Handy anschließen' });
    let phoneOnBench = false;
    this.interact({
      story: true, pos: O.strip.pos.clone().add(V(-0.08, 0, 0)), radius: 0.15, text: 'Handy nehmen', once: false,
      enabled: () => phoneOnBench,
      onUse: () => { phoneOnBench = false; O.chargingPhone.mesh.visible = false; G.phone.charging = false; G.flags.noPhone = false; G.flags.noFlash = false; A.pickup(); },
    });
    await this.use(charge);
    A.click();
    phoneOnBench = true; O.chargingPhone.mesh.visible = true; G.phone.charging = !!O.fuseState[2];
    G.flags.noPhone = true; G.flags.noFlash = true; pl.setFlash(false); G.ui.togglePhone(false);
    this.addUp(() => { if (phoneOnBench) { G.phone.charging = !!O.fuseState[2]; O.chargingPhone.screen.material.color.set(G.phone.charging ? 0x335588 : 0x0a0a0a); O.strip.led.visible = !!O.fuseState[2]; } });
    await this.say('Lädt. Okay. Okay …', 2.4);
    this.obj('Sieh dich um');
    const looks = [
      [O.map.pos, 0.45, 'Karte ansehen', ['Der Stadtwald. Alles markiert.', '„RUF 1“, „RUF 2“, „RUF 3“ … Und ein Kreuz. Genau hier.']],
      [O.polaroids.pos, 0.35, 'Fotos ansehen', ['Fotos. Von Leuten im Wald. Nachts. Von hinten.', 'Die wissen nicht mal, dass sie fotografiert werden.']],
      [O.news.pos, 0.2, 'Zeitung lesen', ['„Joggerin im Stadtwald vermisst.“', '…Warum hängt das hier?']],
    ];
    for (const [pos, r, txt, lines] of looks) this.interact({ story: true, pos, radius: r, text: txt, onUse: () => this.sayLines(lines) });
    this.interact({
      story: true, pos: O.notebook.pos, radius: 0.15, text: 'Notizbuch lesen', once: false,
      onUse: () => { G.ui.note('31.10.\n\n01:58  Turm. Junge allein.\nHandy auf der Bank liegen lassen.\nKeine Sperre. Chat offen.\n\nFreund kommt um halb drei.\n\nRUF 2 läuft.\n\n02:30  Er kommt.'); this._readNote = true; },
    });
    this.interact({ story: true, pos: O.keys.pos, radius: 0.2, text: 'Schlüssel „TOR 3“ nehmen', onUse: () => { A.keys(O.keys.pos); O.keys.torKey.visible = false; G.inv.add('torKey'); G.ui.say('TOR 3. Das Tor am Zaun!', 3); } });
    const rec = this.interact({ story: true, pos: O.recorder.pos, radius: 0.18, text: 'Gerät „RUF 2“ – abspielen' });
    await this.use(rec);
    // JUMPSCARE: der Schrei, laut, direkt im Raum
    this.mark('RUF 2 – Jumpscare');
    A.scream(O.recorder.pos, 'speaker', 1.4);
    A.sting('hard'); G.post.scare(1); pl.shake(1.2, 0.6);
    await this.wait(3.4);
    A.sting('reveal');
    await this.say('Das … das ist eine Aufnahme.', 3);
    await this.say('Der Schrei. Die ganze Zeit. Das war kein Fuchs.', 3.6);
    await this.wait(1.0);
    // Er kommt
    for (let i = 0; i < 5; i++) { A.heavyStep(V(-60 - i * 0.8, 0.4, 139.6 + (i % 2) * 0.3), 1); await this.wait(0.55); }
    await this.say('Da ist jemand.', 2.2);
    this.mark('Luke zu – eingesperrt');
    O.hatch.close();
    A.slam(O.hatch.pos, 1.4); pl.shake(1, 0.5); G.post.scare(0.5);
    await this.wait(0.5); A.bolt(O.hatch.pos); await this.wait(0.8); A.drag(O.hatch.pos, 1.8);
    A.heartbeat(true, 1.5);
    this.obj('Raus hier!');
    await this.wait(3);
    G.phone.network = true;
    this.msg('hast du was gefunden 🙂');
    await this.wait(2.4);
    this.msg('du hättest auf dem weg bleiben sollen');
    await this.wait(1.5);
    await this.say('…Das ist nicht Deniz.', 2.8);
    await this.say('Das war die ganze Zeit nicht Deniz.', 3.2);
    A.heartbeat(true, 1.1);
    // ---------------- Rätsel ----------------
    this.interact({ story: true, pos: [-63.25, -0.25, 139.0], radius: 0.7, range: 3.2, text: 'Luke aufdrücken', once: false, enabled: () => !O.hatch.state.open, onUse: () => { A.burst({ pos: O.hatch.pos, type: 'lowpass', f: 300, d: 0.2, peak: 0.6 }); G.ui.say('Keine Chance. Er hat was draufgestellt.', 3); } });
    this.obj('Finde einen anderen Weg raus');
    // Mikrofon: wer im Keller laut wird, wird gehört
    this.addUp(() => { if (G.micLvl > 0.6 && !this._micHeard) { this._micHeard = true; A.heavyStep(V(-62, 0.4, 140), 1.2); A.fenceRattle(O.hatch.pos, 0.5); this.msg('ich hör dich'); } });
    let fanHint = false;
    this.interact({
      story: true, pos: O.fan.pos, radius: 0.4, range: 2.2, once: false,
      text: () => (O.fan.running ? 'Lüftung ansehen' : G.inv.has('screwdriver') ? 'Gitter abschrauben' : 'Gitter ansehen'),
      enabled: () => O.fan.grille.visible && (O.fan.running || !G.inv.has('screwdriver')),
      hold: 0,
      onUse: () => {
        if (O.fan.running) { if (!fanHint) { fanHint = true; G.ui.say('Die Luft muss irgendwo rausgehen. Nach draußen. …Aber der Lüfter dreht.', 4.2); this.obj('Schalte die Lüftung ab'); } else G.ui.say('Da greif ich nicht rein, solange der läuft.', 3); return; }
        if (!G.inv.has('screwdriver')) { G.ui.say('Festgeschraubt. Ich brauch nen Schraubendreher.', 3.2); this.obj('Finde einen Schraubendreher'); }
      },
    });
    const unscrew = this.interact({
      story: true, pos: O.fan.pos, radius: 0.45, range: 2.2, hold: 3.2, text: 'Gitter abschrauben',
      enabled: () => !O.fan.running && G.inv.has('screwdriver') && O.fan.grille.visible,
      onHoldStart: () => { this._unscrewing = true; },
      onHold: (dt) => { if (rand() < dt * 3) A.screw(O.fan.pos); },
    });
    // Sicherungskasten
    const fuseNames = ['Schalter 1 „LICHT“', 'Schalter 2', 'Schalter 3 „STECKD.“'];
    for (let i = 0; i < 3; i++) {
      this.interact({
        story: true, pos: O.fuse.pos(i), radius: 0.045, range: 1.8, once: false,
        text: () => fuseNames[i] + (O.fuseState[i] ? ' – aus' : ' – an'),
        onUse: () => {
          if (i === 1 && !O.fan.grille.visible) { G.ui.say('Bloß nicht. Der Schacht ist offen.', 2.6); return; }
          O.fuseState[i] = !O.fuseState[i];
          O.fuse.setVisual(i, O.fuseState[i]);
          A.switchClick(O.fuse.pos(i));
          if (i === 0) { O.tube.set(O.fuseState[0]); if (!O.fuseState[0]) { A.setLoop('tube', 0, 0.05); if (!this._s1) { this._s1 = true; G.ui.say('Falscher. Licht.', 2.2); } } }
          if (i === 1) {
            O.fan.setOn(O.fuseState[1]);
            if (!O.fuseState[1]) { A.humWindDown('humIn', 3.5); A.humWindDown('humOut', 3.5); if (!this._s2) { this._s2 = true; this.mark('Lüftung aus'); this.fanOff(); } }
            else { A.hum('humIn', O.fan.pos, 1); A.hum('humOut', O.ventTop.pos, 0.7, true); }
          }
          if (i === 2 && !this._s3) { this._s3 = true; G.ui.say('Steckdose. Das Handy lädt nicht mehr.', 2.8); }
        },
      });
    }
    // Schublade + Schraubendreher
    let drawerOpen = false;
    this.interact({ story: true, pos: O.drawer.pos, radius: 0.25, text: 'Schublade öffnen', onUse: () => { drawerOpen = true; O.drawer.open(); A.burst({ pos: O.drawer.pos, f: 500, q: 1, d: 0.3, peak: 0.3 }); } });
    this.interact({
      story: true, pos: O.drawer.pos.clone().add(V(-0.15, 0.05, 0)), radius: 0.12, text: 'Schraubendreher nehmen',
      enabled: () => drawerOpen && G.objects.drawer.screwdriver.visible,
      onUse: () => { A.pickup(); O.drawer.screwdriver.visible = false; G.inv.add('screwdriver'); if (!O.fan.running) this.obj('Schraub das Gitter ab'); },
    });
    await this.use(unscrew);
    this._unscrewing = false;
    O.fan.removeGrille();
    A.metalClang(O.fan.pos, 1.3);
    this._stepsAbove = false;
    await this.wait(1.2);
    await this.say('…Er hat\'s gehört.', 2.4);
    const pull = this.interact({ story: true, pos: O.fan.pos, radius: 0.45, range: 2.2, hold: 1.0, text: 'Lüfter rausziehen' });
    await this.use(pull);
    O.fan.removeFan();
    A.metalClang(O.fan.pos, 1.6); A.thud(O.fan.pos, 0.7);
    await this.wait(0.6);
    A.drag(O.hatch.pos, 2.2);
    A.heartbeat(true, 1.7);
    this.mark('Er räumt die Luke frei');
    this.obj('In den Schacht! Schnell!');
    // Durchgang erst mit Handy + Schlüssel
    const gateCol = G.world.addBox(HUT.room.minX - 0.3, HUT.room.minX + 0.05, HUT.shaft.minZ, HUT.shaft.maxZ, -3.4, -1.5, { label: 'Schacht (erst mit Handy + Schlüssel)' });
    this.addUp(() => {
      const near = pl.p.y < -1.5 && pl.p.x < HUT.room.minX + 0.9 && Math.abs(pl.p.z - 144.2) < 0.8;
      const ok = G.inv.has('torKey') && !phoneOnBench;
      gateCol.enabled = !ok;
      if (near && !ok && !this._gateMsgT) { this._gateMsgT = G.time; G.ui.say(phoneOnBench ? 'Mein Handy! Das liegt noch auf der Werkbank.' : 'Warte. Der Schlüssel. „TOR 3“ – fürs Tor am Zaun.', 3.4); }
      if (this._gateMsgT && G.time - this._gateMsgT > 5) this._gateMsgT = 0;
      // automatisch kriechen
      const inShaft = pl.p.y < -1.5 && pl.p.x < HUT.room.minX + 0.75 && pl.p.x > HUT.shaft.minX - 0.1 && Math.abs(pl.p.z - 144.2) < 0.75;
      pl.forceStance = inShaft ? 'crawl' : null;
      G.flags.inShaft = inShaft && pl.p.x < HUT.room.minX;
    });
    await this.wait(2.3);
    O.hatch.open();
    A.slam(O.hatch.pos, 0.7);
    for (let i = 0; i < 4; i++) this.after(0.9 + i * 0.6, () => A.heavyStep(V(-63.25, -0.6 - i * 0.7, 138.8 + i * 0.6), 1.1));
    this.addUp((dt) => {
      // er kommt runter, aber zu langsam
      this._manT = (this._manT || 0) + dt;
      if (this._manT > 7 && pl.p.x > HUT.room.minX - 0.3 && !this._manDown) { this._manDown = true; A.heavyStep(V(-63.25, -3.0, 141.4), 1.4); G.ui.say('Er ist unten. ER IST UNTEN!', 2.4); A.heartbeat(true, 2.4); }
    });
    await this.until(() => pl.p.x < HUT.shaft.minX + 0.4);
    await this.say('Eine Leiter …', 1.8);
    const climb = this.interact({ story: true, pos: [HUT.shaft.minX - 0.9, HUT.shaft.y + 1.0, 144.2], radius: 0.5, range: 2.0, text: 'Hochklettern' });
    await this.use(climb);
    // Leiter hoch
    pl.scripted = true; pl.forceStance = 'stand'; pl.stance = 'stand';
    const sx = HUT.shaft.minX - 0.55, sz = 144.2;
    pl.p.set(sx, HUT.shaft.y, sz);
    pl.lookTarget = { pos: V(sx - 0.4, 2, sz), speed: 3 };
    const yTop = G.objects.ventTop.pos.y - 2.0;
    for (let y = HUT.shaft.y; y < yTop; y += 0.33) { pl.p.y = y; A.footstep('metal', 0.8); await this.wait(0.36); }
    pl.lookTarget = { pos: G.objects.ventTop.pos.clone().add(V(-0.05, 1, 0)), speed: 3 };
    const push = this.interact({ story: true, pos: G.objects.ventTop.pos.clone().add(V(0, 0.12, 0)), radius: 0.6, range: 3.5, hold: 1.5, text: 'Gitter aufdrücken', onHold: (dt) => { if (rand() < dt * 4) A.fenceRattle(G.objects.ventTop.pos, 0.3); } });
    await this.use(push);
    A.metalClang(G.objects.ventTop.pos, 1);
    G.objects.ventTop.grate.position.x += 0.9; G.objects.ventTop.grate.rotation.z = 0.4;
    await this.fade(1, 0.5);
    pl.lookTarget = null;
    pl.scripted = false; pl.forceStance = null;
    A.stopLoop('humIn', 0.2); A.stopLoop('humOut', 0.2); A.stopLoop('tube', 0.2);
    pl.teleport(HUT.ventExit[0], G.terrain.height(HUT.ventExit[0], HUT.ventExit[2]), HUT.ventExit[2], 0, 0);
    G.phone.battery = Math.max(G.phone.battery, 15);
    await this.wait(0.4);
    G.ui.fade(0, 0.8);
    this.run(6, false);
  }

  async fanOff() {
    const A = G.audio;
    await this.wait(3.5);
    this._stepsAbove = true;
    const tok = this.token;
    const loop = async () => {
      while (this._stepsAbove && tok === this.token) {
        A.heavyStep(V(-62 + Math.sin(G.time) * 1.8, 0.4, 140 + Math.cos(G.time * 0.6) * 1.4), 1.1);
        await this.wait(0.8 + rand() * 0.9);
      }
    };
    loop().catch(() => {});
    G.ui.say('Stille. …Er ist noch da oben. Er läuft rum.', 3.6);
    await this.wait(2);
    this.msg('ich hör dich');
    this.obj(G.inv.has('screwdriver') ? 'Schraub das Gitter ab' : 'Finde was, um das Gitter abzuschrauben');
  }

  die() {
    const pl = G.player, A = G.audio;
    if (this._dying) return;
    this._dying = true;
    pl.canMove = false;
    this.mark('Gefangen');
    A.sting('hard'); G.post.scare(1); pl.shake(1.5, 0.6);
    this.chase = null;
    A.heartbeat(false);
    this.after(0.35, () => G.ui.death(true));
    const ch = this.chapter === 5 ? 5 : this.chapter === 7 ? 7 : 6;
    const cp = ch === 6 && this._cp6 === 'tor' ? 'tor' : null;
    this.after(3.2, () => { G.ui.death(false); this._dying = false; this.run(ch, true, cp); });
  }

  // ================================================================
  // KAPITEL 6: Flucht zum Tor
  // ================================================================
  async ch6(fresh, cp) {
    const O = G.objects, pl = G.player, A = G.audio;
    if (fresh) { G.ui.fade(0, 1.4); G.ui.card('03:14', 'Flucht', 2.2); }
    this.setClock('03:14');
    G.phone.network = true; G.phone.mapUnlocked = true; G.phone.minBattery = 1;
    O.hatch.set(false); O.hutDoor.set(false); O.fan.setOn(false);
    if (!A.loops.stream) A.stream(V(P.streamX, -0.3, P.gateZ));
    pl.setFlash(true);
    this._cp6 = cp || 'start';
    if (cp !== 'tor') {
      A.heartbeat(true, 1.3);
      await this.say('Draußen. Ich bin draußen.', 2.4);
      G.ui.hint(`<b>${K('phone')}</b> Handy &nbsp; <b>${K('app')}</b> Karte`, 6);
      await this.say(Math.round(G.phone.battery) + ' Prozent. Und Netz. Karten …', 3);
      this.obj('Zum Tor am Zaun. Leise.');
      // Ast
      await this.until(() => pl.p.z < 138.6);
      this.mark('Ast fällt');
      const b = O.branch.group;
      const [tx, tz] = G.branchTree;
      const gy = G.terrain.height(tx - 2.4, tz);
      A.branchFall(b.position.clone(), V(tx - 2.4, gy, tz));
      G.post.scare(0.9); A.sting('hard'); pl.shake(1.3, 0.7);
      let ft = 0; const y0 = b.position.y, r0 = b.rotation.z;
      this.addUp((dt) => { if (ft >= 1) return; ft = Math.min(1, ft + dt / 0.55); const e = ft * ft; b.position.y = y0 + (gy + 0.25 - y0) * e; b.rotation.z = r0 + (Math.PI / 2 - r0) * e; b.rotation.x = e * 0.15; });
      await this.wait(0.6);
      // Kollision erst, wenn Leon nicht gerade darunter steht (sonst hängt er im Ast fest)
      await this.until(() => !(pl.p.x > -75 && pl.p.x < -69.4 && pl.p.z > 135.6 && pl.p.z < 137.2));
      this.branchCol.enabled = true;
      pl.shake(0.6, 0.3);
      G.ui.say('…Das war laut.', 1.8);
      await this.wait(1.2);
      // Die Hüttentür geht auf
      O.hutDoor.open(); A.doorCreak(O.hutDoor.pos);
      await this.wait(0.7);
      this.mark('Er kommt raus – Jagd');
      O.man.show(true);
      const man = O.man.H;
      // er kommt aus der Hütte; ist Leon schon weit weg, taucht er hinter ihm zwischen den Bäumen auf
      let start = V(-58.6, 0.3, 140.0);
      const tr = pl.trail || [];
      if (Math.hypot(pl.p.x - start.x, pl.p.z - start.z) > 16 && tr.length > 6) {
        let acc = 0, i = tr.length - 1;
        while (i > 0 && acc < 15) { acc += tr[i].distanceTo(tr[i - 1]); i--; }
        start = tr[i].clone();
      }
      start.y = G.world.groundAt(start.x, start.z, start.y + 2);
      man.root.position.copy(start); man.stand();
      A.heartbeat(true, 2.2);
      G.ui.say('LAUF!', 1.2);
      this.obj('LAUF ZUM TOR!');
      G.ui.hint(`<b>${K('sprint')}</b> rennen &nbsp; <b>${K('jump')}</b> über Hindernisse springen`, 5);
      this.startChase({ pos: start, path: start.x > -60 ? undefined : [] });
      // Tor aufschließen (gedrückt halten, Schlüssel klappern)
      const gate = this.interact({ story: true, pos: O.gate.lockPos, radius: 0.4, range: 2.6, hold: 2.0, text: 'Tor aufschließen', onHold: (dt) => { if (rand() < dt * 5) A.keys(O.gate.lockPos); } });
      await this.use(gate);
      this.mark('Tor auf');
      this._cp6 = 'tor';
      A.padlock(O.gate.lockPos);
      O.gate.open();
      for (const r of G.world.regions) if (['bank', 'stream'].includes(r.id)) r.enabled = true;
      await this.until(() => pl.p.x < -80.4);
      O.gate.close();
      A.fenceRattle(V(-79, 1, P.gateZ), 1);
      G.ui.say('Zu. Das Tor ist zu.', 1.8);
    } else {
      // Checkpoint am Tor: Leon ist durch, er steht am Zaun und schließt auf
      G.ui.fade(0, 1.0);
      O.gate.close();
      for (const r of G.world.regions) if (['bank', 'stream'].includes(r.id)) r.enabled = true;
      pl.teleport(-80.9, G.world.groundAt(-80.9, P.gateZ, 3), P.gateZ, Math.PI / 2, 0);
      O.man.show(true);
      const gp = V(-78.2, G.terrain.height(-78.2, P.gateZ + 0.6), P.gateZ + 0.6);
      O.man.H.root.position.copy(gp); O.man.H.stand();
      this.startChase({ pos: gp, path: [], state: 'unlock' });
      this.chase.stateT = -2.5;          // Checkpoint: etwas mehr Vorsprung als beim ersten Mal
      A.heartbeat(true, 2);
    }
    this.obj('Spring über den Bach!');
    G.ui.hint(`<b>${K('sprint')}</b> Anlauf &nbsp; <b>${K('jump')}</b> springen`, 6);
    await this.until(() => pl.p.x < -84.4);
    A.splash(V(P.streamX, -0.4, pl.p.z));
    this.run(7, false, null, true);
  }

  // Verfolger: folgt der Spur des Spielers, Gummiband-Tempo, schließt das Tor selbst auf
  startChase(opts = {}) {
    const man = G.objects.man.H;
    this.chase = { pos: (opts.pos || man.root.position).clone(), idx: 0, trailIdx: -1, t: 0, stepT: 0, state: opts.state || 'run', stateT: 0, path: (opts.path || [[-58.6, 140], [-58.7, 137.0], [-64.5, 136.6], [-70.8, 138.6]]).map(([x, z]) => V(x, 0, z)), hbT: 0, godT: 0 };
  }

  updateChase(dt) {
    const c = this.chase, pl = G.player, M = G.objects.man, man = M.H, A = G.audio, O = G.objects, D = G.dev || {};
    c.t += dt; c.stateT += dt;
    if (c.state === 'gone') return;
    const toPl = Math.hypot(pl.p.x - c.pos.x, pl.p.z - c.pos.z);
    const face = (x, z) => { man.root.rotation.y = Math.atan2(-(x - c.pos.x), -(z - c.pos.z)); };
    const gateClosed = O.gate.col.enabled;
    // Herzschlag nach Abstand
    c.hbT -= dt;
    if (c.hbT < 0) { c.hbT = 1.5; A.heartbeat(true, 1.3 + 1.3 * (1 - clamp(toPl / 22, 0, 1))); }
    if (c.state === 'retreat') {
      // weg vom Licht, zurück in die Gasse, dann weg
      const tgt = V(-92, 0, 106);
      const d = V(tgt.x - c.pos.x, 0, tgt.z - c.pos.z); const l = d.length();
      if (c.stateT < 1.2) { man.stand(); man.armR.sh.rotation.x = -1.9; man.armR.el.rotation.x = 0.6; face(pl.p.x, pl.p.z); }
      else if (l > 0.3) { d.divideScalar(l); c.pos.addScaledVector(d, Math.min(l, 2.2 * dt)); man.root.rotation.y = Math.atan2(-d.x, -d.z); man.walk(dt, 2.2); }
      if (c.stateT > 1.2 && c.stateT < 1.4) M.torch.intensity = 0;
      if (c.stateT > 4.5) { c.state = 'gone'; M.show(false); A.heartbeat(false); }
      c.pos.y = G.world.groundAt(c.pos.x, c.pos.z, c.pos.y + 0.6); if (!isFinite(c.pos.y)) c.pos.y = G.terrain.height(c.pos.x, c.pos.z);
      man.root.position.copy(c.pos);
      return;
    }
    if (c.state === 'unlock') {
      // am geschlossenen Tor: rütteln, eigener Schlüssel, aufschließen
      man.stand(); face(pl.p.x, pl.p.z);
      if (!c.rattled && c.stateT > 0.2) { c.rattled = true; A.fenceRattle(O.gate.lockPos, 1.2); }
      if (c.stateT > 1.2 && c.stateT < 3.0 && (c.kT = (c.kT || 0) - dt) < 0) { c.kT = 0.35; A.keys(O.gate.lockPos); }
      if (c.stateT > 3.0) { A.padlock(O.gate.lockPos); O.gate.open(); c.state = 'run'; c.stateT = 0; c.trailIdx = -1; if (!this._manGate) { this._manGate = true; this.mark('Er schließt das Tor auf'); G.ui.say('Er hat … einen Schlüssel.', 2.4); } }
      man.root.position.copy(c.pos);
      return;
    }
    if (D.ignore) { man.stand(); man.root.position.copy(c.pos); return; }
    let target;
    const sameLevel = Math.abs(pl.p.y - c.pos.y) < 2;
    const losClear = toPl < 8 && sameLevel && !G.world.segmentBlocked(c.pos.x, c.pos.z, pl.p.x, pl.p.z, c.pos.y + 1.0);
    const atFence = gateClosed && c.pos.x > -79.4 && pl.p.x < -79.2;
    if (atFence) {
      target = V(-78.35, 0, P.gateZ);
      if (Math.hypot(target.x - c.pos.x, target.z - c.pos.z) < 0.5) { c.state = 'unlock'; c.stateT = 0; c.rattled = false; return; }
    } else if (losClear) target = pl.p.clone();
    else if (c.idx < c.path.length) {
      target = c.path[c.idx];
      if (Math.hypot(target.x - c.pos.x, target.z - c.pos.z) < 0.6) c.idx++;
    } else {
      const tr = pl.trail || [];
      if (c.trailIdx < 0) { let best = 0, bd = Infinity; tr.forEach((p, i) => { const d = Math.hypot(p.x - c.pos.x, p.z - c.pos.z); if (d < bd) { bd = d; best = i; } }); c.trailIdx = best; }
      while (c.trailIdx < tr.length - 1 && Math.hypot(tr[c.trailIdx].x - c.pos.x, tr[c.trailIdx].z - c.pos.z) < 0.7) c.trailIdx++;
      target = tr[c.trailIdx] || pl.p;
    }
    // Gummiband: nah langsamer als Leons Sprint, weit weg schneller
    let spd = 4.5 + 1.6 * clamp((toPl - 7) / 11, 0, 1);
    if (c.t < 1.0) spd *= 0.4 + 0.6 * c.t;
    for (const z of CHASE_SLOW) if (Math.abs(c.pos.x - z[0]) < z[2] && Math.abs(c.pos.z - z[1]) < z[3]) spd = Math.min(spd, z[4]);
    const d = V(target.x - c.pos.x, 0, target.z - c.pos.z);
    const len = d.length();
    if (len > 0.01) {
      d.divideScalar(len);
      c.pos.addScaledVector(d, Math.min(len, spd * dt));
      const ty = Math.atan2(-d.x, -d.z);
      man.root.rotation.y += angleDiff(man.root.rotation.y, ty) * (1 - Math.exp(-10 * dt));
    }
    // durch den Zaun gibt es nur das Tor
    if (gateClosed && c.pos.x > -79.4) c.pos.x = Math.max(c.pos.x, -78.4);
    c.pos.y = G.world.groundAt(c.pos.x, c.pos.z, c.pos.y + 0.6);
    if (!isFinite(c.pos.y)) c.pos.y = G.terrain.height(c.pos.x, c.pos.z);
    man.root.position.copy(c.pos);
    man.walk(dt, spd);
    c.stepT -= dt;
    if (c.stepT < 0) { c.stepT = 3.2 / Math.max(2, spd) * 0.42; A.footstep(c.pos.x < -84.5 ? 'gravel' : 'leaves', 1.5, c.pos.clone().add(V(0, 0.1, 0))); if (rand() < 0.12) A.breath(0.6); }
    if (toPl < 3) pl.shake(0.12, 0.2);
    // Gefangen
    c.godT -= dt;
    if (toPl < 1.15 && c.godT <= 0) {
      if (D.god) {
        c.godT = 3; A.sting('hard'); G.post.scare(0.8); pl.shake(1, 0.4);
        // Godmode: zurücksetzen statt Game Over
        const tr = pl.trail || []; const back = tr[Math.max(0, tr.length - 12)];
        if (back) { c.pos.copy(back); c.trailIdx = -1; }
      } else this.die();
    }
  }

  // ================================================================
  // KAPITEL 7: Bach, Gasse, Kleingärten – er bleibt dran
  // ================================================================
  async ch7(fresh) {
    const O = G.objects, pl = G.player, A = G.audio;
    if (fresh) { G.ui.fade(0, 1.4); }
    G.ui.card('03:24', 'Kleingärten', 2.4);
    this.setClock('03:24');
    for (const r of G.world.regions) if (['bank', 'stream', 'alley', 'gardens'].includes(r.id)) r.enabled = true;
    if (fresh || !this.chase) {
      // Kapitelstart direkt: er steht am geschlossenen Tor
      O.man.show(true);
      const gp = V(-78.2, G.terrain.height(-78.2, P.gateZ + 0.6), P.gateZ + 0.6);
      O.man.H.root.position.copy(gp); O.man.H.stand(); O.man.H.root.rotation.y = Math.PI / 2;
      O.gate.close();
      this.startChase({ pos: gp, path: [], state: 'unlock' });
      this.chase.stateT = -2.5;
    }
    this.obj('Weiter! Zu den Häusern');
    await this.until(() => pl.p.x < -88);
    await this.say('Die Gasse. Bloß nicht stehen bleiben.', 2.6);
    await this.until(() => pl.p.x < -97);
    this.mark('Gasse');
    await this.until(() => pl.p.x < -111.5);
    // JUMPSCARE: Bewegungsmelder + Vogelscheuche; er will nicht gesehen werden
    this.mark('Flutlicht');
    O.flood.on(); A.floodlight(V(-113, 2.6, 100.4));
    A.sting('hard'); G.post.scare(1); pl.shake(1.0, 0.5);
    if (this.chase && this.chase.state !== 'gone') { this.chase.state = 'retreat'; this.chase.stateT = 0; }
    await this.wait(1.6);
    await this.say('…Eine Vogelscheuche.', 2.2);
    await this.say('Nur ne beschissene Vogelscheuche.', 2.8);
    await this.wait(1.2);
    if (this.chase) { await this.say('Und er … er geht. Er bleibt im Dunkeln.', 3); }
    await this.wait(2.4);
    this.msg('bis bald leon 🙂');
    await this.wait(2.2);
    A.heartbeat(false);
    this.chase = null; O.man.show(false);
    O.flood.off(); A.switchClick(V(-113, 2.6, 100.4));
    this.obj('Nach Hause');
    await this.until(() => pl.p.x < -124);
    pl.canMove = false;
    A.heartbeat(true, 1.9);
    await this.fade(1, 1.6);
    await this.narr(['Ich bin den ganzen Weg nach Hause gerannt. Ohne mich einmal umzudrehen.'], { perPara: 2.5 });
    A.heartbeat(false);
    this.run(8, true);
  }

  // ================================================================
  // KAPITEL 8: Ende
  // ================================================================
  async ch8() {
    const O = G.objects, pl = G.player, A = G.audio;
    const dz = O.deniz;
    dz.root.position.set(P.deniz[0] - 0.05, -0.05, P.deniz[2]); dz.root.rotation.y = -Math.PI / 2;
    dz.root.visible = true;
    G.ui.fade(0, 2.2);
    G.ui.card('03:31', 'Wendelsweg', 2.4);
    this.obj('Nach Hause');
    A.breath(1.4);
    await this.wait(2);
    await this.say('Da sitzt jemand. Vor unserer Tür.', 3);
    await this.until(() => Math.hypot(pl.p.x - P.deniz[0], pl.p.z - P.deniz[2]) < 4.2);
    this.mark('Deniz vor der Tür');
    pl.canMove = false;
    this.obj(null);
    await this.look(V(P.deniz[0], 1.0, P.deniz[2]), 3, 1.2);
    pl.lookTarget = { pos: V(P.deniz[0], 1.0, P.deniz[2]), speed: 2 };
    dz.neck.rotation.x = -0.1;
    await this.say('Alter! Wo warst du?! Ich sitz hier seit ner Stunde.', 3.6, 'Deniz');
    await this.say('Du … du hast mir doch die ganze Zeit geschrieben.', 3.6, 'Leon');
    await this.say('Hä? Mein Handy ist weg, Bro. Hab\'s am Turm auf der Bank liegen lassen.', 4, 'Deniz');
    await this.say('Mit meiner Mütze. Als ich zurück bin, war beides weg.', 3.8, 'Deniz');
    await this.wait(1.2);
    G.ui.addMsg('them', '🙂');
    A.vibrate();
    await this.wait(1.4);
    pl.lookTarget = null;
    G.ui.togglePhone(true);
    await this.wait(3.2);
    await this.say('…Leon? Was ist?', 2.6, 'Deniz');
    await this.wait(0.8);
    G.ui.togglePhone(false);
    await this.fade(1, 0.05);
    A.sting('reveal');
    await this.wait(2);
    await this.narr([
      'Wir sind am nächsten Morgen mit meinem Vater zur Polizei.',
      'Sie haben die Hütte gefunden. Und den Keller.',
      'Er war leer. Keine Fotos, keine Karte, kein Gerät. Nur die Lüftung lief noch.',
      'Deniz\' Handy wurde nie gefunden.',
      'Alle meinten, der Schrei war bestimmt ein Fuchs.',
      'Füchse schreien in der Ranzzeit. Im Januar.',
      'Nicht im Oktober.',
    ], { perPara: 3.2 });
    G.ui.clockShow(false);
    await this.card('LOCKRUF', 'Danke fürs Spielen.', 4);
    if (G.onEnd) G.onEnd();
  }
}

// Stellen, an denen auch der Verfolger langsamer wird (Hindernisse) [x, z, Radius]
// Stellen, an denen auch er langsamer wird: [x, z, halbe Breite x, halbe Tiefe z, Tempo]
export const CHASE_SLOW = [[-72.2, 136.4, 2.4, 2.4, 3.0], [-75.2, 121.0, 3.4, 0.9, 3.2], [-74.0, 126.5, 5.0, 1.1, 1.5], [-75.4, 110.6, 3.4, 0.9, 3.2], [-92.0, 105.4, 1.2, 1.2, 3.0], [-97.0, 106.6, 1.2, 1.2, 3.0], [-101.5, 106.0, 1.0, 1.0, 3.0], [-106.5, 106.0, 0.9, 1.6, 3.2], [-109.4, 106.0, 0.8, 1.6, 1.6]];

// Chatverlauf zum Kapitelstart
function chatFor(ch, cp) {
  const c = [
    { from: 'day', text: 'Gestern' },
    { from: 'me', text: 'mach mal ne pin rein, jeder kann an dein handy' },
    { from: 'them', text: 'wer soll das schon klauen' },
    { from: 'day', text: 'Heute' },
  ];
  if (ch === 0) { c.push({ from: 'them', text: 'hast du was gefunden 🙂' }); return c; }
  if (ch >= 2 || (ch === 1 && cp && cp !== 'start')) c.push(
    { from: 'them', text: 'bist du noch wach' }, { from: 'them', text: 'hab stress mit meinem vater' }, { from: 'them', text: 'kann ich heute bei dir schlafen?' },
    { from: 'me', text: 'klar, komm vorbei' }, { from: 'them', text: 'danke' }, { from: 'them', text: 'bin eh grad am goetheturm' },
    { from: 'them', text: 'komm kurz hin, ist halloween 🎃 wir drehen ne runde durch den wald' }, { from: 'them', text: 'aber ohne maps, nur mit taschenlampe' },
    { from: 'me', text: 'ok, bin in 10 min da' }, { from: 'them', text: 'bis gleich' },
  );
  if (ch >= 3) c.push({ from: 'them', text: 'bin schon im wald' }, { from: 'them', text: 'nimm den kiesweg hinterm spielplatz, einfach geradeaus' }, { from: 'me', text: 'ernsthaft?' }, { from: 'them', text: 'komm einfach' });
  if (ch >= 4) c.push({ from: 'them', text: 'da steht wer hinter dir' }, { from: 'them', text: 'spaß' }, { from: 'me', text: 'alter, lass das' }, { from: 'them', text: 'der weg ist gesperrt oder? geh links durchs gebüsch, da kommst du durch' });
  if (ch >= 5) c.push({ from: 'them', text: 'ich hab band an die bäume gemacht. geh dem einfach nach' }, { from: 'me', text: 'deniz?? war das du' }, { from: 'day', text: 'Nicht zugestellt' });
  if (ch >= 6) c.push({ from: 'them', text: 'hast du was gefunden 🙂' }, { from: 'them', text: 'du hättest auf dem weg bleiben sollen' }, { from: 'them', text: 'ich hör dich' });
  if (ch >= 8) c.push({ from: 'them', text: 'bis bald leon 🙂' });
  return c;
}
