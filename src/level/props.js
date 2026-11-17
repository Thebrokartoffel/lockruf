// Wiederverwendbare Requisiten
import * as THREE from 'three';
import { boxGeo, cylGeo, planeGeo, lam } from '../models.js';
import * as T from '../textures.js';

const _v = new THREE.Vector3(), _q = new THREE.Quaternion(), _m = new THREE.Matrix4(), UP = new THREE.Vector3(0, 1, 0);

// Balken von a nach b
export function beam(B, mat, a, b, t = 0.2, t2 = t) {
  const A = new THREE.Vector3(...a), Bv = new THREE.Vector3(...b);
  const d = _v.subVectors(Bv, A); const L = d.length();
  const g = boxGeo(t, L, t2, 1);
  _q.setFromUnitVectors(UP, d.clone().normalize());
  _m.compose(A.clone().add(Bv).multiplyScalar(0.5), _q, new THREE.Vector3(1, 1, 1));
  B.addM(g, mat, _m);
}

// Dreiecksprisma (Satteldach): Breite w (x), Höhe h, Tiefe d (z)
export function prismGeo(w, h, d, uvs = 1) {
  const hw = w / 2, hd = d / 2;
  const slope = Math.hypot(hw, h);
  const P = [
    // linke Dachfläche
    -hw, 0, -hd, -hw, 0, hd, 0, h, hd, -hw, 0, -hd, 0, h, hd, 0, h, -hd,
    // rechte Dachfläche
    hw, 0, hd, hw, 0, -hd, 0, h, -hd, hw, 0, hd, 0, h, -hd, 0, h, hd,
    // Giebel vorne/hinten
    -hw, 0, hd, hw, 0, hd, 0, h, hd,
    hw, 0, -hd, -hw, 0, -hd, 0, h, -hd,
  ];
  const U = [
    0, 0, d / uvs, 0, d / uvs, slope / uvs, 0, 0, d / uvs, slope / uvs, 0, slope / uvs,
    0, 0, d / uvs, 0, d / uvs, slope / uvs, 0, 0, d / uvs, slope / uvs, 0, slope / uvs,
    0, 0, w / uvs, 0, w / uvs / 2, h / uvs,
    0, 0, w / uvs, 0, w / uvs / 2, h / uvs,
  ];
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(U, 2));
  g.computeVertexNormals();
  return g;
}

export function bench(B, M, x, y, z, ry = 0) {
  const c = Math.cos(ry), s = Math.sin(ry);
  const at = (lx, ly, lz) => [x + lx * c + lz * s, y + ly, z - lx * s + lz * c];
  for (let i = 0; i < 3; i++) { const p = at(0, 0.45, -0.18 + i * 0.13); B.add(boxGeo(1.8, 0.04, 0.11, 0.5), M.wood, ...p, 0, ry, 0); }
  for (let i = 0; i < 2; i++) { const p = at(0, 0.62 + i * 0.14, 0.27); B.add(boxGeo(1.8, 0.1, 0.03, 0.5), M.wood, ...p, -0.15, ry, 0); }
  for (const lx of [-0.75, 0.75]) {
    const p = at(lx, 0.22, 0); B.add(boxGeo(0.06, 0.44, 0.5), M.darkMetal, ...p, 0, ry, 0);
    const p2 = at(lx, 0.65, 0.26); B.add(boxGeo(0.05, 0.45, 0.05), M.darkMetal, ...p2, -0.15, ry, 0);
  }
}

export function trashBin(B, M, x, y, z) {
  B.add(cylGeo(0.25, 0.22, 0.8, 10, 1), M.darkMetal, x, y + 0.5, z);
  B.add(cylGeo(0.04, 0.04, 0.6, 6, 1), M.darkMetal, x, y + 0.3, z);
}

export function car(B, M, x, z, ry, color) {
  const mat = lam('car' + color, { color });
  const c = Math.cos(ry), s = Math.sin(ry);
  const at = (lx, ly, lz) => [x + lx * c + lz * s, ly, z - lx * s + lz * c];
  B.add(boxGeo(1.78, 0.62, 4.2, 1), mat, ...at(0, 0.62, 0), 0, ry, 0);
  B.add(boxGeo(1.6, 0.5, 2.1, 1), mat, ...at(0, 1.17, 0.15), 0, ry, 0);
  B.add(boxGeo(1.62, 0.42, 2.0, 1), M.glass, ...at(0, 1.16, 0.15), 0, ry, 0);
  for (const lx of [-0.82, 0.82]) for (const lz of [-1.35, 1.35]) B.add(cylGeo(0.32, 0.32, 0.22, 12, 1), M.black, ...at(lx, 0.32, lz), 0, ry, Math.PI / 2);
  B.add(boxGeo(1.5, 0.12, 0.05, 1), lam('tail', { color: 0x3a0806, emissive: 0x120000 }), ...at(0, 0.78, 2.1), 0, ry, 0);
}

export function haloSprite(color = 0xffb070, size = 2.5, opacity = 0.5, fog = true) {
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: T.glowTex(), color, transparent: true, opacity, blending: THREE.AdditiveBlending, depthWrite: false, fog }));
  sp.scale.set(size, size, 1);
  return sp;
}

// Leuchtende Fläche (unbeleuchtet)
export function emissive(color) { return new THREE.MeshBasicMaterial({ color }); }

export function signMesh(lines, w, h, opts = {}) {
  const tex = T.signTex(lines, opts);
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshLambertMaterial({ map: tex, side: THREE.DoubleSide }));
  m.castShadow = true; m.receiveShadow = true;
  return m;
}

export function pumpkin(scene, x, y, z, ry = 0) {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.22, 14, 10), new THREE.MeshLambertMaterial({ color: 0xa04a10 }));
  body.scale.set(1.15, 0.85, 1.15); body.position.y = 0.19; g.add(body);
  const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.03, 0.08, 6), new THREE.MeshLambertMaterial({ color: 0x3a3a18 }));
  stem.position.y = 0.38; g.add(stem);
  // Gesicht
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#ffb040';
  ctx.beginPath(); ctx.moveTo(30, 50); ctx.lineTo(50, 30); ctx.lineTo(56, 56); ctx.fill();
  ctx.beginPath(); ctx.moveTo(98, 50); ctx.lineTo(78, 30); ctx.lineTo(72, 56); ctx.fill();
  ctx.beginPath(); ctx.moveTo(24, 76); for (let i = 0; i <= 8; i++) ctx.lineTo(24 + i * 10, i % 2 ? 86 : 98); ctx.lineTo(104, 76); ctx.quadraticCurveTo(64, 112, 24, 76); ctx.fill();
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
  const face = new THREE.Mesh(new THREE.PlaneGeometry(0.34, 0.34), new THREE.MeshBasicMaterial({ map: tex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
  face.position.set(0, 0.2, 0.235); g.add(face);
  g.position.set(x, y, z); g.rotation.y = ry;
  body.castShadow = true;
  scene.add(g);
  return { g, face };
}

export function graveLight(scene, x, y, z) {
  const g = new THREE.Group();
  const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.045, 0.13, 10), new THREE.MeshBasicMaterial({ color: 0x8a1008, transparent: true, opacity: 0.9 }));
  cup.position.y = 0.07; g.add(cup);
  const lid = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.05, 0.03, 10), new THREE.MeshLambertMaterial({ color: 0x777777 }));
  lid.position.y = 0.15; g.add(lid);
  const halo = haloSprite(0xff3018, 0.8, 0.7); halo.position.y = 0.1; g.add(halo);
  g.position.set(x, y, z); scene.add(g);
  return { g, halo };
}

export { boxGeo, cylGeo, planeGeo };
