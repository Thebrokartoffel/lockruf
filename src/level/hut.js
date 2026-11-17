// Die Hütte, der Keller ("Anfangsraum"), der Lüftungsschacht, der Mann
import * as THREE from 'three';
import { G } from '../state.js';
import { boxGeo, cylGeo, planeGeo, lam, makeHuman, crossGeo } from '../models.js';
import * as T from '../textures.js';
import { prismGeo, haloSprite, emissive, signMesh } from './props.js';

export const HUT = {
  cx: -62, cz: 140,
  hole: { minX: -63.9, maxX: -62.6, minZ: 138.4, maxZ: 140.6 },
  room: { minX: -64.4, maxX: -58.6, minZ: 141.6, maxZ: 146.8 },
  floorY: -3.2, ceilY: -0.6,
  shaft: { minX: -70.4, maxX: -64.4, minZ: 143.8, maxZ: 144.6, y: -2.95, top: -2.2 },
  coldOpen: [-63.25, -3.2, 142.25],
  ventExit: [-71.9, 0, 142.2],
};

export function buildHut(scene, world, M, B) {
  const H = HUT;
  const y0 = 0.3; // Hüttenboden
  const ht = (x, z) => G.terrain.height(x, z);

  // ---------------- Hütte (oben) ----------------
  world.tag = 'Hütte';
  const wallM = M.planksAncient;
  // Boden um das Loch
  const fl = [[-62.6, -59.5, 138, 142], [-64.5, -62.6, 138, 138.4], [-64.5, -62.6, 140.6, 142], [-64.5, -63.9, 138.4, 140.6]];
  for (const [a, b, c, d] of fl) B.add(boxGeo(b - a, 0.3, d - c, 1.2), M.floor, (a + b) / 2, 0.15, (c + d) / 2);
  // Fundament (verdeckt Spalt zum Gelände)
  for (const [a, b, c, d] of [[-64.6, -59.4, 137.9, 138.05], [-64.6, -59.4, 141.95, 142.1], [-64.6, -64.45, 137.9, 142.1], [-59.55, -59.4, 137.9, 142.1]]) B.add(boxGeo(b - a, 1.4, d - c, 1), M.mossStone, (a + b) / 2, -0.55, (c + d) / 2);
  // Wände (Tür Ost: z 139.5..140.5, Fenster Süd)
  const WH = 2.5;
  B.add(boxGeo(0.12, WH, 4.0, 1.2), wallM, -64.44, y0 + WH / 2, 140);
  B.add(boxGeo(5.0, WH, 0.12, 1.2), wallM, -62, y0 + WH / 2, 138.06);
  // Süd mit Fenster x -61.2..-60.2, y 1.3..2.0
  B.add(boxGeo(3.3, WH, 0.12, 1.2), wallM, -62.85, y0 + WH / 2, 141.94);
  B.add(boxGeo(0.7, WH, 0.12, 1.2), wallM, -59.85, y0 + WH / 2, 141.94);
  B.add(boxGeo(1.0, 1.0, 0.12, 1.2), wallM, -60.7, y0 + 0.5, 141.94);
  B.add(boxGeo(1.0, 0.8, 0.12, 1.2), wallM, -60.7, y0 + 2.1, 141.94);
  const win = new THREE.Mesh(new THREE.PlaneGeometry(1.0, 0.7), new THREE.MeshLambertMaterial({ color: 0x0a0c0e, transparent: true, opacity: 0.6 }));
  win.position.set(-60.7, y0 + 1.35, 141.94); scene.add(win);
  // Fenster mit Brettern vernagelt (Spalten bleiben offen)
  B.add(boxGeo(1.25, 0.12, 0.03, 0.6), wallM, -60.7, y0 + 1.5, 142.03, 0, 0, 0.35);
  B.add(boxGeo(1.25, 0.12, 0.03, 0.6), wallM, -60.7, y0 + 1.2, 142.03, 0, 0, -0.25);
  // Efeu außen an Süd- und Westwand
  for (const [x, z, ry, sc] of [[-63.8, 142.06, 0, 1.0], [-62.6, 142.06, 0, 0.8], [-59.8, 142.06, 0, 0.9], [-64.56, 141.2, Math.PI / 2, 1.0], [-64.56, 138.8, Math.PI / 2, 0.85]]) {
    const iv = new THREE.Mesh(new THREE.PlaneGeometry(0.9 * sc, 1.9 * sc), M.ivy);
    iv.position.set(x, 0.95 * sc, z); iv.rotation.y = ry; iv.castShadow = true; scene.add(iv);
  }
  // Holzstapel + Hackklotz an der Nordseite
  for (let row = 0; row < 4; row++) for (let i = 0; i < 7 - row; i++) B.add(cylGeo(0.11, 0.11, 0.9, 8, 0.6), M.barkOak, -62.9 + i * 0.23 + row * 0.11, 0.12 + row * 0.2, 137.35, Math.PI / 2, 0, 0);
  world.addBox(-63.05, -61.15, 136.85, 137.85, -1, 1.0);
  B.add(cylGeo(0.28, 0.3, 0.5, 10, 0.6), M.barkOak, -60.4, 0.25, 137.1);
  B.add(boxGeo(0.04, 0.7, 0.04, 1), M.darkWood, -60.4, 0.75, 137.1, 0, 0, 0.5);
  B.add(boxGeo(0.16, 0.1, 0.03, 1), M.rust, -60.25, 1.05, 137.1, 0, 0, 0.5);
  world.addCircle(-60.4, 137.1, 0.32, -1, 0.6);
  // angelehnte Bretter
  for (let i = 0; i < 3; i++) B.add(boxGeo(0.2, 2.0, 0.03, 0.6), M.planksAncient, -64.75, 0.95, 140.6 - i * 0.28, -0.08 * i, 0, 0.32 + i * 0.03);
  // rostiger Eimer
  B.add(cylGeo(0.14, 0.11, 0.28, 10, 1), M.rust, -59.0, 0.14, 141.6);
  // Ost mit Tür
  B.add(boxGeo(0.12, WH, 1.5, 1.2), wallM, -59.56, y0 + WH / 2, 138.75);
  B.add(boxGeo(0.12, WH, 1.5, 1.2), wallM, -59.56, y0 + WH / 2, 141.25);
  B.add(boxGeo(0.12, 0.45, 1.0, 1.2), wallM, -59.56, y0 + 2.27, 140);
  // Dach
  B.add(prismGeo(4.9, 1.3, 5.8, 1.6), M.mossRoof, -62, y0 + WH - 0.02, 140, 0, Math.PI / 2, 0.018);
  // Flickstellen + loses Brett am Dach
  B.add(boxGeo(0.9, 0.03, 0.7, 0.6), M.planksAncient, -61.2, y0 + WH + 0.62, 138.9, 0.49, 0, 0.1);
  B.add(boxGeo(0.6, 0.03, 0.5, 0.6), M.rust, -63.1, y0 + WH + 0.5, 141.25, -0.5, 0, -0.05);
  B.add(boxGeo(0.12, 0.02, 1.1, 0.6), M.planksAncient, -64.7, y0 + WH - 0.35, 139.6, 0.6, 0, 0.3);
  B.add(boxGeo(5.8, 0.1, 4.9, 1.2), M.planksOld, -62, y0 + WH - 0.05, 140, 0, 0, 0, 1, 1, 1, { cast: false });
  // Ofenrohr
  B.add(cylGeo(0.08, 0.08, 1.6, 8, 1), M.rust, -60.2, y0 + WH + 0.6, 138.6);
  // Schwelle
  B.add(boxGeo(0.6, 0.2, 1.1, 1), M.concrete, -59.1, 0.1, 140);
  world.addFloor(-59.45, -58.8, 139.45, 140.55, 0.15);
  // Kollision Wände (nur oben)
  const wy0 = 0.0, wy1 = 3.2;
  world.addBox(-64.55, -64.38, 137.95, 142.05, wy0, wy1);
  world.addBox(-64.55, -59.45, 137.95, 138.12, wy0, wy1);
  world.addBox(-64.55, -59.45, 141.88, 142.05, wy0, wy1);
  world.addBox(-59.62, -59.45, 137.95, 139.5, wy0, wy1);
  world.addBox(-59.62, -59.45, 140.5, 142.05, wy0, wy1);
  world.addRegionBox(-64.4, -59.4, 138.1, 141.9);
  world.addSurface(-64.5, -58.8, 137.9, 142.1, 'wood', -0.2, 3);

  // Boden-Zone mit Lukenloch
  const hole = H.hole;
  const hatchState = { open: true };
  world.addFloor(-64.4, -59.4, 138.1, 141.9, y0, { hole: (x, z) => hatchState.open && x > hole.minX && x < hole.maxX && z > hole.minZ && z < hole.maxZ });

  // Tür
  world.tag = 'Hüttentür';
  const doorG = new THREE.Group(); doorG.position.set(-59.53, y0, 139.5);
  const door = new THREE.Mesh(boxGeo(0.06, 2.02, 0.97, 0.7), M.planksAncient); door.position.set(0, 1.02, 0.5); door.rotation.x = 0.012; door.castShadow = true; doorG.add(door);
  for (const yy of [0.35, 1.7]) { const br = new THREE.Mesh(boxGeo(0.03, 0.12, 0.95, 0.7), M.planksAncient); br.position.set(0.04, yy, 0.5); doorG.add(br); }
  const dg = new THREE.Mesh(boxGeo(0.03, 1.5, 0.12, 0.7), M.planksAncient); dg.position.set(0.04, 1.02, 0.5); dg.rotation.x = 0.62; doorG.add(dg);
  const knob = new THREE.Mesh(new THREE.SphereGeometry(0.035, 8, 6), M.rust); knob.position.set(0.06, 1.0, 0.88); doorG.add(knob);
  scene.add(doorG);
  const doorCol = world.addBox(-59.62, -59.45, 139.5, 140.5, 0, 3);
  let doorT = 0, doorA = 0;
  // Kollision folgt der sichtbaren Tür: erst frei, wenn sie wirklich offen steht
  world.updaters.push((dt) => { doorA += (doorT - doorA) * (1 - Math.exp(-5 * dt)); doorG.rotation.y = doorA; doorCol.enabled = doorA < 1.0; });
  G.objects.hutDoor = {
    pos: new THREE.Vector3(-59.5, 1.3, 140),
    open(silent) { doorT = 1.9; if (!silent) G.audio.doorCreak(this.pos); },
    close(silent) { doorT = 0; if (!silent) G.audio.slam(this.pos, 0.6); },
    set(open) { doorT = doorA = open ? 1.9 : 0; doorCol.enabled = !open; },
  };

  // Luke
  world.tag = 'Luke';
  const hatchG = new THREE.Group(); hatchG.position.set((hole.minX + hole.maxX) / 2, y0, hole.maxZ);
  const hatch = new THREE.Mesh(boxGeo(1.32, 0.06, 2.22, 1), M.planksOld); hatch.position.set(0, 0.03, -1.1); hatch.castShadow = true; hatchG.add(hatch);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.06, 0.012, 6, 12), M.rust); ring.position.set(0, 0.07, -1.9); ring.rotation.x = Math.PI / 2; hatchG.add(ring);
  scene.add(hatchG);
  const hatchCol = world.addBox(hole.minX, hole.maxX, hole.minZ, hole.maxZ, -0.05, 0.32, { enabled: false });
  const hatchStand = world.addBox(hole.minX, hole.maxX, hole.maxZ - 0.05, hole.maxZ + 0.2, 0.3, 2.6);
  let hatchT = 1.75, hatchA = 1.75;
  world.updaters.push((dt) => { hatchA += (hatchT - hatchA) * (1 - Math.exp(-(hatchT === 0 ? 14 : 4) * dt)); hatchG.rotation.x = hatchA; });
  G.objects.hatch = {
    state: hatchState, pos: new THREE.Vector3(-63.25, 0.3, 139.5),
    close() { hatchT = 0; hatchState.open = false; hatchCol.enabled = true; hatchStand.enabled = false; },
    open() { hatchT = 1.75; hatchState.open = true; hatchCol.enabled = false; hatchStand.enabled = true; },
    set(open) { if (open) this.open(); else this.close(); hatchA = hatchT; },
  };

  // Einrichtung oben
  world.tag = 'Hütte innen';
  B.add(boxGeo(1.3, 0.05, 0.8, 1), M.darkWood, -60.8, y0 + 0.75, 141.3);
  for (const [x, z] of [[-61.35, 140.95], [-60.25, 140.95], [-61.35, 141.65], [-60.25, 141.65]]) B.add(boxGeo(0.05, 0.75, 0.05, 1), M.darkWood, x, y0 + 0.37, z);
  world.addBox(-61.5, -60.1, 140.85, 141.75, 0, 1.1);
  B.add(boxGeo(0.4, 0.04, 0.4, 1), M.darkWood, -61.1, y0 + 0.45, 140.4); B.add(boxGeo(0.4, 0.45, 0.04, 1), M.darkWood, -61.1, y0 + 0.7, 140.2);
  // Ofen
  B.add(boxGeo(0.6, 0.8, 0.5, 1), M.darkMetal, -60.2, y0 + 0.4, 138.5); world.addBox(-60.5, -59.9, 138.2, 138.8, 0, 1.2);
  // Matratze (dreckig)
  B.add(boxGeo(1.9, 0.18, 0.85, 1), lam('mattress', { color: 0x4a4436 }), -63.3, y0 + 0.09, 141.4);
  // Regal
  B.add(boxGeo(1.4, 1.6, 0.35, 1), M.darkWood, -62.2, y0 + 0.8, 138.3); world.addBox(-62.9, -61.5, 138.1, 138.5, 0, 2);
  for (let i = 0; i < 6; i++) B.add(cylGeo(0.05, 0.05, 0.12, 8, 1), lam('jar', { color: [0x4a5a3a, 0x6a4a2a, 0x3a3a3a][i % 3] }), -62.7 + i * 0.2, y0 + 1.15, 138.3);
  // Mütze von Deniz auf dem Tisch
  const beanie = new THREE.Mesh(new THREE.SphereGeometry(0.11, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.55), lam('beanie', { color: 0xb08a20 }));
  beanie.position.set(-60.55, y0 + 0.79, 141.25); beanie.scale.set(1, 0.8, 1.1); beanie.rotation.z = 0.3; scene.add(beanie);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(0.105, 0.025, 6, 16), beanie.material); rim.rotation.x = Math.PI / 2; rim.position.set(0, 0.0, 0); beanie.add(rim);
  G.objects.beanie = beanie;
  // Laterne (aus)
  B.add(cylGeo(0.07, 0.08, 0.22, 8, 1), M.rust, -61.2, y0 + 0.88, 141.4);
  // Kalender
  const cal = signMesh([{ t: 'OKTOBER', font: 'bold 40px Arial' }, { t: '2017', font: '30px Arial' }], 0.35, 0.45, { w: 256, h: 320, bg: '#d8d2c0' });
  cal.position.set(-59.7, y0 + 1.6, 141.2); cal.rotation.y = -Math.PI / 2; scene.add(cal);
  // Spinnweben in den Ecken
  const web = (x, y, z, ry, sz = 0.6) => { const w = new THREE.Mesh(new THREE.PlaneGeometry(sz, sz), M.cobweb); w.geometry.translate(sz / 2, -sz / 2, 0); w.position.set(x, y, z); w.rotation.y = ry; scene.add(w); };
  web(-64.37, y0 + 2.45, 138.13, Math.PI / 4); web(-59.63, y0 + 2.45, 138.13, -Math.PI / 4 - Math.PI / 2 + Math.PI); web(-64.37, y0 + 2.45, 141.87, -Math.PI / 4 + Math.PI / 2);
  web(-58.62, -0.62, 146.78, -Math.PI * 0.75, 0.8); web(-64.38, -0.62, 146.78, Math.PI * 0.75 - Math.PI / 2, 0.7); web(-58.62, -0.62, 141.62, -Math.PI / 4, 0.6);
  // Licht von unten aus der Luke
  const leak = world.addLamp({ pos: [-63.25, -0.4, 139.9], color: 0xd8e8ff, intensity: 3.2, distance: 6, visibleDist: 30 });

  // ---------------- Treppe ----------------
  world.tag = 'Kellertreppe';
  const stairX0 = -63.93, stairX1 = -62.57, zTop = 138.4, zBot = 141.5, yTop = y0, yBot = H.floorY;
  const stairY = (z) => Math.max(yBot, Math.min(yTop, yTop - ((z - zTop) / (zBot - zTop)) * (yTop - yBot)));
  world.addFloor(stairX0, stairX1, 138.15, 141.62, (x, z) => stairY(z));
  const steps = 14;
  for (let i = 0; i < steps; i++) {
    const z = zTop + (i + 0.5) * (zBot - zTop) / steps;
    const y = stairY(z);
    B.add(boxGeo(stairX1 - stairX0, 0.06, (zBot - zTop) / steps + 0.04, 1), M.darkWood, (stairX0 + stairX1) / 2, y - 0.03, z);
    B.add(boxGeo(stairX1 - stairX0, (yTop - yBot) / steps, 0.03, 1), M.darkWood, (stairX0 + stairX1) / 2, y + 0.06, z - (zBot - zTop) / steps / 2);
  }
  // Wangen
  for (const x of [stairX0 + 0.03, stairX1 - 0.03]) {
    const len = Math.hypot(zBot - zTop, yTop - yBot);
    const m = new THREE.Mesh(boxGeo(0.05, 0.25, len, 1), M.darkWood);
    m.position.set(x, (yTop + yBot) / 2 - 0.05, (zTop + zBot) / 2); m.rotation.x = Math.atan2(yTop - yBot, zBot - zTop); scene.add(m);
  }
  // Treppenschacht-Wände
  const cy0 = -3.35, cy1 = 0.0;
  B.add(boxGeo(0.2, cy1 - cy0, 3.5, 1.5), M.concrete, -64.03, (cy0 + cy1) / 2, 139.9);
  B.add(boxGeo(0.2, cy1 - cy0, 3.5, 1.5), M.concrete, -62.47, (cy0 + cy1) / 2, 139.9);
  B.add(boxGeo(1.8, cy1 - cy0, 0.2, 1.5), M.concrete, -63.25, (cy0 + cy1) / 2, 138.1);
  world.addBox(-64.2, -63.93, 138.0, 141.65, cy0, -0.02);
  world.addBox(-62.57, -62.35, 138.0, 141.65, cy0, -0.02);
  world.addBox(-64.15, -62.35, 137.9, 138.18, cy0, -0.02);
  B.add(boxGeo(1.4, 0.6, 0.2, 1.5), M.concrete, -63.25, -0.3, 141.6); // Sturz

  // ---------------- Kellerraum ----------------
  world.tag = 'Keller';
  const R = H.room, fy = H.floorY, cyl = H.ceilY;
  const floor = new THREE.Mesh(planeGeo(R.maxX - R.minX, R.maxZ - R.minZ, 2), M.concrete);
  floor.rotation.x = -Math.PI / 2; floor.position.set((R.minX + R.maxX) / 2, fy, (R.minZ + R.maxZ) / 2); floor.receiveShadow = true; scene.add(floor);
  const ceil = new THREE.Mesh(planeGeo(R.maxX - R.minX, R.maxZ - R.minZ, 2), M.concrete);
  ceil.rotation.x = Math.PI / 2; ceil.position.set((R.minX + R.maxX) / 2, cyl, (R.minZ + R.maxZ) / 2); scene.add(ceil);
  world.addFloor(R.minX, R.maxX, R.minZ - 0.1, R.maxZ, fy);
  world.addSurface(R.minX - 0.3, R.maxX, 138, R.maxZ, 'concrete', -3.5, -0.5);
  world.addSurface(stairX0, stairX1, 138.15, 141.55, 'wood', -3.5, 0.5);
  const wallH = cyl - fy + 0.2, wy = (fy + cyl) / 2;
  // Nord (mit Öffnung zum Treppenschacht)
  B.add(boxGeo(R.maxX - (-62.55), wallH, 0.2, 1.5), M.concrete, (R.maxX + -62.55) / 2, wy, R.minZ - 0.1);
  world.addBox(-62.55, R.maxX, R.minZ - 0.25, R.minZ, -3.4, -0.5);
  B.add(boxGeo(0.5, wallH, 0.2, 1.5), M.concrete, -64.2, wy, R.minZ - 0.1);
  world.addBox(-64.6, -63.95, R.minZ - 0.25, R.minZ, -3.4, -0.5);
  // Ost, Süd
  B.add(boxGeo(0.2, wallH, R.maxZ - R.minZ, 1.5), M.concrete, R.maxX + 0.1, wy, (R.minZ + R.maxZ) / 2);
  B.add(boxGeo(R.maxX - R.minX + 0.4, wallH, 0.2, 1.5), M.concrete, (R.minX + R.maxX) / 2, wy, R.maxZ + 0.1);
  world.addBox(R.maxX, R.maxX + 0.3, R.minZ - 0.3, R.maxZ + 0.3, -3.4, -0.5);
  world.addBox(R.minX - 0.3, R.maxX + 0.3, R.maxZ, R.maxZ + 0.3, -3.4, -0.5);
  // West mit Lüftungsöffnung
  const S = H.shaft;
  B.add(boxGeo(0.2, wallH, S.minZ - R.minZ, 1.5), M.concrete, R.minX - 0.1, wy, (R.minZ + S.minZ) / 2);
  B.add(boxGeo(0.2, wallH, R.maxZ - S.maxZ, 1.5), M.concrete, R.minX - 0.1, wy, (S.maxZ + R.maxZ) / 2);
  B.add(boxGeo(0.2, cyl - S.top + 0.1, S.maxZ - S.minZ, 1), M.concrete, R.minX - 0.1, (S.top + cyl + 0.1) / 2, (S.minZ + S.maxZ) / 2);
  B.add(boxGeo(0.2, S.y - fy, S.maxZ - S.minZ, 1), M.concrete, R.minX - 0.1, (S.y + fy) / 2, (S.minZ + S.maxZ) / 2);
  world.addBox(R.minX - 0.3, R.minX, R.minZ - 0.3, S.minZ, -3.4, -0.5);
  world.addBox(R.minX - 0.3, R.minX, S.maxZ, R.maxZ + 0.3, -3.4, -0.5);
  world.addBox(R.minX - 0.3, R.minX, S.minZ, S.maxZ, S.top, -0.5);
  world.addRegionBox(R.minX, R.maxX, R.minZ - 0.05, R.maxZ);

  // ---------------- Lüftungsschacht ----------------
  world.tag = 'Lüftungsschacht';
  const sw = S.maxZ - S.minZ, sh = S.top - S.y;
  const sFloor = new THREE.Mesh(planeGeo(S.maxX - S.minX + 1.2, sw, 1), M.metal); sFloor.rotation.x = -Math.PI / 2; sFloor.position.set((S.minX + S.maxX) / 2 - 0.6, S.y, (S.minZ + S.maxZ) / 2); scene.add(sFloor);
  B.add(boxGeo(S.maxX - S.minX + 0.1, 0.05, sw + 0.1, 1), M.metal, (S.minX + S.maxX) / 2 - 0.05, S.top + 0.025, (S.minZ + S.maxZ) / 2);
  for (const z of [S.minZ - 0.03, S.maxZ + 0.03]) B.add(boxGeo(S.maxX - S.minX + 1.2, sh + 0.1, 0.05, 1), M.metal, (S.minX + S.maxX) / 2 - 0.6, (S.y + S.top) / 2, z);
  world.addFloor(S.minX - 1.0, S.maxX + 0.05, S.minZ, S.maxZ, S.y);
  world.addBox(S.minX - 1.0, S.maxX, S.minZ - 0.25, S.minZ, -3.4, -1.0);
  world.addBox(S.minX - 1.0, S.maxX, S.maxZ, S.maxZ + 0.25, -3.4, -1.0);
  world.addBox(S.minX - 0.1, S.maxX, S.minZ, S.maxZ, S.top, -0.9);
  world.addBox(S.minX - 1.3, S.minX - 0.9, S.minZ, S.maxZ, -3.4, -0.5);
  world.addRegionBox(S.minX - 0.9, S.maxX + 0.05, S.minZ, S.maxZ);
  world.addSurface(S.minX - 1.2, S.maxX, S.minZ, S.maxZ, 'metal', -3.2, -1.5);
  // Senkrechter Schacht + Leiter (Ende)
  B.add(boxGeo(0.9, 3.2, 0.05, 1), M.concrete, S.minX - 0.55, -1.4, S.minZ - 0.05);
  B.add(boxGeo(0.9, 3.2, 0.05, 1), M.concrete, S.minX - 0.55, -1.4, S.maxZ + 0.05);
  B.add(boxGeo(0.05, 3.2, 0.9, 1), M.concrete, S.minX - 1.0, -1.4, (S.minZ + S.maxZ) / 2);
  for (let i = 0; i < 9; i++) B.add(cylGeo(0.015, 0.015, 0.5, 6, 1), M.rust, S.minX - 0.93, S.y + 0.3 + i * 0.33, (S.minZ + S.maxZ) / 2, Math.PI / 2, 0, 0);
  // Lüftungshaube oben im Wald
  const vx = S.minX - 0.55, vz = (S.minZ + S.maxZ) / 2, vy = ht(vx, vz);
  B.add(boxGeo(1.1, 0.7, 1.1, 1), M.concrete, vx, vy + 0.25, vz);
  const grate = new THREE.Mesh(boxGeo(0.95, 0.04, 0.95, 0.5), M.bauzaun); grate.position.set(vx, vy + 0.62, vz); scene.add(grate);
  world.addBox(vx - 0.55, vx + 0.55, vz - 0.55, vz + 0.55, -0.9, vy + 0.6);
  G.objects.ventTop = { pos: new THREE.Vector3(vx, vy + 0.5, vz), grate };

  // Lüfter + Gitter
  const fanG = new THREE.Group(); fanG.position.set(R.minX + 0.12, (S.y + S.top) / 2, (S.minZ + S.maxZ) / 2);
  const housing = new THREE.Mesh(boxGeo(0.25, 0.85, 0.95, 0.5), M.darkMetal); housing.position.x = 0.0; fanG.add(housing);
  const hole2 = new THREE.Mesh(new THREE.CircleGeometry(0.33, 20), new THREE.MeshBasicMaterial({ color: 0x050505 })); hole2.position.x = 0.13; hole2.rotation.y = Math.PI / 2; fanG.add(hole2);
  const blades = new THREE.Group(); blades.position.x = 0.14; fanG.add(blades);
  for (let i = 0; i < 5; i++) { const bl = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.3, 0.1), M.metal); bl.position.y = 0.15; const piv = new THREE.Group(); piv.rotation.x = (i / 5) * Math.PI * 2; bl.rotation.y = 0.5; piv.add(bl); blades.add(piv); }
  const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.06, 10), M.darkMetal); hub.rotation.z = Math.PI / 2; blades.add(hub);
  // Gitter
  const gc = document.createElement('canvas'); gc.width = gc.height = 128; const gx = gc.getContext('2d');
  gx.fillStyle = '#666'; for (let i = 0; i < 128; i += 12) gx.fillRect(0, i, 128, 6); gx.fillRect(0, 0, 6, 128); gx.fillRect(122, 0, 6, 128);
  const gt = new THREE.CanvasTexture(gc);
  const grille = new THREE.Mesh(new THREE.PlaneGeometry(0.78, 0.78), new THREE.MeshLambertMaterial({ map: gt, alphaTest: 0.4, transparent: false, side: THREE.DoubleSide }));
  // Alpha: schwarze Bereiche durchsichtig
  grille.material.onBeforeCompile = (sh2) => { sh2.fragmentShader = sh2.fragmentShader.replace('#include <alphatest_fragment>', 'if (diffuseColor.r < 0.1) discard;'); };
  grille.position.set(0.2, 0, 0); grille.rotation.y = Math.PI / 2; fanG.add(grille);
  const screws = [];
  for (const [yy, zz] of [[0.36, 0.36], [0.36, -0.36], [-0.36, 0.36], [-0.36, -0.36]]) { const s = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.02, 8), M.metal); s.rotation.z = Math.PI / 2; s.position.set(0.21, yy, zz); fanG.add(s); screws.push(s); }
  scene.add(fanG);
  const ventCol = world.addBox(R.minX - 0.25, R.minX + 0.35, S.minZ - 0.1, S.maxZ + 0.1, -3.4, S.top + 0.15);
  let fanSpeed = 0, fanTarget = 1;
  world.updaters.push((dt) => { fanSpeed += (fanTarget - fanSpeed) * (1 - Math.exp(-(fanTarget > 0 ? 3 : 0.7) * dt)); blades.rotation.x += fanSpeed * 22 * dt; });
  G.objects.fan = {
    group: fanG, grille, screws, housing, blades, ventCol, pos: new THREE.Vector3(R.minX + 0.3, (S.y + S.top) / 2, (S.minZ + S.maxZ) / 2),
    setOn(on) { fanTarget = on ? 1 : 0; },
    get running() { return fanTarget > 0; },
    removeGrille() { grille.visible = false; screws.forEach((s) => (s.visible = false)); },
    removeFan() { housing.visible = false; blades.visible = false; hole2.visible = false; ventCol.enabled = false; },
    reset(on = true) { fanTarget = on ? 1 : 0; fanSpeed = fanTarget; grille.visible = true; screws.forEach((s) => (s.visible = true)); housing.visible = true; blades.visible = true; hole2.visible = true; ventCol.enabled = true; },
  };

  // Neonröhre
  const tubeG = new THREE.Group(); tubeG.position.set(-61.4, cyl - 0.08, 144.2);
  const tubeBox = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.06, 1.3), M.darkMetal); tubeG.add(tubeBox);
  const tubeMat = new THREE.MeshBasicMaterial({ color: 0xe8f0ff });
  const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 1.2, 8), tubeMat); tube.rotation.x = Math.PI / 2; tube.position.y = -0.05; tubeG.add(tube);
  scene.add(tubeG);
  const tubeHalo = haloSprite(0xd8e8ff, 1.6, 0.35); tubeHalo.position.set(-61.4, cyl - 0.15, 144.2); scene.add(tubeHalo);
  const tubeState = { on: true, k: 1 };
  const tubeFlicker = (t) => {
    if (!tubeState.on) return 0;
    const ph = t % 7.3;
    let k = 1;
    if (ph < 0.35) k = Math.random() < 0.5 ? 0.15 : 1;
    else if (ph > 4.1 && ph < 4.25) k = 0.25;
    if (Math.random() < 0.006) k = 0.3;
    return k;
  };
  const tubeLamp = world.addLamp({ pos: [-61.4, cyl - 0.3, 144.2], color: 0xdfeaff, intensity: 9, distance: 9, visibleDist: 25 });
  world.updaters.push((dt, t) => {
    const k = tubeFlicker(t); tubeState.k = k;
    tubeLamp.level = k; leak.level = k * (G.objects.hatch.state.open ? 1 : 0);
    tubeMat.color.setScalar(0.15 + 0.85 * k); tubeHalo.material.opacity = 0.35 * k;
    if (G.audio.loops.tube) G.audio.setLoop('tube', k > 0.5 ? 1 : 0.2, 0.02);
  });
  G.objects.tube = { state: tubeState, pos: new THREE.Vector3(-61.4, cyl - 0.1, 144.2), set(on) { tubeState.on = on; } };

  // Werkbank (Ost)
  const wbX = R.maxX - 0.35, wbY = fy + 0.9;
  B.add(boxGeo(0.65, 0.06, 3.2, 1), M.darkWood, wbX, wbY, 143.8);
  for (const z of [142.3, 145.3]) for (const x of [wbX - 0.28, wbX + 0.28]) B.add(boxGeo(0.06, 0.9, 0.06, 1), M.darkWood, x, fy + 0.45, z);
  world.addBox(wbX - 0.35, R.maxX, 142.1, 145.5, -3.4, wbY + 0.1);
  // Schublade
  const drawer = new THREE.Group(); drawer.position.set(wbX - 0.3, wbY - 0.12, 143.0);
  const dBox = new THREE.Mesh(boxGeo(0.5, 0.14, 0.6, 1), M.darkWood); dBox.position.x = 0.22; drawer.add(dBox);
  const dFront = new THREE.Mesh(boxGeo(0.03, 0.16, 0.64, 1), M.wood); drawer.add(dFront);
  const handle = new THREE.Mesh(boxGeo(0.03, 0.02, 0.16, 1), M.metal); handle.position.x = -0.03; drawer.add(handle);
  const screwdriver = new THREE.Group();
  const sdh = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.02, 0.1, 8), lam('sdh', { color: 0xc8a018 })); sdh.rotation.x = Math.PI / 2; screwdriver.add(sdh);
  const sds = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.12, 6), M.metal); sds.rotation.x = Math.PI / 2; sds.position.z = 0.11; screwdriver.add(sds);
  screwdriver.position.set(0.18, 0.08, 0.05); screwdriver.rotation.y = 0.4; drawer.add(screwdriver);
  scene.add(drawer);
  let drawerT = 0, drawerX = 0;
  world.updaters.push((dt) => { drawerX += (drawerT - drawerX) * (1 - Math.exp(-8 * dt)); drawer.position.x = wbX - 0.3 - drawerX; });
  G.objects.drawer = { open() { drawerT = 0.38; }, set(o) { drawerT = drawerX = o ? 0.38 : 0; }, screwdriver, pos: new THREE.Vector3(wbX - 0.4, wbY - 0.1, 143.0) };
  // Sachen auf der Werkbank
  const note = new THREE.Mesh(boxGeo(0.22, 0.02, 0.3, 1), lam('notebook', { color: 0x2a2a3a })); note.position.set(wbX - 0.05, wbY + 0.04, 142.75); note.rotation.y = 0.2; scene.add(note);
  const pgs = new THREE.Mesh(new THREE.PlaneGeometry(0.2, 0.28), lam('pages', { color: 0xcfc8b4 })); pgs.rotation.x = -Math.PI / 2; pgs.position.set(wbX - 0.05, wbY + 0.052, 142.75); pgs.rotation.z = 0.2; scene.add(pgs);
  const rec = new THREE.Group();
  const recBox = new THREE.Mesh(boxGeo(0.28, 0.16, 0.42, 1), lam('recorder', { color: 0x1c1c1e })); rec.add(recBox);
  const spk = new THREE.Mesh(new THREE.CircleGeometry(0.06, 16), lam('spk', { color: 0x080808 })); spk.position.set(-0.141, 0.0, 0.1); spk.rotation.y = -Math.PI / 2; rec.add(spk);
  const led = new THREE.Mesh(new THREE.SphereGeometry(0.01, 6, 4), emissive(0xff2010)); led.position.set(-0.141, 0.05, -0.12); rec.add(led);
  const lab = signMesh([{ t: 'RUF 2', font: 'bold 72px "Comic Sans MS"', color: '#111' }], 0.16, 0.06, { w: 256, h: 96, bg: '#e8e4d0', border: null, worn: false });
  lab.position.set(-0.142, -0.04, -0.05); lab.rotation.y = -Math.PI / 2; rec.add(lab);
  rec.position.set(wbX + 0.05, wbY + 0.11, 144.5); scene.add(rec);
  // Lautsprecher (Ersatz) + Batterien
  for (let i = 0; i < 3; i++) B.add(cylGeo(0.05, 0.05, 0.16, 10, 1), lam('spkCyl', { color: 0x222226 }), wbX + 0.05, wbY + 0.11, 145.05 + i * 0.13);
  B.add(boxGeo(0.12, 0.05, 0.08, 1), lam('batt', { color: 0x6a4a1a }), wbX - 0.1, wbY + 0.05, 143.6);
  // Steckdosenleiste
  const strip = new THREE.Mesh(boxGeo(0.06, 0.04, 0.32, 1), M.white); strip.position.set(wbX + 0.15, wbY + 0.05, 142.45); scene.add(strip);
  const stripLed = new THREE.Mesh(new THREE.SphereGeometry(0.007, 6, 4), emissive(0xff3020)); stripLed.position.set(wbX + 0.12, wbY + 0.075, 142.33); scene.add(stripLed);
  G.objects.strip = { pos: new THREE.Vector3(wbX, wbY + 0.06, 142.45), led: stripLed };
  // Handy (zum Laden hingelegt)
  const phoneMesh = new THREE.Group();
  const pb = new THREE.Mesh(boxGeo(0.075, 0.01, 0.155, 1), lam('phoneBody', { color: 0x111111 })); phoneMesh.add(pb);
  const ps = new THREE.Mesh(new THREE.PlaneGeometry(0.068, 0.145), new THREE.MeshBasicMaterial({ color: 0x223355 })); ps.rotation.x = -Math.PI / 2; ps.position.y = 0.0055; phoneMesh.add(ps);
  phoneMesh.position.set(wbX - 0.08, wbY + 0.04, 142.45); phoneMesh.rotation.y = 0.15; phoneMesh.visible = false; scene.add(phoneMesh);
  G.objects.chargingPhone = { mesh: phoneMesh, screen: ps };
  G.objects.recorder = { group: rec, pos: new THREE.Vector3(wbX + 0.0, wbY + 0.12, 144.5), led };
  G.objects.notebook = { pos: new THREE.Vector3(wbX - 0.05, wbY + 0.05, 142.75) };
  // Stuhl
  B.add(boxGeo(0.42, 0.04, 0.42, 1), M.darkWood, wbX - 0.7, fy + 0.45, 143.6);
  B.add(boxGeo(0.04, 0.45, 0.42, 1), M.darkWood, wbX - 0.9, fy + 0.7, 143.6);
  world.addBox(wbX - 0.95, wbX - 0.5, 143.35, 143.85, -3.4, fy + 1.0);
  // Wand: Karte, Polaroids, Zeitung
  const wallX = R.maxX - 0.01;
  const map = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 0.82), new THREE.MeshLambertMaterial({ map: T.mapTex() }));
  map.position.set(wallX, fy + 1.75, 143.7); map.rotation.y = -Math.PI / 2; scene.add(map);
  G.objects.map = { pos: map.position.clone() };
  const pol = [[142.6, 1.95], [142.75, 1.55], [144.6, 2.0], [144.85, 1.6], [142.5, 1.2], [144.7, 1.2], [143.4, 2.3]];
  pol.forEach(([z, y], i) => { const p = new THREE.Mesh(new THREE.PlaneGeometry(0.16, 0.19), new THREE.MeshLambertMaterial({ map: T.polaroidTex(i + 3) })); p.position.set(wallX - 0.002 * i, fy + y, z); p.rotation.set(0, -Math.PI / 2, (Math.random() - 0.5) * 0.2); scene.add(p); });
  G.objects.polaroids = { pos: new THREE.Vector3(wallX, fy + 1.6, 142.7) };
  const news = new THREE.Mesh(new THREE.PlaneGeometry(0.34, 0.42), new THREE.MeshLambertMaterial({ map: T.newspaperTex() }));
  news.position.set(wallX, fy + 1.55, 145.4); news.rotation.set(0, -Math.PI / 2, 0.05); scene.add(news);
  G.objects.news = { pos: news.position.clone() };
  // Kabel zur Decke
  B.add(cylGeo(0.008, 0.008, 1.6, 4, 1), M.black, wallX - 0.02, fy + 1.9, 145.9);
  // Rohre unter der Decke, Kartons
  B.add(cylGeo(0.05, 0.05, 5.6, 8, 1), M.rust, -61.5, -0.78, 142.0, 0, 0, Math.PI / 2);
  B.add(cylGeo(0.035, 0.035, 5.0, 8, 1), M.darkMetal, -62.2, -0.72, 144.2, Math.PI / 2, 0, 0);
  for (const x of [-63.5, -60.5]) B.add(boxGeo(0.04, 0.12, 0.08, 1), M.darkMetal, x, -0.68, 142.0);
  for (const [x, y, z, w] of [[-60.2, -3.0, 146.3, 0.6], [-60.25, -2.62, 146.35, 0.5], [-59.4, -3.02, 146.4, 0.5]]) B.add(boxGeo(w, 0.4, 0.45, 1), lam('cardboard', { color: 0x6a5238 }), x, y, z, 0, 0.1, 0);
  world.addBox(-60.55, -59.1, 146.1, 146.8, -3.4, -2.3);
  // Regal Süd
  B.add(boxGeo(2.2, 1.9, 0.42, 1), M.darkWood, -62.5, fy + 0.95, R.maxZ - 0.22);
  world.addBox(-63.65, -61.35, R.maxZ - 0.45, R.maxZ, -3.4, -1.0);
  const shelfItems = lam('shelfItems', { color: 0x3a3630 });
  for (let i = 0; i < 9; i++) B.add(boxGeo(0.18 + (i % 3) * 0.05, 0.2, 0.25, 1), [shelfItems, lam('cans', { color: 0x5a4a30 }), lam('spkC', { color: 0x1a1a1c })][i % 3], -63.4 + i * 0.22, fy + 0.5 + Math.floor(i / 3) * 0.55, R.maxZ - 0.22);
  // Kanister, Eimer
  B.add(boxGeo(0.3, 0.45, 0.18, 1), lam('canister', { color: 0x6a1a12 }), -64.0, fy + 0.22, 146.3);
  B.add(cylGeo(0.16, 0.13, 0.32, 10, 1), M.metal, -63.9, fy + 0.16, 142.4);
  world.addCircle(-63.9, 142.4, 0.18, -3.4, -2.7);
  // Schlüsselbrett
  B.add(boxGeo(0.5, 0.25, 0.03, 1), M.wood, -60.4, fy + 1.55, R.maxZ - 0.02);
  const keyMat = lam('key', { color: 0x9a8a50 });
  const keys = [];
  for (let i = 0; i < 4; i++) {
    const k = new THREE.Group();
    const kb = new THREE.Mesh(new THREE.BoxGeometry(0.015, 0.06, 0.004), keyMat); kb.position.y = -0.04; k.add(kb);
    const tag = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.05, 0.004), lam('tag' + i, { color: i === 2 ? 0xa01a10 : 0x8a8a7a })); tag.position.y = -0.1; k.add(tag);
    k.position.set(-60.58 + i * 0.12, fy + 1.6, R.maxZ - 0.045); scene.add(k); keys.push(k);
  }
  G.objects.keys = { pos: new THREE.Vector3(-60.34, fy + 1.52, R.maxZ - 0.05), torKey: keys[2] };
  // Sicherungskasten
  const fbX = -59.25, fbY = fy + 1.55, fbZ = R.maxZ - 0.06;
  B.add(boxGeo(0.42, 0.52, 0.1, 1), lam('fusebox', { color: 0x8a8c86 }), fbX, fbY, fbZ);
  const fuseLabel = signMesh([{ t: '1 LICHT', font: 'bold 36px Arial' }, { t: '2 ______', font: 'bold 36px Arial' }, { t: '3 STECKD.', font: 'bold 36px Arial' }], 0.3, 0.18, { w: 256, h: 160, bg: '#ddd8c8', border: null });
  fuseLabel.position.set(fbX, fbY + 0.14, fbZ - 0.052); fuseLabel.rotation.y = Math.PI; scene.add(fuseLabel);
  const switches = [];
  for (let i = 0; i < 3; i++) {
    const s = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.08, 0.04), lam('sw', { color: 0x202020 }));
    s.position.set(fbX + 0.12 - i * 0.12, fbY - 0.1, fbZ - 0.065); scene.add(s);
    switches.push(s);
  }
  G.objects.fuse = {
    switches, pos: (i) => new THREE.Vector3(fbX + 0.12 - i * 0.12, fbY - 0.1, fbZ - 0.08),
    setVisual(i, on) { switches[i].rotation.x = on ? 0 : 0.6; switches[i].position.y = fbY - 0.1 - (on ? 0 : 0.015); },
    label: fuseLabel,
  };

  // ---------------- Der Mann ----------------
  const man = makeHuman({ coat: 0x1a1c1a, pants: 0x0c0c0e, hood: true, height: 1.93, longCoat: true });
  man.root.position.set(0, -500, 0); scene.add(man.root);
  const torch = new THREE.SpotLight(0xfff4e0, 0, 30, 0.36, 0.5, 2);
  torch.position.set(0.24, 0.05, -0.42); man.chest.add(torch);
  const tgt = new THREE.Object3D(); tgt.position.set(0.15, -1.6, -8); man.chest.add(tgt); torch.target = tgt;
  const torchGlow = haloSprite(0xfff0d8, 0.7, 0.9); torchGlow.position.copy(torch.position); man.chest.add(torchGlow);
  const torchBody = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.03, 0.2, 8), M.black); torchBody.rotation.x = Math.PI / 2; torchBody.position.set(0.24, 0.05, -0.32); man.chest.add(torchBody);
  G.objects.man = {
    H: man, torch, glow: torchGlow,
    show(on) { if (!on) man.root.position.set(0, -500, 0); torch.intensity = on ? 26 : 0; torchGlow.visible = on; },
  };

  // Silhouette (für die Hügelschneise) – gleiche Figur, ohne Licht
  const sil = makeHuman({ coat: 0x0e0f10, pants: 0x0a0a0a, hood: true, height: 1.93, longCoat: true });
  sil.root.visible = false; scene.add(sil.root);
  G.objects.silhouette = sil;

  // Deniz (Ende)
  const deniz = makeHuman({ coat: 0x5a5a5e, pants: 0x2a3550, hood: false, height: 1.78, skin: 0x8a6a54 });
  deniz.sit();
  deniz.root.visible = false; scene.add(deniz.root);
  const hair = new THREE.Mesh(new THREE.SphereGeometry(0.122, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.55), lam('hair', { color: 0x15100c }));
  hair.position.y = 0.14; deniz.neck.add(hair);
  // Kapuze liegt im Nacken, Bauchtasche, weiße Sneaker
  const hoodDown = new THREE.Mesh(new THREE.TorusGeometry(0.13, 0.05, 6, 14), lam('hoodie', { color: 0x5a5a5e }));
  hoodDown.rotation.x = Math.PI / 2 + 0.3; hoodDown.position.set(0, 0.02, 0.04); deniz.neck.add(hoodDown);
  const pocket = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.12, 0.03), lam('hoodiePocket', { color: 0x4e4e52 }));
  pocket.position.set(0, 0.22, -0.16); deniz.hips.add(pocket);
  deniz.root.traverse((o) => { if (o.isMesh && o.geometry.type === 'BoxGeometry' && o.material.color.getHex() === 0x0b0b0b) o.material = lam('sneaker', { color: 0xd8d8d2 }); });
  G.objects.deniz = deniz;

  // Handy am Boden (Sturz)
  const gp = new THREE.Group();
  const gpb = new THREE.Mesh(boxGeo(0.075, 0.01, 0.155, 1), lam('phoneBody2', { color: 0x111111 })); gp.add(gpb);
  const gps = new THREE.Mesh(new THREE.PlaneGeometry(0.068, 0.145), new THREE.MeshBasicMaterial({ color: 0x8aa8ff })); gps.rotation.x = -Math.PI / 2; gps.position.y = 0.006; gp.add(gps);
  const gph = haloSprite(0x9ab0ff, 0.9, 0.6); gph.position.y = 0.08; gp.add(gph);
  gp.visible = false; scene.add(gp);
  const gpl = world.addLamp({ pos: [0, 0, 0], color: 0x9ab0ff, intensity: 1.2, distance: 3.5, enabled: false });
  G.objects.groundPhone = {
    group: gp, lamp: gpl, screen: gps, halo: gph,
    place(x, y, z) { gp.position.set(x, y + 0.01, z); gp.rotation.y = 1.2; gp.visible = true; gpl.pos.set(x, y + 0.15, z); gpl.enabled = true; },
    hide() { gp.visible = false; gpl.enabled = false; },
    pulse(t) { const k = 0.5 + 0.5 * Math.max(0, Math.sin(t * 3)); gps.material.color.setRGB(0.3 + k * 0.4, 0.4 + k * 0.4, 0.7 + k * 0.3); gph.material.opacity = 0.3 + k * 0.5; gpl.intensity = 0.6 + k * 1.2; },
  };

  // Fallender Ast (Flucht)
  const brG = new THREE.Group();
  const brMain = new THREE.Mesh(cylGeo(0.1, 0.22, 4.6, 7, 1.2), M.barkOak); brMain.position.y = 2.3; brG.add(brMain);
  for (let i = 0; i < 4; i++) { const sb = new THREE.Mesh(cylGeo(0.03, 0.07, 1.6, 5, 1.2), M.barkOak); sb.position.set(0, 1.2 + i * 0.8, 0); sb.rotation.set(0.7 * (i % 2 ? 1 : -1), i, 0.4); sb.translateY(0.7); brG.add(sb); }
  const brLeaf = new THREE.Mesh(crossGeo(2.2, 1.8, 3), M.leafOak); brLeaf.position.y = 3.2; brG.add(brLeaf);
  brG.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  scene.add(brG);
  G.objects.branch = { group: brG };

  return {};
}
