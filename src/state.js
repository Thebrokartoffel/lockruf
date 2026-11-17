// Globaler Spielzustand
export const G = {
  scene: null,
  camera: null,
  renderer: null,
  world: null,
  player: null,
  audio: null,
  ui: null,
  story: null,
  post: null,
  time: 0,
  dt: 0,
  paused: true,
  started: false,
  flags: {},
  inv: new Set(),
  objects: {},   // benannte Szenenobjekte (Türen, Luke, Mann ...)
  settings: {
    sens: 1.0,
    scale: 0.75,
    grain: 1.0,
    volume: 0.9,
    fov: 70,
    bright: 1.0,
    invertY: false,
    keys: null,
  },
  phone: {
    battery: 31,
    charging: false,
    network: true,
    time: '01:43',
    dropped: false,
    mapUnlocked: false,
  },
};

export const isTouchDevice = () => {
  if (/[?&]touch\b/.test(location.search)) return true;
  if (/[?&]desktop\b/.test(location.search)) return false;
  try { return matchMedia('(pointer: coarse)').matches && navigator.maxTouchPoints > 0; } catch (e) { return false; }
};
export function loadSettings() {
  let saved = null;
  try { saved = localStorage.getItem('lockruf_settings'); } catch (e) { /* egal */ }
  try {
    const s = JSON.parse(saved || '{}');
    Object.assign(G.settings, s);
    if (s.v !== 2) { G.settings.v = 2; G.settings.keys = null; }
  } catch (e) { /* egal */ }
  // erster Start am Handy: sparsame Grafik, etwas empfindlichere Kamera
  if (!saved && isTouchDevice()) Object.assign(G.settings, { scale: 0.6, quality: 'low', grain: 0.7, sens: 1.2 });
}
export function saveSettings() {
  try { localStorage.setItem('lockruf_settings', JSON.stringify(G.settings)); } catch (e) { /* egal */ }
}
export function saveProgress(ch) {
  try {
    const cur = +(localStorage.getItem('lockruf_progress') || 0);
    if (ch > cur) localStorage.setItem('lockruf_progress', String(ch));
    localStorage.setItem('lockruf_last', String(ch));
  } catch (e) { /* egal */ }
}
export function loadProgress() {
  try { return { max: +(localStorage.getItem('lockruf_progress') || 0), last: +(localStorage.getItem('lockruf_last') || 0) }; } catch (e) { return { max: 0, last: 0 }; }
}
