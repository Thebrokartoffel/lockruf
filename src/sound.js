// Sample-Ebene für die Audio-Engine: geladene Geräusche (Kenney CC0, GGBot CC0, DHSFX, Dylan Seibert – siehe ASSETS_LICENSES.md),
// Atmosphären-Betten je Ort, adaptive Musik nach Spannung, seltene Zufallsgeräusche (im Schnitt etwa fünfmal in 15 Minuten).
// Die prozeduralen Geräusche bleiben als Rückfall, falls etwas fehlt.
import { AudioEngine } from './audio.js';
import { Assets } from './assets.js';
import { G } from './state.js';

const P = AudioEngine.prototype;
const rnd = (a, b) => a + Math.random() * (b - a);   // nur Klang, beeinflusst die Simulation nicht

P.decodeSamples = async function () {
  if (this._decoding) return this._decoding;
  this.buffers = {};
  this._decoding = Promise.all(Assets.soundNames().map(async (n) => {
    try { this.buffers[n] = await this.ctx.decodeAudioData(Assets.sound(n).slice(0)); } catch (e) { console.warn('Audio nicht lesbar:', n); }
  })).then(() => { this.samplesReady = true; });
  return this._decoding;
};
P.buf = function (name) { return this.buffers && this.buffers[name] || null; };
// zufällig aus einer Liste, nicht zweimal dasselbe hintereinander
P.pickOf = function (list, key = list.join()) {
  const ok = list.filter((n) => this.buf(n));
  if (!ok.length) return null;
  this._last = this._last || {};
  let n = ok[(Math.random() * ok.length) | 0];
  if (ok.length > 1 && n === this._last[key]) n = ok[(ok.indexOf(n) + 1) % ok.length];
  this._last[key] = n; return n;
};
P.sample = function (name, { pos = null, vol = 1, rate = 1, rev = 0.25, ref = 2, roll = 1.2, t = 0, bus = null, loop = false } = {}) {
  if (!this.ready || this.mute1) return null;
  const b = this.buf(name); if (!b) return null;
  const s = this.ctx.createBufferSource(); s.buffer = b; s.playbackRate.value = rate; s.loop = loop;
  const g = this.gain(vol); s.connect(g);
  this.out(g, { pos, ref, roll, rev, bus });
  s.start(this.now + t);
  return { s, g };
};
// geloopte Datei als Schleife (Lautstärke über setLoop)
P.bed = function (name, file, level = 0, bus = null) {
  if (!this.buf(file)) return null;
  return this.loop(name, (g) => {
    const s = this.ctx.createBufferSource(); s.buffer = this.buf(file); s.loop = true;
    s.loopStart = 0.03; s.loopEnd = s.buffer.duration - 0.03;
    s.connect(g); g.connect(bus || this.amb); s.start(this.now, rnd(0, s.buffer.duration * 0.8));
    return [s];
  }, level);
};

// --- bestehende Geräusche mit echten Aufnahmen anreichern ---
const wrap = (name, fn) => { const orig = P[name]; P[name] = function (...a) { if (this.samplesReady && fn.apply(this, [orig, ...a]) !== false) return; return orig.apply(this, a); }; };

const STEP = { wood: 'wood', woodfloor: 'wood', stairs: 'wood', carpet: 'carpet', concrete: 'concrete', tile: 'concrete', asphalt: 'concrete', sidewalk: 'concrete' };
wrap('footstep', function (orig, surface, k = 1, pos = null, kind = 'walk') {
  const set = STEP[surface];
  if (!set || kind === 'crawl') return false;
  const v = k * (pos ? 1.25 : 0.5) * (kind === 'crouch' ? 0.45 : kind === 'sprint' ? 1.25 : 0.85);
  const n = this.pickOf([0, 1, 2, 3, 4].map((i) => `step_${set}_${i}`), 'step' + set);
  this.sample(n, { pos, vol: v, rate: rnd(0.9, 1.08), rev: set === 'concrete' && !pos ? 0.08 : 0.25 });
  if (surface === 'stairs' && Math.random() < 0.25) this.sample(this.pickOf(['k_creak1', 'k_creak2', 'k_creak3']), { pos, vol: 0.25 * k, rate: rnd(0.8, 1.1) });
});
wrap('sting', function (orig, kind = 'hard') {
  if (kind === 'hard') {
    orig.call(this, kind);
    this.sample(this.pickOf(['scare_inhuman', 'scare_glitch', 'strike_piano', 'dh_gong_hit'], 'hard'), { vol: 0.75, rev: 0.15 });
  } else {
    this.sample(this.pickOf(['dh_low_bell', 'dh_very_low_bell', 'dh_mid_bells_cluster', 'strike_chorus', 'dh_tamtam_scrape', 'dh_low_piano_octave'], 'soft'), { vol: 0.6, rev: 0.2 });
  }
});
wrap('doorOpen', function (orig, pos) { this.sample(this.pickOf(['k_doorOpen_1', 'k_doorOpen_2']), { pos, vol: 0.7 }); });
wrap('doorCreak', function (orig, pos) { orig.call(this, pos); this.sample(this.pickOf(['k_creak1', 'k_creak2', 'k_creak3']), { pos, vol: 0.55, rate: rnd(0.8, 0.95) }); });
wrap('slam', function (orig, pos, k = 1) { this.sample(this.pickOf(['k_doorClose_1', 'k_doorClose_2', 'k_doorClose_3', 'k_doorClose_4']), { pos, vol: 0.9 * k, rate: rnd(0.9, 1.0) }); this.sample('k_impactWood_heavy_000', { pos, vol: 0.35 * k }); });
wrap('keys', function (orig, pos) { this.sample(this.pickOf(['k_handleCoins', 'k_handleCoins2']), { pos, vol: 0.6, rate: rnd(1.05, 1.25) }); });
wrap('padlock', function (orig, pos) { this.sample(this.pickOf(['k_handleCoins', 'k_handleCoins2']), { pos, vol: 0.5, rate: 1.2 }); this.sample('k_metalLatch', { pos, vol: 0.7, t: 0.45 }); this.sample('k_metalClick', { pos, vol: 0.6, t: 0.7 }); });
wrap('metalClang', function (orig, pos, k = 1) { this.sample(this.pickOf(['k_impactMetal_medium_000', 'k_impactMetal_light_002']), { pos, vol: 0.8 * k }); });
wrap('zip', function () { this.sample('k_beltHandle1', { vol: 0.5 }); });
wrap('pickup', function () { this.sample(this.pickOf(['k_cloth1', 'k_cloth2', 'k_cloth3']), { vol: 0.45 }); });
wrap('heartbeat', function (orig, on, rate = 1.2) {
  clearInterval(this._hb);
  if (!on) { this.setLoop('heartbeatS', 0, 0.8); return; }
  const L = this.loops.heartbeatS || this.bed('heartbeatS', 'heartbeat', 0, this.sfx);
  if (!L) return false;
  L.set(0.9, 0.3);
  L.nodes[0].playbackRate.setTargetAtTime(Math.min(1.6, Math.max(0.8, rate / 1.2)), this.now, 0.4);
});

// --- Autos ---
P.car = function (what, pos, vol = 1) {
  const f = { door: 'car_door_close', open: 'car_door_open', start: 'car_engine_start_up', off: 'car_engine_turning_off', horn: 'car_horn', trunk: 'car_trunk_open' }[what];
  return this.sample(f, { pos, vol, ref: 3, rev: 0.25 });
};
P.engine = function (name, pos, on, level = 0.6) {
  if (!on) { this.stopLoop(name, 1.5); return; }
  if (this.loops[name] || !this.buf('car_engine_loop')) return;
  this.loop(name, (g) => {
    const s = this.ctx.createBufferSource(); s.buffer = this.buf('car_engine_loop'); s.loop = true;
    const p = this.panner(pos, 4, 1.1); s.connect(g); g.connect(p); p.connect(this.sfx); s.start();
    return [s];
  }, level);
};

// --- Betten, Musik und Spannung: wird aus updateEnv aufgerufen ---
const BEDS = { forest: 'amb_field_night', street: 'amb_city', room: 'amb_abandoned', cellar: 'amb_machine' };
P.updateBeds = function (env, dt, place) {
  if (!this.samplesReady) return;
  for (const [k, f] of Object.entries(BEDS)) if (!this.loops['bed_' + k]) this.bed('bed_' + k, f, 0);
  if (!this.loops.musTension) this.bed('musTension', 'drone_strings', 0, this.sfx);
  if (!this.loops.musDread) this.bed('musDread', 'drone_piano', 0, this.sfx);
  // Zuhause: kein Waldbett, nur leises Raumrauschen; Hütte: verlassen; Keller: Maschinenbrummen
  const want = { forest: 0, street: 0, room: 0, cellar: 0 };
  if (place === 'home') want.room = 0.05;
  else if (env === 'room') want.room = 0.16;
  else if (env === 'cellar') want.cellar = 0.22;
  else if (env === 'street') { want.street = 0.2; want.forest = 0.04; }
  else want.forest = 0.17;
  for (const k of Object.keys(want)) this.setLoop('bed_' + k, want[k] * (this.duck || 1), 2.5);
  // Spannung 0..1 (Story setzt G.tension), weich nachgeführt
  const t = G.tension || 0;
  this._ten = (this._ten || 0) + (t - (this._ten || 0)) * Math.min(1, dt * 0.35);
  const tt = this._ten;
  this.setLoop('musDread', Math.max(0, Math.min(0.22, (tt - 0.15) * 0.35)), 2);
  this.setLoop('musTension', Math.max(0, Math.min(0.3, (tt - 0.55) * 0.75)), 1.5);
};
P.titleMusic = function (on) {
  if (!this.samplesReady) return;
  if (on) { if (!this.loops.title) this.bed('title', 'music_title', 0.0, this.sfx); this.setLoop('title', 0.32, 2); }
  else this.setLoop('title', 0, 1.2);
};

// --- seltene Zufallsgeräusche: im Schnitt alle 3 Minuten eines, nie zweimal dasselbe hintereinander ---
P.rare = function (dt, place, p, fwd) {
  if (!this.samplesReady) return;
  if (this._rareT === undefined) this._rareT = rnd(70, 140);
  this._rareT -= dt; if (this._rareT > 0) return;
  this._rareT = rnd(130, 240);
  const at = (back, side, up) => ({ x: p.x - fwd.x * back + fwd.z * side, y: p.y + up, z: p.z - fwd.z * back - fwd.x * side });
  const pools = {
    street: ['dh_very_low_bell', 'dh_toy_glockenspiel_tune_2', 'car_horn', 'car_door_close', 'dh_tuba_low_dissonance'],
    forest: ['dh_very_low_growling', 'dh_low_quick_beating', 'dh_very_low_bell', 'dh_tamtam_scrape', 'dh_pitched_down_marimba_chord', 'dh_low_dissonant_growling'],
    room: ['dh_toy_glockenspiel_tune_1', 'dh_very_high_dissonant_bells', 'k_creak2'],
  };
  const pool = pools[place] || pools.forest;
  const n = this.pickOf(pool, 'rare_' + place);
  if (!n) return;
  const side = Math.random() < 0.5 ? -1 : 1;
  const far = n.startsWith('car') ? 40 : n.includes('bell') ? 120 : 30;
  this.sample(n, { pos: at(rnd(10, 25), side * rnd(10, far), n.includes('bell') ? 25 : 1), vol: n.startsWith('car') ? 0.6 : 0.45, ref: 8, roll: 0.9, rev: 0.6 });
  this.lastRare = n;
};

// --- Stimmen: Babbeln ohne Aufnahmen (Formant-Synthese), je Figur eigene Tonlage, Tempo und Hauch ---
const VOICES = {
  Mara: { f0: 168, rate: 4.4, breath: 0.32, form: 0.95 },     // tief, langsam, rau
  Nessa: { f0: 250, rate: 7.4, breath: 0.1, form: 1.12 },     // hell, schnell
  Mama: { f0: 205, rate: 5.0, breath: 0.22, form: 1.05 },
  Papa: { f0: 102, rate: 4.0, breath: 0.25, form: 0.86 },
  Deniz: { f0: 128, rate: 6.4, breath: 0.15, form: 0.92 },
  Leon: { f0: 120, rate: 5.6, breath: 0.12, form: 0.92 },
  phone: { f0: 215, rate: 3.2, breath: 0.6, form: 1.0, tel: true },
};
const VOW = [[800, 1200], [400, 2000], [300, 2300], [500, 900], [350, 800], [600, 1700], [700, 1100]];
P.babble = function ({ pos = null, dur = 1.5, voice = 'Leon', vol = 0.5 } = {}) {
  if (!this.ready || this.mute1) return;
  const v = VOICES[voice] || VOICES.Leon, ctx = this.ctx, t0 = this.now + 0.02;
  const src = ctx.createOscillator(); src.type = 'sawtooth'; src.frequency.value = v.f0;
  const nz = this.noiseSrc(this.pink, true); const ng = this.gain(v.breath);
  const mix = this.gain(0.6); src.connect(mix); nz.connect(ng); ng.connect(mix);
  const f1 = this.filter('bandpass', 700, 5), f2 = this.filter('bandpass', 1300, 7), out = this.gain(0.0001);
  mix.connect(f1); mix.connect(f2); f1.connect(out); f2.connect(out);
  let tail = out;
  if (v.tel) { const hp = this.filter('highpass', 380, 0.7), lp = this.filter('lowpass', 3000, 0.7); out.connect(hp); hp.connect(lp); tail = lp; }
  const n = Math.max(1, Math.floor(dur * v.rate));
  for (let i = 0; i < n; i++) {
    const t = t0 + i / v.rate + rnd(-0.02, 0.02), w = VOW[(Math.random() * VOW.length) | 0];
    f1.frequency.setTargetAtTime(w[0] * v.form, t, 0.02); f2.frequency.setTargetAtTime(w[1] * v.form, t, 0.025);
    src.frequency.setTargetAtTime(v.f0 * rnd(0.88, 1.15) * (i === n - 1 ? 0.85 : 1), t, 0.03);
    out.gain.setTargetAtTime(vol * rnd(0.55, 1), t, 0.012);
    out.gain.setTargetAtTime(0.0001, t + (0.55 + Math.random() * 0.25) / v.rate, 0.02);
  }
  this.out(tail, { pos, rev: 0.22, ref: 2.5 });
  src.start(t0); nz.start(t0); src.stop(t0 + dur + 0.4); nz.stop(t0 + dur + 0.4);
};
// geloopte Datei an einem festen Ort (Radio, Störgeräusch im Telefon)
P.posLoop = function (name, file, pos, level = 0.3) {
  if (!this.buf(file) || this.loops[name]) return this.loops[name];
  return this.loop(name, (g) => {
    const s = this.ctx.createBufferSource(); s.buffer = this.buf(file); s.loop = true;
    const bp = this.filter('bandpass', 1400, 0.8);
    const p = this.panner(pos, 1.5, 1.4);
    s.connect(bp); bp.connect(g); g.connect(p); p.connect(this.sfx); s.start(this.now, rnd(0, 10));
    return [s];
  }, level);
};
