// Erweiterungen der Außenwelt
// - echte Automodelle (GGBot, CC0) auf dem Wendelsweg, Wanderparkplatz mit Nessas Auto
// - Garagenhof hinter den Häusern (Durchgang zwischen zwei Häusern), Trinkhalle, Münztelefon, offene Garage
// - Holzgatter mit Vorhängeschloss am Waldeingang (Schlüssel unterm Blumentopf am Kiosk oder Dietrich aus der Garage)
// - Mara oben auf dem Goetheturm, Nessa am Parkplatz
import * as THREE from 'three';
import { G } from '../state.js';
import { Assets } from '../assets.js';
import { makeCharacter } from '../characters.js';
import { Batch, boxGeo, cylGeo, planeGeo, lam } from '../models.js';
import * as T from '../textures.js';
import { haloSprite, signMesh, emissive } from './props.js';
import { P, streetLamp } from './outside.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);

// GLB-Modell in die Welt setzen; length/height skalieren auf Meter, optional Kollision
export function prop(scene, name, x, y, z, ry = 0, { length = null, height = null, scale = 1, shadow = true, rough = 0.6, col = 0, world = null, tint = null } = {}) {
  if (!Assets.has(name)) return null;
  const g = Assets.gltf(name).scene.clone(true);
  const box = new THREE.Box3().setFromObject(g); const size = box.getSize(new THREE.Vector3());
  let k = scale;
  if (length) k = length / Math.max(size.x, size.z);
  if (height) k = height / size.y;
  g.scale.setScalar(k); g.position.set(x, y, z); g.rotation.y = ry; g.name = 'prop_' + name;
  g.traverse((o) => {
    if (!o.isMesh) return;
    o.castShadow = shadow; o.receiveShadow = true;
    // matte Requisiten: Lambert statt PBR – sieht wie der Rest der Welt aus und kostet pro Pixel deutlich weniger
    const s = o.material;
    const m = o.material = new THREE.MeshLambertMaterial({ name: s.name, color: s.color.clone(), map: s.map || null, emissive: s.emissive ? s.emissive.clone() : 0x000000,
      emissiveMap: s.emissiveMap || null, normalMap: s.normalMap || null, side: s.side, vertexColors: !!s.vertexColors, alphaTest: s.alphaTest || (s.transparent ? 0.4 : 0) });
    if (s.normalMap) m.normalScale.copy(s.normalScale);
    if (tint) m.color.multiply(new THREE.Color(tint));
  });
  scene.add(g);
  g.userData.size = size.clone().multiplyScalar(k);
  if (col && world) world.addOBB(x, z, g.userData.size.x / 2 * col, g.userData.size.z / 2 * col, -ry, y - 1, y + g.userData.size.y);
  return g;
}

export function buildExtra(scene, world, M) {
  const B = new Batch(48);
  const O = G.objects;
  const E = O.extra = { updaters: [] };

  // ================= Wendelsweg: geparkte Autos =================
  world.tag = 'Autos Wendelsweg';
  for (const [n, x, z, ry] of [['car1_blue', 2.35, -141, 0], ['car2_red', 2.35, -119, 0], ['car4_grey', 2.35, -98, Math.PI], ['car3', -2.35, -126, Math.PI], ['car6', -2.35, -106, 0]]) {
    prop(scene, n, x, 0, z, ry, { length: n.startsWith('car4') ? 4.9 : 4.4, world, col: 0.95 });
  }
  // Stromkasten, Mülltonnen, Bushaltestelle am Straßenende
  prop(scene, 'elecbox', -6.1, 0.12, -115.5, Math.PI / 2, { height: 1.25, world, col: 1 });
  prop(scene, 'elecbox', 6.1, 0.12, -137.2, -Math.PI / 2, { height: 1.25, world, col: 1 });
  const bs = prop(scene, 'busstop', 5.6, 0.12, -84.5, -Math.PI / 2, { height: 2.5, world: null });
  if (bs) { world.addBox(6.2, 7.6, -86.6, -82.4, -1, 3); }
  { const sg = signMesh([{ t: 'H', font: 'bold 120px Arial', color: '#1d5a2a' }], 0.45, 0.45, { w: 256, h: 256, bg: '#f2d23a', border: '#1d5a2a' }); sg.position.set(4.3, 2.6, -81.2); sg.rotation.y = -Math.PI / 2; scene.add(sg); B.add(cylGeo(0.04, 0.04, 2.7, 6), M.metal, 4.3, 1.35, -81.2);
    const t = signMesh([{ t: 'Wendelsweg', font: 'bold 40px Arial' }, { t: 'N61  Nachtbus', font: '30px Arial' }, { t: 'nächste: 03:47', font: '30px Arial' }], 0.42, 0.32, { w: 256, h: 200, bg: '#f4f0e6' }); t.position.set(4.28, 1.75, -81.2); t.rotation.y = -Math.PI / 2; scene.add(t); }

  // ================= Wanderparkplatz mit Nessas Auto =================
  world.tag = 'Wanderparkplatz';
  world.addRegionBox(-26, -6.4, -83, -71.5, { label: 'Wanderparkplatz' });
  world.addSurface(-26, -6.4, -83, -71.5, 'asphalt');
  { const g = new THREE.Mesh(planeGeo(19.6, 11.5, 5), M.asphalt); g.rotation.x = -Math.PI / 2; g.position.set(-16.2, 0.025, -77.25); g.receiveShadow = true; scene.add(g); }
  for (let i = 0; i < 4; i++) B.add(boxGeo(0.1, 0.01, 5.2, 1), M.white, -9.3 - i * 5.4, 0.035, -78.8, 0, 0, 0, 1, 1, 1, { cast: false });
  prop(scene, 'car6', -20.0, 0, -79.0, Math.PI / 2, { length: 4.4, world, col: 0.95 });
  prop(scene, 'car1_gray', -25.0, 0, -74.0, -Math.PI / 2, { length: 4.3, world, col: 0.95 });
  const nCar = prop(scene, 'suv', -12.4, 0, -79.2, Math.PI / 2, { length: 4.6, world, col: 0.95 });
  // Innenlicht und Musik aus dem Auto
  const carLamp = world.addLamp({ pos: [-12.4, 1.25, -79.2], color: 0xffd6a0, intensity: 2.2, distance: 4.5, visibleDist: 50 });
  streetLamp(B, M, scene, world, -8.2, -82.4, -1);
  { const sg = signMesh([{ t: 'P', font: 'bold 140px Arial', color: '#ffffff' }, { t: 'Wanderparkplatz', font: 'bold 30px Arial', color: '#ffffff' }], 0.6, 0.75, { w: 256, h: 320, bg: '#1f4fa0', border: '#ffffff' }); sg.position.set(-6.8, 2.2, -72.2); scene.add(sg); B.add(cylGeo(0.04, 0.04, 2.3, 6), M.metal, -6.8, 1.15, -72.25); }
  const nessa = makeCharacter('nessa', { height: 1.68 });
  nessa.root.position.set(-12.3, 0, -77.55); nessa.root.rotation.y = -Math.PI / 2.4;
  nessa.idleClip = 'phone'; nessa.stand();
  scene.add(nessa.root); O.nessa = nessa;
  E.nessa = { char: nessa, car: nCar, carLamp };

  // ================= Mara oben auf dem Goetheturm =================
  world.tag = 'Goetheturm oben';
  const mara = makeCharacter('mara', { height: 1.72 });
  const [tx, tz] = P.tower;
  mara.root.position.set(tx + 0.3, 40.13, tz - 3.35); mara.root.rotation.y = 0.15;
  mara.idleClip = 'rail'; mara.stand();
  scene.add(mara.root); O.mara = mara;
  const phoneGlow = haloSprite(0xb8c8ff, 0.55, 0.85); mara.handR.add(phoneGlow); phoneGlow.position.set(0, 0.05, -0.1);
  const maraLamp = world.addLamp({ pos: [tx + 0.3, 41.3, tz - 3.55], color: 0xa8b8ff, intensity: 1.6, distance: 3, visibleDist: 75 });
  E.mara = { char: mara, glow: phoneGlow, lamp: maraLamp };

  // ================= Holzgatter am Waldeingang =================
  world.tag = 'Holzgatter';
  const gz = -29.4, gw = 2.7;
  const wood = M.planksOld, iron = M.darkMetal;
  for (const sx of [-1, 1]) {
    B.add(boxGeo(0.2, 1.9, 0.2, 1), M.planksTower, sx * (gw + 0.12), 0.95, gz);
    B.add(prismGeo2(0.26, 0.12, 0.26), M.planksTower, sx * (gw + 0.12), 1.95, gz);
    world.addCircle(sx * (gw + 0.12), gz, 0.18);
    // Wildzaun vom Pfosten in den Wald (Maschendraht auf Holzpfählen)
    for (let i = 0; i < 4; i++) {
      const x0 = sx * (gw + 0.12 + i * 2.4), x1 = sx * (gw + 0.12 + (i + 1) * 2.4);
      B.add(planeGeo(2.4, 1.7, 0), M.wire, (x0 + x1) / 2, 0.95, gz - 0.02, 0, 0, 0, 1, 1, 1, { cast: false });
      B.add(cylGeo(0.06, 0.07, 1.9, 6, 1), M.barkPine, x1, 0.95, gz);
    }
  }
  const leaves = [];
  for (const sx of [-1, 1]) {
    const hinge = new THREE.Group(); hinge.position.set(sx * gw, 0, gz); scene.add(hinge);
    const len = gw - 0.03, d = -sx;
    // alle Teile eines Flügels pro Material zu einem Mesh zusammenfassen (3 statt ~25 Draw-Calls)
    const LB = new Batch(100);
    const add = (geo, mat, x, y, z, rz = 0) => LB.add(geo, mat, x, y, z, 0, 0, rz);
    for (const y of [0.35, 1.0, 1.6]) add(boxGeo(len, 0.12, 0.07, 1), wood, d * len / 2, y, 0);
    for (let i = 0; i < 6; i++) add(boxGeo(0.12, 1.45, 0.05, 1), wood, d * (0.12 + i * (len - 0.24) / 5), 0.98, 0.05);
    add(boxGeo(Math.hypot(len, 1.25), 0.1, 0.06, 1), wood, d * len / 2, 0.98, -0.05, d * Math.atan2(1.25, len));
    // Scharniere und Stacheldraht oben
    for (const y of [0.35, 1.6]) add(boxGeo(0.3, 0.05, 0.09, 1), iron, d * 0.15, y, 0);
    add(new THREE.CylinderGeometry(0.008, 0.008, len, 4), M.metal, d * len / 2, 1.82, 0, Math.PI / 2);
    for (let i = 0; i < 9; i++) add(boxGeo(0.02, 0.09, 0.02, 1), M.metal, d * (0.15 + i * (len - 0.3) / 8), 1.82, 0, 0.7);
    for (const xx of [0.05, len - 0.05]) add(boxGeo(0.04, 0.32, 0.04, 1), M.metal, d * xx, 1.76, 0);
    for (const m of LB.build(hinge)) m.matrixAutoUpdate = true;
    leaves.push({ hinge, sx });
  }
  // Kette und Vorhängeschloss in der Mitte
  const lock = new THREE.Group(); lock.position.set(0, 1.0, gz - 0.12); scene.add(lock);
  const lockBody = new THREE.Mesh(boxGeo(0.07, 0.065, 0.028, 1), lam('padlock', { color: 0x6a5a3a })); lock.add(lockBody);
  const shackle = new THREE.Mesh(new THREE.TorusGeometry(0.022, 0.005, 6, 12, Math.PI), M.metal); shackle.position.y = 0.032; lock.add(shackle);
  const keyhole = new THREE.Mesh(new THREE.CircleGeometry(0.007, 8), new THREE.MeshBasicMaterial({ color: 0x050505 })); keyhole.position.set(0, -0.008, -0.0145); keyhole.rotation.y = Math.PI; lock.add(keyhole);
  const chainG = new THREE.Group(); scene.add(chainG);
  { const CB = new Batch(100); for (let i = 0; i < 7; i++) CB.add(new THREE.TorusGeometry(0.018, 0.004, 4, 8), M.metal, (i - 3) * 0.03, 1.02 + Math.abs(i - 3) * 0.006, gz - 0.06, 0, i % 2 ? Math.PI / 2 : 0, 0); CB.build(chainG); }
  const chain = [chainG];
  const gSign = signMesh([{ t: 'FORSTWEG', font: 'bold 46px Arial' }, { t: 'Kein Durchgang', font: '34px Arial' }, { t: 'Tor bitte geschlossen halten.', font: '26px Arial' }, { t: 'Schlüssel: Platzwart (Kiosk)', font: 'bold 26px Arial', color: '#7a1010' }], 0.75, 0.55, { w: 384, h: 280, bg: '#efe7d2' });
  gSign.position.set(-1.2, 1.25, gz - 0.09); gSign.rotation.y = Math.PI; scene.add(gSign);
  const gateCol = world.addBox(-gw - 0.1, gw + 0.1, gz - 0.16, gz + 0.16, -5, 5, { label: 'Holzgatter (zu)' });
  let ang = 0, target = 0;
  const up = (dt) => {
    ang += (target - ang) * (1 - Math.exp(-1.6 * dt));
    for (const l of leaves) l.hinge.rotation.y = -l.sx * ang;
  };
  world.updaters.push(up);
  O.gatter = {
    pos: V(0, 1.0, gz - 0.2), lockPos: lock.position.clone(), z: gz, open: false,
    set(open, instant = false) {
      this.open = open; target = open ? 1.75 : 0; if (instant) ang = target;
      gateCol.enabled = !open;
      lock.visible = !open; for (const l of chain) l.visible = !open;
      if (open && !instant) { lock.visible = true; this.dropLock(); }
    },
    dropLock() {
      let v = 0; const y0 = lock.position.y;
      const f = (dt) => { if (lock.position.y <= 0.05) { lock.position.y = 0.05; lock.rotation.z = 1.4; return; } v += 9.8 * dt; lock.position.y = Math.max(0.05, lock.position.y - v * dt); lock.rotation.z += dt * 6; };
      world.updaters.push(f); for (const l of chain) l.visible = false;
      lock.position.y = y0;
    },
    reset(ch) { lock.position.set(0, 1.0, gz - 0.12); lock.rotation.set(0, 0, 0); this.set(ch >= 3, true); },
  };

  // Schlüssel unterm Blumentopf am Kiosk
  world.tag = 'Kiosk Blumentopf';
  const pot = new THREE.Group(); pot.position.set(-21.2, 0, -62.25); scene.add(pot);
  { const p = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.15, 0.32, 10), lam('terracotta', { color: 0x8a4a2e })); p.position.y = 0.16; p.castShadow = true; pot.add(p);
    const e = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.02, 10), lam('erde', { color: 0x2a1c12 })); e.position.y = 0.31; pot.add(e);
    for (let i = 0; i < 5; i++) { const st = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.35, 4), lam('dryPlant', { color: 0x4a4a28 })); st.position.set(Math.sin(i * 1.3) * 0.08, 0.48, Math.cos(i * 1.3) * 0.08); st.rotation.z = Math.sin(i) * 0.3; pot.add(st); } }
  world.addCircle(-21.2, -62.25, 0.22);
  const gKey = new THREE.Group(); gKey.position.set(-21.2, 0.02, -62.25); scene.add(gKey);
  { const r = new THREE.Mesh(new THREE.TorusGeometry(0.014, 0.004, 4, 10), M.metal); r.rotation.x = Math.PI / 2; gKey.add(r); const b = new THREE.Mesh(boxGeo(0.045, 0.004, 0.008, 1), M.metal); b.position.x = 0.032; gKey.add(b); }
  gKey.visible = false;
  O.potKey = { pot, key: gKey, pos: V(-21.2, 0.3, -62.25), lifted: false,
    reset(ch) { this.lifted = false; pot.position.set(-21.2, 0, -62.25); pot.rotation.set(0, 0, 0); gKey.visible = false; },
    lift() { this.lifted = true; pot.position.set(-20.75, 0, -62.0); pot.rotation.z = 0.0; gKey.visible = true; } };

  // ================= Garagenhof hinter den Häusern =================
  buildGarageCourt(B, M, scene, world, E);

  B.build(scene);
  // Updater der Erweiterung
  { const up = (dt, t) => { for (const u of E.updaters) u(dt, t); }; up.visual = true; world.updaters.push(up); }   // nur Optik (Flackern) – beim Rückspulen nicht nötig
  return E;
}

function prismGeo2(w, h, d) { const g = new THREE.ConeGeometry(Math.hypot(w, d) / 2, h, 4); g.rotateY(Math.PI / 4); g.translate(0, h / 2, 0); return g; }

function buildGarageCourt(B, M, scene, world, E) {
  world.tag = 'Garagenhof';
  const O = G.objects;
  // Durchgang zwischen den Häusern (z -121.5 … -118.5)
  world.addRegionBox(6.0, 21.5, -121.25, -118.75, { label: 'Durchgang Garagenhof' });
  world.addSurface(6.0, 21.5, -121.5, -118.5, 'concrete');
  { const g = new THREE.Mesh(planeGeo(13.5, 3.0, 3), M.concrete); g.rotation.x = -Math.PI / 2; g.position.set(14.4, 0.03, -120); g.receiveShadow = true; scene.add(g); }
  // Pforte am Durchgang (offen, schief)
  { const gate = new THREE.Group(); gate.position.set(8.55, 0, -121.35); gate.rotation.y = -1.1; scene.add(gate);
    for (const y of [0.25, 1.1]) { const r = new THREE.Mesh(boxGeo(1.6, 0.06, 0.04, 1), M.darkMetal); r.position.set(0.8, y, 0); gate.add(r); }
    for (let i = 0; i < 8; i++) { const r = new THREE.Mesh(boxGeo(0.025, 0.95, 0.025, 1), M.darkMetal); r.position.set(0.1 + i * 0.2, 0.68, 0); gate.add(r); } }
  // Hof
  const cx0 = 20, cx1 = 52, cz0 = -140, cz1 = -96;
  world.addRegionBox(cx0, cx1, cz0, cz1, { label: 'Garagenhof' });
  world.addSurface(cx0, cx1, cz0, cz1, 'asphalt');
  { const g = new THREE.Mesh(planeGeo(cx1 - cx0, cz1 - cz0, 9), M.asphalt); g.rotation.x = -Math.PI / 2; g.position.set((cx0 + cx1) / 2, 0.02, (cz0 + cz1) / 2); g.receiveShadow = true; scene.add(g); }
  // Begrenzung: Mauer im Süden/Norden, Rückseiten der Häuser im Westen haben schon Kollision
  for (const z of [cz0 - 0.15, cz1 + 0.15]) { B.add(boxGeo(cx1 - cx0, 2.2, 0.3, 4), M.brick, (cx0 + cx1) / 2, 1.1, z); world.addBox(cx0, cx1, z - 0.15, z + 0.15); }
  world.addBox(cx0 - 0.5, cx0, cz0, -121.6); world.addBox(cx0 - 0.5, cx0, -118.4, cz1);
  // Garagenzeile im Osten: acht Garagen, eine halb offen
  const gzs = []; for (let i = 0; i < 8; i++) gzs.push(-136 + i * 3.4);
  const openI = 5;
  for (let i = 0; i < gzs.length; i++) {
    const z = gzs[i];
    if (i === openI) continue;
    B.add(boxGeo(6, 2.6, 3.4, 2), M.plasterW, 50.5, 1.3, z);
    const door = new THREE.Mesh(planeGeo(2.6, 2.1, 1), M.shutter); door.position.set(47.48, 1.05, z); door.rotation.y = -Math.PI / 2; scene.add(door);
  }
  B.add(boxGeo(6.4, 0.18, gzs.length * 3.4 + 0.4, 3), M.concrete, 50.5, 2.68, gzs[0] - 1.7 + gzs.length * 1.7);
  world.addBox(47.5, 53.5, gzs[0] - 1.7, gzs[openI] - 1.7); world.addBox(47.5, 53.5, gzs[openI] + 1.7, gzs[gzs.length - 1] + 1.7);
  // offene Garage: Innenraum, Werkbank, Neonröhre, Radio, Dietrich-Set
  const oz = gzs[openI];
  B.add(boxGeo(6, 2.6, 0.15, 1), M.plasterW, 50.5, 1.3, oz - 1.62); B.add(boxGeo(6, 2.6, 0.15, 1), M.plasterW, 50.5, 1.3, oz + 1.62);
  B.add(boxGeo(0.15, 2.6, 3.4, 1), M.plasterW, 53.4, 1.3, oz);
  B.add(boxGeo(6, 0.1, 3.4, 1), M.concrete, 50.5, 2.55, oz);
  { const door = new THREE.Mesh(planeGeo(2.6, 0.7, 1), M.shutter); door.position.set(47.48, 2.2, oz); door.rotation.y = -Math.PI / 2; scene.add(door); }
  world.addBox(47.6, 53.5, oz - 1.7, oz - 1.55); world.addBox(47.6, 53.5, oz + 1.55, oz + 1.7); world.addBox(53.3, 53.5, oz - 1.7, oz + 1.7);
  world.addRegionBox(47.0, 53.2, oz - 1.4, oz + 1.4, { label: 'offene Garage' });
  B.add(boxGeo(0.8, 0.9, 2.4, 1), M.darkWood, 52.8, 0.45, oz); world.addBox(52.4, 53.3, oz - 1.25, oz + 1.25, -1, 0.95);
  B.add(boxGeo(0.4, 0.22, 0.6, 1), lam('toolbox', { color: 0x8a1a12 }), 52.8, 1.02, oz - 0.7);
  B.add(boxGeo(0.25, 0.3, 0.4, 1), lam('radio', { color: 0x222222 }), 52.85, 1.06, oz + 0.75);
  const tubeMat = emissive(0xd8ecff); const tube = new THREE.Mesh(cylGeo(0.02, 0.02, 1.2, 6, 1), tubeMat); tube.rotation.x = Math.PI / 2; tube.position.set(50.5, 2.45, oz); scene.add(tube);
  const tubeLamp = world.addLamp({ pos: [50.5, 2.3, oz], color: 0xd0e4ff, intensity: 6, distance: 7, visibleDist: 45, flicker: (t) => (Math.sin(t * 23) > 0.93 || Math.sin(t * 3.1 + 1) > 0.97 ? 0.15 : 1) });
  E.updaters.push((dt, t) => { tubeMat.color.setScalar(tubeLamp.flicker(t) > 0.5 ? 1 : 0.25); });
  // Dietrich-Set (Lederetui) auf der Werkbank
  const pick = new THREE.Group(); pick.position.set(52.7, 0.92, oz + 0.05); scene.add(pick);
  { const c = new THREE.Mesh(boxGeo(0.16, 0.02, 0.07, 1), lam('leather', { color: 0x3a2214 })); pick.add(c); for (let i = 0; i < 4; i++) { const p = new THREE.Mesh(boxGeo(0.11, 0.004, 0.006, 1), M.metal); p.position.set(0.0, 0.013, -0.024 + i * 0.016); pick.add(p); } }
  O.lockpick = { group: pick, pos: V(52.7, 1.0, oz + 0.05), reset(ch) { pick.visible = ch <= 2; } };
  E.radioPos = V(52.85, 1.1, oz + 0.75);
  // Rückseite der Häuser: Mülltonnen, Container, Sperrmüll, Klimageräte, Kamera
  for (const [x, z, r] of [[21.0, -127.4, 0.1], [21.0, -126.6, -0.05], [21.0, -125.8, 0.2], [21.2, -110.4, 0]]) prop(scene, 'trashbin', x, 0, z, Math.PI / 2 + r, { height: 1.1, world, col: 0.9 });
  prop(scene, 'dumpster', 22.4, 0, -134.5, Math.PI / 2, { length: 2.0, world, col: 0.95 });
  prop(scene, 'f_couch', 22.0, 0, -114.6, Math.PI / 2 + 0.2, { length: 1.9, world, col: 0.9, tint: 0x9a9088 });
  prop(scene, 'w_cardboard-box', 22.7, 0, -113.2, 0.4, { length: 0.6 }); prop(scene, 'w_cardboard-box', 22.4, 0.21, -113.3, 1.1, { length: 0.5 });
  prop(scene, 'w_trash-bag', 23.0, 0, -133.0, 0.3, { length: 0.8 }); prop(scene, 'w_trash-bag', 21.9, 0, -132.6, 2.0, { length: 0.75 });
  prop(scene, 'f_mattress', 20.55, 0.9, -137.5, Math.PI / 2, { length: 1.9, world, col: 0.5 }).rotation.z = 1.35;
  for (const z of [-133, -111]) prop(scene, 'acunit', 20.45, 2.6, z, Math.PI / 2, { height: 0.75 });
  const cam = prop(scene, 'camera', 47.4, 2.55, -110.0, -Math.PI / 2, { length: 0.35 });
  const camLed = new THREE.Mesh(new THREE.SphereGeometry(0.012, 6, 4), emissive(0xff2a1a)); camLed.position.set(47.15, 2.6, -110.0); scene.add(camLed);
  E.updaters.push((dt, t) => { camLed.visible = Math.sin(t * 2.4) > 0; });
  // Lampe über einer Hintertür (flackert), Hoflaterne
  B.add(boxGeo(0.9, 2.1, 0.06, 1), M.darkWood, 20.03, 1.05, -129.5, 0, Math.PI / 2, 0);
  world.addLamp({ pos: [20.6, 2.5, -129.5], color: 0xffc080, intensity: 5, distance: 8, visibleDist: 45, flicker: (t) => (Math.sin(t * 0.7) > 0.96 ? 0.1 : 0.9 + Math.sin(t * 17) * 0.05) });
  { const h = haloSprite(0xffc080, 0.8, 0.5); h.position.set(20.3, 2.5, -129.5); scene.add(h); }
  streetLamp(B, M, scene, world, 36, -138.4, 1);
  // Trinkhalle (Wasserhäuschen) im Süden
  B.add(boxGeo(5.2, 2.9, 3.4, 2), M.plaster, 34.0, 1.45, -98.2); B.add(boxGeo(5.8, 0.2, 4.0, 1), M.darkWood, 34.0, 3.0, -98.2);
  world.addBox(31.3, 36.7, -99.95, -96.4);
  { const sh = new THREE.Mesh(planeGeo(3.2, 1.2, 1), M.shutter); sh.position.set(34.0, 1.5, -99.92); sh.rotation.y = Math.PI; scene.add(sh);
    const neon = signMesh([{ t: 'TRINKHALLE', font: 'bold 74px Arial', color: '#ff4fa0' }], 2.6, 0.45, { w: 512, h: 96, bg: '#160810', border: '#ff4fa0', worn: false });
    // Leuchtschrift leuchtet selbst (unbeleuchtetes Material), sonst wäre sie nachts schwarz
    { const lm = neon.material; neon.material = new THREE.MeshBasicMaterial({ map: lm.map, side: THREE.DoubleSide, toneMapped: false }); lm.dispose(); neon.castShadow = false; }
    neon.position.set(34.0, 2.55, -99.93); neon.rotation.y = Math.PI; scene.add(neon);
    const nh = haloSprite(0xff4fa0, 3.0, 0.35); nh.position.set(34.0, 2.55, -100.2); scene.add(nh);
    const nl = world.addLamp({ pos: [34.0, 2.4, -100.6], color: 0xff5aa8, intensity: 4, distance: 7, visibleDist: 60, flicker: (t) => (Math.sin(t * 1.3) > 0.985 ? 0.2 : 1) });
    E.updaters.push((dt, t) => { const k = nl.flicker(t); neon.material.color.setScalar(k > 0.5 ? 1.25 : 0.3); nh.material.opacity = 0.35 * k; });
    const s2 = signMesh([{ t: 'Bier · Kippen · Kaffee', font: '28px Arial' }, { t: 'Mo–Sa 6–22 Uhr', font: '24px Arial' }], 0.9, 0.35, { w: 256, h: 100, bg: '#f2ead8' }); s2.position.set(35.9, 1.25, -99.93); s2.rotation.y = Math.PI; scene.add(s2); }
  prop(scene, 'bench2', 30.2, 0, -100.6, 0, { length: 1.8, world, col: 0.9 });
  prop(scene, 'w_glass-bottle', 30.6, 0.47, -100.55, 0, { height: 0.26 }); prop(scene, 'w_crumpled-can', 29.6, 0.01, -101.3, 0.7, { length: 0.13 });
  // Münztelefon neben der Trinkhalle
  const phone = prop(scene, 'payphone', 37.6, 0, -100.4, Math.PI, { height: 1.6, world, col: 1 });
  E.payphone = { pos: V(37.6, 1.3, -100.4), rang: false, answered: false };
  // geparkte Autos im Hof, das schwarze bekommt später Scheinwerfer
  prop(scene, 'car4_grey', 27.5, 0, -106.5, 0.08, { length: 4.9, world, col: 0.95 });
  prop(scene, 'car1_gray', 42.5, 0, -128.0, Math.PI / 2, { length: 4.3, world, col: 0.95 });
  const bc = prop(scene, 'car2_black', 30.5, 0, -133.5, -Math.PI / 2, { length: 4.6, world, col: 0.95 });
  // Scheinwerfer: Front zeigt nach lokal +Z (gedreht → -X). Kein eigenes SpotLight (kostet in jeder Szene
  // Rechenzeit), sondern eine Lampe aus dem Lichtpool vor dem Auto plus sichtbare Lichtkegel im Dunst
  const hl = new THREE.Group(); hl.position.set(30.5, 0, -133.5); hl.rotation.y = -Math.PI / 2; scene.add(hl);
  const beamTex = (() => { const c = document.createElement('canvas'); c.width = 4; c.height = 128; const g = c.getContext('2d');
    const gr = g.createLinearGradient(0, 0, 0, 128); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.25, 'rgba(255,255,255,0.35)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr; g.fillRect(0, 0, 4, 128); return new THREE.CanvasTexture(c); })();
  const beamMat = new THREE.MeshBasicMaterial({ color: 0xfff2d8, map: beamTex, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide });
  const beamGeo = new THREE.CylinderGeometry(0.12, 1.9, 9, 14, 1, true); beamGeo.translate(0, -4.5, 0); beamGeo.rotateX(-Math.PI / 2 + 0.07);
  const heads = [];
  for (const sx of [-0.62, 0.62]) {
    const g = haloSprite(0xfff2d8, 0.9, 0); g.position.set(sx, 0.72, 2.32); hl.add(g);
    const beam = new THREE.Mesh(beamGeo, beamMat); beam.position.set(sx, 0.72, 2.3); beam.visible = false; hl.add(beam);
    heads.push({ g, beam });
  }
  const carLamp = world.addLamp({ pos: [27.0, 0.9, -133.5], color: 0xfff2d8, intensity: 26, distance: 16, visibleDist: 70, enabled: false });
  E.blackCar = { group: bc, heads, pos: V(30.5, 0.8, -133.5), lights(on) { carLamp.enabled = on; beamMat.opacity = on ? 0.16 : 0; for (const h of heads) { h.g.material.opacity = on ? 0.9 : 0; h.beam.visible = on; } }, gone(on) { bc && (bc.visible = !on); this.lights(false); } };
  // Schild am Durchgang
  { const sg = signMesh([{ t: 'Garagenhof', font: 'bold 44px Arial' }, { t: 'Privat – Ausfahrt freihalten', font: '26px Arial' }], 0.8, 0.32, { w: 384, h: 150, bg: '#e9e4d6' }); sg.position.set(8.38, 1.7, -121.4); sg.rotation.y = Math.PI / 2; scene.add(sg); }
}
