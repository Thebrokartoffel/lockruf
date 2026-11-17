// Modell-Bausteine: Materialien, statisches Batching, Bäume, Menschen
import * as THREE from 'three';
import { G } from './state.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import * as T from './textures.js';
import { rng } from './util.js';

// ---------- Materialien ----------
const matCache = {};
// Normal-Map aus einer prozeduralen Farbtextur (Helligkeit = Höhe, Sobel-Filter, kachelbar)
const nmCache = new Map();
export function normalFrom(tex, strength = 2.5) {
  if (!tex || !tex.image || !tex.image.getContext) return null;
  const key = tex.uuid + '|' + strength;
  if (nmCache.has(key)) return nmCache.get(key);
  const src = tex.image, w = src.width, h = src.height;
  const d = src.getContext('2d').getImageData(0, 0, w, h).data;
  const H = new Float32Array(w * h);
  for (let i = 0; i < w * h; i++) H[i] = (d[i * 4] * 0.3 + d[i * 4 + 1] * 0.59 + d[i * 4 + 2] * 0.11) / 255;
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const ctx = c.getContext('2d'); const img = ctx.createImageData(w, h); const o = img.data;
  const at = (x, y) => H[((y + h) % h) * w + ((x + w) % w)];
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const dx = (at(x + 1, y - 1) + 2 * at(x + 1, y) + at(x + 1, y + 1)) - (at(x - 1, y - 1) + 2 * at(x - 1, y) + at(x - 1, y + 1));
    const dy = (at(x - 1, y + 1) + 2 * at(x, y + 1) + at(x + 1, y + 1)) - (at(x - 1, y - 1) + 2 * at(x, y - 1) + at(x + 1, y - 1));
    let nx = -dx * strength, ny = -dy * strength, nz = 1; const l = Math.hypot(nx, ny, nz); nx /= l; ny /= l; nz /= l;
    const k = (y * w + x) * 4; o[k] = (nx * 0.5 + 0.5) * 255; o[k + 1] = (ny * 0.5 + 0.5) * 255; o[k + 2] = (nz * 0.5 + 0.5) * 255; o[k + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = tex.wrapS; t.wrapT = tex.wrapT; t.repeat.copy(tex.repeat); t.anisotropy = 4; t.colorSpace = THREE.NoColorSpace;
  nmCache.set(key, t);
  return t;
}
// PBR-Material (Glanzlichter der Taschenlampe auf nassem Laub, Holz, Metall)
export function std(key, opts, nStrength = 2.5) {
  if (matCache[key]) return matCache[key];
  const { roughness = 0.88, metalness = 0, ...rest } = opts;
  // Grafikqualität "niedrig": schnelleres Lambert-Material (Normal-Map bleibt)
  const low = G.settings.quality === 'low';
  const m = low ? new THREE.MeshLambertMaterial({ ...rest }) : new THREE.MeshStandardMaterial({ roughness, metalness, ...rest });
  if (rest.map && nStrength > 0) { m.normalMap = normalFrom(rest.map, nStrength); m.normalScale = new THREE.Vector2(1, 1); }
  m.name = key;
  return (matCache[key] = m);
}
export function lam(key, opts) {
  if (matCache[key]) return matCache[key];
  const m = new THREE.MeshLambertMaterial(opts);
  m.name = key;
  return (matCache[key] = m);
}
export function mats() {
  const M = {
    leaves: lam('leaves', { map: T.leavesTex() }),
    gravel: std('gravel', { map: T.gravelTex(), roughness: 0.9 }, 3),
    barkOak: std('barkOak', { map: T.barkTex('oak'), roughness: 0.92 }, 4),
    barkBeech: std('barkBeech', { map: T.barkTex('beech'), roughness: 0.8 }, 2.5),
    barkPine: std('barkPine', { map: T.barkTex('pine'), roughness: 0.9 }, 4),
    planksOld: std('planksOld', { map: T.planksTex('old'), roughness: 0.85 }, 2),
    planksTower: std('planksTower', { map: T.planksTex('tower'), roughness: 0.85 }, 2),
    floor: std('floor', { map: T.planksTex('floor'), roughness: 0.55 }, 1.5),
    concrete: std('concrete', { map: T.concreteTex(), roughness: 0.9 }, 2),
    brick: std('brick', { map: T.brickTex(), roughness: 0.88 }, 3),
    asphalt: std('asphalt', { map: T.asphaltTex(), roughness: 0.62 }, 2),
    sidewalk: std('sidewalk', { map: T.sidewalkTex(), roughness: 0.75 }, 2),
    mulch: lam('mulch', { map: T.mulchTex() }),
    sand: lam('sand', { map: T.sandTex() }),
    wallpaper: lam('wallpaper', { map: T.wallpaperTex() }),
    plaster: lam('plaster', { map: T.plasterTex() }),
    plasterW: lam('plasterW', { map: T.plasterTex([175, 170, 160]) }),
    roof: std('roof', { map: T.roofTex(), roughness: 0.8 }, 2.5),
    felt: lam('felt', { map: T.feltTex() }),
    shutter: lam('shutter', { map: T.shutterTex() }),
    fwall: lam('fwall', { map: T.forestWallTex(), fog: true }),
    wire: lam('wire', { map: T.wireTex(), transparent: false, alphaTest: 0.4, side: THREE.DoubleSide }),
    bauzaun: lam('bauzaun', { map: T.bauzaunTex(), alphaTest: 0.4, side: THREE.DoubleSide }),
    tape: lam('tape', { map: T.tapeTex(), side: THREE.DoubleSide, emissive: 0x200404 }),
    stripes: lam('stripes', { map: T.stripesTex() }),
    metal: std('metal', { color: 0x6a6e72, roughness: 0.42, metalness: 0.75 }),
    darkMetal: std('darkMetal', { color: 0x3a3c3e, roughness: 0.5, metalness: 0.7 }),
    rust: std('rust', { color: 0x5a3a26, roughness: 0.75, metalness: 0.3 }),
    black: lam('black', { color: 0x0b0b0c }),
    white: lam('white', { color: 0xb8b4aa }),
    wood: lam('wood', { color: 0x5e4630 }),
    darkWood: lam('darkWood', { color: 0x3a2a1e }),
    paintedWood: lam('paintedWood', { color: 0x4a5a3c }),
    red: lam('red', { color: 0x7a1c16 }),
    glass: std('glass', { color: 0x0a0d12, roughness: 0.08, metalness: 0.2 }),
    water: new THREE.MeshPhongMaterial({ map: T.waterTex(), color: 0x6a7a80, specular: 0x8899aa, shininess: 80 }),
    leafOak: lam('leafOak', { map: T.leafCardTex('oak'), alphaTest: 0.45, side: THREE.DoubleSide }),
    leafBeech: lam('leafBeech', { map: T.leafCardTex('beech'), alphaTest: 0.45, side: THREE.DoubleSide }),
    leafBush: lam('leafBush', { map: T.leafCardTex('bush'), alphaTest: 0.45, side: THREE.DoubleSide }),
    hedge: lam('hedge', { map: T.leafCardTex('hedge'), alphaTest: 0.4, side: THREE.DoubleSide }),
    hedgeBox: lam('hedgeBox', { color: 0x1c2a18 }),
    pine: lam('pineCard', { map: T.pineCardTex(), alphaTest: 0.45, side: THREE.DoubleSide }),
    fern: lam('fern', { map: T.fernTex(), alphaTest: 0.4, side: THREE.DoubleSide }),
    grass: lam('grass', { map: T.grassTex(), alphaTest: 0.4, side: THREE.DoubleSide }),
    planksAncient: std('planksAncient', { map: T.planksAncientTex(), roughness: 0.9 }, 3),
    mossRoof: std('mossRoof', { map: T.mossRoofTex(), roughness: 0.95 }, 3),
    mossStone: std('mossStone', { map: T.concreteTex(), color: 0x5a6a48, roughness: 0.9 }, 3),
    cobweb: new THREE.MeshBasicMaterial({ map: T.cobwebTex(), transparent: true, depthWrite: false, side: THREE.DoubleSide, opacity: 0.5 }),
    ivy: lam('ivy', { map: T.ivyTex(), alphaTest: 0.45, side: THREE.DoubleSide }),
    litter: lam('litter', { map: T.leafCardTex('oak'), alphaTest: 0.5, side: THREE.DoubleSide }),
    rock: std('rock', { map: T.concreteTex(), color: 0x6a7a5a, roughness: 0.7 }, 3.5),
  };
  // Bäume mit Boden-Schatten (Vertex-Farben)
  M.barkOakT = std('barkOakT', { map: T.barkTex('oak'), vertexColors: true, roughness: 0.92 }, 4);
  M.barkBeechT = std('barkBeechT', { map: T.barkTex('beech'), vertexColors: true, roughness: 0.8 }, 2.5);
  M.barkPineT = std('barkPineT', { map: T.barkTex('pine'), vertexColors: true, roughness: 0.9 }, 4);
  // Relief auf allen Oberflächen
  for (const k of ['mulch', 'felt']) {
    if (!M[k]) continue;
    M[k].bumpMap = M[k].map; M[k].bumpScale = k.startsWith('bark') ? 2.2 : k === 'concrete' ? 0.7 : 1.4;
  }
  // Albedo anheben (die Canvas-Texturen sind sehr dunkel gemalt)
  const boost = { planksAncient: 1.15, mossRoof: 1.5, mossStone: 1.3, ivy: 1.4, leaves: 2.0, gravel: 1.7, barkOak: 1.9, barkBeech: 1.4, barkPine: 1.7, barkOakT: 2.1, barkBeechT: 1.6, barkPineT: 1.9, litter: 1.4, rock: 1.3, mulch: 1.8, planksOld: 1.5, planksTower: 1.5, concrete: 1.4, leafOak: 1.35, leafBeech: 1.2, leafBush: 1.5, pine: 1.6, fern: 1.6, grass: 1.5, brick: 1.4, asphalt: 1.5, sidewalk: 1.3, hedge: 1.5, roof: 1.3, felt: 1.4, floor: 1.2, wallpaper: 1.1 };
  for (const [k, v] of Object.entries(boost)) if (M[k]) M[k].color.setScalar(v);
  return M;
}

// ---------- UV-korrekte Grundkörper ----------
export function boxGeo(w, h, d, uvs = 1) {
  const g = new THREE.BoxGeometry(w, h, d);
  if (uvs) {
    const uv = g.attributes.uv;
    const dims = [[d, h], [d, h], [w, d], [w, d], [w, h], [w, h]];
    for (let f = 0; f < 6; f++) for (let i = 0; i < 4; i++) {
      const k = f * 4 + i;
      uv.setXY(k, uv.getX(k) * dims[f][0] / uvs, uv.getY(k) * dims[f][1] / uvs);
    }
  }
  return g;
}
export function cylGeo(rt, rb, h, seg = 8, uvs = 1, open = false) {
  const g = new THREE.CylinderGeometry(rt, rb, h, seg, 1, open);
  if (uvs) {
    const uv = g.attributes.uv;
    const circ = Math.PI * 2 * Math.max(rt, rb);
    for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * circ / uvs, uv.getY(i) * h / uvs);
  }
  return g;
}
export function planeGeo(w, h, uvs = 1) {
  const g = new THREE.PlaneGeometry(w, h);
  if (uvs) { const uv = g.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * w / uvs, uv.getY(i) * h / uvs); }
  return g;
}

// ---------- Statisches Batching ----------
const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _e = new THREE.Euler(), _s = new THREE.Vector3(1, 1, 1), _p = new THREE.Vector3();
export class Batch {
  constructor(chunk = 48) { this.groups = new Map(); this.chunk = chunk; }
  add(geo, mat, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1, sz = 1, opts = {}) {
    _e.set(rx, ry, rz, 'YXZ'); _q.setFromEuler(_e); _p.set(x, y, z); _s.set(sx, sy, sz);
    _m.compose(_p, _q, _s);
    return this.addM(geo, mat, _m, opts);
  }
  addM(geo, mat, matrix, opts = {}) {
    let g = geo.index ? geo.toNonIndexed() : geo.clone();
    g.applyMatrix4(matrix);
    if (!g.attributes.uv) g.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
    for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(k)) g.deleteAttribute(k);
    g.computeBoundingSphere();
    const c = g.boundingSphere.center;
    const ck = Math.floor(c.x / this.chunk) + ',' + Math.floor(c.z / this.chunk);
    const key = mat.uuid + '|' + ck + '|' + (opts.cast === false ? 0 : 1) + (opts.receive === false ? 0 : 1);
    if (!this.groups.has(key)) this.groups.set(key, { mat, list: [], cast: opts.cast !== false, receive: opts.receive !== false });
    this.groups.get(key).list.push(g);
    return g;
  }
  build(parent) {
    const meshes = [];
    for (const { mat, list, cast, receive } of this.groups.values()) {
      const geo = mergeGeometries(list, false);
      const m = new THREE.Mesh(geo, mat);
      m.castShadow = cast; m.receiveShadow = receive;
      m.matrixAutoUpdate = false; m.updateMatrix();
      parent.add(m); meshes.push(m);
    }
    this.groups.clear();
    return meshes;
  }
}

// ---------- Bäume ----------
// dunkler am Fuß, leicht moosig (wirkt wie Umgebungsverdeckung)
function addAO(geo) {
  const pos = geo.attributes.position; const col = new Float32Array(pos.count * 3);
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i);
    const t = Math.min(1, Math.max(0, y / 2.4)); const k = 0.32 + 0.68 * t * t * (3 - 2 * t);
    const moss = Math.max(0, 1 - y / 1.4) * 0.55;
    col[i * 3] = k * (1 - moss * 0.35); col[i * 3 + 1] = k * (1 + moss * 0.18); col[i * 3 + 2] = k * (1 - moss * 0.4);
  }
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  return geo;
}
// Geometrie für Instanzen (Höhe normiert auf echte Meter, Radius 1)
function trunkWithBranches(height, seed, opts = {}) {
  const r = rng(seed);
  const parts = [];
  const seg = 9;
  const R0 = opts.radius ?? 0.4;
  // Stamm: leicht unregelmäßig
  const t = cylGeo(R0 * 0.55, R0, height, seg, 1.2);
  const pos = t.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i);
    const ang = Math.atan2(pos.getZ(i), pos.getX(i));
    const k = 1 + Math.sin(ang * 3 + seed) * 0.06 + Math.sin(y * 0.7 + seed) * 0.05;
    pos.setX(i, pos.getX(i) * k); pos.setZ(i, pos.getZ(i) * k);
    // Wurzelanlauf
    if (y < -height / 2 + 0.6) { const f = 1 + (1 - (y + height / 2) / 0.6) * 0.45; pos.setX(i, pos.getX(i) * f); pos.setZ(i, pos.getZ(i) * f); }
  }
  t.translate(0, height / 2, 0);
  t.computeVertexNormals();
  parts.push(t);
  const ends = [];
  const nb = opts.branches ?? 6;
  for (let i = 0; i < nb; i++) {
    const y0 = height * (opts.branchStart ?? 0.45) + r() * height * (1 - (opts.branchStart ?? 0.45)) * 0.85;
    const len = (opts.branchLen ?? 3.5) * (0.6 + r() * 0.6);
    const a = r() * Math.PI * 2;
    const tilt = 0.6 + r() * 0.5;
    const b = cylGeo(R0 * 0.18, R0 * 0.45, len, 5, 1.2);
    b.translate(0, len / 2, 0);
    const m = new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(tilt, a, 0, 'YXZ'));
    m.setPosition(0, y0, 0);
    b.applyMatrix4(m);
    parts.push(b);
    const end = new THREE.Vector3(0, len, 0).applyMatrix4(m);
    ends.push(end);
    // Nebenzweig
    if (len > 2) {
      const l2 = len * 0.45;
      const b2 = cylGeo(R0 * 0.06, R0 * 0.14, l2, 4, 1.2); b2.translate(0, l2 / 2, 0);
      const m2 = new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(tilt + 0.5, a + (r() - 0.5) * 1.6, 0, 'YXZ'));
      const mid = new THREE.Vector3(0, len * 0.6, 0).applyMatrix4(m);
      m2.setPosition(mid); b2.applyMatrix4(m2); parts.push(b2);
      ends.push(new THREE.Vector3(0, l2, 0).applyMatrix4(m2));
    }
  }
  return { geo: addAO(mergeGeometries(parts.map((p) => p.toNonIndexed()), false)), ends };
}

function crownCards(ends, height, seed, opts = {}) {
  const r = rng(seed + 100);
  const parts = [];
  const size = opts.cardSize ?? 3.2;
  const pts = [...ends];
  for (let i = 0; i < (opts.extra ?? 5); i++) pts.push(new THREE.Vector3((r() - 0.5) * 3, height * (0.75 + r() * 0.25), (r() - 0.5) * 3));
  for (const e of pts) {
    for (let k = 0; k < (opts.perEnd ?? 2); k++) {
      const p = new THREE.PlaneGeometry(size * (0.7 + r() * 0.6), size * (0.7 + r() * 0.6));
      const m = new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler((r() - 0.5) * 1.2, r() * Math.PI, (r() - 0.5) * 0.8));
      m.setPosition(e.x + (r() - 0.5) * 1.2, e.y + (r() - 0.5) * 0.8, e.z + (r() - 0.5) * 1.2);
      p.applyMatrix4(m);
      parts.push(p.toNonIndexed());
    }
  }
  return mergeGeometries(parts, false);
}

export function treeVariants(M) {
  const V = [];
  // Eichen
  for (let i = 0; i < 3; i++) {
    const h = [15, 18, 21][i];
    const tr = trunkWithBranches(h, 10 + i, { branches: 10, branchStart: 0.38, branchLen: 4.4, radius: 0.45 });
    V.push({ kind: 'oak', trunk: tr.geo, crown: crownCards(tr.ends, h, 10 + i, { cardSize: 3.4, perEnd: 3, extra: 8 }), trunkMat: M.barkOakT, crownMat: M.leafOak, R: 0.45 });
  }
  // Buchen (glatte, hellere Rinde)
  for (let i = 0; i < 2; i++) {
    const h = [17, 22][i];
    const tr = trunkWithBranches(h, 30 + i, { branches: 9, branchStart: 0.5, branchLen: 3.8, radius: 0.34 });
    V.push({ kind: 'beech', trunk: tr.geo, crown: crownCards(tr.ends, h, 30 + i, { cardSize: 3.2, perEnd: 3, extra: 8 }), trunkMat: M.barkBeechT, crownMat: M.leafBeech, R: 0.34 });
  }
  // Kiefern: hoher kahler Stamm, Krone ganz oben
  for (let i = 0; i < 2; i++) {
    const h = [22, 25][i];
    const tr = trunkWithBranches(h, 50 + i, { branches: 5, branchStart: 0.78, branchLen: 2.6, radius: 0.3 });
    V.push({ kind: 'pine', trunk: tr.geo, crown: crownCards(tr.ends, h, 50 + i, { cardSize: 3.2, perEnd: 3, extra: 4 }), trunkMat: M.barkPineT, crownMat: M.pine, R: 0.3 });
  }
  // junge Buchen (Unterholz, behalten im Herbst braunes Laub)
  {
    const h = 4;
    const tr = trunkWithBranches(h, 70, { branches: 5, branchStart: 0.25, branchLen: 1.4, radius: 0.06 });
    V.push({ kind: 'sapling', trunk: tr.geo, crown: crownCards(tr.ends, h, 70, { cardSize: 1.6, perEnd: 2, extra: 3 }), trunkMat: M.barkBeechT, crownMat: M.leafBeech, R: 0.06, small: true });
  }
  // tote, gespaltene Eiche (Wiedererkennungsbaum)
  {
    const h = 9;
    const parts = [];
    const a = cylGeo(0.4, 0.75, h, 8, 1.2); a.translate(0, h / 2, 0);
    const b1 = cylGeo(0.12, 0.35, 5, 6, 1.2); b1.translate(0, 2.5, 0); b1.rotateZ(0.55); b1.translate(0.4, h - 1.5, 0);
    const b2 = cylGeo(0.12, 0.35, 5, 6, 1.2); b2.translate(0, 2.5, 0); b2.rotateZ(-0.6); b2.translate(-0.4, h - 1.8, 0);
    const b3 = cylGeo(0.06, 0.15, 3, 5, 1.2); b3.translate(0, 1.5, 0); b3.rotateX(0.9); b3.translate(0, 4, 0.3);
    for (const p of [a, b1, b2, b3]) parts.push(p.toNonIndexed());
    V.push({ kind: 'dead', trunk: addAO(mergeGeometries(parts, false)), crown: null, trunkMat: M.barkOakT, crownMat: null, R: 0.6 });
  }
  return V;
}

// Instanzierte Bäume in Chunks (für Frustum-Culling)
export class Forest {
  constructor(variants, chunk = 36) { this.V = variants; this.chunk = chunk; this.items = new Map(); }
  // gibt den Kollisionsradius zurück
  add(vi, x, y, z, scale = 1, rotY = 0) {
    const ck = Math.floor(x / this.chunk) + ',' + Math.floor(z / this.chunk) + '|' + vi;
    if (!this.items.has(ck)) this.items.set(ck, []);
    this.items.get(ck).push({ x, y, z, scale, rotY });
    return this.V[vi].R * scale;
  }
  build(parent) {
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3(), e = new THREE.Euler();
    for (const [key, list] of this.items) {
      const vi = +key.split('|')[1];
      const v = this.V[vi];
      const tm = new THREE.InstancedMesh(v.trunk, v.trunkMat, list.length);
      const cm = v.crown ? new THREE.InstancedMesh(v.crown, v.crownMat, list.length) : null;
      list.forEach((it, i) => {
        e.set(0, it.rotY, 0); q.setFromEuler(e);
        p.set(it.x, it.y - 0.15, it.z);
        s.set(it.scale, it.scale, it.scale);
        m4.compose(p, q, s); tm.setMatrixAt(i, m4);
        if (cm) cm.setMatrixAt(i, m4);
      });
      tm.castShadow = true; tm.receiveShadow = true;
      tm.computeBoundingSphere();
      parent.add(tm);
      if (cm) { cm.castShadow = true; cm.receiveShadow = false; cm.computeBoundingSphere(); parent.add(cm); }
    }
  }
}

// Kreuzförmige Karten (Büsche, Farne, Gras) instanziert
export function crossGeo(w, h, n = 3) {
  const parts = [];
  for (let i = 0; i < n; i++) {
    const p = new THREE.PlaneGeometry(w, h);
    p.translate(0, h / 2, 0);
    p.rotateY((i / n) * Math.PI);
    parts.push(p.toNonIndexed());
  }
  return mergeGeometries(parts, false);
}
export class Scatter {
  constructor(geo, mat, chunk = 36, cast = true) { this.geo = geo; this.mat = mat; this.chunk = chunk; this.items = new Map(); this.cast = cast; }
  add(x, y, z, s = 1, rot = 0, sy = s) {
    const ck = Math.floor(x / this.chunk) + ',' + Math.floor(z / this.chunk);
    if (!this.items.has(ck)) this.items.set(ck, []);
    this.items.get(ck).push([x, y, z, s, rot, sy]);
  }
  build(parent) {
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), sv = new THREE.Vector3(), p = new THREE.Vector3(), e = new THREE.Euler();
    for (const list of this.items.values()) {
      const im = new THREE.InstancedMesh(this.geo, this.mat, list.length);
      list.forEach((it, i) => { e.set(0, it[4], 0); q.setFromEuler(e); p.set(it[0], it[1], it[2]); sv.set(it[3], it[5], it[3]); m4.compose(p, q, sv); im.setMatrixAt(i, m4); });
      im.castShadow = this.cast; im.receiveShadow = true;
      im.computeBoundingSphere();
      parent.add(im);
    }
  }
}

// ---------- Mensch (Low-Poly, dunkel, für den Mann und Deniz) ----------
export function makeHuman({ coat = 0x1a1d1a, pants = 0x121212, skin = 0x6a5244, hood = true, cap = false, height = 1.85, coatTex = null, longCoat = false } = {}) {
  const k = height / 1.8;
  const H0 = {};
  const mCoat = new THREE.MeshLambertMaterial({ color: coat, map: coatTex || null });
  const mPants = new THREE.MeshLambertMaterial({ color: pants });
  const mSkin = new THREE.MeshLambertMaterial({ color: skin });
  const mShoe = new THREE.MeshLambertMaterial({ color: 0x0b0b0b });
  const root = new THREE.Group();
  const hips = new THREE.Group(); hips.position.y = 0.95 * k; root.add(hips);
  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.2 * k, 0.42 * k, 4, 10), mCoat);
  torso.position.y = 0.36 * k; torso.scale.set(1.1, 1, 0.75);
  hips.add(torso);
  const chest = new THREE.Group(); chest.position.y = 0.62 * k; hips.add(chest);
  const neck = new THREE.Group(); neck.position.y = 0.1 * k; chest.add(neck);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.115 * k, 12, 10), mSkin);
  head.position.y = 0.13 * k; head.scale.set(0.9, 1.08, 1); neck.add(head);
  if (hood) {
    const h = new THREE.Mesh(new THREE.SphereGeometry(0.15 * k, 12, 10, 0, Math.PI * 2, 0, Math.PI * 0.62), mCoat);
    h.position.set(0, 0.15 * k, 0.025 * k); h.rotation.x = 0.35; neck.add(h);
    // Gesicht im Schatten
    const shade = new THREE.Mesh(new THREE.CircleGeometry(0.09 * k, 12), new THREE.MeshBasicMaterial({ color: 0x030303 }));
    shade.position.set(0, 0.12 * k, -0.105 * k); shade.rotation.y = Math.PI; neck.add(shade);
  }
  if (cap) {
    const c = new THREE.Mesh(new THREE.SphereGeometry(0.125 * k, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.5), mCoat);
    c.position.y = 0.16 * k; neck.add(c);
  }
  if (longCoat) {
    const sk = new THREE.Mesh(new THREE.CylinderGeometry(0.23 * k, 0.31 * k, 0.62 * k, 12, 1, true), new THREE.MeshLambertMaterial({ color: coat, side: THREE.DoubleSide }));
    sk.position.y = -0.22 * k; hips.add(sk); H0.skirt = sk;
    torso.scale.set(1.22, 1, 0.82);
    const col = new THREE.Mesh(new THREE.CylinderGeometry(0.17 * k, 0.24 * k, 0.12 * k, 12, 1, true), new THREE.MeshLambertMaterial({ color: coat, side: THREE.DoubleSide }));
    col.position.y = 0.66 * k; hips.add(col);
  }
  const limb = (r, l, mat) => { const g = new THREE.CapsuleGeometry(r, l, 3, 8); g.translate(0, -l / 2 - r * 0.5, 0); return new THREE.Mesh(g, mat); };
  const mkArm = (side) => {
    const sh = new THREE.Group(); sh.position.set(0.25 * side * k, 0.02 * k, 0); chest.add(sh);
    const up = limb(0.065 * k, 0.26 * k, mCoat); sh.add(up);
    const el = new THREE.Group(); el.position.y = -0.33 * k; sh.add(el);
    const lo = limb(0.055 * k, 0.24 * k, mCoat); el.add(lo);
    const hand = new THREE.Mesh(new THREE.SphereGeometry(0.05 * k, 8, 6), mSkin); hand.position.y = -0.33 * k; el.add(hand);
    return { sh, el, hand };
  };
  const mkLeg = (side) => {
    const hp = new THREE.Group(); hp.position.set(0.1 * side * k, 0, 0); hips.add(hp);
    const up = limb(0.085 * k, 0.36 * k, mPants); hp.add(up);
    const kn = new THREE.Group(); kn.position.y = -0.45 * k; hp.add(kn);
    const lo = limb(0.07 * k, 0.36 * k, mPants); kn.add(lo);
    const shoe = new THREE.Mesh(new THREE.BoxGeometry(0.11 * k, 0.08 * k, 0.26 * k), mShoe); shoe.position.set(0, -0.46 * k, -0.05 * k); kn.add(shoe);
    return { hp, kn };
  };
  const armL = mkArm(-1), armR = mkArm(1), legL = mkLeg(-1), legR = mkLeg(1);
  root.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  const H = { root, hips, chest, neck, head, armL, armR, legL, legR, phase: 0, ...H0 };
  H.walk = (dt, speed) => {
    H.phase += dt * speed * 3.3;
    const s = Math.sin(H.phase), a = Math.min(1, speed / 1.5);
    const run = speed > 3;
    legL.hp.rotation.x = s * 0.6 * a; legR.hp.rotation.x = -s * 0.6 * a;
    legL.kn.rotation.x = -Math.max(0, -Math.cos(H.phase)) * 0.9 * a; legR.kn.rotation.x = -Math.max(0, Math.cos(H.phase)) * 0.9 * a;
    armL.sh.rotation.x = -s * (run ? 0.9 : 0.4) * a; armR.sh.rotation.x = s * (run ? 0.9 : 0.4) * a;
    armL.el.rotation.x = run ? 1.2 : 0.25; armR.el.rotation.x = run ? 1.2 : 0.25;
    hips.position.y = 0.95 * k + Math.abs(Math.cos(H.phase)) * 0.04 * a;
    chest.rotation.x = run ? -0.25 : -0.05;
    if (H.skirt) H.skirt.rotation.x = -Math.abs(s) * 0.12 * a - (run ? 0.18 : 0);
  };
  H.sit = () => {
    hips.position.y = 0.48 * k;
    legL.hp.rotation.set(1.45, 0, 0.12); legR.hp.rotation.set(1.38, 0, -0.1);
    legL.kn.rotation.x = -1.4; legR.kn.rotation.x = -1.3;
    chest.rotation.x = -0.32; neck.rotation.x = -0.45;
    armL.sh.rotation.set(0.75, 0, 0.12); armR.sh.rotation.set(0.7, 0, -0.12);
    armL.el.rotation.x = 0.55; armR.el.rotation.x = 0.6;
  };
  H.stand = () => {
    hips.position.y = 0.95 * k;
    for (const l of [legL, legR]) { l.hp.rotation.set(0, 0, 0); l.kn.rotation.set(0, 0, 0); }
    for (const a of [armL, armR]) { a.sh.rotation.set(0, 0, 0); a.el.rotation.set(0.1, 0, 0); }
    armL.sh.rotation.z = -0.08; armR.sh.rotation.z = 0.08;
    chest.rotation.set(0, 0, 0); neck.rotation.set(0, 0, 0);
  };
  H.stand();
  return H;
}
