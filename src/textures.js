// Prozedurale Texturen (Canvas). Alles wird beim Start generiert, keine externen Dateien.
import * as THREE from 'three';
import { rng, makeNoise, fbm, clamp } from './util.js';

const cache = {};
const N = makeNoise(7);
const N2 = makeNoise(31);

function canvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return c;
}

export function toTex(c, { repeat = [1, 1], srgb = true, wrap = true } = {}) {
  const t = new THREE.CanvasTexture(c);
  if (wrap) { t.wrapS = t.wrapT = THREE.RepeatWrapping; }
  t.repeat.set(repeat[0], repeat[1]);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  t.needsUpdate = true;
  return t;
}

function pixels(c, fn) {
  const ctx = c.getContext('2d');
  const img = ctx.createImageData(c.width, c.height);
  const d = img.data;
  let i = 0;
  for (let y = 0; y < c.height; y++) {
    for (let x = 0; x < c.width; x++) {
      const p = fn(x, y);
      d[i++] = clamp(p[0], 0, 255); d[i++] = clamp(p[1], 0, 255); d[i++] = clamp(p[2], 0, 255);
      d[i++] = p[3] === undefined ? 255 : p[3];
    }
  }
  ctx.putImageData(img, 0, 0);
  return ctx;
}

// zeichnet eine Funktion an x,y und an den gewrappten Positionen (für kachelbare Texturen)
function wrapDraw(c, x, y, r, fn) {
  const w = c.width, h = c.height;
  for (const ox of [0, -w, w]) for (const oy of [0, -h, h]) {
    const xx = x + ox, yy = y + oy;
    if (xx + r < 0 || xx - r > w || yy + r < 0 || yy - r > h) continue;
    fn(xx, yy);
  }
}

function leafPath(ctx, l, w) {
  ctx.beginPath();
  ctx.moveTo(-l, 0);
  ctx.quadraticCurveTo(0, -w, l, 0);
  ctx.quadraticCurveTo(0, w, -l, 0);
  ctx.closePath();
}

const AUTUMN = [
  [92, 58, 32], [120, 74, 38], [138, 88, 40], [105, 66, 36], [74, 48, 30], [150, 98, 46],
  [96, 52, 28], [128, 64, 30], [82, 70, 40], [60, 44, 30], [112, 90, 52], [140, 70, 34],
];

function rgb(c, k = 1) { return `rgb(${(c[0] * k) | 0},${(c[1] * k) | 0},${(c[2] * k) | 0})`; }

// ---------------- Boden: Laub ----------------
export function leavesTex() {
  if (cache.leaves) return cache.leaves;
  const c = canvas(1024, 1024);
  const ctx = pixels(c, (x, y) => {
    const n = fbm(N, x / 64, y / 64, 5, 16);
    const v = 28 + n * 40;
    return [v * 1.15, v * 0.85, v * 0.6];
  });
  const r = rng(11);
  // Zweige
  ctx.lineCap = 'round';
  for (let i = 0; i < 160; i++) {
    const x = r() * 1024, y = r() * 1024, a = r() * Math.PI * 2, l = 20 + r() * 60;
    wrapDraw(c, x, y, l, (xx, yy) => {
      ctx.strokeStyle = `rgba(${40 + r() * 20},${30 + r() * 12},${20},0.9)`;
      ctx.lineWidth = 1 + r() * 2.5;
      ctx.beginPath(); ctx.moveTo(xx, yy); ctx.lineTo(xx + Math.cos(a) * l, yy + Math.sin(a) * l); ctx.stroke();
    });
  }
  // Blätter in Schichten
  for (let layer = 0; layer < 3; layer++) {
    const count = [2600, 2200, 1500][layer];
    for (let i = 0; i < count; i++) {
      const x = r() * 1024, y = r() * 1024;
      const l = 7 + r() * 13, w = l * (0.35 + r() * 0.3);
      const col = AUTUMN[(r() * AUTUMN.length) | 0];
      const k = (0.55 + r() * 0.55) * (0.75 + layer * 0.15);
      const a = r() * Math.PI * 2;
      wrapDraw(c, x, y, l, (xx, yy) => {
        ctx.save(); ctx.translate(xx, yy); ctx.rotate(a);
        // Schatten
        ctx.fillStyle = 'rgba(10,6,4,0.35)';
        ctx.save(); ctx.translate(2, 2); leafPath(ctx, l, w); ctx.fill(); ctx.restore();
        ctx.fillStyle = rgb(col, k); leafPath(ctx, l, w); ctx.fill();
        ctx.strokeStyle = rgb(col, k * 0.6); ctx.lineWidth = 0.8;
        ctx.beginPath(); ctx.moveTo(-l, 0); ctx.lineTo(l, 0); ctx.stroke();
        ctx.restore();
      });
    }
  }
  return (cache.leaves = toTex(c));
}

// ---------------- Waldweg (Schotter/Erde) ----------------
export function gravelTex() {
  if (cache.gravel) return cache.gravel;
  const c = canvas(512, 512);
  const ctx = pixels(c, (x, y) => {
    const n = fbm(N2, x / 40, y / 40, 4, 12.8);
    const v = 52 + n * 40;
    return [v * 1.05, v * 0.95, v * 0.8];
  });
  const r = rng(5);
  for (let i = 0; i < 2200; i++) {
    const x = r() * 512, y = r() * 512, s = 1 + r() * 3.5;
    const g = 60 + r() * 70;
    wrapDraw(c, x, y, s, (xx, yy) => {
      ctx.fillStyle = `rgb(${g + 6},${g},${g - 8})`;
      ctx.beginPath(); ctx.ellipse(xx, yy, s, s * (0.6 + r() * 0.4), r() * 3, 0, 7); ctx.fill();
      ctx.fillStyle = 'rgba(0,0,0,0.3)';
      ctx.beginPath(); ctx.ellipse(xx + 1, yy + 1, s, s * 0.6, 0, 0, 3.2); ctx.fill();
    });
  }
  for (let i = 0; i < 220; i++) {
    const x = r() * 512, y = r() * 512, l = 5 + r() * 7;
    const col = AUTUMN[(r() * AUTUMN.length) | 0];
    wrapDraw(c, x, y, l, (xx, yy) => {
      ctx.save(); ctx.translate(xx, yy); ctx.rotate(r() * 7);
      ctx.fillStyle = rgb(col, 0.7); leafPath(ctx, l, l * 0.45); ctx.fill(); ctx.restore();
    });
  }
  return (cache.gravel = toTex(c));
}

// ---------------- Rinde ----------------
export function barkTex(kind = 'oak') {
  const key = 'bark_' + kind;
  if (cache[key]) return cache[key];
  const c = canvas(256, 512);
  const nn = makeNoise(kind === 'pine' ? 77 : kind === 'beech' ? 55 : 13);
  pixels(c, (x, y) => {
    if (kind === 'beech') {
      const n = fbm(nn, x / 24, y / 24, 4, 10.67);
      const mark = Math.abs(nn(x / 30, y / 6, 8.53) - 0.5) < 0.04 ? 0.6 : 1;
      const v = (52 + n * 30) * mark;
      return [v * 0.95, v * 0.97, v * 0.93];
    }
    if (kind === 'pine') {
      const plate = fbm(nn, x / 24, y / 40, 3, 10.67);
      const crack = Math.abs(nn(x / 18, y / 30, 14.2) - 0.5) < 0.06 ? 0.4 : 1;
      const v = (60 + plate * 60) * crack;
      return [v * 1.2, v * 0.82, v * 0.62];
    }
    // Eiche: vertikale Furchen
    const warp = fbm(nn, x / 30, y / 90, 3, 8.53) * 3.2;
    const ridge = Math.pow(Math.abs(Math.sin((x / 256) * Math.PI * 12 + warp)), 0.5);
    const n = fbm(nn, x / 14, y / 26, 4, 18.29);
    const v = 22 + ridge * 22 + n * 34;
    return [v * 1.0, v * 0.92, v * 0.82];
  });
  return (cache[key] = toTex(c));
}

// ---------------- Holzbretter ----------------
export function planksTex(kind = 'old') {
  const key = 'planks_' + kind;
  if (cache[key]) return cache[key];
  const c = canvas(512, 512);
  const r = rng(kind === 'old' ? 3 : kind === 'floor' ? 9 : 21);
  const boards = 8;
  const bh = 512 / boards;
  const tones = [];
  for (let i = 0; i < boards; i++) tones.push(0.75 + r() * 0.4);
  const ctx = pixels(c, (x, y) => {
    const b = Math.floor(y / bh);
    const yy = y - b * bh;
    const grain = Math.sin((y * 0.9 + fbm(N, x / 60, y / 8 + b * 3, 3, 8.53) * 30) * 0.8) * 0.5 + 0.5;
    const n = fbm(N2, x / 30, y / 30, 3, 17.07);
    let base;
    if (kind === 'old') base = [92, 82, 70];
    else if (kind === 'floor') base = [118, 82, 52];
    else base = [120, 90, 62];
    const t = tones[b] * (0.82 + grain * 0.18) * (0.85 + n * 0.3);
    let gap = yy < 3 || yy > bh - 2 ? 0.35 : 1;
    return [base[0] * t * gap, base[1] * t * gap, base[2] * t * gap];
  });
  // Nägel und Flecken
  for (let i = 0; i < boards; i++) {
    for (const xx of [20, 492]) {
      ctx.fillStyle = 'rgba(30,25,22,0.9)';
      ctx.beginPath(); ctx.arc(xx, i * bh + bh * 0.3, 2.5, 0, 7); ctx.fill();
      ctx.beginPath(); ctx.arc(xx, i * bh + bh * 0.7, 2.5, 0, 7); ctx.fill();
    }
  }
  if (kind === 'old') {
    for (let i = 0; i < 30; i++) {
      ctx.fillStyle = `rgba(20,24,18,${0.1 + r() * 0.2})`;
      ctx.beginPath(); ctx.ellipse(r() * 512, r() * 512, 10 + r() * 40, 6 + r() * 20, r() * 3, 0, 7); ctx.fill();
    }
  }
  return (cache[key] = toTex(c));
}

// ---------------- Beton ----------------
export function concreteTex() {
  if (cache.concrete) return cache.concrete;
  const c = canvas(512, 512);
  const ctx = pixels(c, (x, y) => {
    const n = fbm(N, x / 50, y / 50, 5, 10.24);
    const s = fbm(N2, x / 120, y / 200, 3, 4.27);
    const v = 70 + n * 45 - Math.max(0, s - 0.55) * 120;
    return [v * 0.98, v, v * 0.98];
  });
  const r = rng(8);
  ctx.strokeStyle = 'rgba(25,25,25,0.6)'; ctx.lineWidth = 1;
  for (let i = 0; i < 6; i++) {
    let x = r() * 512, y = r() * 512;
    ctx.beginPath(); ctx.moveTo(x, y);
    for (let k = 0; k < 12; k++) { x += (r() - 0.5) * 30; y += r() * 18; ctx.lineTo(x, y); }
    ctx.stroke();
  }
  // Wasserflecken
  for (let i = 0; i < 8; i++) {
    const x = r() * 512, y = r() * 512, w = 10 + r() * 30, l = 200 + r() * 250;
    for (const oy of [0, -512]) {
      const g = ctx.createLinearGradient(0, y + oy, 0, y + oy + l);
      g.addColorStop(0, 'rgba(20,22,20,0.22)'); g.addColorStop(1, 'rgba(20,22,20,0)');
      ctx.fillStyle = g; ctx.fillRect(x, y + oy, w, l);
    }
  }
  return (cache.concrete = toTex(c));
}

// ---------------- Backstein ----------------
export function brickTex() {
  if (cache.brick) return cache.brick;
  const c = canvas(512, 512);
  const r = rng(4);
  const bw = 64, bh = 32;
  const tone = {};
  pixels(c, (x, y) => {
    const row = Math.floor(y / bh);
    const off = row % 2 ? bw / 2 : 0;
    const col = Math.floor((x + off) / bw);
    const key = row * 100 + (col % 8);
    if (tone[key] === undefined) tone[key] = 0.7 + r() * 0.45;
    const lx = (x + off) % bw, ly = y % bh;
    const mortar = lx < 3 || ly < 3;
    const n = fbm(N, x / 16, y / 16, 3, 32);
    const dirt = fbm(N2, x / 100, y / 140, 3, 5.12);
    if (mortar) { const v = 58 + n * 24; return [v, v * 0.97, v * 0.92]; }
    const t = tone[key] * (0.8 + n * 0.35) * (1 - Math.max(0, dirt - 0.5) * 0.9);
    return [120 * t, 58 * t, 42 * t];
  });
  return (cache.brick = toTex(c));
}

// ---------------- Asphalt / Gehweg ----------------
export function asphaltTex() {
  if (cache.asphalt) return cache.asphalt;
  const c = canvas(512, 512);
  const r = rng(12);
  const ctx = pixels(c, (x, y) => {
    const n = fbm(N2, x / 8, y / 8, 3, 64);
    const v = 30 + n * 22 + (r() < 0.02 ? 30 : 0);
    return [v, v, v * 1.03];
  });
  ctx.strokeStyle = 'rgba(12,12,12,0.7)'; ctx.lineWidth = 1.5;
  for (let i = 0; i < 4; i++) {
    let x = r() * 512, y = r() * 512; ctx.beginPath(); ctx.moveTo(x, y);
    for (let k = 0; k < 10; k++) { x += (r() - 0.5) * 40; y += (r() - 0.5) * 40; ctx.lineTo(x, y); }
    ctx.stroke();
  }
  return (cache.asphalt = toTex(c));
}

export function sidewalkTex() {
  if (cache.sidewalk) return cache.sidewalk;
  const c = canvas(256, 256);
  const r = rng(2);
  pixels(c, (x, y) => {
    const tile = (x % 128 < 2) || (y % 128 < 2);
    const n = fbm(N, x / 10, y / 10, 3, 25.6);
    const tt = ((Math.floor(x / 128) * 7 + Math.floor(y / 128) * 13) % 5) * 4;
    const v = tile ? 35 : 62 + n * 20 + tt;
    return [v, v, v * 0.98];
  });
  return (cache.sidewalk = toTex(c));
}

export function mulchTex() {
  if (cache.mulch) return cache.mulch;
  const c = canvas(512, 512);
  const ctx = pixels(c, (x, y) => {
    const v = 35 + fbm(N, x / 20, y / 20, 3, 25.6) * 30;
    return [v * 1.2, v * 0.9, v * 0.65];
  });
  const r = rng(19);
  for (let i = 0; i < 4200; i++) {
    const x = r() * 512, y = r() * 512, l = 1.5 + r() * 4;
    const k = 0.45 + r() * 0.6;
    wrapDraw(c, x, y, l, (xx, yy) => {
      ctx.save(); ctx.translate(xx, yy); ctx.rotate(r() * 7);
      ctx.fillStyle = `rgb(${(72 * k) | 0},${(54 * k) | 0},${(40 * k) | 0})`;
      ctx.fillRect(-l, -1, l * 2, 2); ctx.restore();
    });
  }
  return (cache.mulch = toTex(c));
}

export function sandTex() {
  if (cache.sand) return cache.sand;
  const c = canvas(256, 256);
  pixels(c, (x, y) => {
    const v = 78 + fbm(N2, x / 6, y / 6, 3, 42.67) * 30;
    return [v * 1.05, v * 0.95, v * 0.75];
  });
  return (cache.sand = toTex(c));
}

// ---------------- Innenraum ----------------
export function wallpaperTex() {
  if (cache.wallpaper) return cache.wallpaper;
  const c = canvas(256, 256);
  const ctx = pixels(c, (x, y) => {
    const n = fbm(N, x / 20, y / 20, 3, 12.8);
    const v = 150 + n * 20;
    return [v * 0.96, v * 0.95, v * 0.9];
  });
  ctx.strokeStyle = 'rgba(120,115,100,0.25)';
  for (let x = 0; x < 256; x += 32) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, 256); ctx.stroke(); }
  return (cache.wallpaper = toTex(c));
}

export function plasterTex(tint = [150, 140, 125]) {
  const key = 'plaster' + tint.join();
  if (cache[key]) return cache[key];
  const c = canvas(256, 256);
  pixels(c, (x, y) => {
    const n = fbm(N2, x / 30, y / 30, 4, 8.53);
    const k = 0.8 + n * 0.3;
    return [tint[0] * k, tint[1] * k, tint[2] * k];
  });
  return (cache[key] = toTex(c));
}

// ---------------- Karten (Alpha) ----------------
export function leafCardTex(kind = 'oak') {
  const key = 'card_' + kind;
  if (cache[key]) return cache[key];
  const c = canvas(256, 256);
  const ctx = c.getContext('2d');
  const r = rng(kind.length * 17 + 3);
  ctx.lineCap = 'round';
  // Zweige
  const branches = [];
  for (let i = 0; i < 9; i++) {
    const a = r() * Math.PI * 2;
    const l = 50 + r() * 70;
    branches.push([128 + Math.cos(a) * l, 128 + Math.sin(a) * l]);
    ctx.strokeStyle = 'rgb(36,28,22)'; ctx.lineWidth = 1.5 + r() * 2;
    ctx.beginPath(); ctx.moveTo(128, 128);
    ctx.quadraticCurveTo(128 + Math.cos(a + 0.3) * l * 0.5, 128 + Math.sin(a + 0.3) * l * 0.5, branches[i][0], branches[i][1]);
    ctx.stroke();
  }
  let pal = AUTUMN;
  if (kind === 'beech') pal = [[150, 92, 40], [168, 104, 46], [130, 76, 34], [180, 120, 56], [120, 70, 32]];
  if (kind === 'bush') pal = [[70, 62, 34], [90, 70, 38], [60, 56, 30], [104, 76, 40], [50, 48, 28]];
  if (kind === 'hedge') pal = [[34, 52, 30], [40, 60, 34], [28, 44, 26], [46, 66, 38]];
  const count = kind === 'bush' ? 260 : kind === 'hedge' ? 420 : 340;
  for (let i = 0; i < count; i++) {
    const b = branches[(r() * branches.length) | 0];
    const t = r();
    const x = 128 + (b[0] - 128) * t + (r() - 0.5) * 40;
    const y = 128 + (b[1] - 128) * t + (r() - 0.5) * 40;
    if (Math.hypot(x - 128, y - 128) > 122) continue;
    const l = 5 + r() * 7;
    const col = pal[(r() * pal.length) | 0];
    const k = 0.6 + r() * 0.6;
    ctx.save(); ctx.translate(x, y); ctx.rotate(r() * 7);
    ctx.fillStyle = rgb(col, k); leafPath(ctx, l, l * 0.5); ctx.fill();
    ctx.restore();
  }
  return (cache[key] = toTex(c, { wrap: false }));
}

export function pineCardTex() {
  if (cache.pinecard) return cache.pinecard;
  const c = canvas(256, 256);
  const ctx = c.getContext('2d');
  const r = rng(99);
  ctx.lineCap = 'round';
  for (let i = 0; i < 14; i++) {
    const a = r() * Math.PI * 2, l = 40 + r() * 80;
    const ex = 128 + Math.cos(a) * l, ey = 128 + Math.sin(a) * l;
    ctx.strokeStyle = 'rgb(40,30,22)'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(128, 128); ctx.lineTo(ex, ey); ctx.stroke();
    for (let k = 0; k < 60; k++) {
      const t = r();
      const x = 128 + (ex - 128) * t, y = 128 + (ey - 128) * t;
      const na = a + (r() - 0.5) * 2.4, nl = 6 + r() * 10;
      const g = 34 + r() * 30;
      ctx.strokeStyle = `rgb(${g * 0.6},${g},${g * 0.55})`; ctx.lineWidth = 1.2;
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + Math.cos(na) * nl, y + Math.sin(na) * nl); ctx.stroke();
    }
  }
  return (cache.pinecard = toTex(c, { wrap: false }));
}

export function fernTex() {
  if (cache.fern) return cache.fern;
  const c = canvas(256, 256);
  const ctx = c.getContext('2d');
  const r = rng(41);
  for (let f = 0; f < 7; f++) {
    const a = -Math.PI / 2 + (f - 3) * 0.32 + (r() - 0.5) * 0.2;
    const L = 150 + r() * 80;
    const col = [110 + r() * 40, 70 + r() * 20, 36];
    for (let s = 0; s < 1; s += 0.04) {
      const bend = s * s * 0.9 * (f < 3 ? -1 : 1);
      const x = 128 + Math.cos(a + bend) * L * s, y = 250 + Math.sin(a + bend) * L * s;
      const pl = (1 - s) * 22 + 4;
      ctx.strokeStyle = rgb(col, 0.7 + r() * 0.4); ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + Math.cos(a + bend + 1.4) * pl, y + Math.sin(a + bend + 1.4) * pl); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + Math.cos(a + bend - 1.4) * pl, y + Math.sin(a + bend - 1.4) * pl); ctx.stroke();
    }
  }
  return (cache.fern = toTex(c, { wrap: false }));
}

export function grassTex() {
  if (cache.grass) return cache.grass;
  const c = canvas(256, 128);
  const ctx = c.getContext('2d');
  const r = rng(61);
  for (let i = 0; i < 160; i++) {
    const x = r() * 256, h = 40 + r() * 80;
    const g = 60 + r() * 50;
    ctx.strokeStyle = `rgb(${g * 1.15},${g},${g * 0.55})`; ctx.lineWidth = 1 + r() * 1.5;
    ctx.beginPath(); ctx.moveTo(x, 128); ctx.quadraticCurveTo(x + (r() - 0.5) * 20, 128 - h * 0.5, x + (r() - 0.5) * 40, 128 - h); ctx.stroke();
  }
  return (cache.grass = toTex(c, { wrap: false }));
}

// Waldwand für die Grenzen (opak, fake Tiefe)
export function forestWallTex() {
  if (cache.fwall) return cache.fwall;
  const c = canvas(1024, 512);
  const ctx = c.getContext('2d');
  const g = ctx.createLinearGradient(0, 0, 0, 512);
  g.addColorStop(0, '#05060a'); g.addColorStop(0.6, '#0b0c10'); g.addColorStop(1, '#07070a');
  ctx.fillStyle = g; ctx.fillRect(0, 0, 1024, 512);
  const r = rng(71);
  const layers = [[18, 20, 26, 140], [12, 13, 17, 90], [6, 6, 8, 60]];
  for (const L of layers) {
    for (let i = 0; i < L[3]; i++) {
      const x = r() * 1024, w = 4 + r() * (L === layers[2] ? 30 : 16);
      ctx.fillStyle = `rgb(${L[0]},${L[1]},${L[2]})`;
      wrapDraw(c, x, 256, w, (xx) => ctx.fillRect(xx - w / 2, 0, w, 512));
    }
  }
  return (cache.fwall = toTex(c));
}

export function wireTex() {
  if (cache.wire) return cache.wire;
  const c = canvas(128, 128);
  const ctx = c.getContext('2d');
  ctx.strokeStyle = 'rgb(120,122,118)'; ctx.lineWidth = 2;
  for (let i = -128; i < 256; i += 32) {
    ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i + 128, 128); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(i + 128, 0); ctx.lineTo(i, 128); ctx.stroke();
  }
  return (cache.wire = toTex(c));
}

export function bauzaunTex() {
  if (cache.bauzaun) return cache.bauzaun;
  const c = canvas(256, 256);
  const ctx = c.getContext('2d');
  ctx.strokeStyle = 'rgb(150,152,150)'; ctx.lineWidth = 2;
  for (let i = 0; i <= 256; i += 16) {
    ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, 256); ctx.stroke();
  }
  for (let i = 0; i <= 256; i += 32) {
    ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(256, i); ctx.stroke();
  }
  ctx.lineWidth = 6; ctx.strokeRect(3, 3, 250, 250);
  return (cache.bauzaun = toTex(c, { wrap: false }));
}

export function tapeTex() {
  if (cache.tape) return cache.tape;
  const c = canvas(128, 16);
  const ctx = c.getContext('2d');
  for (let i = -16; i < 144; i += 16) {
    ctx.fillStyle = (i / 16) % 2 ? '#e8e8e2' : '#c41a12';
    ctx.beginPath(); ctx.moveTo(i, 16); ctx.lineTo(i + 8, 0); ctx.lineTo(i + 24, 0); ctx.lineTo(i + 16, 16); ctx.fill();
  }
  return (cache.tape = toTex(c));
}

export function stripesTex() {
  if (cache.stripes) return cache.stripes;
  const c = canvas(256, 64);
  const ctx = c.getContext('2d');
  for (let i = -64; i < 320; i += 64) {
    ctx.fillStyle = '#d01c14'; ctx.beginPath(); ctx.moveTo(i, 64); ctx.lineTo(i + 32, 0); ctx.lineTo(i + 64, 0); ctx.lineTo(i + 32, 64); ctx.fill();
    ctx.fillStyle = '#ecece6'; ctx.beginPath(); ctx.moveTo(i + 32, 64); ctx.lineTo(i + 64, 0); ctx.lineTo(i + 96, 0); ctx.lineTo(i + 64, 64); ctx.fill();
  }
  return (cache.stripes = toTex(c));
}

// ---------------- Text-Schilder etc. ----------------
export function signTex(lines, { w = 512, h = 256, bg = '#e9e4d6', fg = '#1d1d1d', border = '#1d1d1d', font = 'bold 48px Arial', align = 'center', worn = true } = {}) {
  const c = canvas(w, h);
  const ctx = c.getContext('2d');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  if (border) { ctx.strokeStyle = border; ctx.lineWidth = 10; ctx.strokeRect(8, 8, w - 16, h - 16); }
  ctx.fillStyle = fg; ctx.font = font; ctx.textAlign = align; ctx.textBaseline = 'middle';
  const lh = h / (lines.length + 1);
  lines.forEach((l, i) => {
    if (typeof l === 'object') { ctx.save(); ctx.font = l.font || font; ctx.fillStyle = l.color || fg; ctx.fillText(l.t, align === 'center' ? w / 2 : 30, lh * (i + 1)); ctx.restore(); }
    else ctx.fillText(l, align === 'center' ? w / 2 : 30, lh * (i + 1));
  });
  if (worn) {
    const r = rng(lines.join().length);
    for (let i = 0; i < 40; i++) {
      ctx.fillStyle = `rgba(60,50,30,${r() * 0.15})`;
      ctx.beginPath(); ctx.arc(r() * w, r() * h, 3 + r() * 25, 0, 7); ctx.fill();
    }
  }
  return toTex(c, { wrap: false });
}

export function facadeTex(variant = 0) {
  const key = 'facade' + variant;
  if (cache[key]) return cache[key];
  const c = canvas(512, 512);
  const tints = [[148, 132, 112], [128, 120, 116], [150, 126, 98], [110, 108, 104]];
  const t = tints[variant % tints.length];
  const ctx = pixels(c, (x, y) => {
    const n = fbm(N, x / 40, y / 40, 4, 12.8);
    const k = 0.75 + n * 0.3;
    return [t[0] * k, t[1] * k, t[2] * k];
  });
  const r = rng(variant + 40);
  // 3 Etagen x 3 Fenster
  for (let fy = 0; fy < 3; fy++) {
    // Gesims
    ctx.fillStyle = 'rgba(0,0,0,0.25)'; ctx.fillRect(0, fy * 170 + 160, 512, 6);
    for (let fx = 0; fx < 3; fx++) {
      const x = 50 + fx * 160, y = fy * 170 + 28;
      ctx.fillStyle = 'rgba(40,36,30,0.9)'; ctx.fillRect(x - 6, y - 6, 92, 128);
      const lit = r() < 0.12;
      ctx.fillStyle = lit ? '#6b4a22' : '#0d0f13';
      ctx.fillRect(x, y, 80, 116);
      if (lit) {
        const g = ctx.createRadialGradient(x + 40, y + 60, 5, x + 40, y + 60, 70);
        g.addColorStop(0, 'rgba(255,190,110,0.8)'); g.addColorStop(1, 'rgba(120,70,30,0.2)');
        ctx.fillStyle = g; ctx.fillRect(x, y, 80, 116);
      } else {
        ctx.fillStyle = 'rgba(80,90,110,0.12)'; ctx.fillRect(x + 4, y + 4, 30, 50);
      }
      ctx.fillStyle = 'rgb(200,196,186)'; ctx.fillRect(x + 38, y, 4, 116); ctx.fillRect(x, y + 50, 80, 4);
      // Rollladen halb
      if (!lit && r() < 0.5) { ctx.fillStyle = 'rgb(70,64,58)'; const hh = 30 + r() * 80; ctx.fillRect(x, y, 80, hh); for (let k = 0; k < hh; k += 6) { ctx.fillStyle = 'rgba(0,0,0,0.3)'; ctx.fillRect(x, y + k, 80, 1); } }
      ctx.fillStyle = 'rgb(170,166,156)'; ctx.fillRect(x - 8, y + 116, 96, 8);
    }
  }
  return (cache[key] = toTex(c, { wrap: false }));
}

export function shutterTex() {
  if (cache.shutter) return cache.shutter;
  const c = canvas(256, 256);
  const ctx = pixels(c, (x, y) => {
    const v = (y % 16 < 2 ? 45 : 95) + fbm(N, x / 20, y / 20, 3, 12.8) * 30;
    return [v, v * 0.98, v * 0.95];
  });
  ctx.fillStyle = 'rgba(30,30,30,0.8)'; ctx.font = 'bold 34px Arial'; ctx.save(); ctx.translate(60, 140); ctx.rotate(-0.15); ctx.fillText('GESCHLOSSEN', -20, 0); ctx.restore();
  return (cache.shutter = toTex(c));
}

export function roofTex() {
  if (cache.roof) return cache.roof;
  const c = canvas(256, 256);
  pixels(c, (x, y) => {
    const row = Math.floor(y / 16), off = row % 2 ? 8 : 0;
    const edge = (y % 16) < 2 || ((x + off) % 16) < 1;
    const v = (edge ? 22 : 48) + fbm(N2, x / 16, y / 16, 3, 16) * 26;
    return [v * 1.1, v * 0.7, v * 0.6];
  });
  return (cache.roof = toTex(c));
}

export function feltTex() {
  if (cache.felt) return cache.felt;
  const c = canvas(256, 256);
  pixels(c, (x, y) => {
    const v = 26 + fbm(N, x / 12, y / 12, 4, 21.33) * 24 + (y % 64 < 2 ? -10 : 0);
    return [v, v, v * 0.95];
  });
  return (cache.felt = toTex(c));
}

// Lichtkegel-Maske fürs Handy
export function cookieTex() {
  if (cache.cookie) return cache.cookie;
  const c = canvas(256, 256);
  pixels(c, (x, y) => {
    const d = Math.hypot(x - 128, y - 128) / 128;
    let v = Math.max(0, 1 - d * d) ** 0.7;
    v *= 0.94 + 0.06 * Math.cos(d * 22);
    v += Math.max(0, 1 - d * 2.6) * 0.3;
    const g = clamp(v * 255, 0, 255);
    return [g, g * 0.98, g * 0.94];
  });
  return (cache.cookie = toTex(c, { wrap: false, srgb: false }));
}

export function glowTex() {
  if (cache.glow) return cache.glow;
  const c = canvas(128, 128);
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.2, 'rgba(255,255,255,0.5)');
  g.addColorStop(0.5, 'rgba(255,255,255,0.12)'); g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g; ctx.fillRect(0, 0, 128, 128);
  return (cache.glow = toTex(c, { wrap: false }));
}

export function waterTex() {
  if (cache.water) return cache.water;
  const c = canvas(256, 256);
  pixels(c, (x, y) => {
    const n = fbm(N2, x / 18, y / 60, 4, 14.2);
    const v = 10 + n * 22;
    return [v * 0.8, v, v * 1.05];
  });
  return (cache.water = toTex(c));
}

// Polaroid, Karte, Zeitungsartikel
export function polaroidTex(seed) {
  const c = canvas(128, 152);
  const ctx = c.getContext('2d');
  const r = rng(seed);
  ctx.fillStyle = '#e8e4da'; ctx.fillRect(0, 0, 128, 152);
  const g = ctx.createRadialGradient(64, 70, 4, 64, 70, 80);
  g.addColorStop(0, '#5a5c55'); g.addColorStop(1, '#0a0b0a');
  ctx.fillStyle = g; ctx.fillRect(8, 8, 112, 112);
  for (let i = 0; i < 9; i++) { const x = 8 + r() * 112; ctx.fillStyle = `rgba(20,18,16,${0.6 + r() * 0.4})`; ctx.fillRect(x, 8, 3 + r() * 9, 112); }
  // Person von hinten
  const px = 40 + r() * 48, ps = 0.7 + r() * 0.5;
  ctx.fillStyle = '#0c0c0c';
  ctx.beginPath(); ctx.arc(px, 62 - 10 * ps, 7 * ps, 0, 7); ctx.fill();
  ctx.fillRect(px - 9 * ps, 62 - 4 * ps, 18 * ps, 30 * ps);
  ctx.fillRect(px - 7 * ps, 62 + 26 * ps, 6 * ps, 24 * ps); ctx.fillRect(px + 1 * ps, 62 + 26 * ps, 6 * ps, 24 * ps);
  ctx.fillStyle = 'rgba(255,255,255,0.08)'; ctx.fillRect(8, 8, 112, 112);
  ctx.fillStyle = '#2a2a6a'; ctx.font = '13px "Comic Sans MS", cursive';
  const days = ['14.09.', '02.10.', '17.10.', '21.10.', '26.10.', '29.10.', '30.10.'];
  ctx.fillText(days[seed % days.length], 12, 140);
  return toTex(c, { wrap: false });
}

export function mapTex() {
  if (cache.map) return cache.map;
  const c = canvas(512, 384);
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#c9c7b0'; ctx.fillRect(0, 0, 512, 384);
  const r = rng(3);
  for (let i = 0; i < 400; i++) { ctx.fillStyle = `rgba(80,110,70,${0.15 + r() * 0.2})`; ctx.beginPath(); ctx.arc(r() * 512, 60 + r() * 324, 4 + r() * 12, 0, 7); ctx.fill(); }
  ctx.fillStyle = '#e2dfd0'; ctx.fillRect(0, 0, 512, 60);
  ctx.strokeStyle = '#8a7a5a'; ctx.lineWidth = 3;
  const paths = [[[256, 60], [256, 384]], [[0, 200], [512, 230]], [[80, 60], [140, 384]], [[380, 60], [420, 384]], [[0, 300], [512, 320]]];
  for (const p of paths) { ctx.beginPath(); ctx.moveTo(...p[0]); ctx.lineTo(...p[1]); ctx.stroke(); }
  ctx.fillStyle = '#222'; ctx.font = 'bold 14px Arial';
  ctx.fillText('STADTWALD', 220, 30); ctx.font = '12px Arial';
  ctx.fillText('Goetheturm', 262, 76); ctx.fillText('Hügelschneise', 262, 150); ctx.fillText('Maunzenweiher', 300, 300);
  ctx.fillText('Sachsenhausen', 30, 40);
  ctx.strokeStyle = '#b01010'; ctx.lineWidth = 2;
  const marks = [[256, 72], [200, 180], [150, 230], [120, 260], [320, 250], [410, 120]];
  for (const m of marks) { ctx.beginPath(); ctx.arc(m[0], m[1], 9, 0, 7); ctx.stroke(); }
  ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(110, 275); ctx.lineTo(126, 291); ctx.moveTo(126, 275); ctx.lineTo(110, 291); ctx.stroke();
  ctx.setLineDash([4, 4]); ctx.beginPath(); ctx.moveTo(256, 160); ctx.quadraticCurveTo(180, 200, 118, 283); ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#b01010'; ctx.font = '13px "Comic Sans MS", cursive'; ctx.fillText('RUF 1', 196, 196); ctx.fillText('RUF 2', 140, 248); ctx.fillText('RUF 3', 330, 262);
  return (cache.map = toTex(c, { wrap: false }));
}

export function newspaperTex() {
  if (cache.news) return cache.news;
  const c = canvas(256, 320);
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#d8d2bf'; ctx.fillRect(0, 0, 256, 320);
  ctx.fillStyle = '#1a1a1a'; ctx.font = 'bold 22px Georgia'; ctx.fillText('Joggerin im', 14, 36); ctx.fillText('Stadtwald vermisst', 14, 62);
  ctx.font = '11px Georgia'; ctx.fillText('Frankfurt (dpa) – Seit Sonntag wird eine', 14, 84);
  ctx.fillText('34-jährige Frau aus Oberrad vermisst.', 14, 98);
  ctx.fillStyle = '#555'; ctx.fillRect(14, 110, 110, 120);
  ctx.fillStyle = '#1a1a1a';
  for (let y = 116; y < 300; y += 12) ctx.fillRect(132, y, 100 + Math.sin(y) * 12, 5);
  for (let y = 240; y < 300; y += 12) ctx.fillRect(14, y, 108, 5);
  return (cache.news = toTex(c, { wrap: false }));
}

export function monitorTex() {
  if (cache.monitor) return cache.monitor;
  const c = canvas(256, 160);
  const ctx = c.getContext('2d');
  const g = ctx.createLinearGradient(0, 0, 256, 160);
  g.addColorStop(0, '#0e2440'); g.addColorStop(1, '#06101e');
  ctx.fillStyle = g; ctx.fillRect(0, 0, 256, 160);
  ctx.fillStyle = 'rgba(255,255,255,0.08)'; ctx.fillRect(20, 20, 140, 90);
  ctx.fillStyle = 'rgba(255,255,255,0.15)'; ctx.fillRect(20, 20, 140, 10);
  ctx.fillStyle = 'rgba(0,0,0,0.6)'; ctx.fillRect(0, 148, 256, 12);
  ctx.fillStyle = '#fff'; ctx.font = '8px Arial'; ctx.fillText('01:43', 226, 157);
  return (cache.monitor = toTex(c, { wrap: false }));
}

export function posterTex() {
  if (cache.poster) return cache.poster;
  const c = canvas(256, 360);
  const ctx = c.getContext('2d');
  const g = ctx.createLinearGradient(0, 0, 0, 360);
  g.addColorStop(0, '#2a1c3c'); g.addColorStop(1, '#0c0a14');
  ctx.fillStyle = g; ctx.fillRect(0, 0, 256, 360);
  ctx.fillStyle = '#d24a2a'; ctx.beginPath(); ctx.arc(128, 150, 70, 0, 7); ctx.fill();
  ctx.fillStyle = '#0c0a14'; for (let i = 0; i < 6; i++) ctx.fillRect(0, 120 + i * 14, 256, 5);
  ctx.fillStyle = '#e8e0d0'; ctx.font = 'bold 30px Arial'; ctx.textAlign = 'center'; ctx.fillText('NIGHT DRIVE', 128, 290);
  ctx.font = '14px Arial'; ctx.fillText('TOUR 2025', 128, 315);
  return (cache.poster = toTex(c, { wrap: false }));
}

export function sackFaceTex() {
  if (cache.sack) return cache.sack;
  const c = canvas(256, 256);
  const ctx = pixels(c, (x, y) => {
    const weave = ((x % 6 < 3) ^ (y % 6 < 3)) ? 1 : 0.88;
    const v = (110 + fbm(N, x / 10, y / 10, 3, 25.6) * 40) * weave;
    return [v * 1.05, v * 0.9, v * 0.65];
  });
  ctx.fillStyle = '#120c08';
  ctx.beginPath(); ctx.ellipse(88, 110, 16, 20, 0.1, 0, 7); ctx.fill();
  ctx.beginPath(); ctx.ellipse(168, 108, 16, 22, -0.1, 0, 7); ctx.fill();
  ctx.strokeStyle = '#120c08'; ctx.lineWidth = 6;
  ctx.beginPath(); ctx.moveTo(80, 180); for (let x = 80; x <= 176; x += 12) ctx.lineTo(x, 180 + (x / 12 % 2 ? 8 : -6)); ctx.stroke();
  return (cache.sack = toTex(c, { wrap: false }));
}

export function hoodieTex(color) {
  const c = canvas(64, 64);
  pixels(c, (x, y) => {
    const n = fbm(N2, x / 6, y / 6, 3, 10.67);
    const k = 0.8 + n * 0.35;
    return [color[0] * k, color[1] * k, color[2] * k];
  });
  return toTex(c);
}

// ---------------- Alte, verwitterte Hütte ----------------
export function planksAncientTex() {
  if (cache.ancient) return cache.ancient;
  const c = canvas(512, 512);
  const r = rng(808);
  const boards = 8, bh = 512 / boards;
  const tones = []; for (let i = 0; i < boards; i++) tones.push(0.7 + r() * 0.45);
  const nm = makeNoise(909);
  const ctx = pixels(c, (x, y) => {
    const b = Math.floor(y / bh), yy = y - b * bh;
    const grain = Math.sin((y * 1.1 + fbm(N, x / 50, y / 6 + b * 5, 3, 10.24) * 40) * 0.7) * 0.5 + 0.5;
    const n = fbm(N2, x / 24, y / 24, 4, 21.33);
    const moss = Math.max(0, fbm(nm, x / 70, y / 70, 4, 7.31) - 0.52) * 3.2;
    const rot = 0;
    const t = tones[b] * (0.78 + grain * 0.22) * (0.8 + n * 0.35) * (1 - rot * 0.6);
    let base = [92, 80, 66];
    let col = [base[0] * t, base[1] * t, base[2] * t];
    col = [col[0] * (1 - moss) + 52 * moss, col[1] * (1 - moss) + 66 * moss, col[2] * (1 - moss) + 34 * moss];
    const gap = yy < 4 || yy > bh - 3 ? 0.18 : 1;
    // Risse
    const crack = Math.abs(nm(x / 9, y / 2.5 + b * 7, 0) - 0.5) < 0.012 ? 0.45 : 1;
    return [col[0] * gap * crack, col[1] * gap * crack, col[2] * gap * crack];
  });
  // Wasserlaufspuren
  for (let i = 0; i < 26; i++) {
    const x = r() * 512, w = 3 + r() * 10, l = 60 + r() * 260, y = r() * 512;
    for (const oy of [0, -512]) {
      const g = ctx.createLinearGradient(0, y + oy, 0, y + oy + l);
      g.addColorStop(0, 'rgba(18,16,12,0.35)'); g.addColorStop(1, 'rgba(18,16,12,0)');
      ctx.fillStyle = g; ctx.fillRect(x, y + oy, w, l);
    }
  }
  // rostige Nägel
  for (let i = 0; i < boards; i++) for (const xx of [24, 256, 488]) {
    ctx.fillStyle = 'rgba(90,40,18,0.9)'; ctx.beginPath(); ctx.arc(xx + r() * 6, i * bh + bh * 0.5, 2.8, 0, 7); ctx.fill();
    ctx.fillStyle = 'rgba(90,40,18,0.25)'; ctx.fillRect(xx, i * bh + bh * 0.5, 3, 18 + r() * 20);
  }
  // Astlöcher
  for (let i = 0; i < 9; i++) { ctx.fillStyle = 'rgba(22,16,10,0.85)'; ctx.beginPath(); ctx.ellipse(r() * 512, r() * 512, 4 + r() * 7, 3 + r() * 4, r(), 0, 7); ctx.fill(); }
  return (cache.ancient = toTex(c));
}

export function mossRoofTex() {
  if (cache.mossroof) return cache.mossroof;
  const c = canvas(512, 512);
  const nm = makeNoise(4242);
  pixels(c, (x, y) => {
    const base = 30 + fbm(N, x / 14, y / 14, 4, 36.57) * 26 + (y % 64 < 3 ? -12 : 0);
    const moss = Math.min(1, Math.max(0, fbm(nm, x / 60, y / 60, 5, 8.53) - 0.42) * 2.6);
    const tuft = fbm(N2, x / 4, y / 4, 2, 128) * 0.4 + 0.8;
    return [base * (1 - moss) + 48 * moss * tuft, base * (1 - moss) + 62 * moss * tuft, base * 0.95 * (1 - moss) + 30 * moss * tuft];
  });
  return (cache.mossroof = toTex(c));
}

export function cobwebTex() {
  if (cache.web) return cache.web;
  const c = canvas(256, 256);
  const ctx = c.getContext('2d');
  const r = rng(66);
  ctx.strokeStyle = 'rgba(220,220,215,0.55)'; ctx.lineWidth = 1;
  const spokes = 11;
  for (let i = 0; i < spokes; i++) { const a = (i / spokes) * Math.PI * 0.5; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(Math.cos(a) * 250, Math.sin(a) * 250); ctx.stroke(); }
  for (let k = 1; k < 12; k++) {
    ctx.beginPath();
    for (let i = 0; i <= spokes; i++) { const a = (Math.min(i, spokes - 1) / spokes) * Math.PI * 0.5; const rr = k * 20 + r() * 6; const x = Math.cos(a) * rr, y = Math.sin(a) * rr; if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
    ctx.stroke();
  }
  return (cache.web = toTex(c, { wrap: false }));
}

export function ivyTex() {
  if (cache.ivy) return cache.ivy;
  const c = canvas(256, 512);
  const ctx = c.getContext('2d');
  const r = rng(515);
  ctx.lineCap = 'round';
  for (let v = 0; v < 6; v++) {
    let x = 30 + r() * 196, y = 512;
    ctx.strokeStyle = 'rgb(46,34,22)'; ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.moveTo(x, y);
    const pts = [];
    while (y > 60 + r() * 200) { x += (r() - 0.5) * 30; y -= 12 + r() * 16; ctx.lineTo(x, y); pts.push([x, y]); }
    ctx.stroke();
    for (const [px, py] of pts) for (let k = 0; k < 3; k++) {
      const g = 30 + r() * 40;
      ctx.fillStyle = `rgb(${g * 0.7},${g * 1.05},${g * 0.5})`;
      ctx.save(); ctx.translate(px + (r() - 0.5) * 18, py + (r() - 0.5) * 18); ctx.rotate(r() * 7);
      ctx.beginPath(); ctx.moveTo(0, -9); ctx.lineTo(7, 0); ctx.lineTo(3, 2); ctx.lineTo(6, 8); ctx.lineTo(0, 5); ctx.lineTo(-6, 8); ctx.lineTo(-3, 2); ctx.lineTo(-7, 0); ctx.closePath(); ctx.fill(); ctx.restore();
    }
  }
  return (cache.ivy = toTex(c, { wrap: false }));
}
