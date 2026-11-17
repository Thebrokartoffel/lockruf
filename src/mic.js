// Optionales Mikrofon. Standardmäßig aus.
// Datenschutz: Es wird nichts aufgenommen, gespeichert oder übertragen. Der Mikrofonstrom geht nur in einen
// lokalen AnalyserNode (nicht an die Lautsprecher, nicht in einen Recorder). Pro Frame wird daraus ein einzelner
// Pegelwert 0..1 berechnet; nur dieser Wert beeinflusst das Spiel (Vater/Mann hören laute Geräusche).
import { G } from './state.js';

export class Mic {
  constructor() {
    this.on = false; this.level = 0; this.status = 'aus'; this.floorDb = -62;
  }
  get available() { return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia); }

  async enable() {
    if (this.on) return true;
    if (!this.available) { this.status = 'nicht verfügbar'; return false; }
    G.audio.init();
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: false, autoGainControl: false }, video: false });
    } catch (e) {
      this.status = (e && e.name === 'NotAllowedError') ? 'Zugriff verweigert' : 'nicht verfügbar';
      this.on = false; return false;
    }
    const ctx = G.audio.ctx;
    this.src = ctx.createMediaStreamSource(this.stream);
    this.an = ctx.createAnalyser(); this.an.fftSize = 1024; this.an.smoothingTimeConstant = 0.1;
    this.src.connect(this.an);                 // bewusst NICHT mit ctx.destination verbunden
    this.buf = new Float32Array(this.an.fftSize);
    this.on = true; this.status = 'an'; this.level = 0; this.floorDb = -62;
    return true;
  }

  disable() {
    if (this.stream) for (const t of this.stream.getTracks()) t.stop();
    try { if (this.src) this.src.disconnect(); } catch (e) { /* */ }
    this.stream = null; this.src = null; this.an = null; this.buf = null;
    this.on = false; this.level = 0; this.status = 'aus';
  }

  // einmal pro Frame: Pegel aus RMS, mit langsam mitlaufendem Grundrauschen
  sample(dt) {
    if (!this.on || !this.an) { this.level = 0; return 0; }
    this.an.getFloatTimeDomainData(this.buf);
    let sum = 0; for (let i = 0; i < this.buf.length; i++) sum += this.buf[i] * this.buf[i];
    const rms = Math.sqrt(sum / this.buf.length);
    const db = 20 * Math.log10(rms + 1e-7);
    // Grundrauschen: fällt schnell, steigt langsam (Raumrauschen wird nicht als "laut" gewertet)
    this.floorDb = db < this.floorDb ? this.floorDb + (db - this.floorDb) * Math.min(1, dt * 2) : this.floorDb + (db - this.floorDb) * Math.min(1, dt * 0.05);
    const raw = Math.max(0, Math.min(1, (db - Math.max(this.floorDb, -70) - 8) / 32));
    this.level += (raw - this.level) * Math.min(1, dt * (raw > this.level ? 20 : 4));
    return this.level;
  }
}
