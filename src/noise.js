// Geräuschsystem: Schritte, Sprünge, knarzende Dielen, Gegenstände und (optional) das Mikrofon erzeugen Lärm.
// Zuhörer (der Vater) bekommen jedes Geräusch mit Position und Stärke und reagieren darauf.
import * as THREE from 'three';
import { G } from './state.js';

const STEP = { walk: 0.085, sprint: 0.26, crouch: 0.018, crawl: 0.015 };
const SURF = { woodfloor: 1.0, stairs: 1.15, tile: 1.1, carpet: 0.45, rug: 0.45, concrete: 0.8, asphalt: 0.7, sidewalk: 0.7, gravel: 1.0, leaves: 0.9, wood: 1.0, metal: 1.3 };

export class Noise {
  constructor() {
    this.level = 0;          // angezeigter Pegel 0..1
    this.listeners = [];
    this.creaks = [];        // knarzende Stellen {x,z,r,y,k,last}
    this.listening = false;  // HUD-Anzeige an (jemand hört zu)
    this.lastSrc = '';
  }
  reset() { this.listeners = []; this.creaks = []; this.listening = false; this.level = 0; }
  listen(fn) { this.listeners.push(fn); return fn; }
  addCreak(x, z, r, y, k = 1) { this.creaks.push({ x, z, r, y, k, last: -9 }); }

  add(amount, pos, src = '') {
    if (amount <= 0) return;
    this.level = Math.min(1, Math.max(this.level, amount * 1.6));
    this.lastSrc = src;
    const p = pos ? (pos.clone ? pos.clone() : new THREE.Vector3(pos.x, pos.y, pos.z)) : G.player.p.clone();
    for (const l of this.listeners) l(amount, p, src);
  }

  step(surf, kind, pos) {
    let a = (STEP[kind] || 0.08) * (SURF[surf] ?? 0.9);
    // knarzende Diele/Stufe unter dem Fuß?
    for (const c of this.creaks) {
      if (Math.abs(pos.y - c.y) > 0.6) continue;
      if (Math.hypot(pos.x - c.x, pos.z - c.z) > c.r) continue;
      if (G.time - c.last < 0.6) continue;
      c.last = G.time;
      const k = kind === 'sprint' ? 1.4 : kind === 'walk' ? 0.9 : 0.35;
      G.audio.creak(new THREE.Vector3(pos.x, pos.y + 0.05, pos.z), 0.55 * k * c.k, kind === 'sprint' ? 0.45 : 0.75);
      a += 0.2 * k * c.k;
      this.lastCreak = G.time;
    }
    this.add(a, pos, kind === 'sprint' ? 'Rennen' : 'Schritte');
  }

  update(dt) {
    // Mikrofon speist kontinuierlich ein (nur lokale Pegelanalyse, keine Aufnahme)
    // G.micLvl wird pro Simulationsschritt gesetzt (live vom Analyser oder beim Rückspulen aus der Aufzeichnung)
    const ml = G.micLvl || 0;
    if (ml > 0.15) this.add((ml - 0.15) * dt * 3.2, G.player.p, 'Mikrofon');
    this.level = Math.max(0, this.level - dt * 0.9);
  }
}
