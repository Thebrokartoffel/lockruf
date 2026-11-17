// Godmode / Entwicklerwerkzeuge (Taste +).
// Rückspulen funktioniert über deterministisches Replay: jede Eingabe wird pro Simulationsschritt aufgezeichnet
// (Aktionen statt Tasten, Mausdelta, Mikrofonpegel, dt). Zum Zurückspulen wird das aktuelle Segment ab seinem
// Start (letzter frischer Kapitelstart/Checkpoint) neu simuliert, ohne Rendern und ohne Einzelsounds, bis zum
// gewünschten Zeitpunkt. Story, Türen, Gegner, Inventar, Handy, Timer – alles entsteht dabei exakt neu.
import * as THREE from 'three';
import { G } from './state.js';
import { Input } from './input.js';
import { setSeed, getSeed } from './timers.js';
import { CHAPTERS, CHECKPOINTS } from './story.js';
import { P } from './level/outside.js';
import { HOME } from './level/home.js';

const mc = new MessageChannel(); const mq = [];
mc.port1.onmessage = () => { const r = mq.shift(); if (r) r(); };
const yieldMacro = () => new Promise((r) => { mq.push(r); mc.port2.postMessage(0); });
const V = (x, y, z) => new THREE.Vector3(x, y, z);
const esc = (s) => String(s).replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));

const TELEPORTS = [
  ['Zimmer', () => [...HOME.spawn]], ['OG Flur', () => [503.2, 3, 6.0]], ['Treppe unten', () => [...HOME.egSpawn]], ['Küche', () => [503.2, 0, 4.4]],
  ['Straße', () => [...P.homeSpawn]], ['Goetheturm', () => [6, 0, -55]], ['Schneise', () => [0, 0, 10]], ['Sperrung', () => [0, 0, 50]],
  ['Durchschlupf', () => [-3.2, 0, 54.4]], ['Pfad', () => [-36, 0, 84]], ['Zaun/Tor', () => [-76, 0, 106]], ['Hütte', () => [-67.5, 0, 133.2]],
  ['Keller', () => [-62, -3.2, 145]], ['Schacht-Ausgang', () => [-71.9, 0, 142.2]], ['Bach', () => [-82.6, 0, 106]], ['Gasse', () => [-95, 0, 106]], ['Gärten', () => [-112, 0, 106]],
];

export class Dev {
  constructor() {
    this.on = false; this.everOn = false; this.panelOpen = false;
    this.god = false; this.ignore = false; this.noclip = false; this.fly = false; this.flySpeed = 10;
    this.showCol = false; this.showReg = true; this.showLabels = true;
    this.timeScale = 1; this.stepOnce = false;
    this.seg = null;
    this.el = document.getElementById('dev'); this.hud = document.getElementById('devhud'); this.rep = document.getElementById('replay');
    this.vizT = 0; this.uiT = 0;
    this.viz = null; this.labels = [];
    this.initKeys();
  }

  // ---------------- Aufzeichnung ----------------
  beginSegment(ch, cp) {
    const seed = (Math.floor(G.time * 1000) * 2654435761 + ch * 97) >>> 0;
    setSeed(seed);
    this.seg = { ch, cp, t0: G.time, seed, dev0: this.flags(), frames: [], events: [], marks: [], checks: [] };
  }
  flags() { return { god: this.god, ignore: this.ignore, noclip: this.noclip, fly: this.fly, flySpeed: this.flySpeed }; }
  get frame() { return this.seg ? this.seg.frames.length : 0; }
  record(dt, eof) {
    const s = this.seg; if (!s || G.replaying) return;
    const st = Input.st;
    s.frames.push([dt, st.held, st.hit, st.lx, st.ly, G.micLvl || 0, eof ? 1 : 0, st.ax || 0, st.az || 0]);
    if (s.frames.length % 30 === 0) { const p = G.player.p; s.checks.push([s.frames.length, +p.x.toFixed(3), +p.y.toFixed(3), +p.z.toFixed(3), G.story.chapter]); }
  }
  mark(label) {
    const s = this.seg; if (!s || G.replaying) return;
    s.marks.push({ f: s.frames.length, label, t: G.time - s.t0, ch: G.story.chapter });
  }
  // Godmode-Eingriffe sofort ausführen und für das Replay merken
  ev(type, a, b) {
    if (this.seg && !G.replaying) this.seg.events.push({ f: this.seg.frames.length, type, a, b });
    this.apply({ type, a, b });
  }
  apply(e) {
    if (e.type === 'set') { this[e.a] = e.b; if (e.a === 'fly' && e.b) this.noclip = true; }
    else if (e.type === 'trig') { const t = this.triggers().find((x) => x[1] === e.a); if (t) t[2](); }
    else if (e.type === 'tp') { G.player.teleport(e.a[0], e.a[1], e.a[2], G.player.yaw, G.player.pitch); }
    else if (e.type === 'unstuck') G.story.unstuck();
    else if (e.type === 'use') { const it = G.world.interacts.find((i) => !(i.once && i.used) && i.enabled() && String(typeof i.text === 'function' ? i.text() : i.text).includes(e.a)); if (it) G.player.use(it); }
    else if (e.type === 'reply') { if (!G.ui.choice) G.ui.togglePhone(true); G.ui.chooseReply(e.a); }
    else if (e.type === 'look') { G.player.yaw = e.a[0]; G.player.pitch = e.a[1]; }
  }

  // ---------------- Zeitsteuerung ----------------
  plan(dt) {
    if (!this.on) return [dt];
    if (this.timeScale === 0) { if (this.stepOnce) { this.stepOnce = false; return [1 / 60]; } return []; }
    if (this.timeScale < 1) return [dt * this.timeScale];
    const n = Math.max(1, Math.round(this.timeScale));
    return new Array(n).fill(dt);
  }

  // Frame-Index, der `sec` Sekunden Spielzeit vor `from` liegt
  frameBack(from, sec) {
    const fr = this.seg.frames; let acc = 0, f = Math.min(from, fr.length);
    while (f > 0 && acc < sec) { f--; acc += fr[f][0]; }
    return f;
  }
  rewind(sec) { if (!this.seg) return Promise.resolve(); return this.rewindTo(this.frameBack(this.seg.frames.length, sec)); }

  async rewindTo(F) {
    const s = this.seg; if (!s || this.busy) return;
    if (!G.simStep) return;
    this.busy = true;
    const keep = this.flags();
    F = Math.max(0, Math.min(F, s.frames.length));
    const frames = s.frames, evs = s.events;
    G.replaying = true; this.rep.classList.add('show'); this.rep.textContent = 'SPULE ZURÜCK …';
    const A = G.audio; A.mute1 = true;
    // UI zurücksetzen
    G.timers.length = 0;
    G.ui.say(null); G.ui.hint(null); G.ui.death(false); G.ui.closeNote();
    for (const id of ['card', 'narration']) document.getElementById(id).classList.remove('show');
    G.ui.el.fade.style.transition = 'none'; G.ui.el.fade.style.opacity = 0;
    // Segmentstart wiederherstellen
    G.time = s.t0; setSeed(s.seed);
    Object.assign(this, s.dev0);
    Input.apply({ held: 0, hit: 0, lx: 0, ly: 0 });
    G.pendingRun = null;
    G.story.run(s.ch, true, s.cp);
    // wie live: erst der erste Frame, danach startet das Kapitelskript (Microtask nach dem Frame)
    let ei = 0, lastRes = G.story.resolved, fired = 1;
    const t0 = performance.now();
    for (let f = 0; f < F; f++) {
      let applied = false;
      while (ei < evs.length && evs[ei].f === f) { this.apply(evs[ei]); ei++; applied = true; }
      if (applied) await yieldMacro();
      const fr = frames[f];
      Input.apply({ held: fr[1], hit: fr[2], lx: fr[3], ly: fr[4], ax: fr[7] || 0, az: fr[8] || 0 });
      G.micLvl = fr[5];
      fired += G.simStep(fr[0], true);
      if (fr[6] && (fired || G.story.resolved !== lastRes || fr[2])) { fired = 0; await yieldMacro(); lastRes = G.story.resolved; }
      if ((f & 511) === 511) { this.rep.textContent = `SPULE ZURÜCK … ${Math.round(f / F * 100)} %`; await yieldMacro(); }
    }
    // Zukunft verwerfen, aktuelle Godmode-Schalter beibehalten
    frames.length = F;
    s.events = evs.filter((e) => e.f < F);
    s.marks = s.marks.filter((m) => m.f <= F);
    s.checks = s.checks.filter((c) => c[0] <= F);
    G.replaying = false;
    for (const [k, v] of Object.entries(keep)) if (this[k] !== v) this.ev('set', k, v);
    A.mute1 = false;
    Input.apply({ held: 0, hit: 0, lx: 0, ly: 0 });
    // Abweichung prüfen (sollte 0 sein)
    const c = s.checks[s.checks.length - 1];
    this.lastCheck = c && c[0] === F ? Math.hypot(c[1] - G.player.p.x, c[3] - G.player.p.z) : null;
    this.lastReplayMs = Math.round(performance.now() - t0);
    this.rep.classList.remove('show');
    this.busy = false;
    this.renderPanel(true);
  }

  // ---------------- Ereignisse zum Auslösen ----------------
  triggers() {
    if (this._trig) return this._trig;
    const O = () => G.objects, A = () => G.audio, pl = () => G.player;
    const ahead = (d, y = 0) => { const f = pl().forward(); f.y = 0; f.normalize(); return pl().p.clone().addScaledVector(f, d).add(V(0, y, 0)); };
    const behind = (d, y = 0) => ahead(-d, y);
    const groundY = (p) => { const y = G.world.groundAt(p.x, p.z, p.y + 3); return isFinite(y) ? y : p.y; };
    this._trig = [
      ['Jumpscares', 'branch', 'Ast fällt (am Baum bei der Hütte)', () => { const s = G.story; s.resetBranch(false); const b = O().branch.group; const [tx, tz] = G.branchTree; const gy = G.terrain.height(tx - 2.4, tz); A().branchFall(b.position.clone(), V(tx - 2.4, gy, tz)); A().sting('hard'); G.post.scare(0.9); let ft = 0; const y0 = b.position.y, r0 = b.rotation.z; s.addUp((dt) => { if (ft >= 1) return; ft = Math.min(1, ft + dt / 0.55); const e = ft * ft; b.position.y = y0 + (gy + 0.25 - y0) * e; b.rotation.z = r0 + (Math.PI / 2 - r0) * e; }); s.after(0.6, () => { s.branchCol.enabled = true; }); }],
      ['Jumpscares', 'silhouette', 'Silhouette vor dir', () => { const sil = O().silhouette; const p = ahead(12); sil.root.position.set(p.x, groundY(p), p.z); sil.root.rotation.y = pl().yaw; sil.stand(); sil.root.visible = true; A().sting('soft'); G.story.after(4, () => { sil.root.visible = false; }); }],
      ['Jumpscares', 'flood', 'Flutlicht + Vogelscheuche', () => { O().flood.on(); A().floodlight(V(-113, 2.6, 100.4)); A().sting('hard'); G.post.scare(1); G.story.after(5, () => O().flood.off()); }],
      ['Jumpscares', 'ruf2', 'RUF 2 (Lautsprecher-Schrei, nah)', () => { A().scream(ahead(1.5, 1), 'speaker', 1.4); A().sting('hard'); G.post.scare(1); pl().shake(1.2, 0.6); }],
      ['Jumpscares', 'manscare', 'Mann direkt vor dir', () => { const M = O().man; M.show(true); const p = ahead(2.2); M.H.root.position.set(p.x, groundY(p), p.z); M.H.root.rotation.y = pl().yaw + Math.PI; M.H.stand(); A().sting('hard'); G.post.scare(1); pl().shake(1, 0.5); }],
      ['Jumpscares', 'dadcatch', 'Vater erwischt dich', () => { const S = G.story; if (!S.dad || !G.objects.home) return; const D = S.dad; D.man.root.visible = true; const p = ahead(1.0); D.pos.set(p.x, pl().p.y, p.z); D.yaw = pl().yaw + Math.PI; D.apply(); A().sting('hard'); G.post.scare(1); G.ui.say('LEON! WAS MACHST DU DA?!', 2.4, 'Papa'); S.after(2.5, () => { if (D.mode !== 'patrol' && D.mode !== 'check') D.man.root.visible = false; }); }],
      ['Sounds', 'screamFar', 'Schrei (fern)', () => A().scream(P.speaker, 'distant', 1.2)],
      ['Sounds', 'steps', 'Schwere Schritte hinter dir', () => { for (let i = 0; i < 4; i++) G.story.after(i * 0.5, () => A().heavyStep(behind(4 - i * 0.6, 0.2), 1)); }],
      ['Sounds', 'twig', 'Ast knackt hinter dir', () => A().branchSnap(behind(6, 0.2))],
      ['Sounds', 'owl', 'Eule', () => A().owl(ahead(20, 10))],
      ['Sounds', 'crow', 'Krähe', () => A().crow(ahead(15, 8))],
      ['Sounds', 'creak', 'Knarzen', () => A().creak(ahead(2, 0.3), 1, 1)],
      ['Sounds', 'slam', 'Tür knallt', () => A().slam(ahead(5, 1), 1)],
      ['Sounds', 'fence', 'Zaun rasselt', () => A().fenceRattle(behind(5, 1), 1)],
      ['Sounds', 'vibrate', 'Handy vibriert', () => A().vibrate()],
      ['Sounds', 'stingH', 'Stinger hart', () => A().sting('hard')],
      ['Sounds', 'stingS', 'Stinger weich', () => A().sting('soft')],
      ['Sounds', 'hbOn', 'Herzschlag an', () => A().heartbeat(true, 1.8)],
      ['Sounds', 'hbOff', 'Herzschlag aus', () => A().heartbeat(false)],
      ['Gegner', 'manShow', 'Mann zeigen (10 m vor dir)', () => { const M = O().man; M.show(true); const p = ahead(10); M.H.root.position.set(p.x, groundY(p), p.z); M.H.root.rotation.y = pl().yaw + Math.PI; M.H.stand(); }],
      ['Gegner', 'manHide', 'Mann verstecken / Jagd stoppen', () => { G.story.chase = null; O().man.show(false); A().heartbeat(false); }],
      ['Gegner', 'chase', 'Mann jagt dich (14 m hinter dir)', () => { const M = O().man; M.show(true); const p = behind(14); p.y = groundY(p); M.H.root.position.copy(p); G.story.startChase({ pos: p, path: [] }); }],
      ['Gegner', 'dadWake', 'Vater: Runde in die Küche', () => { const D = G.story.dad; if (D && D.mode !== 'off') D.wakeAndPatrol(); }],
      ['Gegner', 'dadCheck', 'Vater: Tür auf, schaut in den Flur', () => { const D = G.story.dad; if (D && D.mode === 'sleep') D.alert = 1.05; }],
      ['Gegner', 'dadSleep', 'Vater: zurück ins Bett', () => { const D = G.story.dad; if (D && D.mode !== 'off') { D.backToBed(); D.alert = 0; } }],
      ['Türen', 'hutDoor', 'Hüttentür auf/zu', () => { const d = O().hutDoor; d._open = !d._open; if (d._open) d.open(); else d.close(); }],
      ['Türen', 'hatch', 'Luke auf/zu', () => { const h = O().hatch; if (h.state.open) { h.close(); A().slam(h.pos, 1); } else h.open(); }],
      ['Türen', 'gate', 'Tor auf/zu', () => { const g = O().gate; if (g.col.enabled) g.open(); else g.close(); }],
      ['Türen', 'front', 'Haustür auf/zu', () => { const f = O().home.frontDoor; f.set(f._open ? 0 : 1, true); f._open = !f._open; }],
      ['Türen', 'pdoor', 'Elterntür auf/zu', () => { const H = O().home; H._pd = !H._pd; H.parentsDoor.set(H._pd ? 1 : 0, true); }],
      ['Türen', 'fan', 'Lüftung an/aus', () => { const f = O().fan; f.setOn(!f.running); }],
      ['Türen', 'tube', 'Neonröhre an/aus', () => { const t = O().tube; t.set(!t.state.on); }],
    ];
    return this._trig;
  }

  // ---------------- Tasten ----------------
  initKeys() {
    window.addEventListener('keydown', (e) => {
      const t = e.target;
      if (t && (t.tagName === 'TEXTAREA' || (t.tagName === 'INPUT' && !['range', 'checkbox', 'button'].includes(t.type)) || t.isContentEditable)) return;
      if (Input.capture) return;
      const plus = e.key === '+' || e.code === 'NumpadAdd';
      if (plus) { e.preventDefault(); if (!e.repeat) this.toggle(); return; }
      if (!this.on || e.repeat) return;
      const map = { KeyV: () => this.ev('set', 'fly', !this.fly), KeyN: () => this.ev('set', 'noclip', !this.noclip), KeyB: () => { this.showCol = !this.showCol; this.vizT = 0; }, KeyR: () => this.rewind(5),
        KeyT: () => { const seq = [1, 0.25, 0.5, 2, 4]; this.timeScale = seq[(seq.indexOf(this.timeScale) + 1) % seq.length]; }, KeyP: () => { this.timeScale = this.timeScale === 0 ? 1 : 0; }, KeyO: () => { this.timeScale = 0; this.stepOnce = true; } };
      if (map[e.code] && G.started) { map[e.code](); this.renderPanel(true); }
    });
    window.addEventListener('wheel', (e) => { if (this.on && this.fly && Input.locked) { this.ev('set', 'flySpeed', Math.max(1, Math.min(80, this.flySpeed * (e.deltaY > 0 ? 0.85 : 1.18)))); } }, { passive: true });
  }

  toggle() {
    if (!G.started) return;
    document.body.classList.toggle('devtouch', !!G.touchOn);
    if (!this.on) { this.on = true; this.everOn = true; this.exposeHooks(); }
    this.panelOpen = !this.panelOpen;
    this.el.classList.toggle('show', this.panelOpen);
    document.body.classList.toggle('devopen', this.panelOpen);
    if (this.panelOpen) { this.renderPanel(true); if (!G.touchOn) Input.unlock(); }
    else if (G.started && !G.paused && !G.touchOn) Input.lock().catch(() => {});
  }
  disable() {
    this.on = false; this.panelOpen = false; this.el.classList.remove('show'); document.body.classList.remove('devopen');
    for (const k of ['god', 'ignore', 'noclip', 'fly']) if (this[k]) this.ev('set', k, false);
    this.timeScale = 1; this.showCol = false; this.clearViz();
    if (G.started && !G.paused && !G.touchOn) Input.lock().catch(() => {});
  }
  exposeHooks() { if (G.exposeHooks) G.exposeHooks(); }

  // ---------------- Panel ----------------
  renderPanel(force = false) {
    if (!this.panelOpen) return;
    if (!this.built || force) this.build();
    this.updateStatus();
  }
  build() {
    this.built = true;
    const tb = (k, label) => `<button data-t="${k}" class="${this[k] ? 'on' : ''}">${label}</button>`;
    const S = this.seg;
    const marks = S ? S.marks.slice(-24).map((m) => `<div class="mk"><span>${esc(m.label)}</span><span>${m.t.toFixed(1)} s <button data-mark="${m.f}">↺ davor</button></span></div>`).join('') : '';
    const groups = {};
    for (const [g, id, label] of this.triggers()) (groups[g] = groups[g] || []).push(`<button data-trig="${id}">${esc(label)}</button>`);
    const cps = Object.entries(CHECKPOINTS).flatMap(([ch, l]) => l.map(([cp, n]) => `<button data-cp="${ch}:${cp}">${ch}: ${n}</button>`)).join('');
    this.el.innerHTML = `<div class="hd"><b>GODMODE</b><span><button data-a="close">schließen (+)</button> <button data-a="off">aus</button></span></div>
      <div class="bd">
      <div class="stat" id="devstat"></div>
      <h4>SPIELER</h4>${tb('god', 'Unverwundbar')}${tb('ignore', 'Gegner ignorieren mich')}${tb('noclip', 'Noclip')}${tb('fly', 'Fliegen')}
      <div>Fluggeschwindigkeit <input type="range" id="devfs" min="1" max="80" step="1" value="${Math.round(this.flySpeed)}"> <span id="devfsv">${Math.round(this.flySpeed)}</span> m/s</div>
      <h4>ANZEIGE</h4><button data-v="showCol" class="${this.showCol ? 'on' : ''}">Kollisionen</button><button data-v="showReg" class="${this.showReg ? 'on' : ''}">Regionen</button><button data-v="showLabels" class="${this.showLabels ? 'on' : ''}">Beschriftung</button>
      <h4>ZEIT</h4>
      ${[0, 0.25, 0.5, 1, 2, 4].map((s) => `<button data-ts="${s}" class="${this.timeScale === s ? 'on' : ''}">${s === 0 ? '⏸ Pause' : s + '×'}</button>`).join('')}<button data-a="step">Einzelbild</button><br>
      <button data-rw="5">⏪ 5 s</button><button data-rw="10">⏪ 10 s</button><button data-rw="30">⏪ 30 s</button><button data-a="segstart">⏮ Segmentstart</button>
      <h4>STORY-MARKER (AKTUELLES SEGMENT)</h4>${marks || '<span class="keys">noch keine</span>'}
      ${Object.entries(groups).map(([g, b]) => `<h4>${g.toUpperCase()}</h4>${b.join('')}`).join('')}
      <h4>KAPITEL</h4>${CHAPTERS.map((c) => `<button data-ch="${c.id}">${c.id}: ${c.sub}</button>`).join('')}
      <h4>CHECKPOINTS</h4>${cps}
      <h4>TELEPORT</h4>${TELEPORTS.map(([n], i) => `<button data-tp="${i}">${n}</button>`).join('')}
      <h4>${G.touchOn ? 'HANDY' : 'TASTEN (GODMODE AKTIV)'}</h4>${G.touchOn ? '<div class="keys">Fliegen: Stick + Kamera, ⤒ hoch, ⤓ runter. Panel schließen: „schließen“ oben.</div>' : ''}<div class="keys">+ Panel · V Fliegen · N Noclip · B Kollisionen · R 5 s zurück · T Zeitfaktor · P Zeit anhalten · O Einzelbild<br>Fliegen: WASD + Maus, Leertaste hoch, ${esc(String(Input.key('crouch')).replace('Key', ''))} runter, Shift ×4, Mausrad Tempo</div>
      </div>`;
    this.el.onclick = (e) => {
      const b = e.target.closest('button'); if (!b) return;
      const d = b.dataset;
      if (d.t) this.ev('set', d.t, !this[d.t]);
      else if (d.v) { this[d.v] = !this[d.v]; this.vizT = 0; if (!this.showCol) this.clearViz(); }
      else if (d.ts !== undefined) this.timeScale = +d.ts;
      else if (d.rw) this.rewind(+d.rw);
      else if (d.mark) this.rewindTo(this.frameBack(+d.mark, 1.5));
      else if (d.trig) this.ev('trig', d.trig);
      else if (d.ch !== undefined) G.story.run(+d.ch, true);
      else if (d.cp) { const [ch, cp] = d.cp.split(':'); G.story.run(+ch, true, cp); }
      else if (d.tp !== undefined) { const p = TELEPORTS[+d.tp][1](); const y = G.world.groundAt(p[0], p[2], p[1] + 2); this.ev('tp', [p[0], isFinite(y) ? y : p[1], p[2]]); }
      else if (d.a === 'step') { this.timeScale = 0; this.stepOnce = true; }
      else if (d.a === 'segstart') this.rewindTo(0);
      else if (d.a === 'close') this.toggle();
      else if (d.a === 'off') this.disable();
      this.build(); this.updateStatus();
    };
    const fs = this.el.querySelector('#devfs');
    fs.oninput = () => { this.ev('set', 'flySpeed', +fs.value); this.el.querySelector('#devfsv').textContent = fs.value; };
  }
  updateStatus() {
    const st = this.el.querySelector('#devstat'); if (!st) return;
    const p = G.player.p, s = this.seg;
    const reg = G.world.regions.filter((r) => r.enabled && G.world.regionContains(r, p.x, p.z)).map((r) => r.label).join(', ') || '–';
    const blk = (G.player.blockedBy || []).map((b) => b.c.region ? `${b.c.label}${b.c.disabled ? ' (wäre frei: „' + b.c.disabled + '“ deaktiviert)' : ''}` : `#${b.c.id} ${b.c.label || b.c.type}`).join(' · ');
    const D = G.story.dad;
    st.innerHTML = `Kapitel ${G.story.chapter} ${esc(CHAPTERS[G.story.chapter] ? CHAPTERS[G.story.chapter].sub : '')} · Zeit im Segment ${s ? (G.time - s.t0).toFixed(1) : '–'} s · Frames ${s ? s.frames.length : 0}
Pos ${p.x.toFixed(2)} ${p.y.toFixed(2)} ${p.z.toFixed(2)} · Blick ${(G.player.yaw * 57.3 % 360).toFixed(0)}°
Region: ${esc(reg)}
Ziel: ${esc(G.ui.currentObjective || '–')}
Ausdauer ${(G.player.stamina * 100).toFixed(0)} % · Zeitfaktor ${this.timeScale}× · Seed ${getSeed()}
${D && D.mode !== 'off' ? `Vater: ${D.mode} · Alarm ${D.alert.toFixed(2)} · Stufe ${D.stage} · Verdacht ${D.sus.toFixed(2)}\n` : ''}${G.story.chase ? `Jagd: ${G.story.chase.state} · Abstand ${Math.hypot(p.x - G.story.chase.pos.x, p.z - G.story.chase.pos.z).toFixed(1)} m\n` : ''}${this.lastReplayMs !== undefined ? `Letztes Rückspulen: ${this.lastReplayMs} ms${this.lastCheck !== null && this.lastCheck !== undefined ? ' · Abweichung ' + this.lastCheck.toFixed(3) + ' m' : ''}\n` : ''}<span class="blk">${blk ? 'Blockiert durch: ' + esc(blk) : ''}</span>`;
  }

  // ---------------- pro Frame (Anzeige) ----------------
  update(dt) {
    if (!this.on) { this.hud.classList.remove('show'); return; }
    this.uiT -= dt;
    if (this.uiT < 0) {
      this.uiT = 0.25;
      if (this.panelOpen) this.updateStatus();
      const tags = [this.god && 'UNVERWUNDBAR', this.ignore && 'UNSICHTBAR', this.fly ? 'FLUG ' + Math.round(this.flySpeed) + ' m/s' : this.noclip && 'NOCLIP', this.timeScale !== 1 && (this.timeScale === 0 ? 'ZEIT ANGEHALTEN' : this.timeScale + '×'), this.showCol && 'KOLLISION'].filter(Boolean);
      const blk = (G.player.blockedBy || []).map((b) => (b.c.region ? b.c.label : `#${b.c.id} ${b.c.label || b.c.type}`)).join(' · ');
      this.hud.textContent = 'GODMODE ' + (tags.length ? '· ' + tags.join(' · ') : '') + (blk ? '\nblockiert: ' + blk : '');
      this.hud.classList.add('show');
    }
    if (this.showCol) { this.vizT -= dt; if (this.vizT < 0) { this.vizT = 0.4; this.buildViz(); } }
  }

  clearViz() {
    if (this.viz) { G.scene.remove(this.viz); this.viz.geometry.dispose(); this.viz = null; }
    for (const l of this.labels) { G.scene.remove(l); l.material.map.dispose(); l.material.dispose(); }
    this.labels = [];
  }
  buildViz() {
    this.clearViz();
    const p = G.player.p, R = 26, W = G.world;
    const pos = [], col = [];
    const C_ON = [1, 0.25, 0.2], C_OFF = [0.45, 0.45, 0.45], C_REG = [0.3, 1, 0.4], C_REGOFF = [0.25, 0.45, 0.3];
    const line = (a, b, c) => { pos.push(a[0], a[1], a[2], b[0], b[1], b[2]); col.push(...c, ...c); };
    const boxLines = (x0, x1, z0, z1, y0, y1, c) => {
      const P8 = [[x0, y0, z0], [x1, y0, z0], [x1, y0, z1], [x0, y0, z1], [x0, y1, z0], [x1, y1, z0], [x1, y1, z1], [x0, y1, z1]];
      for (const [a, b] of [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]]) line(P8[a], P8[b], c);
    };
    const near = [];
    const yl = (c) => [Math.max(c.minY, p.y - 0.5), Math.min(c.maxY, p.y + 2.6)];
    for (const c of W.colliders) {
      const cx = c.type === 'box' ? (c.minX + c.maxX) / 2 : c.type === 'obb' ? c.cx : c.x;
      const cz = c.type === 'box' ? (c.minZ + c.maxZ) / 2 : c.type === 'obb' ? c.cz : c.z;
      const d = Math.hypot(cx - p.x, cz - p.z);
      if (d > R + 6) continue;
      const [y0, y1] = yl(c); if (y1 <= y0) continue;
      const cc = c.enabled ? C_ON : C_OFF;
      if (c.type === 'box') boxLines(c.minX, c.maxX, c.minZ, c.maxZ, y0, y1, cc);
      else if (c.type === 'circle') { const n = 12; for (let i = 0; i < n; i++) { const a0 = i / n * 6.283, a1 = (i + 1) / n * 6.283; for (const y of [y0, y1]) line([c.x + Math.cos(a0) * c.r, y, c.z + Math.sin(a0) * c.r], [c.x + Math.cos(a1) * c.r, y, c.z + Math.sin(a1) * c.r], cc); } line([c.x + c.r, y0, c.z], [c.x + c.r, y1, c.z], cc); }
      else { const cs = [[-c.hw, -c.hd], [c.hw, -c.hd], [c.hw, c.hd], [-c.hw, c.hd]].map(([lx, lz]) => [c.cx + lx * c.cos - lz * c.sin, c.cz + lx * c.sin + lz * c.cos]); for (let i = 0; i < 4; i++) { const a = cs[i], b = cs[(i + 1) % 4]; line([a[0], y0, a[1]], [b[0], y0, b[1]], cc); line([a[0], y1, a[1]], [b[0], y1, b[1]], cc); line([a[0], y0, a[1]], [a[0], y1, a[1]], cc); } }
      near.push({ d, c, x: cx, z: cz, y: y1 + 0.1, t: `#${c.id} ${c.label || c.type}${c.enabled ? '' : ' (aus)'}` });
    }
    if (this.showReg) {
      const gy = (x, z) => { const y = W.groundAt(x, z, p.y + 1.5); return (isFinite(y) ? y : p.y) + 0.06; };
      for (const r of W.regions) {
        const cc = r.enabled ? C_REG : C_REGOFF;
        if (r.type === 'box') {
          if (Math.max(Math.abs(p.x - (r.minX + r.maxX) / 2) - (r.maxX - r.minX) / 2, Math.abs(p.z - (r.minZ + r.maxZ) / 2) - (r.maxZ - r.minZ) / 2) > R) continue;
          const seg = (ax, az, bx, bz) => { const n = Math.max(1, Math.ceil(Math.hypot(bx - ax, bz - az) / 2)); for (let i = 0; i < n; i++) { const x0 = ax + (bx - ax) * i / n, z0 = az + (bz - az) * i / n, x1 = ax + (bx - ax) * (i + 1) / n, z1 = az + (bz - az) * (i + 1) / n; line([x0, gy(x0, z0), z0], [x1, gy(x1, z1), z1], cc); } };
          seg(r.minX, r.minZ, r.maxX, r.minZ); seg(r.maxX, r.minZ, r.maxX, r.maxZ); seg(r.maxX, r.maxZ, r.minX, r.maxZ); seg(r.minX, r.maxZ, r.minX, r.minZ);
          near.push({ d: Math.hypot((r.minX + r.maxX) / 2 - p.x, (r.minZ + r.maxZ) / 2 - p.z), x: (r.minX + r.maxX) / 2, z: (r.minZ + r.maxZ) / 2, y: p.y + 0.3, t: 'Region ' + r.label + (r.enabled ? '' : ' (aus)'), reg: true });
        } else if (r.type === 'circle') {
          if (Math.hypot(r.x - p.x, r.z - p.z) - r.radius > R) continue;
          const n = 32; for (let i = 0; i < n; i++) { const a0 = i / n * 6.283, a1 = (i + 1) / n * 6.283; const x0 = r.x + Math.cos(a0) * r.radius, z0 = r.z + Math.sin(a0) * r.radius, x1 = r.x + Math.cos(a1) * r.radius, z1 = r.z + Math.sin(a1) * r.radius; line([x0, gy(x0, z0), z0], [x1, gy(x1, z1), z1], cc); }
        } else {
          const pts = r.points;
          for (let i = 0; i < pts.length - 1; i++) {
            const [ax, az] = pts[i], [bx, bz] = pts[i + 1];
            if (Math.min(Math.hypot(ax - p.x, az - p.z), Math.hypot(bx - p.x, bz - p.z)) > R + 10) continue;
            const dx = bx - ax, dz = bz - az, l = Math.hypot(dx, dz) || 1, nx = -dz / l * r.radius, nz = dx / l * r.radius;
            const n = Math.max(1, Math.ceil(l / 2));
            for (const s of [1, -1]) for (let k = 0; k < n; k++) { const x0 = ax + dx * k / n + nx * s, z0 = az + dz * k / n + nz * s, x1 = ax + dx * (k + 1) / n + nx * s, z1 = az + dz * (k + 1) / n + nz * s; line([x0, gy(x0, z0), z0], [x1, gy(x1, z1), z1], cc); }
          }
        }
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
    this.viz = new THREE.LineSegments(g, new THREE.LineBasicMaterial({ vertexColors: true, depthTest: false, transparent: true, opacity: 0.85, fog: false }));
    this.viz.renderOrder = 999; this.viz.frustumCulled = false;
    G.scene.add(this.viz);
    if (this.showLabels) {
      near.sort((a, b) => a.d - b.d);
      for (const n of near.slice(0, 16)) this.labels.push(this.label(n.t, n.x, n.y, n.z, n.reg));
    }
  }
  label(text, x, y, z, reg) {
    const c = document.createElement('canvas'); c.width = 512; c.height = 64;
    const ctx = c.getContext('2d'); ctx.font = '26px Consolas, monospace';
    const w = Math.min(510, ctx.measureText(text).width + 16);
    ctx.fillStyle = 'rgba(0,0,0,.65)'; ctx.fillRect(0, 8, w, 46);
    ctx.fillStyle = reg ? '#7dff8a' : '#ffb0a0'; ctx.fillText(text, 8, 40);
    const t = new THREE.CanvasTexture(c);
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, depthTest: false, transparent: true, fog: false }));
    s.scale.set(2.4, 0.3, 1); s.center.set(0, 0.5); s.position.set(x, y, z); s.renderOrder = 1000;
    G.scene.add(s); return s;
  }
}
