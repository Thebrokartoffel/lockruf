// Prozedurales Audio (WebAudio). Kein einziger Sound wird geladen, alles wird synthetisiert.
import { G } from './state.js';
import { rng } from './util.js';

const R = rng(1234);
const rand = (a, b) => a + R() * (b - a);

export class AudioEngine {
  constructor() { this.ready = false; this.loops = {}; this.env = 'forest'; }

  init() {
    if (this.ready) return;
    const ctx = this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    this.master = ctx.createGain(); this.master.gain.value = G.settings.volume;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -16; comp.knee.value = 12; comp.ratio.value = 5; comp.attack.value = 0.004; comp.release.value = 0.25;
    this.master.connect(comp); comp.connect(ctx.destination);
    this.white = this.makeNoiseBuffer('white', 4);
    this.pink = this.makeNoiseBuffer('pink', 6);
    this.brown = this.makeNoiseBuffer('brown', 6);
    // Hall
    this.revForest = ctx.createConvolver(); this.revForest.buffer = this.makeIR(3.2, 2.2, 0.35);
    this.revRoom = ctx.createConvolver(); this.revRoom.buffer = this.makeIR(0.9, 3.5, 0.6);
    this.revForestIn = ctx.createGain(); this.revRoomIn = ctx.createGain();
    this.revForestIn.connect(this.revForest); this.revRoomIn.connect(this.revRoom);
    const rf = ctx.createGain(); rf.gain.value = 0.8; this.revForest.connect(rf); rf.connect(this.master);
    const rr = ctx.createGain(); rr.gain.value = 0.7; this.revRoom.connect(rr); rr.connect(this.master);
    this.sfx = ctx.createGain(); this.sfx.connect(this.master);
    this.amb = ctx.createGain(); this.amb.connect(this.master);
    this.ready = true;
    this.renderScream();
  }

  setVolume(v) { if (this.master) this.master.gain.setTargetAtTime(v, this.ctx.currentTime, 0.05); }
  get now() { return this.ctx.currentTime; }

  makeNoiseBuffer(kind, secs) {
    const ctx = this.ctx, len = ctx.sampleRate * secs;
    const b = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = b.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0, last = 0;
    for (let i = 0; i < len; i++) {
      const w = Math.random() * 2 - 1;
      if (kind === 'white') d[i] = w;
      else if (kind === 'pink') {
        b0 = 0.99886 * b0 + w * 0.0555179; b1 = 0.99332 * b1 + w * 0.0750759; b2 = 0.969 * b2 + w * 0.153852;
        b3 = 0.8665 * b3 + w * 0.3104856; b4 = 0.55 * b4 + w * 0.5329522; b5 = -0.7616 * b5 - w * 0.016898;
        d[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + w * 0.5362) * 0.11; b6 = w * 0.115926;
      } else { last = (last + 0.02 * w) / 1.02; d[i] = last * 3.5; }
    }
    return b;
  }

  makeIR(secs, decay, wet) {
    const ctx = this.ctx, len = ctx.sampleRate * secs;
    const b = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let c = 0; c < 2; c++) {
      const d = b.getChannelData(c);
      for (let i = 0; i < len; i++) {
        const t = i / len;
        d[i] = (Math.random() * 2 - 1) * Math.pow(1 - t, decay) * (i < 200 ? i / 200 : 1) * wet;
      }
    }
    return b;
  }

  // ---------- Bausteine ----------
  panner(pos, ref = 2, roll = 1.2) {
    const p = this.ctx.createPanner();
    p.panningModel = 'HRTF'; p.distanceModel = 'inverse';
    p.refDistance = ref; p.rolloffFactor = roll; p.maxDistance = 300;
    this.setPos(p, pos);
    return p;
  }
  setPos(p, pos) {
    if (p.positionX) { p.positionX.value = pos.x; p.positionY.value = pos.y; p.positionZ.value = pos.z; }
    else p.setPosition(pos.x, pos.y, pos.z);
  }
  // Ausgang mit Hall je nach Umgebung
  out(node, { pos = null, ref = 2, roll = 1.2, rev = 0.3, bus = null } = {}) {
    let n = node;
    if (pos) { const p = this.panner(pos, ref, roll); n.connect(p); n = p; }
    n.connect(bus || this.sfx);
    if (rev > 0) {
      const g = this.ctx.createGain(); g.gain.value = rev;
      n.connect(g);
      g.connect(this.env === 'room' || this.env === 'cellar' ? this.revRoomIn : this.revForestIn);
    }
    return n;
  }
  noiseSrc(buf = this.white, loop = false, rate = 1) {
    const s = this.ctx.createBufferSource(); s.buffer = buf; s.loop = loop; s.playbackRate.value = rate;
    return s;
  }
  filter(type, f, q = 1, gain = 0) {
    const b = this.ctx.createBiquadFilter(); b.type = type; b.frequency.value = f; b.Q.value = q; b.gain.value = gain; return b;
  }
  gain(v = 1) { const g = this.ctx.createGain(); g.gain.value = v; return g; }
  osc(type, f) { const o = this.ctx.createOscillator(); o.type = type; o.frequency.value = f; return o; }
  envl(param, t, a, peak, d, sustain = 0) {
    param.cancelScheduledValues(t);
    param.setValueAtTime(0.0001, t);
    param.linearRampToValueAtTime(peak, t + a);
    param.exponentialRampToValueAtTime(Math.max(0.0001, sustain || 0.0001), t + a + d);
  }
  burst({ buf, type = 'bandpass', f = 1000, q = 1, a = 0.002, d = 0.1, peak = 0.5, t = 0, pos, rev = 0.2, ref = 2, rate = 1, bus }) {
    if (!this.ready || this.mute1) return;
    const now = this.now + t;
    const s = this.noiseSrc(buf || this.white, false, rate);
    const fl = this.filter(type, f, q);
    const g = this.gain(0);
    s.connect(fl); fl.connect(g);
    this.envl(g.gain, now, a, peak, d);
    this.out(g, { pos, rev, ref, bus });
    s.start(now, R() * 2); s.stop(now + a + d + 0.05);
  }
  tone({ type = 'sine', f = 440, f2, a = 0.005, d = 0.2, peak = 0.3, t = 0, pos, rev = 0.2, ref = 2, lp }) {
    if (!this.ready || this.mute1) return;
    const now = this.now + t;
    const o = this.osc(type, f);
    if (f2) o.frequency.exponentialRampToValueAtTime(f2, now + a + d);
    const g = this.gain(0);
    let n = o;
    if (lp) { const l = this.filter('lowpass', lp, 0.7); o.connect(l); n = l; }
    n.connect(g);
    this.envl(g.gain, now, a, peak, d);
    this.out(g, { pos, rev, ref });
    o.start(now); o.stop(now + a + d + 0.05);
  }

  updateListener(cam) {
    if (!this.ready) return;
    const L = this.ctx.listener;
    const p = cam.position;
    const f = cam.getWorldDirection(this._v || (this._v = cam.position.clone()));
    const t = this.now;
    if (L.positionX) {
      L.positionX.setTargetAtTime(p.x, t, 0.015); L.positionY.setTargetAtTime(p.y, t, 0.015); L.positionZ.setTargetAtTime(p.z, t, 0.015);
      L.forwardX.setTargetAtTime(f.x, t, 0.015); L.forwardY.setTargetAtTime(f.y, t, 0.015); L.forwardZ.setTargetAtTime(f.z, t, 0.015);
      L.upX.value = 0; L.upY.value = 1; L.upZ.value = 0;
    } else { L.setPosition(p.x, p.y, p.z); L.setOrientation(f.x, f.y, f.z, 0, 1, 0); }
  }

  // ---------- Schritte ----------
  // Schritt: Ferse + Abrollen, je nach Untergrund und Gangart (walk/sprint/crouch/crawl)
  footstep(surface, k = 1, pos = null, kind = 'walk') {
    if (!this.ready || this.mute1) return;
    const v = k * (pos ? 1.4 : 0.55);
    const soft = kind === 'crouch' || kind === 'crawl';
    const roll = soft ? 0.06 : kind === 'sprint' ? 0.025 : 0.045;   // Abstand Ferse -> Ballen
    const dl = soft ? 1.5 : kind === 'sprint' ? 0.75 : 1;           // Länge der Geräusche
    const indoor = ['woodfloor', 'stairs', 'tile', 'carpet', 'concrete', 'metal', 'wood'].includes(surface);
    const rev = indoor ? 0.28 : 0.12;
    const o = { pos, rev, ref: 2 };
    const heel = (f, d, p) => this.tone({ ...o, f, f2: f * 0.7, d: d * dl, peak: p * v, lp: 300 });
    switch (surface) {
      case 'leaves':
        for (let i = 0; i < 9; i++) this.burst({ ...o, f: rand(1800, 5200), q: 1.4, d: rand(0.008, 0.02), peak: 0.28 * v * (0.4 + R()), t: R() * 0.13 * dl });
        this.burst({ ...o, f: rand(700, 1100), q: 0.9, d: rand(0.1, 0.18) * dl, peak: 0.2 * v, t: 0.01 });
        this.burst({ ...o, buf: this.pink, f: rand(2500, 3500), q: 0.6, d: 0.12 * dl, peak: 0.12 * v, t: roll });
        heel(70, 0.07, 0.24);
        break;
      case 'gravel':
        for (let i = 0; i < 10; i++) this.burst({ ...o, f: rand(1300, 3800), q: 1.6, d: rand(0.012, 0.025), peak: 0.27 * v * (0.4 + R()), t: R() * 0.08 + (i > 5 ? roll : 0) });
        this.burst({ ...o, f: 900, q: 0.8, d: 0.14 * dl, peak: 0.14 * v });
        heel(75, 0.06, 0.2);
        break;
      case 'asphalt': case 'sidewalk':
        this.burst({ ...o, type: 'highpass', f: 2600, q: 0.7, d: 0.022, peak: 0.24 * v });
        this.burst({ ...o, f: 1200, q: 1, d: 0.07 * dl, peak: 0.11 * v, t: roll });
        this.burst({ ...o, f: rand(3500, 5000), q: 2, d: 0.03, peak: 0.05 * v, t: roll + 0.02 });
        heel(95, 0.05, 0.27);
        break;
      case 'wood': case 'woodfloor': case 'stairs': {
        const f0 = surface === 'stairs' ? rand(80, 100) : rand(95, 125);
        heel(f0, 0.14, surface === 'stairs' ? 0.5 : 0.4);
        this.burst({ ...o, f: rand(200, 300), q: 5, d: 0.16 * dl, peak: (surface === 'stairs' ? 0.32 : 0.25) * v });
        this.burst({ ...o, type: 'highpass', f: 2000, q: 0.7, d: 0.02, peak: 0.07 * v, t: roll });
        if (surface === 'stairs') this.tone({ ...o, f: rand(160, 190), d: 0.25, peak: 0.08 * v, lp: 600, t: 0.01 });
        if (R() < (surface === 'stairs' ? 0.25 : 0.12)) this.creak(pos, 0.22 * k);
        break;
      }
      case 'tile':
        this.burst({ ...o, type: 'highpass', f: 3200, q: 0.8, d: 0.018, peak: 0.3 * v });
        this.tone({ ...o, f: rand(900, 1300), d: 0.05, peak: 0.04 * v });
        heel(110, 0.05, 0.24);
        this.burst({ ...o, type: 'highpass', f: 2500, d: 0.015, peak: 0.12 * v, t: roll });
        break;
      case 'carpet':
        this.burst({ ...o, buf: this.pink, f: rand(600, 900), q: 0.6, d: 0.12 * dl, peak: 0.12 * v });
        heel(65, 0.06, 0.18);
        break;
      case 'concrete':
        this.burst({ ...o, type: 'highpass', f: 2800, q: 0.7, d: 0.03, peak: 0.28 * v });
        heel(85, 0.06, 0.25);
        this.burst({ ...o, f: 1600, q: 1.5, d: 0.06, peak: 0.08 * v, t: roll });
        break;
      case 'metal':
        this.burst({ ...o, f: rand(1600, 2200), q: 9, d: 0.2, peak: 0.25 * v });
        this.burst({ ...o, f: 800, q: 6, d: 0.25, peak: 0.18 * v });
        heel(110, 0.08, 0.25);
        break;
      case 'water':
        this.burst({ ...o, buf: this.pink, f: rand(700, 1100), q: 0.7, d: 0.3, peak: 0.3 * v });
        this.burst({ ...o, f: rand(2500, 3500), q: 1, d: 0.15, peak: 0.12 * v, t: 0.04 });
        break;
      case 'sand': case 'mulch':
        this.burst({ ...o, f: rand(1200, 2200), q: 0.6, d: 0.14 * dl, peak: 0.18 * v });
        heel(70, 0.06, 0.16);
        break;
      case 'crawl':
        this.burst({ ...o, f: rand(900, 1500), q: 0.8, d: 0.25, peak: 0.2 * v });
        this.tone({ ...o, f: 140, d: 0.05, peak: 0.15 * v });
        break;
      default:
        this.burst({ ...o, f: 1500, q: 0.8, d: 0.1, peak: 0.2 * v });
    }
    // Kleidung raschelt beim Rennen
    if (kind === 'sprint' && !pos && R() < 0.7) this.burst({ buf: this.pink, f: rand(1500, 2600), q: 0.5, d: 0.09, peak: 0.05, rev: 0, t: 0.03 });
  }

  // Atmosphäre im Wald
  branchSnap(pos) {
    this.burst({ pos, type: 'highpass', f: 2600, d: 0.012, peak: 0.6, rev: 0.6, ref: 4 });
    this.burst({ pos, f: 1400, q: 3, d: 0.04, peak: 0.35, t: 0.01, rev: 0.6, ref: 4 });
    this.burst({ pos, type: 'highpass', f: 3500, d: 0.008, peak: 0.3, t: 0.07, rev: 0.6, ref: 4 });
  }
  rustle(pos, n = 6) { for (let i = 0; i < n; i++) this.burst({ pos: pos.clone ? pos.clone().add({ x: i * 0.6, y: 0, z: 0 }) : pos, buf: this.pink, f: rand(1800, 3200), q: 0.6, d: 0.15, peak: 0.2, t: i * 0.22, rev: 0.5, ref: 4 }); }
  knock(pos) { for (let i = 0; i < 3; i++) { this.tone({ pos, f: 140, f2: 90, d: 0.08, peak: 0.45, lp: 500, t: i * 0.42, rev: 0.9, ref: 6 }); this.burst({ pos, f: 700, q: 3, d: 0.05, peak: 0.25, t: i * 0.42, rev: 0.9, ref: 6 }); } }

  // ---------- Einzelne Effekte ----------
  creak(pos, k = 1, dur = rand(0.5, 1.1)) {
    if (!this.ready || this.mute1) return;
    const now = this.now;
    const o = this.osc('sawtooth', rand(70, 110));
    o.frequency.linearRampToValueAtTime(rand(120, 180), now + dur);
    const bp = this.filter('bandpass', rand(500, 900), 9);
    bp.frequency.linearRampToValueAtTime(rand(1100, 1600), now + dur);
    const am = this.gain(0);
    const lfo = this.osc('square', rand(18, 35)); const lg = this.gain(0.5);
    lfo.connect(lg); lg.connect(am.gain);
    const g = this.gain(0);
    o.connect(bp); bp.connect(am); am.connect(g);
    g.gain.setValueAtTime(0.0001, now); g.gain.linearRampToValueAtTime(0.35 * k, now + 0.08);
    g.gain.linearRampToValueAtTime(0.25 * k, now + dur * 0.7); g.gain.linearRampToValueAtTime(0.0001, now + dur);
    this.out(g, { pos, rev: 0.3 });
    o.start(now); lfo.start(now); o.stop(now + dur + 0.05); lfo.stop(now + dur + 0.05);
  }
  doorCreak(pos) { this.creak(pos, 1.1, 1.4); this.burst({ pos, f: 300, q: 2, d: 0.2, peak: 0.2 }); }
  doorOpen(pos) { this.burst({ pos, type: 'highpass', f: 2000, d: 0.04, peak: 0.3 }); this.tone({ pos, f: 1800, d: 0.05, peak: 0.08 }); }
  slam(pos, k = 1) {
    this.tone({ pos, f: 60, f2: 40, d: 0.5, peak: 0.9 * k, lp: 300, rev: 0.5 });
    this.burst({ pos, f: 400, q: 1, d: 0.3, peak: 0.6 * k, rev: 0.5 });
    this.burst({ pos, type: 'highpass', f: 2500, d: 0.05, peak: 0.3 * k });
  }
  bolt(pos) {
    this.burst({ pos, f: 3200, q: 4, d: 0.05, peak: 0.4 });
    this.burst({ pos, f: 1800, q: 6, d: 0.18, peak: 0.25, t: 0.12 });
    this.tone({ pos, f: 2400, d: 0.3, peak: 0.06, t: 0.12 });
    this.burst({ pos, f: 4200, q: 3, d: 0.03, peak: 0.35, t: 0.32 });
  }
  drag(pos, dur = 1.6) {
    if (!this.ready || this.mute1) return;
    const now = this.now;
    const s = this.noiseSrc(this.brown, true);
    const lp = this.filter('lowpass', 500, 0.8);
    const am = this.gain(0.5);
    const lfo = this.osc('sawtooth', 9); const lg = this.gain(0.4); lfo.connect(lg); lg.connect(am.gain);
    const g = this.gain(0);
    s.connect(lp); lp.connect(am); am.connect(g);
    g.gain.linearRampToValueAtTime(0.9, now + 0.1); g.gain.setValueAtTime(0.9, now + dur - 0.2); g.gain.linearRampToValueAtTime(0.0001, now + dur);
    this.out(g, { pos, rev: 0.4 });
    s.start(now); lfo.start(now); s.stop(now + dur); lfo.stop(now + dur);
  }
  thud(pos, k = 1) {
    this.tone({ pos, f: 55, f2: 35, d: 0.35, peak: 0.8 * k, lp: 200, rev: 0.4 });
    this.burst({ pos, type: 'lowpass', f: 300, d: 0.25, peak: 0.5 * k, rev: 0.3 });
  }
  pickup() {
    this.burst({ f: 2500, q: 1, d: 0.06, peak: 0.12 });
    this.burst({ f: 900, q: 1, d: 0.12, peak: 0.1, t: 0.03 });
  }
  click() { this.burst({ type: 'highpass', f: 3000, d: 0.015, peak: 0.25, rev: 0.05 }); }
  switchClick(pos) { this.burst({ pos, type: 'highpass', f: 2000, d: 0.02, peak: 0.5 }); this.tone({ pos, f: 900, d: 0.04, peak: 0.1 }); }
  keys(pos) { for (let i = 0; i < 5; i++) this.burst({ pos, f: rand(3500, 6000), q: 8, d: 0.08, peak: 0.12, t: i * 0.05 + R() * 0.03 }); }
  zip() { for (let i = 0; i < 18; i++) this.burst({ f: 3000 + i * 80, q: 3, d: 0.01, peak: 0.08, t: i * 0.018 }); }
  metalClang(pos, k = 1) {
    for (const f of [520, 1310, 2270, 3400]) this.tone({ pos, f, d: rand(0.4, 0.9), peak: 0.12 * k, rev: 0.5 });
    this.burst({ pos, type: 'highpass', f: 1500, d: 0.08, peak: 0.5 * k });
  }
  screw(pos) { for (let i = 0; i < 4; i++) this.burst({ pos, f: 2600, q: 5, d: 0.04, peak: 0.12, t: i * 0.09 }); }
  fenceRattle(pos, k = 1) { for (let i = 0; i < 12; i++) this.burst({ pos, f: rand(1800, 4200), q: 6, d: 0.06, peak: 0.25 * k, t: i * 0.04 + R() * 0.03, rev: 0.4 }); }
  padlock(pos) { this.keys(pos); this.burst({ pos, f: 2400, q: 6, d: 0.12, peak: 0.3, t: 0.4 }); this.burst({ pos, type: 'highpass', f: 3000, d: 0.03, peak: 0.4, t: 0.7 }); }
  splash(pos) { this.burst({ pos, f: 1200, q: 0.6, d: 0.35, peak: 0.4 }); this.burst({ pos, f: 400, q: 1, d: 0.3, peak: 0.3 }); }
  bodyFall() {
    this.thud(null, 1);
    this.burst({ f: 1600, q: 0.6, d: 0.35, peak: 0.4 });
    for (let i = 0; i < 8; i++) this.burst({ type: 'highpass', f: 3500, d: 0.008, peak: 0.3 * R(), t: R() * 0.25 });
  }
  phoneDrop(pos) {
    this.burst({ pos, type: 'highpass', f: 2500, d: 0.03, peak: 0.4 });
    this.burst({ pos, f: 1800, q: 1, d: 0.2, peak: 0.25, t: 0.03 });
  }
  vibrate(pos = null) {
    if (!this.ready || this.mute1) return;
    const now = this.now;
    for (let i = 0; i < 2; i++) {
      const t = now + i * 0.42;
      const o = this.osc('square', 165);
      const lp = this.filter('lowpass', pos ? 700 : 450, 1);
      const g = this.gain(0);
      o.connect(lp); lp.connect(g);
      g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(pos ? 0.35 : 0.22, t + 0.02);
      g.gain.setValueAtTime(pos ? 0.35 : 0.22, t + 0.26); g.gain.linearRampToValueAtTime(0.0001, t + 0.3);
      this.out(g, { pos, rev: 0.05, ref: 1 });
      o.start(t); o.stop(t + 0.32);
    }
  }
  ding() {
    this.tone({ f: 1318, d: 0.25, peak: 0.08, rev: 0.05 });
    this.tone({ f: 1975, d: 0.4, peak: 0.06, t: 0.09, rev: 0.05 });
  }
  send() { this.tone({ f: 880, f2: 1500, d: 0.12, peak: 0.06, rev: 0 }); }
  owl(pos) {
    const hoot = (t, d, f) => this.tone({ pos, f, f2: f * 0.94, a: 0.05, d, peak: 0.18, t, rev: 0.8, ref: 6, lp: 900 });
    hoot(0, 0.5, 420); hoot(0.9, 0.18, 400); hoot(1.25, 0.9, 410);
  }
  crow(pos) { for (let i = 0; i < 2; i++) this.burst({ pos, f: 1100, q: 4, d: 0.22, peak: 0.12, t: i * 0.35, rev: 0.7, ref: 6 }); }
  heavyStep(pos, k = 1) {
    this.tone({ pos, f: 70, d: 0.15, peak: 0.6 * k, lp: 180, rev: 0.4 });
    this.burst({ pos, type: 'lowpass', f: 400, d: 0.12, peak: 0.3 * k, rev: 0.3 });
    if (R() < 0.35) this.creak(pos, 0.5 * k, 0.6);
  }
  floodlight(pos) {
    this.burst({ pos, type: 'highpass', f: 1500, d: 0.03, peak: 0.8 });
    this.tone({ pos, f: 100, d: 1.2, peak: 0.08, lp: 400 });
  }

  // ---------- Stinger / Jumpscare ----------
  sting(kind = 'hard') {
    if (!this.ready || this.mute1) return;
    const now = this.now;
    if (kind === 'hard') {
      const fs = [116.5, 123.5, 174.6, 185, 246.9, 261.6, 349.2, 370];
      for (const f of fs) {
        const o = this.osc('sawtooth', f * rand(0.995, 1.005));
        o.frequency.linearRampToValueAtTime(f * 0.97, now + 2);
        const lp = this.filter('lowpass', 3000, 1);
        lp.frequency.exponentialRampToValueAtTime(400, now + 2.2);
        const g = this.gain(0);
        o.connect(lp); lp.connect(g);
        g.gain.setValueAtTime(0.0001, now); g.gain.linearRampToValueAtTime(0.11, now + 0.015);
        g.gain.exponentialRampToValueAtTime(0.0001, now + 2.4);
        this.out(g, { rev: 0.6 });
        o.start(now); o.stop(now + 2.5);
      }
      this.burst({ type: 'highpass', f: 1500, d: 0.6, peak: 0.6, rev: 0.6 });
      this.tone({ f: 48, f2: 28, d: 1.6, peak: 1.0, lp: 200, rev: 0.4 });
    } else if (kind === 'soft') {
      // anschwellendes Rauschen + tiefer Ton
      const s = this.noiseSrc(this.pink, false);
      const bp = this.filter('bandpass', 400, 2);
      bp.frequency.exponentialRampToValueAtTime(2400, now + 1.6);
      const g = this.gain(0);
      s.connect(bp); bp.connect(g);
      g.gain.setValueAtTime(0.0001, now); g.gain.exponentialRampToValueAtTime(0.5, now + 1.4); g.gain.linearRampToValueAtTime(0.0001, now + 1.7);
      this.out(g, { rev: 0.7 });
      s.start(now); s.stop(now + 1.8);
      this.tone({ f: 55, d: 2.5, a: 0.8, peak: 0.4, lp: 200, rev: 0.4 });
      this.tone({ f: 58.3, d: 2.5, a: 0.8, peak: 0.3, lp: 200, rev: 0.4 });
    } else if (kind === 'reveal') {
      for (const f of [220, 233, 311]) this.tone({ type: 'triangle', f, a: 1.2, d: 3.5, peak: 0.07, rev: 0.8 });
      this.tone({ f: 41, a: 1, d: 4, peak: 0.5, lp: 150, rev: 0.3 });
    }
  }

  // ---------- Schrei (einmal offline gerendert = immer exakt gleich, wie eine Aufnahme) ----------
  async renderScream() {
    const sr = 44100, dur = 3.3;
    const oc = new OfflineAudioContext(1, Math.floor(sr * dur), sr);
    const wb = oc.createBuffer(1, sr * dur, sr);
    const wd = wb.getChannelData(0);
    for (let i = 0; i < wd.length; i++) wd[i] = Math.random() * 2 - 1;

    const osc = oc.createOscillator(); osc.type = 'sawtooth';
    const f = osc.frequency;
    const pts = [[0, 560], [0.12, 700], [0.3, 770], [0.45, 700], [0.72, 640], [0.95, 700], [1.15, 880], [1.35, 950], [1.75, 1040], [2.2, 1000], [2.6, 930], [3.0, 760]];
    f.setValueAtTime(pts[0][1], 0);
    for (const [t, v] of pts.slice(1)) f.linearRampToValueAtTime(v, t);
    const vib = oc.createOscillator(); vib.frequency.value = 5.6;
    const vg = oc.createGain(); vg.gain.value = 0; vg.gain.linearRampToValueAtTime(10, 1.2); vg.gain.linearRampToValueAtTime(34, 2.2);
    vib.connect(vg); vg.connect(f);
    const jit = oc.createBufferSource(); jit.buffer = wb;
    const jl = oc.createBiquadFilter(); jl.type = 'lowpass'; jl.frequency.value = 25;
    const jg = oc.createGain(); jg.gain.value = 60;
    jit.connect(jl); jl.connect(jg); jg.connect(f);

    const amp = oc.createGain(); amp.gain.value = 0;
    const A = amp.gain;
    const env = [[0.04, 0], [0.08, 0.85], [0.28, 0.8], [0.33, 0.02], [0.43, 0.02], [0.47, 0.9], [0.68, 0.65], [0.74, 0],
      [0.98, 0], [1.03, 1.0], [1.27, 0.95], [1.3, 0.05], [1.37, 0.05], [1.42, 1.0], [2.4, 0.9], [2.9, 0.4], [3.15, 0]];
    for (const [t, v] of env) A.linearRampToValueAtTime(v, t);

    // Atem/Rauheit
    const breath = oc.createBufferSource(); breath.buffer = wb;
    const bg = oc.createGain(); bg.gain.value = 0.12;
    breath.connect(bg);

    const src = oc.createGain();
    osc.connect(src); bg.connect(src);
    src.connect(amp);

    // Formanten (i -> e -> ä)
    const forms = [[0, [820, 2400, 3100]], [0.4, [860, 2050, 2900]], [0.95, [840, 2450, 3100]], [1.38, [880, 2100, 2950]], [1.9, [1000, 1750, 2900]], [3.0, [950, 1650, 2800]]];
    const gains = [1.0, 0.55, 0.3];
    const sum = oc.createGain();
    for (let k = 0; k < 3; k++) {
      const bp = oc.createBiquadFilter(); bp.type = 'bandpass'; bp.Q.value = [6, 9, 10][k];
      bp.frequency.setValueAtTime(forms[0][1][k], 0);
      for (const [t, fr] of forms.slice(1)) bp.frequency.linearRampToValueAtTime(fr[k], t);
      const g = oc.createGain(); g.gain.value = gains[k] * 3;
      amp.connect(bp); bp.connect(g); g.connect(sum);
    }
    const body = oc.createBiquadFilter(); body.type = 'lowpass'; body.frequency.value = 1300;
    const bodyG = oc.createGain(); bodyG.gain.value = 0.25;
    amp.connect(body); body.connect(bodyG); bodyG.connect(sum);

    // Frikative: h, f, h, f
    const fric = oc.createBufferSource(); fric.buffer = wb;
    const fh = oc.createBiquadFilter(); fh.type = 'highpass'; fh.frequency.value = 1700;
    const fG = oc.createGain(); fG.gain.value = 0;
    const fe = [[0.0, 0], [0.02, 0.15], [0.06, 0], [0.31, 0], [0.34, 0.5], [0.44, 0.4], [0.47, 0], [0.94, 0], [0.97, 0.2], [1.02, 0], [1.29, 0], [1.31, 0.55], [1.4, 0.45], [1.43, 0]];
    for (const [t, v] of fe) fG.gain.linearRampToValueAtTime(v, t);
    fric.connect(fh); fh.connect(fG); fG.connect(sum);

    const shaper = oc.createWaveShaper();
    const curve = new Float32Array(1024);
    for (let i = 0; i < 1024; i++) { const x = i / 512 - 1; curve[i] = Math.tanh(x * 2.2); }
    shaper.curve = curve;
    sum.connect(shaper); shaper.connect(oc.destination);

    osc.start(0); vib.start(0); jit.start(0); breath.start(0, 1); fric.start(0, 2);
    const buf = await oc.startRendering();
    const d = buf.getChannelData(0);
    let mx = 0; for (let i = 0; i < d.length; i++) mx = Math.max(mx, Math.abs(d[i]));
    for (let i = 0; i < d.length; i++) d[i] /= (mx || 1);
    this.screamBuf = buf;
    for (const [pos, mode, k, t] of this._pendingScream || []) if (this.now - t < 2) this.scream(pos, mode, k);
    this._pendingScream = null;
  }

  scream(pos, mode = 'distant', k = 1) {
    if (!this.ready || this.mute1) return;
    if (!this.screamBuf) { (this._pendingScream = this._pendingScream || []).push([pos, mode, k, this.now]); return; }
    const now = this.now;
    const s = this.ctx.createBufferSource(); s.buffer = this.screamBuf;
    if (mode === 'distant') {
      const lp = this.filter('lowpass', 2600, 0.7);
      const hp = this.filter('highpass', 250, 0.7);
      const g = this.gain(0.9 * k);
      s.connect(hp); hp.connect(lp); lp.connect(g);
      this.out(g, { pos, ref: 14, roll: 1.0, rev: 1.4 });
    } else {
      // aus einem kleinen Lautsprecher, nah und laut
      const hp = this.filter('highpass', 380, 0.8);
      const pk = this.filter('peaking', 2400, 1, 7);
      const sh = this.ctx.createWaveShaper();
      const c = new Float32Array(512); for (let i = 0; i < 512; i++) { const x = i / 256 - 1; c[i] = Math.tanh(x * 4) * 0.9; }
      sh.curve = c;
      const g = this.gain(1.5 * k);
      s.connect(hp); hp.connect(pk); pk.connect(sh); sh.connect(g);
      this.out(g, { pos, ref: 1.5, rev: 0.6 });
    }
    s.start(now);
  }

  // ---------- Loops ----------
  loop(name, build, level = 1) {
    if (!this.ready) return null;
    if (this.loops[name]) return this.loops[name];
    const g = this.gain(0);
    const nodes = build(g);
    g.gain.setTargetAtTime(level, this.now, 0.5);
    const L = { g, nodes, level, set: (v, tc = 0.8) => { L.level = v; g.gain.setTargetAtTime(v, this.now, tc); } };
    this.loops[name] = L;
    return L;
  }
  stopLoop(name, fade = 0.5) {
    const L = this.loops[name]; if (!L) return;
    L.g.gain.setTargetAtTime(0, this.now, fade / 3);
    setTimeout(() => { for (const n of L.nodes || []) { try { n.stop(); } catch (e) { /* schon gestoppt */ } } try { L.g.disconnect(); } catch (e) { /* */ } }, fade * 1000 + 300);
    delete this.loops[name];
  }
  setLoop(name, v, tc) { const L = this.loops[name]; if (L) L.set(v, tc); }

  startAmbience() {
    // Wind
    this.loop('wind', (g) => {
      const s = this.noiseSrc(this.brown, true);
      const lp = this.filter('lowpass', 380, 0.5);
      const lfo = this.osc('sine', 0.07); const lg = this.gain(150); lfo.connect(lg); lg.connect(lp.frequency);
      const am = this.gain(0.6); const lfo2 = this.osc('sine', 0.11); const lg2 = this.gain(0.35); lfo2.connect(lg2); lg2.connect(am.gain);
      s.connect(lp); lp.connect(am); am.connect(g);
      g.connect(this.amb);
      // Blätterrauschen in Böen
      const s2 = this.noiseSrc(this.pink, true);
      const hp = this.filter('bandpass', 3200, 0.6);
      const am2 = this.gain(0.0); const lfo3 = this.osc('sine', 0.09); const lg3 = this.gain(0.06); lfo3.connect(lg3); lg3.connect(am2.gain);
      s2.connect(hp); hp.connect(am2); am2.connect(g);
      s.start(); lfo.start(); lfo2.start(); s2.start(); lfo3.start();
      return [s, lfo, lfo2, s2, lfo3];
    }, 0);
    // tiefer Drone
    this.loop('drone', (g) => {
      const o1 = this.osc('sine', 46.2), o2 = this.osc('sine', 49.1), o3 = this.osc('triangle', 92.5);
      const g3 = this.gain(0.15);
      const lp = this.filter('lowpass', 220, 0.5);
      o1.connect(lp); o2.connect(lp); o3.connect(g3); g3.connect(lp);
      const lfo = this.osc('sine', 0.05); const lg = this.gain(0.3); lfo.connect(lg);
      const am = this.gain(0.5); lg.connect(am.gain);
      lp.connect(am); am.connect(g); g.connect(this.amb);
      [o1, o2, o3, lfo].forEach((o) => o.start());
      return [o1, o2, o3, lfo];
    }, 0);
  }

  // Stadt / Verkehr in der Ferne
  traffic(on) {
    if (on) this.loop('traffic', (g) => {
      const s = this.noiseSrc(this.brown, true);
      const lp = this.filter('lowpass', 160, 0.5);
      s.connect(lp); lp.connect(g); g.connect(this.amb); s.start(); return [s];
    }, 0.25);
    else this.stopLoop('traffic', 2);
  }

  // Lüftung/"Mikrowellen"-Summen an einer Position
  hum(name, pos, level = 1, muffled = false) {
    return this.loop(name, (g) => {
      const o1 = this.osc('sawtooth', 50), o2 = this.osc('sine', 100), o3 = this.osc('square', 150), o4 = this.osc('sine', 1870);
      const l1 = this.filter('lowpass', 420, 0.7); o1.connect(l1);
      const g1 = this.gain(0.32), g2 = this.gain(0.35), g3 = this.gain(0.05), g4 = this.gain(0.012);
      l1.connect(g1); o2.connect(g2);
      const l3 = this.filter('lowpass', 700, 0.7); o3.connect(l3); l3.connect(g3);
      o4.connect(g4);
      const w = this.osc('sine', 0.3); const wg = this.gain(6); w.connect(wg); wg.connect(o4.frequency);
      // Lüfterrauschen + Rattern
      const n = this.noiseSrc(this.pink, true);
      const bp = this.filter('bandpass', 650, 0.7);
      const rat = this.gain(0.5);
      const rl = this.osc('sine', 23); const rg = this.gain(0.28); rl.connect(rg); rg.connect(rat.gain);
      n.connect(bp); bp.connect(rat);
      // Vibration: Schwebung zweier tiefer Töne + mechanisches Brummen mit schneller Amplitudenmodulation
      const b1 = this.osc('sine', 98), b2 = this.osc('sine', 101.5); const gb = this.gain(0.22); b1.connect(gb); b2.connect(gb);
      const buzz = this.osc('square', 120); const bzf = this.filter('bandpass', 360, 3); const bzg = this.gain(0.0);
      const trem = this.osc('sine', 31); const tg = this.gain(0.09); trem.connect(tg); tg.connect(bzg.gain);
      const wob = this.osc("sine", 0.43); const wbg = this.gain(9); wob.connect(wbg); wbg.connect(trem.frequency);
      buzz.connect(bzf); bzf.connect(bzg);
      const mix = this.gain(1);
      [g1, g2, g3, g4, rat, gb, bzg].forEach((x) => x.connect(mix));
      this._humExtra = [b1, b2, buzz, trem, wob];
      let outN = mix;
      if (muffled) { const m = this.filter('lowpass', 500, 0.7); mix.connect(m); outN = m; }
      outN.connect(g);
      const p = this.panner(pos, muffled ? 2.5 : 1.6, 1.3);
      g.connect(p); p.connect(this.amb);
      const rv = this.gain(0.25); p.connect(rv); rv.connect(this.revRoomIn);
      const srcs = [o1, o2, o3, o4, w, n, rl, ...this._humExtra];
      srcs.forEach((o) => o.start());
      this.loops[name + '_osc'] = { oscs: [o1, o2, o3, o4, this._humExtra[0], this._humExtra[1], this._humExtra[2]], noise: n };
      return srcs;
    }, level);
  }
  humWindDown(name, secs = 3.5) {
    const O = this.loops[name + '_osc']; const L = this.loops[name];
    if (!O || !L) return;
    const t = this.now;
    for (const o of O.oscs) o.frequency.exponentialRampToValueAtTime(Math.max(5, o.frequency.value * 0.12), t + secs);
    O.noise.playbackRate.exponentialRampToValueAtTime(0.1, t + secs);
    L.g.gain.setTargetAtTime(0, t + secs * 0.4, secs * 0.3);
    setTimeout(() => this.stopLoop(name, 0.2), secs * 1000 + 600);
    delete this.loops[name + '_osc'];
  }

  tubeBuzz(pos) {
    return this.loop('tube', (g) => {
      const o = this.osc('sawtooth', 100), o2 = this.osc('square', 200);
      const bp = this.filter('bandpass', 2400, 2);
      const lp = this.filter('lowpass', 500, 0.7);
      const g1 = this.gain(0.05), g2 = this.gain(0.025);
      o.connect(lp); lp.connect(g1); o2.connect(bp); bp.connect(g2);
      g1.connect(g); g2.connect(g);
      const p = this.panner(pos, 1.2, 1.5); g.connect(p); p.connect(this.amb);
      o.start(); o2.start(); return [o, o2];
    }, 1);
  }

  stream(pos) {
    return this.loop('stream', (g) => {
      const s = this.noiseSrc(this.pink, true);
      const bp = this.filter('bandpass', 900, 0.8);
      const lfo = this.osc('sine', 3.3); const lg = this.gain(500); lfo.connect(lg); lg.connect(bp.frequency);
      const s2 = this.noiseSrc(this.white, true, 0.7);
      const bp2 = this.filter('bandpass', 2600, 3);
      const am = this.gain(0); const l2 = this.osc('square', 7.1); const l2g = this.gain(0.15); l2.connect(l2g); l2g.connect(am.gain);
      s.connect(bp); bp.connect(g); s2.connect(bp2); bp2.connect(am); am.connect(g);
      const p = this.panner(pos, 3, 1.3); g.connect(p); p.connect(this.amb);
      [s, lfo, s2, l2].forEach((o) => o.start()); return [s, lfo, s2, l2];
    }, 0.6);
  }

  snore(pos) {
    return this.loop('snore', (g) => {
      const s = this.noiseSrc(this.brown, true);
      const bp = this.filter('bandpass', 180, 2);
      const o = this.osc('sawtooth', 62); const og = this.gain(0.0);
      const lp = this.filter('lowpass', 300, 1);
      o.connect(lp); lp.connect(og);
      const am = this.gain(0); const lfo = this.osc('sine', 0.22); const lg = this.gain(0.6); lfo.connect(lg); lg.connect(am.gain); lg.connect(og.gain);
      s.connect(bp); bp.connect(am); am.connect(g); og.connect(g);
      const p = this.panner(pos, 1.5, 1.5); g.connect(p); p.connect(this.amb);
      [s, o, lfo].forEach((x) => x.start()); return [s, o, lfo];
    }, 0.7);
  }

  heartbeat(on, rate = 1.2) {
    if (!this.ready) return;
    clearInterval(this._hb);
    if (!on) return;
    const beat = () => {
      this.tone({ f: 58, f2: 40, d: 0.14, peak: 0.55, lp: 160, rev: 0.05 });
      this.tone({ f: 52, f2: 38, d: 0.16, peak: 0.4, lp: 160, t: 0.22, rev: 0.05 });
    };
    beat();
    this._hb = setInterval(() => { if (!G.paused) beat(); }, 1000 / rate);
  }

  breath(k = 1) {
    this.burst({ f: 1100, q: 0.7, a: 0.12, d: 0.35, peak: 0.08 * k, rev: 0.05, buf: this.pink });
    this.burst({ f: 800, q: 0.7, a: 0.08, d: 0.3, peak: 0.06 * k, t: 0.5, rev: 0.05, buf: this.pink });
  }

  branchFall(pos, groundPos) {
    for (let i = 0; i < 9; i++) this.burst({ pos, type: 'highpass', f: 2200, d: 0.012, peak: 0.9 * (1 - i / 12), t: i * i * 0.006, rev: 0.6, ref: 4 });
    this.creak(pos, 1.0, 0.5);
    this.burst({ pos, f: 1800, q: 0.5, d: 0.6, peak: 0.5, t: 0.25, ref: 4 });
    this.tone({ pos: groundPos, f: 55, f2: 32, d: 0.5, peak: 1.2, lp: 200, rev: 0.5, t: 0.55, ref: 3 });
    this.burst({ pos: groundPos, type: 'lowpass', f: 400, d: 0.35, peak: 0.8, t: 0.55, rev: 0.4, ref: 3 });
    this.burst({ pos: groundPos, f: 1500, q: 0.6, d: 0.6, peak: 0.8, t: 0.56, rev: 0.6, ref: 3 });
    for (let i = 0; i < 10; i++) this.burst({ pos: groundPos, type: 'highpass', f: 3000, d: 0.01, peak: 0.4 * R(), t: 0.56 + R() * 0.4, ref: 3 });
  }
}
