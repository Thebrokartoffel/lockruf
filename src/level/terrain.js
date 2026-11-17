// Gelände: Höhenfeld mit exakt passender Kollisionsabfrage
import * as THREE from 'three';
import { makeNoise, fbm, clamp, smooth, segDist } from '../util.js';

const noise = makeNoise(202);

export const AREA = { minX: -150, maxX: 60, minZ: -170, maxZ: 180, step: 2 };

// "rohe" Höhe
export function rawHeight(x, z) {
  let h = (fbm(noise, x / 38, z / 38, 4) - 0.5) * 2.0;
  h += (fbm(noise, x / 9 + 50, z / 9, 2) - 0.5) * 0.35;
  // Stadt, Straße, Spielplatz flach
  const flatN = clamp((-z - 26) / 8, 0, 1);
  h *= 1 - smooth(flatN);
  // Schneise etwas glatter
  if (z > -32 && z < 66) { const k = clamp(1 - (Math.abs(x) - 3) / 5, 0, 1); h *= 1 - k * 0.7; }
  // Lichtung um die Hütte (auf Hüttenniveau)
  const dh = Math.hypot(x + 63, z + -140);
  if (dh < 13) h = h * smooth(clamp((dh - 7) / 6, 0, 1));
  // Jenseits des Zauns: Bach + Gärten
  if (x < -79) {
    const k = smooth(clamp((-79 - x) / 2.5, 0, 1));
    h *= 1 - k;
    // Bachbett
    const d = Math.abs(x + 83.2);
    if (d < 1.6) h -= Math.cos((d / 1.6) * Math.PI / 2) * 0.75 * smooth(clamp((z - 60) / 8, 0, 1)) * smooth(clamp((160 - z) / 8, 0, 1));
  }
  return h;
}

export class Terrain {
  constructor() {
    const A = AREA;
    this.nx = Math.round((A.maxX - A.minX) / A.step) + 1;
    this.nz = Math.round((A.maxZ - A.minZ) / A.step) + 1;
    this.h = new Float32Array(this.nx * this.nz);
    for (let j = 0; j < this.nz; j++) for (let i = 0; i < this.nx; i++) {
      const x = A.minX + i * A.step, z = A.minZ + j * A.step;
      this.h[j * this.nx + i] = rawHeight(x, z);
    }
    this.holes = [];
  }
  // Senkt Vertices innerhalb eines Rechtecks (für Treppenschacht)
  dig(minX, maxX, minZ, maxZ, depth) {
    const A = AREA;
    for (let j = 0; j < this.nz; j++) for (let i = 0; i < this.nx; i++) {
      const x = A.minX + i * A.step, z = A.minZ + j * A.step;
      if (x >= minX && x <= maxX && z >= minZ && z <= maxZ) this.h[j * this.nx + i] = depth;
    }
  }
  hole(minX, maxX, minZ, maxZ) { this.holes.push([minX, maxX, minZ, maxZ]); }
  hv(i, j) { i = clamp(i, 0, this.nx - 1); j = clamp(j, 0, this.nz - 1); return this.h[j * this.nx + i]; }
  height(x, z) {
    const A = AREA;
    const gx = (x - A.minX) / A.step, gz = (z - A.minZ) / A.step;
    const i = Math.floor(gx), j = Math.floor(gz);
    const fx = gx - i, fz = gz - j;
    const h00 = this.hv(i, j), h10 = this.hv(i + 1, j), h01 = this.hv(i, j + 1), h11 = this.hv(i + 1, j + 1);
    if (fx + fz <= 1) return h00 + (h10 - h00) * fx + (h01 - h00) * fz;
    return h11 + (h01 - h11) * (1 - fx) + (h10 - h11) * (1 - fz);
  }
  mesh(mat) {
    const A = AREA, nx = this.nx, nz = this.nz;
    const pos = new Float32Array(nx * nz * 3), uv = new Float32Array(nx * nz * 2), col = new Float32Array(nx * nz * 3);
    const cn = makeNoise(77);
    for (let j = 0; j < nz; j++) for (let i = 0; i < nx; i++) {
      const k = j * nx + i, x = A.minX + i * A.step, z = A.minZ + j * A.step;
      pos[k * 3] = x; pos[k * 3 + 1] = this.h[k]; pos[k * 3 + 2] = z;
      uv[k * 2] = x / 6; uv[k * 2 + 1] = z / 6;
      const n = fbm(cn, x / 14, z / 14, 3);
      const n2 = fbm(cn, x / 4 + 9, z / 4, 2);
      const v = 0.62 + n * 0.55 + (n2 - 0.5) * 0.2;
      // etwas Moos-Grün in Senken
      const g = clamp((0.5 - this.h[k]) * 0.15, 0, 0.12);
      col[k * 3] = v * (1 - g); col[k * 3 + 1] = v * (1 + g * 0.6); col[k * 3 + 2] = v * (0.92 - g * 0.3);
    }
    const idx = [];
    const inHole = (x, z) => this.holes.some((h) => x > h[0] && x < h[1] && z > h[2] && z < h[3]);
    for (let j = 0; j < nz - 1; j++) for (let i = 0; i < nx - 1; i++) {
      const a = j * nx + i, b = j * nx + i + 1, c = (j + 1) * nx + i, d = (j + 1) * nx + i + 1;
      const cx = A.minX + (i + 0.5) * A.step, cz = A.minZ + (j + 0.5) * A.step;
      if (inHole(cx, cz)) continue;
      idx.push(a, c, b, c, d, b);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    g.setIndex(idx);
    g.computeVertexNormals();
    const m = new THREE.Mesh(g, mat);
    m.receiveShadow = true;
    return m;
  }
}

// Streifen, der dem Gelände folgt (für Wege)
export function stripGeo(terrain, pts, width, step = 1, lift = 0.035, uvScale = 3) {
  const P = [], U = [], I = [];
  let acc = 0, row = 0;
  for (let s = 0; s < pts.length - 1; s++) {
    const [ax, az] = pts[s], [bx, bz] = pts[s + 1];
    const len = Math.hypot(bx - ax, bz - az);
    const n = Math.max(1, Math.ceil(len / step));
    const dx = (bx - ax) / len, dz = (bz - az) / len;
    const px = -dz, pz = dx;
    for (let k = (s === 0 ? 0 : 1); k <= n; k++) {
      const t = k / n;
      const cx = ax + (bx - ax) * t, cz = az + (bz - az) * t;
      const segs = 4;
      for (let q = 0; q <= segs; q++) {
        const o = (q / segs - 0.5) * width;
        const x = cx + px * o, z = cz + pz * o;
        P.push(x, terrain.height(x, z) + lift, z);
        U.push((q / segs) * width / uvScale, (acc + len * t) / uvScale);
      }
      if (row > 0) for (let q = 0; q < segs; q++) {
        const a = (row - 1) * (segs + 1) + q, b = a + 1, c = row * (segs + 1) + q, d = c + 1;
        I.push(a, b, c, b, d, c);
      }
      row++;
    }
    acc += len;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(U, 2));
  g.setIndex(I);
  g.computeVertexNormals();
  // Normale nach oben erzwingen falls Wicklung falsch
  const nrm = g.attributes.normal;
  let up = 0; for (let i = 0; i < nrm.count; i++) up += nrm.getY(i);
  if (up < 0) { for (let i = 0; i < I.length; i += 3) { const t = I[i]; I[i] = I[i + 1]; I[i + 1] = t; } g.setIndex(I); g.computeVertexNormals(); }
  return g;
}

export { segDist };
