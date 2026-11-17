// Spielzeit-Timer und deterministischer Zufall.
// Alles, was den Spielablauf beeinflusst, läuft über G.time statt über setTimeout. Dadurch pausiert es mit dem
// Spiel, lässt sich beschleunigen/verlangsamen und beim Rückspulen exakt wiederholen.
import { G } from './state.js';

G.timers = [];

export function after(sec, fn) {
  const t = { t: G.time + sec, fn };
  G.timers.push(t);
  return t;
}
export function cancel(t) { const i = G.timers.indexOf(t); if (i >= 0) G.timers.splice(i, 1); }

// Promise, das nach sec Sekunden Spielzeit auflöst (im Menü/Titelbild: echte Zeit)
export function gwait(sec) {
  if (!G.started) return new Promise((r) => setTimeout(r, sec * 1000));
  return new Promise((r) => after(sec, r));
}

export function updateTimers() {
  if (!G.timers.length) return 0;
  let n = 0;
  // stabil in Reihenfolge des Anlegens
  for (let i = 0; i < G.timers.length; i++) {
    const t = G.timers[i];
    if (G.time >= t.t) { G.timers.splice(i, 1); i--; n++; try { t.fn(); } catch (e) { console.error(e); } }
  }
  return n;
}

// mulberry32 – schneller, reproduzierbarer Zufall für spielrelevante Dinge
let seed = 1;
export function setSeed(s) { seed = s >>> 0; }
export function getSeed() { return seed; }
export function rand() {
  seed = (seed + 0x6D2B79F5) >>> 0;
  let t = seed;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}
G.rand = rand;
