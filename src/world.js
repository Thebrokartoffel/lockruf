// Welt-Logik: Kollision, Böden, begehbare Regionen, Interaktionen, Trigger, Lichtpool
import * as THREE from 'three';
import { segDist, clamp } from './util.js';
import { G } from './state.js';

const CELL = 4;

export class World {
  constructor() {
    this.colliders = [];
    this.grid = new Map();
    this.floors = [];
    this.regions = [];
    this.interacts = [];
    this.zones = new Map();
    this.lamps = [];
    this.surfaces = [];
    this.updaters = [];
    this.terrain = null;
    this.fogZones = [];
    this.tag = '';      // Beschriftung für neue Kollider/Regionen (Godmode-Anzeige)
    this.nextId = 1;
  }
  _meta(c, extra) { c.id = this.nextId++; if (!c.label) c.label = (extra && extra.label) || this.tag || ''; return c; }

  // ---------- Kollision ----------
  _cells(minX, maxX, minZ, maxZ) {
    const out = [];
    for (let cx = Math.floor(minX / CELL); cx <= Math.floor(maxX / CELL); cx++)
      for (let cz = Math.floor(minZ / CELL); cz <= Math.floor(maxZ / CELL); cz++) out.push(cx + ',' + cz);
    return out;
  }
  _insert(c) {
    const b = c.type === 'box' ? [c.minX, c.maxX, c.minZ, c.maxZ] : [c.x - c.r, c.x + c.r, c.z - c.r, c.z + c.r];
    c._cells = this._cells(...b);
    for (const k of c._cells) { if (!this.grid.has(k)) this.grid.set(k, []); this.grid.get(k).push(c); }
  }
  addBox(minX, maxX, minZ, maxZ, minY = -50, maxY = 50, extra = {}) {
    const c = this._meta({ type: 'box', minX, maxX, minZ, maxZ, minY, maxY, enabled: true, ...extra }, extra);
    this.colliders.push(c); this._insert(c); return c;
  }
  // gedrehte Box -> als mehrere Kreise approximiert wäre ungenau; wir erlauben Rotation über lokale Achsen
  addOBB(cx, cz, hw, hd, rot, minY = -50, maxY = 50, extra = {}) {
    const c = this._meta({ type: 'obb', cx, cz, hw, hd, rot, cos: Math.cos(rot), sin: Math.sin(rot), minY, maxY, enabled: true, ...extra }, extra);
    const R = Math.hypot(hw, hd);
    c.minX = cx - R; c.maxX = cx + R; c.minZ = cz - R; c.maxZ = cz + R;
    c._cells = this._cells(c.minX, c.maxX, c.minZ, c.maxZ);
    for (const k of c._cells) { if (!this.grid.has(k)) this.grid.set(k, []); this.grid.get(k).push(c); }
    this.colliders.push(c); return c;
  }
  addCircle(x, z, r, minY = -50, maxY = 50, extra = {}) {
    const c = this._meta({ type: 'circle', x, z, r, minY, maxY, enabled: true, ...extra }, extra);
    this.colliders.push(c); this._insert(c); return c;
  }
  nearby(x, z) {
    const out = new Set();
    for (let cx = Math.floor((x - 1) / CELL); cx <= Math.floor((x + 1) / CELL); cx++)
      for (let cz = Math.floor((z - 1) / CELL); cz <= Math.floor((z + 1) / CELL); cz++) {
        const l = this.grid.get(cx + ',' + cz); if (l) for (const c of l) out.add(c);
      }
    return out;
  }
  // schiebt einen Kreis (x,z,r) mit vertikaler Ausdehnung [y0,y1] aus Kollidern heraus
  resolve(p, r, y0, y1, rec = null) {
    for (let iter = 0; iter < 3; iter++) {
      let moved = false;
      for (const c of this.nearby(p.x, p.z)) {
        if (!c.enabled || c.maxY <= y0 + 0.05 || c.minY >= y1) continue;
        const ox = p.x, oz = p.z;
        if (c.type === 'circle') {
          const dx = p.x - c.x, dz = p.z - c.z, d = Math.hypot(dx, dz), m = r + c.r;
          if (d < m && d > 1e-6) { p.x = c.x + dx / d * m; p.z = c.z + dz / d * m; moved = true; }
        } else if (c.type === 'box') {
          const cx = clamp(p.x, c.minX, c.maxX), cz = clamp(p.z, c.minZ, c.maxZ);
          const dx = p.x - cx, dz = p.z - cz, d = Math.hypot(dx, dz);
          if (d < r) {
            if (d > 1e-6) { p.x = cx + dx / d * r; p.z = cz + dz / d * r; }
            else {
              const pen = [p.x - c.minX, c.maxX - p.x, p.z - c.minZ, c.maxZ - p.z];
              const i = pen.indexOf(Math.min(...pen));
              if (i === 0) p.x = c.minX - r; else if (i === 1) p.x = c.maxX + r; else if (i === 2) p.z = c.minZ - r; else p.z = c.maxZ + r;
            }
            moved = true;
          }
        } else if (c.type === 'obb') {
          // in lokale Koordinaten
          const lx0 = p.x - c.cx, lz0 = p.z - c.cz;
          const lx = lx0 * c.cos + lz0 * c.sin, lz = -lx0 * c.sin + lz0 * c.cos;
          const qx = clamp(lx, -c.hw, c.hw), qz = clamp(lz, -c.hd, c.hd);
          let dx = lx - qx, dz = lz - qz, d = Math.hypot(dx, dz);
          if (d < r) {
            let nx, nz;
            if (d > 1e-6) { nx = qx + dx / d * r; nz = qz + dz / d * r; }
            else {
              const pen = [lx + c.hw, c.hw - lx, lz + c.hd, c.hd - lz];
              const i = pen.indexOf(Math.min(...pen));
              nx = lx; nz = lz;
              if (i === 0) nx = -c.hw - r; else if (i === 1) nx = c.hw + r; else if (i === 2) nz = -c.hd - r; else nz = c.hd + r;
            }
            p.x = c.cx + nx * c.cos - nz * c.sin; p.z = c.cz + nx * c.sin + nz * c.cos;
            moved = true;
          }
        }
        if (rec && (p.x !== ox || p.z !== oz) && !rec.includes(c)) rec.push(c);
      }
      if (!moved) break;
    }
  }

  // Sichtlinie in der Ebene (für Vater/Mann): blockiert eine aktive Kollision zwischen a und b in Höhe y?
  segmentBlocked(ax, az, bx, bz, y, ignore = null) {
    const minX = Math.min(ax, bx) - 0.5, maxX = Math.max(ax, bx) + 0.5, minZ = Math.min(az, bz) - 0.5, maxZ = Math.max(az, bz) + 0.5;
    const seen = new Set();
    for (let cx = Math.floor(minX / CELL); cx <= Math.floor(maxX / CELL); cx++)
      for (let cz = Math.floor(minZ / CELL); cz <= Math.floor(maxZ / CELL); cz++) {
        const l = this.grid.get(cx + ',' + cz); if (!l) continue;
        for (const c of l) {
          if (seen.has(c)) continue; seen.add(c);
          if (!c.enabled || c === ignore || c.noSight || y < c.minY || y > c.maxY) continue;
          if (c.type === 'circle') { if (segDist(c.x, c.z, ax, az, bx, bz).d < c.r * 0.8) return c; continue; }
          let x0 = ax, z0 = az, x1 = bx, z1 = bz, hx, hz, mx = 0, mz = 0;
          if (c.type === 'obb') {
            const t0x = ax - c.cx, t0z = az - c.cz, t1x = bx - c.cx, t1z = bz - c.cz;
            x0 = t0x * c.cos + t0z * c.sin; z0 = -t0x * c.sin + t0z * c.cos; x1 = t1x * c.cos + t1z * c.sin; z1 = -t1x * c.sin + t1z * c.cos;
            hx = c.hw; hz = c.hd;
          } else { hx = (c.maxX - c.minX) / 2; hz = (c.maxZ - c.minZ) / 2; mx = (c.minX + c.maxX) / 2; mz = (c.minZ + c.maxZ) / 2; }
          // Slab-Test
          let t0 = 0, t1 = 1;
          const dx = x1 - x0, dz = z1 - z0;
          const slab = (o, d, lo, hi) => {
            if (Math.abs(d) < 1e-9) return o >= lo && o <= hi;
            let a = (lo - o) / d, b = (hi - o) / d; if (a > b) [a, b] = [b, a];
            t0 = Math.max(t0, a); t1 = Math.min(t1, b); return t0 <= t1;
          };
          if (slab(x0, dx, mx - hx, mx + hx) && slab(z0, dz, mz - hz, mz + hz)) return c;
        }
      }
    return null;
  }

  // ---------- Böden ----------
  addFloor(minX, maxX, minZ, maxZ, h, extra = {}) {
    const f = { minX, maxX, minZ, maxZ, h: typeof h === 'number' ? () => h : h, enabled: true, ...extra };
    this.floors.push(f); return f;
  }
  groundAt(x, z, feetY, step = 0.5) {
    let best = -Infinity;
    const t = this.terrainHeight(x, z);
    if (t <= feetY + step && !this.noTerrainAt(x, z, feetY)) best = t;
    for (const f of this.floors) {
      if (!f.enabled || x < f.minX || x > f.maxX || z < f.minZ || z > f.maxZ) continue;
      if (f.hole && f.hole(x, z)) continue;
      const h = f.h(x, z);
      if (h <= feetY + step && h > best) best = h;
    }
    return best;
  }
  noTerrainAt(x, z, y) {
    // unterirdische Bereiche: Terrain gilt dort nicht, wenn man darunter ist
    for (const u of this.underground || []) if (x > u.minX && x < u.maxX && z > u.minZ && z < u.maxZ && y < u.top) return true;
    return false;
  }
  terrainHeight(x, z) { return this.terrain ? this.terrain.height(x, z) : 0; }

  // ---------- Begehbare Regionen (Sicherheitsnetz für den linearen Ablauf) ----------
  addRegionBox(minX, maxX, minZ, maxZ, extra = {}) { const r = this._rmeta({ type: 'box', minX, maxX, minZ, maxZ, enabled: true, ...extra }); this.regions.push(r); return r; }
  addRegionPath(points, radius, extra = {}) { const r = this._rmeta({ type: 'path', points, radius, enabled: true, ...extra }); this.regions.push(r); return r; }
  addRegionCircle(x, z, radius, extra = {}) { const r = this._rmeta({ type: 'circle', x, z, radius, enabled: true, ...extra }); this.regions.push(r); return r; }
  _rmeta(r) { if (!r.label) r.label = r.id || this.tag || 'Region'; return r; }
  // Region-Prüfung ohne Verschieben (für Godmode-Anzeige)
  regionContains(r, x, z, pad = 0) {
    if (r.type === 'box') return x >= r.minX + pad && x <= r.maxX - pad && z >= r.minZ + pad && z <= r.maxZ - pad;
    if (r.type === 'circle') return Math.hypot(x - r.x, z - r.z) <= r.radius - pad;
    const pts = r.points;
    for (let i = 0; i < pts.length - 1; i++) if (segDist(x, z, pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1]).d <= r.radius - pad) return true;
    return false;
  }
  constrain(p, pad = 0.3, report = false) {
    let bestD = Infinity, bx = p.x, bz = p.z, bestR = null;
    for (const r of this.regions) {
      if (!r.enabled) continue;
      if (r.minY !== undefined && (p.y < r.minY || p.y > r.maxY)) continue;   // Stockwerk
      if (r.type === 'box') {
        const inside = p.x >= r.minX + pad && p.x <= r.maxX - pad && p.z >= r.minZ + pad && p.z <= r.maxZ - pad;
        if (inside) return null;
        const cx = clamp(p.x, r.minX + pad, r.maxX - pad), cz = clamp(p.z, r.minZ + pad, r.maxZ - pad);
        const d = Math.hypot(p.x - cx, p.z - cz);
        if (d < bestD) { bestD = d; bx = cx; bz = cz; bestR = r; }
      } else if (r.type === 'circle') {
        const d = Math.hypot(p.x - r.x, p.z - r.z), rr = r.radius - pad;
        if (d <= rr) return null;
        const k = rr / d; const cx = r.x + (p.x - r.x) * k, cz = r.z + (p.z - r.z) * k;
        if (d - rr < bestD) { bestD = d - rr; bx = cx; bz = cz; bestR = r; }
      } else {
        const pts = r.points, rr = r.radius - pad;
        for (let i = 0; i < pts.length - 1; i++) {
          const s = segDist(p.x, p.z, pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1]);
          if (s.d <= rr) return null;
          if (s.d - rr < bestD) { bestD = s.d - rr; const k = rr / s.d; bx = s.cx + (p.x - s.cx) * k; bz = s.cz + (p.z - s.cz) * k; bestR = r; }
        }
      }
    }
    if (bestD < Infinity) {
      const ox = p.x, oz = p.z;
      p.x = bx; p.z = bz;
      if (report && (Math.abs(ox - bx) > 1e-5 || Math.abs(oz - bz) > 1e-5)) {
        // welche deaktivierte Region hätte den Punkt erlaubt?
        const dis = this.regions.find((r) => !r.enabled && this.regionContains(r, ox, oz, pad));
        return { region: true, label: 'Rand von „' + (bestR.label || bestR.id || 'Region') + '“', disabled: dis ? (dis.label || dis.id) : null, r: bestR };
      }
    }
    return null;
  }

  // ---------- Interaktionen ----------
  addInteract(o) {
    const it = { radius: 0.35, range: 2.3, hold: 0, enabled: () => true, once: true, used: false, ...o };
    if (Array.isArray(it.pos)) it.pos = new THREE.Vector3(...it.pos);
    this.interacts.push(it); return it;
  }
  getInteract(id) { return this.interacts.find((i) => i.id === id); }
  findInteract(camPos, camDir) {
    let best = null, bestScore = Infinity;
    const v = new THREE.Vector3();
    for (const it of this.interacts) {
      if ((it.once && it.used) || !it.enabled()) continue;
      v.copy(it.pos).sub(camPos);
      const d = v.length();
      if (d > it.range) continue;
      v.divideScalar(d || 1);
      const ang = Math.acos(clamp(v.dot(camDir), -1, 1));
      const allowed = Math.atan2(it.radius, d) + 0.06;
      if (ang > allowed) continue;
      const score = ang / allowed + d * 0.05;
      if (score < bestScore) { bestScore = score; best = it; }
    }
    return best;
  }

  // ---------- Trigger-Zonen ----------
  addZone(name, z) { this.zones.set(name, z); return z; }
  inZone(name, p) {
    const z = this.zones.get(name); if (!z) return false;
    if (z.r !== undefined) return Math.hypot(p.x - z.x, p.z - z.z) < z.r && (z.y === undefined || Math.abs(p.y - z.y) < 2.5);
    return p.x > z.minX && p.x < z.maxX && p.z > z.minZ && p.z < z.maxZ && (z.minY === undefined || (p.y > z.minY && p.y < z.maxY));
  }

  // ---------- Oberflächen (für Schritte) ----------
  addSurface(minX, maxX, minZ, maxZ, type, minY = -50, maxY = 50) { this.surfaces.push({ minX, maxX, minZ, maxZ, type, minY, maxY }); }
  surfaceAt(x, y, z) {
    for (let i = this.surfaces.length - 1; i >= 0; i--) {
      const s = this.surfaces[i];
      if (x > s.minX && x < s.maxX && z > s.minZ && z < s.maxZ && y > s.minY && y < s.maxY) return s.type;
    }
    return 'leaves';
  }

  // ---------- Lichtpool: viele virtuelle Lampen, wenige echte PointLights ----------
  initLightPool(scene, n = 8) {
    this.pool = [];
    for (let i = 0; i < n; i++) {
      const l = new THREE.PointLight(0xffffff, 0, 10, 2);
      scene.add(l); this.pool.push(l);
    }
  }
  addLamp(o) {
    const l = { color: 0xffc58a, intensity: 20, distance: 14, enabled: true, flicker: null, level: 1, ...o };
    if (Array.isArray(l.pos)) l.pos = new THREE.Vector3(...l.pos);
    l.colorObj = new THREE.Color(l.color);
    this.lamps.push(l); return l;
  }
  updateLights(camPos, t) {
    if (!this.pool) return;
    const cands = [];
    for (const l of this.lamps) {
      if (!l.enabled || l.level <= 0.001) continue;
      const d = l.pos.distanceTo(camPos);
      const maxD = l.visibleDist || 45;
      if (d > maxD) continue;
      cands.push([d, l, maxD]);
    }
    cands.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < this.pool.length; i++) {
      const pl = this.pool[i];
      const c = cands[i];
      if (!c) { pl.intensity = 0; continue; }
      const [d, l, maxD] = c;
      let k = clamp((maxD - d) / 10, 0, 1) * l.level;
      if (l.flicker) k *= l.flicker(t);
      pl.position.copy(l.pos);
      pl.color.copy(l.colorObj);
      pl.distance = l.distance;
      pl.intensity = l.intensity * k;
      if (l.onLevel) l.onLevel(k);
    }
  }

  // visuelle Updater (Staub, Blätter …) laufen beim Rückspulen nicht mit
  update(dt, t, replay = false) { for (const u of this.updaters) if (!(replay && u.visual)) u(dt, t); }
}
