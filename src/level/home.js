// Zuhause: zweistöckige Wohnung (liegt weit abseits bei x=500).
// OG (y=3): Leons Zimmer, Flur, Treppenpodest, Elternschlafzimmer (Papa schläft), Bad (zu).
// EG (y=0): Flur mit Abstellkammer unter der Treppe, Küche, Wohn-/Esszimmer, Diele mit Haustür.
import * as THREE from 'three';
import { G } from '../state.js';
import { boxGeo, cylGeo, planeGeo, lam, makeHuman } from '../models.js';
import * as T from '../textures.js';
import { haloSprite, emissive, signMesh } from './props.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
function crossGeoLocal(w, h) { const a = new THREE.PlaneGeometry(w, h); a.translate(0, h / 2, 0); const b = a.clone(); b.rotateY(Math.PI / 2); return mergeGeometries([a.toNonIndexed(), b.toNonIndexed()]); }

const OG = 3.0;          // Fußboden Obergeschoss
const CEIL_EG = 2.85, CEIL_OG = 5.6;
// Treppe: oben z=7.2 (y=3), unten z=11.2 (y=0), 14 Stufen
const ST = { x0: 504.3, x1: 505.4, zTop: 7.2, zBot: 11.2, n: 14 };
ST.run = (ST.zBot - ST.zTop) / ST.n; ST.rise = OG / ST.n;
const stairH = (z) => {
  if (z <= ST.zTop) return OG;
  if (z >= ST.zBot) return 0;
  const i = Math.floor((ST.zBot - z) / ST.run);           // 0 = unterste Stufe
  return Math.min(OG, (i + 1) * ST.rise);
};

export const HOME = {
  ox: 500,
  spawn: [500.9, OG, 2.9],
  ogSpawn: [502.65, OG, 3.7],
  egSpawn: [504.85, 0, 11.95],
  frontDoor: new THREE.Vector3(503.6, 1.1, 15.35),
  stairs: ST,
};

function tileTex() {
  const c = document.createElement('canvas'); c.width = c.height = 256;
  const x = c.getContext('2d');
  x.fillStyle = '#6d6a62'; x.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) {
    const v = 150 + ((i * 7 + j * 3) % 5) * 6;
    x.fillStyle = `rgb(${v},${v - 4},${v - 12})`; x.fillRect(i * 64 + 2, j * 64 + 2, 60, 60);
    for (let k = 0; k < 40; k++) { x.fillStyle = `rgba(0,0,0,${Math.random() * 0.06})`; x.fillRect(i * 64 + 2 + Math.random() * 58, j * 64 + 2 + Math.random() * 58, 3, 3); }
  }
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return t;
}
function gapTex() {
  const c = document.createElement('canvas'); c.width = 64; c.height = 64;
  const x = c.getContext('2d');
  const g = x.createLinearGradient(0, 0, 0, 64); g.addColorStop(0, 'rgba(255,190,120,1)'); g.addColorStop(0.35, 'rgba(255,170,100,.45)'); g.addColorStop(1, 'rgba(255,150,80,0)');
  x.fillStyle = g; x.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}
function streetGlowTex(warm = true) {
  const c = document.createElement('canvas'); c.width = 64; c.height = 64;
  const gx = c.getContext('2d'); const gg = gx.createRadialGradient(40, 18, 2, 40, 18, 60);
  gg.addColorStop(0, warm ? '#b07a40' : '#5a6a8a'); gg.addColorStop(0.4, warm ? '#2a1c14' : '#161b26'); gg.addColorStop(1, '#07080b');
  gx.fillStyle = gg; gx.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}

export function buildHome(scene, world, M, B) {
  world.tag = 'Zuhause';
  const wallM = M.plasterW;
  const box = (w, h, d, mat, x, y, z, ry = 0) => B.add(boxGeo(w, h, d, 1.5), mat, x, y, z, 0, ry, 0);
  // Wand mit Kollision; y0/y1 = Stockwerk
  const wall = (x0, x1, z0, z1, y0, y1, mat = wallM, coll = true) => {
    box(x1 - x0, y1 - y0, z1 - z0, mat, (x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2);
    if (coll) world.addBox(x0, x1, z0, z1, y0 - (y0 < 1 ? 1 : 0.1), y1 + 0.1);
  };
  const col = (x0, x1, z0, z1, y0, y1) => world.addBox(x0, x1, z0, z1, y0, y1);
  // Wand entlang z mit Öffnung [a,b] (Tür bis Höhe dh, darüber Sturz)
  const wallZ = (x0, x1, z0, z1, y0, y1, holes = [], mat = wallM) => {
    let z = z0;
    for (const [a, b, dh, sill = 0] of holes) {
      if (a > z) wall(x0, x1, z, a, y0, y1, mat);
      if (dh < y1 - y0) box(x1 - x0, y1 - y0 - dh, b - a, mat, (x0 + x1) / 2, y0 + dh + (y1 - y0 - dh) / 2, (a + b) / 2);
      if (sill > 0) { box(x1 - x0, sill, b - a, mat, (x0 + x1) / 2, y0 + sill / 2, (a + b) / 2); world.addBox(x0, x1, a, b, y0 - 0.5, y0 + sill); }
      z = b;
    }
    if (z < z1) wall(x0, x1, z, z1, y0, y1, mat);
  };
  const wallX = (x0, x1, z0, z1, y0, y1, holes = [], mat = wallM) => {
    let x = x0;
    for (const [a, b, dh, sill = 0] of holes) {
      if (a > x) wall(x, a, z0, z1, y0, y1, mat);
      if (dh < y1 - y0) box(b - a, y1 - y0 - dh, z1 - z0, mat, (a + b) / 2, y0 + dh + (y1 - y0 - dh) / 2, (z0 + z1) / 2);
      if (sill > 0) { box(b - a, sill, z1 - z0, mat, (a + b) / 2, y0 + sill / 2, (z0 + z1) / 2); world.addBox(a, b, z0, z1, y0 - 0.5, y0 + sill); }
      x = b;
    }
    if (x < x1) wall(x, x1, z0, z1, y0, y1, mat);
  };
  const doorMat = lam('doorWhite', { color: 0xbab4a6 });
  const doorPanel = (w, h, mat = doorMat) => { const g = new THREE.Group(); const d = new THREE.Mesh(boxGeo(w, h, 0.04, 1), mat); d.position.set(w / 2, h / 2, 0); d.castShadow = true; g.add(d); const hd = new THREE.Mesh(boxGeo(0.12, 0.02, 0.06, 1), M.metal); hd.position.set(w - 0.1, 1.0, 0); g.add(hd); g.userData.handle = hd; return g; };
  const windowAt = (x, y, z, w, h, ry, warm = true) => {
    const gl = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: streetGlowTex(warm) }));
    gl.position.set(x, y, z); gl.rotation.y = ry; scene.add(gl);
    const f1 = new THREE.Mesh(boxGeo(0.05, h, 0.04, 1), M.white); f1.position.set(x, y, z); f1.rotation.y = ry; scene.add(f1);
    const f2 = new THREE.Mesh(boxGeo(w, 0.04, 0.04, 1), M.white); f2.position.set(x, y, z); f2.rotation.y = ry; scene.add(f2);
    return gl;
  };
  const tileM = lam('kitchenTile', { map: tileTex() }); tileM.map.repeat.set(1, 1);
  const carpetM = lam('carpet', { color: 0x40362f });
  const stairM = lam('stairWood', { map: T.planksTex('floor'), color: 0x9a8a78 });

  // ================= Böden & Decken =================
  // EG
  const egFloor = new THREE.Mesh(planeGeo(9.6, 13.4, 1.5), M.floor); egFloor.rotation.x = -Math.PI / 2; egFloor.position.set(500.7, 0.001, 8.7); egFloor.receiveShadow = true; scene.add(egFloor);
  const kFloor = new THREE.Mesh(planeGeo(4.4, 4.0, 0.6), tileM); kFloor.rotation.x = -Math.PI / 2; kFloor.position.set(503.2, 0.004, 4.0); kFloor.receiveShadow = true; scene.add(kFloor);
  world.addFloor(495.8, 505.6, 1.8, 15.6, 0, { label: 'Boden EG' });
  world.addSurface(495.8, 505.6, 1.8, 15.6, 'woodfloor', -0.5, 1.4);
  world.addSurface(501.0, 505.4, 2.0, 6.0, 'tile', -0.5, 1.4);
  // Decke EG = Unterseite OG (Treppenloch ausgespart)
  const egCeil = (x0, x1, z0, z1) => { const m = new THREE.Mesh(planeGeo(x1 - x0, z1 - z0, 2), M.plasterW); m.rotation.x = Math.PI / 2; m.position.set((x0 + x1) / 2, CEIL_EG, (z0 + z1) / 2); scene.add(m); };
  egCeil(495.8, ST.x0, 1.8, 15.6); egCeil(ST.x0, 505.6, 1.8, ST.zTop); egCeil(ST.x0, 505.6, ST.zBot, 15.6);
  // OG-Boden
  const ogFloor = (x0, x1, z0, z1) => { const m = new THREE.Mesh(planeGeo(x1 - x0, z1 - z0, 1.5), M.floor); m.rotation.x = -Math.PI / 2; m.position.set((x0 + x1) / 2, OG + 0.001, (z0 + z1) / 2); m.receiveShadow = true; scene.add(m); };
  ogFloor(497.5, ST.x0, -0.1, 11.2); ogFloor(ST.x0, 505.6, 4.4, ST.zTop);
  world.addFloor(499.8, 504.2, -0.2, 4.5, OG, { label: 'Boden Leons Zimmer' });
  world.addFloor(497.5, 504.32, 4.4, 9.7, OG, { label: 'Boden OG Flur' });
  world.addFloor(ST.x0 - 0.02, 505.5, 4.4, ST.zTop, OG, { label: 'Treppenpodest' });
  world.addFloor(ST.x0, ST.x1, ST.zTop, ST.zBot, (x, z) => stairH(z), { label: 'Treppe' });
  world.addSurface(499.5, 505.6, -0.5, 11.2, 'woodfloor', 2.5, 4.5);
  world.addSurface(ST.x0, ST.x1, ST.zTop - 0.05, ST.zBot, 'stairs', -0.2, 3.3);
  const ogCeil = new THREE.Mesh(planeGeo(8.2, 11.8, 2), M.plasterW); ogCeil.rotation.x = Math.PI / 2; ogCeil.position.set(501.5, CEIL_OG, 5.6); scene.add(ogCeil);

  // ================= OG: Leons Zimmer =================
  world.tag = 'Leons Zimmer';
  const Y = OG;
  wall(499.9, 500.0, 0, 4.4, Y, CEIL_OG, M.wallpaper);
  wall(499.9, 504.1, -0.1, 0, Y, CEIL_OG, M.wallpaper);
  wallZ(504.0, 504.1, 0, 4.4, Y, CEIL_OG, [[1.4, 2.8, 2.1, 0.9]], M.wallpaper);
  // Süd mit Tür x 502.2..503.1
  wallX(499.9, 505.4, 4.4, 4.5, Y, CEIL_OG, [[502.2, 503.1, 2.1]], M.wallpaper);
  for (const x of [502.2, 503.1]) B.add(boxGeo(0.06, 2.1, 0.14, 1), M.white, x, Y + 1.05, 4.45);
  world.addRegionBox(500.0, 504.0, 0.0, 4.4, { label: 'Leons Zimmer', minY: 2.0, maxY: 9 });
  world.addRegionBox(502.2, 503.1, 3.8, 5.1, { label: 'Zimmertür', minY: 2.0, maxY: 9 });

  // Bett
  B.add(boxGeo(1.0, 0.32, 2.1, 1), M.darkWood, 500.55, Y + 0.16, 1.15);
  B.add(boxGeo(0.96, 0.16, 2.0, 1), lam('mattressW', { color: 0xc8c4b8 }), 500.55, Y + 0.4, 1.15);
  const duvet = new THREE.Mesh(boxGeo(1.0, 0.12, 1.4, 1), lam('duvet', { color: 0x3a4a5e }));
  duvet.position.set(500.58, Y + 0.52, 1.55); duvet.rotation.set(0.02, 0.06, -0.03); duvet.castShadow = true; scene.add(duvet);
  B.add(boxGeo(0.6, 0.12, 0.35, 1), lam('pillow', { color: 0xd0ccc0 }), 500.55, Y + 0.54, 0.35);
  col(500.0, 501.1, 0.0, 2.25, Y - 0.1, Y + 0.6);
  const po = new THREE.Mesh(new THREE.PlaneGeometry(0.6, 0.85), new THREE.MeshLambertMaterial({ map: T.posterTex() }));
  po.position.set(500.02, Y + 1.6, 1.3); po.rotation.y = Math.PI / 2; scene.add(po);
  // Schreibtisch + Monitor
  B.add(boxGeo(1.7, 0.05, 0.7, 1), M.wood, 502.45, Y + 0.75, 0.4);
  for (const x of [501.65, 503.25]) B.add(boxGeo(0.05, 0.75, 0.66, 1), M.wood, x, Y + 0.375, 0.4);
  col(501.6, 503.3, 0.0, 0.78, Y - 0.1, Y + 0.85);
  B.add(boxGeo(0.62, 0.38, 0.04, 1), M.black, 502.4, Y + 1.07, 0.2);
  B.add(boxGeo(0.05, 0.2, 0.05, 1), M.black, 502.4, Y + 0.86, 0.22);
  const scr = new THREE.Mesh(new THREE.PlaneGeometry(0.58, 0.34), new THREE.MeshBasicMaterial({ map: T.monitorTex() }));
  scr.position.set(502.4, Y + 1.07, 0.225); scene.add(scr);
  world.addLamp({ pos: [502.4, Y + 1.1, 0.6], color: 0x6a8ad8, intensity: 0.9, distance: 3.2, visibleDist: 30 });
  B.add(boxGeo(0.45, 0.02, 0.15, 1), M.black, 502.35, Y + 0.785, 0.55);
  B.add(boxGeo(0.06, 0.02, 0.1, 1), M.black, 502.75, Y + 0.785, 0.55);
  B.add(cylGeo(0.07, 0.08, 0.02, 10, 1), M.black, 501.85, Y + 0.78, 0.2);
  B.add(cylGeo(0.012, 0.012, 0.4, 6, 1), M.black, 501.85, Y + 0.98, 0.2);
  B.add(cylGeo(0.06, 0.1, 0.12, 10, 1), M.black, 501.9, Y + 1.17, 0.27);
  // Handy auf dem Tisch
  const phone = new THREE.Group();
  const pb = new THREE.Mesh(boxGeo(0.075, 0.01, 0.155, 1), lam('pbody', { color: 0x111111 })); phone.add(pb);
  const pscr = new THREE.Mesh(new THREE.PlaneGeometry(0.068, 0.145), new THREE.MeshBasicMaterial({ color: 0x0a0a0a })); pscr.rotation.x = -Math.PI / 2; pscr.position.y = 0.006; phone.add(pscr);
  phone.position.set(503.0, Y + 0.78, 0.5); phone.rotation.y = -0.3; scene.add(phone);
  const pglow = haloSprite(0x9ab0ff, 0.5, 0); pglow.position.set(503.0, Y + 0.83, 0.5); scene.add(pglow);
  G.objects.homePhone = {
    group: phone, pos: new THREE.Vector3(503.0, Y + 0.8, 0.5),
    light(on) { pscr.material.color.set(on ? 0x8aa4e8 : 0x0a0a0a); pglow.material.opacity = on ? 0.6 : 0; },
  };
  // Stuhl + Jacke
  B.add(boxGeo(0.45, 0.05, 0.45, 1), M.black, 502.4, Y + 0.47, 1.25);
  B.add(boxGeo(0.45, 0.5, 0.05, 1), M.black, 502.4, Y + 0.78, 1.47);
  B.add(cylGeo(0.03, 0.03, 0.45, 6, 1), M.metal, 502.4, Y + 0.23, 1.25);
  col(502.15, 502.65, 1.0, 1.5, Y - 0.1, Y + 0.9);
  const jacket = new THREE.Group();
  const jb = new THREE.Mesh(boxGeo(0.5, 0.55, 0.12, 1), lam('jacket', { color: 0x1e2a1e })); jb.position.set(0, 0.8, 1.5); jb.rotation.x = 0.15; jacket.add(jb);
  const js = new THREE.Mesh(boxGeo(0.12, 0.45, 0.12, 1), jb.material); js.position.set(-0.28, 0.72, 1.45); js.rotation.z = 0.2; jacket.add(js);
  const js2 = js.clone(); js2.position.x = 0.28; js2.rotation.z = -0.2; jacket.add(js2);
  jacket.position.set(502.4, Y, 0); jacket.traverse((o) => { if (o.isMesh) o.castShadow = true; }); scene.add(jacket);
  G.objects.jacket = { group: jacket, pos: new THREE.Vector3(502.4, Y + 0.9, 1.5) };
  // Schrank, Wäsche, Regal, Nachttisch, Rucksack, Sneaker, Kopfhörer, Pflanze, Deckenlampe, Teppich
  B.add(boxGeo(0.62, 2.1, 1.3, 1), M.wood, 500.36, Y + 1.05, 3.75);
  B.add(boxGeo(0.01, 1.9, 0.01, 1), M.black, 500.68, Y + 1.05, 3.75);
  col(500.0, 500.7, 3.05, 4.4, Y - 0.1, Y + 2.2);
  B.add(boxGeo(0.4, 0.15, 0.35, 1), lam('laundry', { color: 0x3a3a46 }), 501.0, Y + 0.08, 3.9, 0, 0.4, 0);
  B.add(boxGeo(0.3, 1.8, 0.9, 1), M.wood, 503.83, Y + 0.9, 3.6);
  for (let sh = 0; sh < 4; sh++) {
    B.add(boxGeo(0.3, 0.03, 0.9, 1), M.darkWood, 503.83, Y + 0.25 + sh * 0.45, 3.6);
    for (let i = 0; i < 7; i++) if ((i + sh) % 5 !== 0) B.add(boxGeo(0.2, 0.2 + ((i * 7 + sh) % 4) * 0.03, 0.06, 1), lam('book' + ((i + sh) % 5), { color: [0x6a2a22, 0x2a3a5a, 0x3a5a3a, 0x7a6a40, 0x3a3a3a][(i + sh) % 5] }), 503.86, Y + 0.37 + sh * 0.45, 3.25 + i * 0.1);
  }
  col(503.65, 504.0, 3.1, 4.1, Y - 0.1, Y + 2);
  B.add(boxGeo(0.4, 0.5, 0.4, 1), M.wood, 500.3, Y + 0.25, 2.55); col(500.0, 500.5, 2.33, 2.77, Y - 0.1, Y + 0.6);
  B.add(cylGeo(0.06, 0.08, 0.03, 10, 1), M.black, 500.3, Y + 0.52, 2.5); B.add(cylGeo(0.012, 0.012, 0.25, 6, 1), M.black, 500.3, Y + 0.65, 2.5);
  B.add(cylGeo(0.07, 0.11, 0.13, 12, 1), lam('lampShade', { color: 0xd8ccb4 }), 500.3, Y + 0.82, 2.5);
  B.add(boxGeo(0.35, 0.45, 0.2, 1), lam('backpack', { color: 0x1e2a3a }), 501.5, Y + 0.22, 3.95, 0.1, 0.3, 0);
  for (const dx of [0, 0.14]) B.add(boxGeo(0.11, 0.09, 0.29, 1), lam('sneakerW', { color: 0xd6d6d0 }), 502.0 + dx, Y + 0.045, 3.75, 0, 0.15, 0);
  const hp = new THREE.Mesh(new THREE.TorusGeometry(0.09, 0.015, 6, 16, Math.PI), M.black); hp.position.set(502.85, Y + 0.84, 0.35); hp.rotation.set(0, 0.4, 0); scene.add(hp);
  B.add(cylGeo(0.1, 0.08, 0.2, 10, 1), lam('pot', { color: 0x8a4a30 }), 503.85, Y + 1.02, 1.7);
  const plant = new THREE.Mesh(crossGeoLocal(0.5, 0.45), M.hedge); plant.position.set(503.85, Y + 1.1, 1.7); scene.add(plant);
  B.add(cylGeo(0.18, 0.22, 0.12, 14, 1), lam('ceilLamp', { color: 0xc8c0b0 }), 502.0, CEIL_OG - 0.06, 2.2);
  B.add(cylGeo(0.15, 0.15, 0.02, 14, 1), lam('ceilLampG', { color: 0xe8e0d0 }), 502.0, CEIL_OG - 0.125, 2.2);
  B.add(cylGeo(0.006, 0.006, 0.8, 4, 1), M.black, 502.5, Y + 0.4, 0.1);
  const rug = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 1.1), lam('rug', { color: 0x4a3a34 })); rug.rotation.x = -Math.PI / 2; rug.position.set(501.9, Y + 0.005, 2.6); rug.receiveShadow = true; scene.add(rug);
  windowAt(504.04, Y + 1.5, 2.1, 1.4, 1.2, -Math.PI / 2);
  for (const z of [1.25, 2.95]) { const cu = new THREE.Mesh(boxGeo(0.04, 1.8, 0.4, 1), lam('curtain', { color: 0x4a2a2a })); cu.position.set(503.92, Y + 1.55, z); scene.add(cu); }
  B.add(boxGeo(0.2, 0.04, 1.5, 1), M.white, 503.9, Y + 0.9, 2.1);
  world.addLamp({ pos: [503.4, Y + 2.3, 2.1], color: 0xffa860, intensity: 3.5, distance: 6, visibleDist: 30 });

  // ================= OG: Flur, Podest, Geländer =================
  world.tag = 'OG Flur';
  // West: Wand zum Elternschlafzimmer mit Tür z 6.4..7.3
  wallZ(501.95, 502.05, 4.5, 9.7, Y, CEIL_OG, [[6.4, 7.3, 2.1]]);
  for (const z of [6.4, 7.3]) B.add(boxGeo(0.14, 2.1, 0.06, 1), M.white, 502.0, Y + 1.05, z);
  // Süd: Badtür (zu)
  wallX(501.95, ST.x0, 9.6, 9.7, Y, CEIL_OG, [[502.6, 503.5, 2.1]]);
  const bathDoor = doorPanel(0.9, 2.05); bathDoor.position.set(502.6, Y, 9.63); scene.add(bathDoor);
  col(502.6, 503.5, 9.6, 9.7, Y - 0.1, Y + 2.2);
  // Ost: Außenwand (Podest + Treppenhaus) mit Fenster auf halber Treppe
  wallZ(505.4, 505.6, 4.4, 15.6, 1.5, CEIL_OG, [[8.5, 9.9, 1.8, 0.5]]);
  windowAt(505.38, 2.65, 9.2, 1.3, 1.25, -Math.PI / 2, false);
  world.addLamp({ pos: [504.9, 2.6, 9.2], color: 0x8a9ac8, intensity: 1.6, distance: 5, visibleDist: 30 });
  // Geländer am Treppenloch (x=504.3, z 7.2..9.6) und südliche Treppenhauswand im OG
  B.add(boxGeo(0.06, 0.06, 2.45, 1), M.darkWood, ST.x0, Y + 0.95, 8.42);
  for (let z = 7.3; z < 9.6; z += 0.18) B.add(boxGeo(0.03, 0.92, 0.03, 1), M.white, ST.x0, Y + 0.46, z);
  col(ST.x0 - 0.05, ST.x0 + 0.05, ST.zTop - 0.02, 9.7, 2.9, Y + 1.0, { label: 'Geländer' });
  wall(ST.x0, 505.4, 11.15, 11.25, Y, CEIL_OG);
  // Wand Bad/Treppenhaus (OG, über der Abstellkammer)
  wall(ST.x0 - 0.05, ST.x0 + 0.05, 9.7, 11.2, Y, CEIL_OG);
  // Handlauf an der Außenwand
  {
    const len = Math.hypot(ST.zBot - ST.zTop, OG);
    const hr = new THREE.Mesh(cylGeo(0.025, 0.025, len, 8, 1), M.darkWood);
    hr.position.set(ST.x1 - 0.06, OG / 2 + 0.92, (ST.zTop + ST.zBot) / 2); hr.rotation.x = Math.atan2(ST.zBot - ST.zTop, OG); scene.add(hr);
  }
  world.addRegionBox(502.0, ST.x0 + 0.1, 4.4, 9.6, { label: 'OG Flur', minY: 2.0, maxY: 9 });
  world.addRegionBox(503.8, 505.4, 4.4, ST.zTop + 0.4, { label: 'Treppenpodest', minY: 2.0, maxY: 9 });
  world.addRegionBox(ST.x0, 505.4, ST.zTop - 0.4, ST.zBot + 0.6, { label: 'Treppe' });
  // Läufer, Bilder, Nachtlicht, Kommode
  const runner = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 4.4), lam('runner', { color: 0x5a3028 })); runner.rotation.x = -Math.PI / 2; runner.position.set(503.15, Y + 0.006, 7.1); runner.receiveShadow = true; scene.add(runner);
  for (const [z, c] of [[5.2, 0x5a6a7a], [8.4, 0x7a6a4a]]) { B.add(boxGeo(0.03, 0.42, 0.34, 1), M.darkWood, 502.07, Y + 1.6, z); const pic = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 0.36), lam('pic' + z, { color: c })); pic.position.set(502.09, Y + 1.6, z); pic.rotation.y = Math.PI / 2; scene.add(pic); }
  const nl = new THREE.Mesh(boxGeo(0.04, 0.08, 0.06, 1), emissive(0xffb060)); nl.position.set(502.07, Y + 0.3, 8.9); scene.add(nl);
  const nlh = haloSprite(0xffa050, 0.6, 0.5); nlh.position.set(502.12, Y + 0.3, 8.9); scene.add(nlh);
  world.addLamp({ pos: [502.4, Y + 0.4, 8.9], color: 0xff9a40, intensity: 1.2, distance: 4.2, visibleDist: 30 });
  B.add(boxGeo(0.4, 0.8, 0.9, 1), M.wood, 504.0, Y + 0.4, 5.3); col(503.75, 504.3, 4.8, 5.8, Y - 0.1, Y + 0.85);
  B.add(cylGeo(0.07, 0.06, 0.2, 10, 1), lam('vase', { color: 0x4a5a6a }), 504.0, Y + 0.9, 5.1);
  // Schild an der Elterntür (Flurseite)
  const ps = signMesh([{ t: 'Bitte leise :)', font: '40px "Comic Sans MS"' }], 0.3, 0.12, { w: 256, h: 100, bg: '#e8e0c8', border: null });
  ps.position.set(502.08, Y + 1.5, 6.85); ps.rotation.y = Math.PI / 2; scene.add(ps);

  // ================= OG: Elternschlafzimmer =================
  world.tag = 'Elternschlafzimmer';
  wall(497.5, 497.6, 4.4, 9.7, Y, CEIL_OG);
  wall(497.5, 501.95, 4.4, 4.5, Y, CEIL_OG);
  wall(497.5, 501.95, 9.6, 9.7, Y, CEIL_OG);
  windowAt(497.62, Y + 1.5, 7.0, 1.0, 1.0, Math.PI / 2);
  for (const z of [6.35, 7.65]) { const cu = new THREE.Mesh(boxGeo(0.04, 1.5, 0.45, 1), lam('curtainP', { color: 0x3a3a48 })); cu.position.set(497.68, Y + 1.5, z); scene.add(cu); }
  // Doppelbett
  B.add(boxGeo(2.0, 0.34, 1.8, 1), M.darkWood, 498.7, Y + 0.17, 6.9);
  B.add(boxGeo(0.08, 0.9, 1.84, 1), M.darkWood, 497.66, Y + 0.45, 6.9);
  B.add(boxGeo(1.94, 0.16, 1.74, 1), lam('mattressP', { color: 0xc4c0b4 }), 498.7, Y + 0.42, 6.9);
  B.add(boxGeo(0.45, 0.12, 0.6, 1), lam('pillow', {}), 497.95, Y + 0.56, 6.45); B.add(boxGeo(0.45, 0.12, 0.6, 1), lam('pillow', {}), 497.95, Y + 0.56, 7.35);
  const duvP = new THREE.Mesh(boxGeo(1.5, 0.1, 1.76, 1), lam('duvetP', { color: 0x5a4e44 })); duvP.position.set(498.95, Y + 0.54, 6.9); duvP.castShadow = true; scene.add(duvP);
  // schlafende Gestalt unter der Decke
  const lump = new THREE.Group();
  const lb = new THREE.Mesh(new THREE.CapsuleGeometry(0.22, 1.1, 4, 10), lam('duvetP', {})); lb.rotation.z = Math.PI / 2; lb.scale.set(1, 1, 0.75); lb.position.set(0.15, 0.12, 0); lump.add(lb);
  const lh = new THREE.Mesh(new THREE.SphereGeometry(0.11, 10, 8), lam('dadSkin', { color: 0x8d6e5a })); lh.position.set(-0.68, 0.14, 0.05); lump.add(lh);
  const lhair = new THREE.Mesh(new THREE.SphereGeometry(0.115, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.55), lam('dadHair', { color: 0x2a2420 })); lhair.position.copy(lh.position); lhair.rotation.z = Math.PI / 2; lump.add(lhair);
  lump.position.set(498.6, Y + 0.56, 6.55); lump.traverse((o) => { if (o.isMesh) o.castShadow = true; }); scene.add(lump);
  col(497.6, 499.7, 6.0, 7.8, Y - 0.1, Y + 0.65);
  // Nachttische + Lampe
  for (const z of [5.7, 8.1]) B.add(boxGeo(0.45, 0.5, 0.4, 1), M.wood, 497.85, Y + 0.25, z);
  B.add(cylGeo(0.08, 0.13, 0.16, 12, 1), lam('lampShade', {}), 497.85, Y + 0.72, 8.1);
  const bedLampLight = world.addLamp({ pos: [498.2, Y + 0.9, 8.0], color: 0xffb070, intensity: 4.5, distance: 6, visibleDist: 30, enabled: false });
  const bedLampGlow = haloSprite(0xffb070, 0.6, 0.0); bedLampGlow.position.set(497.85, Y + 0.75, 8.1); scene.add(bedLampGlow);
  B.add(boxGeo(1.6, 2.1, 0.6, 1), M.wood, 499.4, Y + 1.05, 9.3); col(498.6, 500.2, 9.0, 9.6, Y - 0.1, Y + 2.2);
  const slippers = new THREE.Group(); for (const dx of [0, 0.15]) { const s = new THREE.Mesh(boxGeo(0.1, 0.05, 0.26, 1), lam('slipper', { color: 0x3a3a52 })); s.position.set(dx, 0.025, 0); slippers.add(s); } slippers.position.set(499.9, Y, 6.7); slippers.rotation.y = 0.3; scene.add(slippers);

  // Elterntür (Scharnier bei z=6.4, öffnet ins Schlafzimmer)
  const pDoor = doorPanel(0.88, 2.05); pDoor.position.set(502.0, Y, 6.42); pDoor.rotation.y = -Math.PI / 2; scene.add(pDoor);
  const pDoorCol = world.addBox(501.93, 502.07, 6.4, 7.3, Y - 0.1, Y + 2.2, { label: 'Elterntür' });
  const doorAnim = { v: 0, target: 0 };
  world.updaters.push((dt) => {
    doorAnim.v += (doorAnim.target - doorAnim.v) * (1 - Math.exp(-2.6 * dt));
    pDoor.rotation.y = -Math.PI / 2 - doorAnim.v * 1.45;
    pDoorCol.enabled = doorAnim.v < 0.15;
  });
  // Lichtspalt unter der Tür + Schatten der Füße
  const gap = new THREE.Mesh(new THREE.PlaneGeometry(0.85, 0.32), new THREE.MeshBasicMaterial({ map: gapTex(), transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
  gap.rotation.x = -Math.PI / 2; gap.rotation.z = Math.PI / 2; gap.position.set(502.21, Y + 0.008, 6.85); scene.add(gap);
  const gapLamp = world.addLamp({ pos: [502.3, Y + 0.12, 6.85], color: 0xffaa66, intensity: 1.2, distance: 2.2, visibleDist: 30, enabled: false });
  const feet = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 0.2), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.85, depthWrite: false }));
  feet.rotation.x = -Math.PI / 2; feet.position.set(502.12, Y + 0.01, 6.85); feet.visible = false; scene.add(feet);

  // ================= Treppe =================
  world.tag = 'Treppe';
  for (let i = 0; i < ST.n; i++) {
    const z1 = ST.zBot - i * ST.run, z0 = z1 - ST.run, y = (i + 1) * ST.rise;
    B.add(boxGeo(ST.x1 - ST.x0, 0.04, ST.run + 0.03, 1), stairM, (ST.x0 + ST.x1) / 2, y - 0.02, (z0 + z1) / 2);
    B.add(boxGeo(ST.x1 - ST.x0, ST.rise, 0.02, 1), M.white, (ST.x0 + ST.x1) / 2, y - ST.rise / 2, z1 - 0.01);
  }
  // Wange (Seitenbrett) zur Kammer hin
  {
    const len = Math.hypot(ST.zBot - ST.zTop, OG);
    const s = new THREE.Mesh(boxGeo(0.05, 0.3, len, 1), M.white); s.position.set(ST.x0 - 0.02, OG / 2 + 0.05, (ST.zTop + ST.zBot) / 2); s.rotation.x = Math.atan2(OG, ST.zBot - ST.zTop); scene.add(s);
  }

  // ================= EG =================
  world.tag = 'EG Außenwände';
  const E = 0, EY = CEIL_EG;
  wallZ(495.8, 496.0, 1.8, 15.6, E, EY, [[8.4, 10.4, 2.2, 0.9]]);              // West (Wohnzimmerfenster)
  windowAt(496.02, 1.55, 9.4, 2.0, 1.3, Math.PI / 2);
  wallZ(505.4, 505.6, 1.8, 15.6, E, 1.5);                                    // Ost unten (oben siehe Treppenhaus)
  wall(505.4, 505.6, 1.8, 4.4, 1.5, EY);
  wallX(495.8, 505.6, 1.8, 2.0, E, EY, [[497.4, 498.9, 2.2, 0.9], [502.6, 503.9, 2.2, 1.1]]);   // Nord (Ess- und Küchenfenster)
  windowAt(498.15, 1.55, 2.02, 1.5, 1.3, 0); windowAt(503.25, 1.65, 2.02, 1.3, 1.1, 0);
  wallX(495.8, 505.6, 15.4, 15.6, E, EY, [[497.4, 499.4, 2.2, 0.9], [503.1, 504.1, 2.1]]);   // Süd (Fenster, Haustür)
  windowAt(498.4, 1.55, 15.38, 2.0, 1.3, Math.PI);
  world.addLamp({ pos: [498.3, 1.6, 15.0], color: 0xffa860, intensity: 1.8, distance: 5.5, visibleDist: 30 });
  world.addLamp({ pos: [496.4, 1.6, 9.4], color: 0xffa860, intensity: 2.2, distance: 6, visibleDist: 30 });
  world.addLamp({ pos: [503.25, 1.7, 2.4], color: 0x8ea0c8, intensity: 1.5, distance: 4.5, visibleDist: 30 });

  // --- Küche ---
  world.tag = 'Küche';
  wallZ(500.95, 501.05, 2.0, 6.0, E, EY, [[3.4, 4.4, 2.1]]);                 // West mit Durchgang zum Essbereich
  wallX(500.95, 505.4, 5.95, 6.05, E, EY, [[502.3, 503.4, 2.1]]);            // Süd mit Tür zum Flur
  // Zeile mit Spüle, Herd, Oberschränke
  B.add(boxGeo(3.4, 0.9, 0.62, 1), lam('kCab', { color: 0x8a8476 }), 502.9, 0.45, 2.31); col(501.05, 504.65, 2.0, 2.65, -1, 0.95);
  B.add(boxGeo(3.42, 0.04, 0.64, 1), lam('kTop', { color: 0x3a3632 }), 502.9, 0.92, 2.32);
  B.add(boxGeo(0.5, 0.05, 0.38, 1), M.metal, 503.3, 0.93, 2.3);
  B.add(boxGeo(0.6, 0.02, 0.5, 1), M.black, 501.9, 0.95, 2.3);
  for (const x of [501.75, 502.05]) for (const z of [2.18, 2.42]) B.add(cylGeo(0.08, 0.08, 0.005, 14, 1), M.darkMetal, x, 0.962, z);
  B.add(boxGeo(1.6, 0.7, 0.35, 1), lam('kCab', {}), 501.85, 1.95, 2.18); B.add(boxGeo(0.9, 0.7, 0.35, 1), lam('kCab', {}), 504.2, 1.95, 2.18);
  B.add(cylGeo(0.07, 0.08, 0.2, 12, 1), M.metal, 504.4, 1.04, 2.35);
  for (let i = 0; i < 4; i++) { const f = new THREE.Mesh(new THREE.SphereGeometry(0.045, 8, 6), lam('fruit' + (i % 2), { color: i % 2 ? 0x8a2a1a : 0xb08a2a })); f.position.set(502.55 + (i % 2) * 0.07, 0.98 + Math.floor(i / 2) * 0.05, 2.45 + (i >> 1) * 0.06); scene.add(f); }
  B.add(cylGeo(0.12, 0.08, 0.06, 14, 1), lam('bowl', { color: 0x9a9488 }), 502.6, 0.96, 2.5);
  // Kühlschrank (Tür öffnet beim Vater)
  B.add(boxGeo(0.66, 1.85, 0.66, 1), lam('fridge', { color: 0xc8c6c0 }), 505.05, 0.925, 3.15); col(504.7, 505.4, 2.8, 3.5, -1, 1.9);
  const fDoor = new THREE.Group(); const fdm = new THREE.Mesh(boxGeo(0.05, 1.82, 0.66, 1), lam('fridgeD', { color: 0xd2d0ca })); fdm.position.set(0, 0.91, 0.33); fDoor.add(fdm);
  fDoor.position.set(504.7, 0.02, 2.82); scene.add(fDoor);
  const fridgeLight = world.addLamp({ pos: [504.4, 1.2, 3.15], color: 0xdde8ff, intensity: 5, distance: 5, visibleDist: 30, enabled: false });
  const fridgeAnim = { v: 0, t: 0 };
  world.updaters.push((dt) => { fridgeAnim.v += (fridgeAnim.t - fridgeAnim.v) * (1 - Math.exp(-4 * dt)); fDoor.rotation.y = -fridgeAnim.v * 1.6; });
  // Zettel am Kühlschrank
  const note = signMesh([{ t: 'Bin bis Sonntag', font: '30px "Comic Sans MS"' }, { t: 'bei Oma.', font: '30px "Comic Sans MS"' }, { t: 'Kuss, Mama', font: '26px "Comic Sans MS"' }], 0.16, 0.16, { w: 200, h: 200, bg: '#e6e0a8', border: null });
  note.position.set(504.69, 1.35, 3.0); note.rotation.y = -Math.PI / 2; scene.add(note);
  // Tisch + Stühle
  B.add(boxGeo(0.8, 0.04, 0.8, 1), M.wood, 502.9, 0.74, 4.5); for (const [dx, dz] of [[-0.35, -0.35], [0.35, -0.35], [-0.35, 0.35], [0.35, 0.35]]) B.add(boxGeo(0.04, 0.74, 0.04, 1), M.wood, 502.9 + dx, 0.37, 4.5 + dz);
  col(502.5, 503.3, 4.1, 4.9, -1, 0.78);
  for (const dz of [-0.62, 0.62]) { B.add(boxGeo(0.4, 0.04, 0.4, 1), M.wood, 502.9, 0.45, 4.5 + dz); B.add(boxGeo(0.4, 0.45, 0.04, 1), M.wood, 502.9, 0.7, 4.5 + dz * 1.32); }
  // Uhr
  const clock = new THREE.Mesh(cylGeo(0.14, 0.14, 0.03, 20, 1), lam('clockF', { color: 0xe0dcd0 })); clock.rotation.z = Math.PI / 2; clock.position.set(501.07, 2.1, 5.0); scene.add(clock);
  const kitchenLampL = world.addLamp({ pos: [503.2, 2.6, 4.1], color: 0xfff0d8, intensity: 6, distance: 7, visibleDist: 30, enabled: false });
  B.add(cylGeo(0.2, 0.25, 0.1, 14, 1), lam('ceilLamp', {}), 503.2, EY - 0.05, 4.1);
  // Leons Schlüssel auf der Arbeitsplatte
  const lkeys = new THREE.Group();
  for (let i = 0; i < 2; i++) { const k = new THREE.Mesh(new THREE.BoxGeometry(0.015, 0.004, 0.06), lam('hkey', { color: 0xb09a50 })); k.position.set(i * 0.025, 0, 0); k.rotation.y = i * 0.4; lkeys.add(k); }
  const lring = new THREE.Mesh(new THREE.TorusGeometry(0.02, 0.004, 4, 10), lam('hkey', {})); lring.rotation.x = Math.PI / 2; lring.position.set(0.01, 0, -0.04); lkeys.add(lring);
  const lfob = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.01, 0.045), lam('fobG', { color: 0x2a6a3a })); lfob.position.set(0.04, 0.003, -0.07); lkeys.add(lfob);
  lkeys.position.set(504.15, 0.95, 2.45); scene.add(lkeys);
  G.objects.homeKeys = { group: lkeys, pos: new THREE.Vector3(504.15, 0.96, 2.45) };
  world.addRegionBox(501.05, 505.4, 2.65, 5.95, { label: 'Küche', minY: -1, maxY: 1.6 });

  // --- EG Flur + Abstellkammer unter der Treppe ---
  world.tag = 'EG Flur';
  wallZ(501.95, 502.05, 6.0, 15.4, E, EY, [[11.6, 13.2, 2.1]]);              // West mit Durchgang ins Wohnzimmer
  for (const z of [11.6, 13.2]) B.add(boxGeo(0.14, 2.1, 0.06, 1), M.white, 502.0, 1.05, z);
  // Kammerwand mit Tür z 7.6..8.4, hinten zu (z 9.9)
  wallZ(ST.x0 - 0.05, ST.x0 + 0.05, ST.zTop, ST.zBot, E, EY, [[7.6, 8.4, 2.0]]);
  wall(ST.x0 + 0.05, 505.4, 9.85, 9.95, E, EY);
  wall(ST.x0 + 0.05, 505.4, ST.zTop - 0.05, ST.zTop + 0.05, E, EY);
  // Lamellentür (steht halb offen)
  const cDoor = new THREE.Group();
  const cFrame = lam('closetDoor', { color: 0xa8a294 });
  for (let i = 0; i < 16; i++) { const sl = new THREE.Mesh(boxGeo(0.03, 0.06, 0.78, 1), cFrame); sl.position.set(0, 0.15 + i * 0.115, 0.39); sl.rotation.z = 0.5; cDoor.add(sl); }
  for (const z of [0.02, 0.76]) { const fr = new THREE.Mesh(boxGeo(0.04, 1.98, 0.04, 1), cFrame); fr.position.set(0, 0.99, z); cDoor.add(fr); }
  cDoor.position.set(ST.x0 - 0.02, 0, 7.6); cDoor.rotation.y = 0.35; scene.add(cDoor);
  // Inhalt der Kammer: Staubsauger, Kisten, Besen
  B.add(boxGeo(0.4, 0.5, 0.35, 1), lam('box2', { color: 0x6a5a40 }), 505.1, 0.25, 9.55); B.add(boxGeo(0.35, 0.3, 0.3, 1), lam('box2', {}), 505.1, 0.65, 9.55);
  B.add(cylGeo(0.015, 0.015, 1.3, 6, 1), M.wood, 505.3, 0.65, 7.5, 0, 0, 0.12);
  // Schuhschrank in der Nische
  B.add(boxGeo(0.9, 0.9, 0.38, 1), M.white, 504.85, 0.45, 6.25); col(504.35, 505.4, 6.0, 6.45, -1, 0.95);
  const runnerE = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 4.6), lam('runner', {})); runnerE.rotation.x = -Math.PI / 2; runnerE.position.set(503.15, 0.006, 8.6); runnerE.receiveShadow = true; scene.add(runnerE);
  world.addRegionBox(502.05, ST.x0 + 0.05, 5.95, 11.8, { label: 'EG Flur', minY: -1, maxY: 1.6 });
  world.addRegionBox(502.3, 503.4, 5.3, 6.7, { label: 'Küchentür', minY: -1, maxY: 1.6 });
  world.addRegionBox(503.8, 505.4, 5.95, 7.2, { label: 'Nische', minY: -1, maxY: 1.6 });

  // --- Diele mit Haustür ---
  world.tag = 'Diele';
  world.addRegionBox(502.05, 505.4, 11.2, 15.4, { label: 'Diele', minY: -1, maxY: 1.6 });
  world.addRegionBox(501.3, 502.8, 11.65, 13.15, { label: 'Durchgang Wohnzimmer', minY: -1, maxY: 1.6 });
  // Haustür (Scharnier x=503.1)
  const fDoorG = new THREE.Group(); const fdp = new THREE.Mesh(boxGeo(1.0, 2.1, 0.06, 1), lam('frontDoor', { color: 0x4a3426 })); fdp.position.set(0.5, 1.05, 0); fDoorG.add(fdp);
  const fdh = new THREE.Mesh(boxGeo(0.14, 0.03, 0.08, 1), M.metal); fdh.position.set(0.88, 1.05, -0.04); fDoorG.add(fdh);
  const peep = new THREE.Mesh(new THREE.CircleGeometry(0.012, 8), emissive(0x332211)); peep.position.set(0.5, 1.55, -0.035); peep.rotation.y = Math.PI; fDoorG.add(peep);
  const chain = new THREE.Mesh(cylGeo(0.006, 0.006, 0.22, 4, 1), M.metal); chain.rotation.z = Math.PI / 2; chain.position.set(0.86, 1.45, -0.05); fDoorG.add(chain);
  fDoorG.position.set(503.1, 0, 15.43); scene.add(fDoorG);
  const fDoorCol = world.addBox(503.1, 504.1, 15.38, 15.5, -1, 2.2, { label: 'Haustür' });
  const frontAnim = { v: 0, t: 0 };
  world.updaters.push((dt) => { frontAnim.v += (frontAnim.t - frontAnim.v) * (1 - Math.exp(-1.8 * dt)); fDoorG.rotation.y = frontAnim.v * 1.25; });
  // Draußen-Schein hinter der Haustür (sichtbar, wenn sie aufgeht)
  const outside = new THREE.Mesh(new THREE.PlaneGeometry(3, 3), new THREE.MeshBasicMaterial({ map: streetGlowTex(true) }));
  outside.position.set(503.6, 1.4, 16.4); outside.rotation.y = Math.PI; scene.add(outside);
  const outLamp = world.addLamp({ pos: [503.6, 1.8, 15.8], color: 0xffb070, intensity: 4, distance: 6, visibleDist: 30, enabled: false });
  // Garderobe, Schuhregal, Schlüsselbrett, Spiegel, Fußmatte
  B.add(boxGeo(0.35, 0.45, 1.0, 1), M.wood, 505.2, 0.22, 12.6); col(504.95, 505.4, 12.1, 13.1, -1, 0.5);
  for (let i = 0; i < 4; i++) B.add(boxGeo(0.12, 0.08, 0.28, 1), lam('shoe' + (i % 2), { color: i % 2 ? 0x2a2a2a : 0x6a5a4a }), 505.15 - (i % 2) * 0.05, 0.49, 12.2 + i * 0.24, 0, 0.2 * (i % 2), 0);
  for (let i = 0; i < 3; i++) B.add(boxGeo(0.12, 0.8, 0.35, 1), lam('coat' + i, { color: [0x2a3040, 0x4a3a2a, 0x3a3a3a][i] }), 505.32, 1.3, 13.4 + i * 0.4, 0, 0, -0.03);
  col(505.15, 505.4, 13.2, 14.4, -1, 1.8);
  B.add(boxGeo(0.04, 0.05, 1.3, 1), M.wood, 505.37, 1.78, 13.8);
  B.add(boxGeo(0.03, 0.18, 0.4, 1), M.wood, 505.37, 1.45, 14.85);
  const mir = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.9), new THREE.MeshPhongMaterial({ color: 0x1a1e24, specular: 0x667788, shininess: 90 }));
  mir.position.set(502.07, 1.4, 14.2); mir.rotation.y = Math.PI / 2; scene.add(mir);
  const mat = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 0.55), lam('doormat', { color: 0x4a3e2e })); mat.rotation.x = -Math.PI / 2; mat.position.set(503.6, 0.006, 14.95); scene.add(mat);
  B.add(cylGeo(0.1, 0.1, 0.5, 10, 1), M.darkMetal, 502.3, 0.25, 15.1);

  // --- Wohn- und Esszimmer ---
  world.tag = 'Wohnzimmer';
  world.addRegionBox(496.0, 501.95, 5.5, 15.4, { label: 'Wohnzimmer', minY: -1, maxY: 1.6 });
  world.addRegionBox(496.0, 500.95, 2.0, 6.6, { label: 'Essbereich', minY: -1, maxY: 1.6 });
  world.addRegionBox(500.3, 501.7, 3.45, 4.35, { label: 'Durchgang Küche', minY: -1, maxY: 1.6 });
  const carpet = new THREE.Mesh(new THREE.PlaneGeometry(3.2, 3.6), carpetM); carpet.rotation.x = -Math.PI / 2; carpet.position.set(499.6, 0.006, 9.2); carpet.receiveShadow = true; scene.add(carpet);
  world.addSurface(498.0, 501.2, 7.4, 11.0, 'carpet', -0.5, 1.4);
  // Sofa (Rücken nach Westen), dahinter Versteck
  const sofaM = lam('sofa', { color: 0x3c4450 });
  B.add(boxGeo(0.9, 0.42, 2.3, 1), sofaM, 498.75, 0.21, 9.0); B.add(boxGeo(0.25, 0.85, 2.3, 1), sofaM, 498.35, 0.43, 9.0);
  for (const z of [7.78, 10.22]) B.add(boxGeo(0.9, 0.6, 0.18, 1), sofaM, 498.75, 0.3, z);
  for (const z of [8.45, 9.55]) B.add(boxGeo(0.62, 0.12, 1.0, 1), lam('sofaC', { color: 0x464e5c }), 498.95, 0.48, z);
  col(498.2, 499.2, 7.7, 10.3, -1, 0.9);
  B.add(boxGeo(0.6, 0.04, 1.1, 1), M.darkWood, 500.25, 0.42, 9.0); for (const [dx, dz] of [[-0.25, -0.5], [0.25, -0.5], [-0.25, 0.5], [0.25, 0.5]]) B.add(boxGeo(0.04, 0.4, 0.04, 1), M.darkWood, 500.25 + dx, 0.2, 9.0 + dz);
  col(499.9, 500.6, 8.4, 9.6, -1, 0.46);
  // TV an der Flurwand mit Standby-LED
  B.add(boxGeo(0.45, 0.5, 1.8, 1), M.darkWood, 501.7, 0.25, 9.0); col(501.45, 501.95, 8.1, 9.9, -1, 0.55);
  B.add(boxGeo(0.06, 0.68, 1.2, 1), M.black, 501.82, 0.92, 9.0);
  const led = new THREE.Mesh(new THREE.SphereGeometry(0.008, 6, 4), emissive(0xff2a1a)); led.position.set(501.78, 0.6, 9.45); scene.add(led);
  const ledGlow = haloSprite(0xff2a1a, 0.12, 0.6); ledGlow.position.copy(led.position); scene.add(ledGlow);
  // Sessel, Stehlampe, Regal, Pflanze
  B.add(boxGeo(0.8, 0.45, 0.8, 1), sofaM, 499.2, 0.22, 12.9); B.add(boxGeo(0.8, 0.8, 0.2, 1), sofaM, 499.2, 0.5, 13.3); col(498.8, 499.6, 12.5, 13.4, -1, 0.9);
  B.add(cylGeo(0.015, 0.015, 1.5, 6, 1), M.black, 500.3, 0.75, 13.6); B.add(cylGeo(0.12, 0.2, 0.25, 12, 1), lam('lampShade', {}), 500.3, 1.55, 13.6);
  B.add(boxGeo(1.8, 2.0, 0.35, 1), M.wood, 500.6, 1.0, 15.2); col(499.7, 501.5, 15.0, 15.4, -1, 2.1);
  for (let sh = 0; sh < 4; sh++) for (let i = 0; i < 9; i++) if ((i * 3 + sh) % 4) B.add(boxGeo(0.08, 0.24, 0.2, 1), lam('book' + ((i + sh) % 5), {}), 499.85 + i * 0.18, 0.32 + sh * 0.45, 15.15);
  B.add(cylGeo(0.14, 0.11, 0.3, 10, 1), lam('pot', {}), 496.4, 0.15, 14.9); const pl2 = new THREE.Mesh(crossGeoLocal(0.7, 1.0), M.hedge); pl2.position.set(496.4, 0.3, 14.9); scene.add(pl2);
  for (const z of [8.2, 10.6]) { const cu = new THREE.Mesh(boxGeo(0.04, 2.0, 0.5, 1), lam('curtainL', { color: 0x5a4a3a })); cu.position.set(496.06, 1.4, z); scene.add(cu); }
  // Essbereich: Tisch, Stühle, Sideboard
  B.add(boxGeo(1.6, 0.05, 0.9, 1), M.wood, 498.4, 0.75, 4.0); for (const [dx, dz] of [[-0.7, -0.38], [0.7, -0.38], [-0.7, 0.38], [0.7, 0.38]]) B.add(boxGeo(0.05, 0.75, 0.05, 1), M.wood, 498.4 + dx, 0.37, 4.0 + dz);
  col(497.6, 499.2, 3.55, 4.45, -1, 0.8);
  for (const [x, z, ry] of [[497.9, 3.3, 0], [498.9, 3.3, 0], [497.9, 4.7, Math.PI], [498.9, 4.7, Math.PI]]) { B.add(boxGeo(0.42, 0.04, 0.42, 1), M.wood, x, 0.46, z); B.add(boxGeo(0.42, 0.5, 0.04, 1), M.wood, x, 0.72, z + (ry ? 0.2 : -0.2)); }
  B.add(boxGeo(0.45, 0.85, 1.6, 1), M.darkWood, 496.25, 0.42, 4.8); col(496.0, 496.5, 4.0, 5.6, -1, 0.9);

  // ================= Vater =================
  world.tag = 'Vater';
  const dad = makeHuman({ coat: 0x56626e, pants: 0x2b3038, skin: 0x8d6e5a, hood: false, height: 1.84 });
  const hair = new THREE.Mesh(new THREE.SphereGeometry(0.122, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.5), lam('dadHair', {}));
  hair.position.set(0, 0.145, 0.01); dad.neck.add(hair);
  const stubble = new THREE.Mesh(new THREE.SphereGeometry(0.108, 10, 8, 0, Math.PI * 2, Math.PI * 0.55, Math.PI * 0.3), lam('stubble', { color: 0x4a3a30 })); stubble.position.set(0, 0.13, -0.004); dad.neck.add(stubble);
  dad.root.visible = false; scene.add(dad.root);

  const hallLampL = world.addLamp({ pos: [503.15, CEIL_OG - 0.3, 6.9], color: 0xffe2b8, intensity: 7, distance: 8, visibleDist: 40, enabled: false });
  B.add(cylGeo(0.18, 0.22, 0.12, 14, 1), lam('ceilLamp', {}), 503.15, CEIL_OG - 0.06, 6.9);

  const inBox = (p, x0, x1, z0, z1, y0, y1) => p.x > x0 && p.x < x1 && p.z > z0 && p.z < z1 && p.y > y0 && p.y < y1;
  const H = {
    dad, lump,
    bedPos: [498.7, OG, 6.9],
    snorePos: new THREE.Vector3(498.6, OG + 0.6, 6.6),
    doorPos: new THREE.Vector3(502.0, OG + 1.0, 6.85),
    feet, feetZ: 6.85,
    route: {
      bedside: [499.95, OG, 6.95], doorIn: [501.45, OG, 6.85], doorOut: [502.75, OG, 6.85], hall: [503.35, OG, 6.6],
      landing: [504.85, OG, 6.4], stairTop: [504.85, OG, 7.05], stairBot: [504.85, 0, 11.6], diele: [503.9, 0, 12.4],
      corrN: [503.15, 0, 8.9], kitchenDoor: [502.85, 0, 6.2], fridge: [504.2, 0, 3.15],
      lookLiving: [498.9, 1.0, 12.0], fridgeLook: [505.2, 1.2, 3.15], lookHall: [503.7, OG + 1.2, 4.9], closet: [504.9, 1.0, 8.2],
    },
    // Verstecke: geduckt bist du dort unsichtbar, solange er nicht direkt danebensteht
    hideZones: [
      { minX: 496.6, maxX: 498.25, minZ: 7.5, maxZ: 10.5, y: 0, name: 'hinter dem Sofa' },
      { minX: 496.0, maxX: 497.4, minZ: 2.0, maxZ: 3.4, y: 0, name: 'Ecke im Essbereich' },
      { minX: 500.0, maxX: 504.0, minZ: 0.0, maxZ: 3.5, y: OG, name: 'Leons Zimmer' },
    ],
    closet: { door: new THREE.Vector3(ST.x0, 0.9, 8.0), inside: [504.85, 0, 8.0], out: [503.55, 0, 8.0] },
    parentsDoor: { set(v, anim = false) { doorAnim.target = v; if (!anim) doorAnim.v = v; } },
    gapLight(k) { gap.material.opacity = k * 0.9; gapLamp.enabled = k > 0; },
    handle() { const hd = pDoor.userData.handle; hd.rotation.z = -0.5; setTimeout(() => { hd.rotation.z = 0; }, 450); },
    bedLamp(on) { bedLampLight.enabled = on; bedLampGlow.material.opacity = on ? 0.6 : 0; },
    hallLamp(on) { hallLampL.enabled = on; },
    kitchenLamp(on) { kitchenLampL.enabled = on; },
    fridge(open) { fridgeAnim.t = open ? 1 : 0; fridgeLight.enabled = open; },
    frontDoor: { set(v, anim = false) { frontAnim.t = v; if (!anim) frontAnim.v = v; fDoorCol.enabled = v < 0.1; outLamp.enabled = v > 0; }, pos: new THREE.Vector3(503.6, 1.1, 15.35), chainPos: new THREE.Vector3(503.96, 1.45, 15.37) },
    isLit(p) {
      if (hallLampL.enabled && (inBox(p, 501.9, 505.5, 4.4, 9.7, 2.5, 6) || inBox(p, ST.x0, ST.x1, ST.zTop, ST.zBot + 0.8, -0.5, 6))) return true;
      if ((kitchenLampL.enabled || fridgeLight.enabled) && (inBox(p, 501, 505.4, 2, 6.4, -0.5, 2.5) || inBox(p, 502, 504.3, 6, 8, -0.5, 2.5))) return true;
      if (bedLampLight.enabled && doorAnim.v > 0.3 && inBox(p, 502, 504.3, 6.0, 7.8, 2.5, 6)) return true;
      return false;
    },
  };
  G.objects.home = H;
  G.objects.parentsDoor = H.snorePos;
  world.tag = '';
}
