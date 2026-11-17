// Außenwelt: Straße, Waldspielpark Goetheturm, Hügelschneise, Wald, Zaun, Bach, Gärten
import * as THREE from 'three';
import { G } from '../state.js';
import { Batch, Forest, Scatter, treeVariants, crossGeo, boxGeo, cylGeo, planeGeo, lam, makeHuman, normalFrom } from '../models.js';
import * as T from '../textures.js';
import { Terrain, stripGeo } from './terrain.js';
import { beam, prismGeo, bench, trashBin, car, haloSprite, emissive, signMesh, pumpkin, graveLight } from './props.js';
import { rng, segDist, clamp } from '../util.js';

// x-Mitte eines Wegs (Polylinie, nach z sortiert) an der Stelle z
export function pathX(pts, z) {
  if (z <= pts[0][1]) return pts[0][0];
  for (let i = 0; i < pts.length - 1; i++) {
    const [ax, az] = pts[i], [bx, bz] = pts[i + 1];
    if (z >= az && z <= bz) return ax + (bx - ax) * ((z - az) / (bz - az || 1));
  }
  return pts[pts.length - 1][0];
}
export const schX = (z) => pathX(P.schneise, z);

// Wichtige Positionen (für die Story)
export const P = {
  homeDoor: new THREE.Vector3(-7.97, 0, -131),
  homeSpawn: [-6.6, 0, -131],
  deniz: [-7.55, 0.3, -130.55],
  canBench: [-3, -55],
  tower: [13, -50],
  schneiseStart: [0, -31],
  // Kiesweg der Hügelschneise: geschwungen, mit Abzweigungen (Sackgassen)
  schneise: [[0, -31], [0, -23], [-2.6, -13], [-3.4, -3], [-0.6, 7], [3, 16], [3.8, 24.5], [1.2, 33], [-1.6, 41], [-0.4, 48], [0, 52.5], [0, 59.6]],
  branches: [
    [[-2.6, -13], [-8.5, -16.5], [-14, -15.2], [-19.5, -18.6]],
    [[3.8, 24.5], [7.0, 27.2], [9.4, 28.4]],
    [[-1.6, 41], [-7.5, 43.8], [-11.6, 47.2]],
  ],
  barrier: [0, 57.5],
  squeeze: [-3.3, 54.4],
  pile: [-7.0, 54.6],
  corridor: [[-7.8, 54.6], [-13, 60], [-20, 68], [-27, 77], [-36, 84], [-46, 83], [-55, 86], [-60, 94], [-62, 102], [-69, 104.5], [-75, 106], [-75.5, 118], [-72, 128], [-67, 133.5]],
  escape: [[-71.5, 142.5], [-74, 131], [-75.5, 118], [-75.5, 106]],
  dropAt: [-61, 98],
  fenceX: -79,
  gateZ: 106,
  hut: [-62, 140],
  clearing: [-63, 140],
  ventExit: [-71.8, 142.4],
  speaker: new THREE.Vector3(-56, 5, 150),
  streamX: -83.2,
};

export function buildOutside(scene, world, M) {
  const B = new Batch(48);
  const terrain = new Terrain();
  world.terrain = terrain;
  // Treppenschacht unter der Hütte freigraben (wird von Hüttenboden überdeckt)
  terrain.hole(-64, -60, 138, 142);
  world.underground = [{ minX: -64, maxX: -60, minZ: 138, maxZ: 142, top: 1.0 }, { minX: 400, maxX: 700, minZ: -100, maxZ: 100, top: 100 }];
  G.terrain = terrain;
  // Waldboden: nasses Laub mit Normal-Map – die Taschenlampe glänzt leicht darauf
  const leafT = T.leavesTex();
  const tMat = G.settings.quality === 'low'
    ? new THREE.MeshLambertMaterial({ map: leafT, normalMap: normalFrom(leafT, 3.2), vertexColors: true, color: new THREE.Color(2.1, 2.1, 2.1) })
    : new THREE.MeshStandardMaterial({ map: leafT, normalMap: normalFrom(leafT, 3.2), roughness: 0.74, metalness: 0, vertexColors: true, color: new THREE.Color(2.2, 2.2, 2.2) });
  scene.add(terrain.mesh(tMat));
  const H = (x, z) => terrain.height(x, z);
  const R = rng(4242);

  buildSky(scene);

  // =====================================================================
  // STRASSE (z -152 .. -72)
  // =====================================================================
  world.tag = 'Straße';
  const road = new THREE.Mesh(planeGeo(7, 80, 6), M.asphalt);
  road.rotation.x = -Math.PI / 2; road.position.set(0, 0.012, -112); road.receiveShadow = true; scene.add(road);
  for (const sx of [-1, 1]) {
    B.add(boxGeo(3, 0.12, 80, 2), M.sidewalk, sx * 5, 0.06, -112);
    B.add(boxGeo(0.18, 0.16, 80, 1), M.concrete, sx * 3.5, 0.08, -112);
    B.add(boxGeo(2, 0.03, 80, 2), M.sidewalk, sx * 7.5, 0.015, -112);
    world.addFloor(sx > 0 ? 3.5 : -6.5, sx > 0 ? 6.5 : -3.5, -152, -72, 0.12);
  }
  world.addSurface(-3.5, 3.5, -155, -71, 'asphalt');
  world.addSurface(-9, -3.5, -155, -71, 'sidewalk');
  world.addSurface(3.5, 9, -155, -71, 'sidewalk');
  world.addRegionBox(-6.6, 6.6, -150, -70);
  world.addRegionBox(-8.4, -6.4, -132.3, -129.7); // Weg zur Haustür
  // Vorgärten begehbar (keine unsichtbare Wand vor den Häusern)
  world.addRegionBox(-8.0, -6.0, -150, -72); world.addRegionBox(6.0, 8.0, -150, -72);

  // Bauzaun am Nordende: sichtbare Grenze statt unsichtbarer Wand
  for (let i = 0; i < 5; i++) {
    const x = -6.6 + i * 3.3;
    B.add(planeGeo(3.3, 2, 0), M.bauzaun, x, 1.12, -150.3, 0, 0, 0, 1, 1, 1, { cast: false });
    B.add(boxGeo(0.6, 0.15, 0.25, 1), M.concrete, x - 1.65, 0.08, -150.3);
  }
  B.add(boxGeo(0.6, 0.15, 0.25, 1), M.concrete, 9.9, 0.08, -150.3);
  world.addBox(-8.3, 8.3, -150.45, -150.15, -50, 50, { label: 'Bauzaun Straßenende' });
  {
    const sg = signMesh([{ t: 'DURCHGANG', font: 'bold 44px Arial', color: '#b01010' }, { t: 'GESPERRT', font: 'bold 44px Arial', color: '#b01010' }], 0.6, 0.4, { w: 256, h: 170, bg: '#f4f0e0' });
    sg.position.set(-1.2, 1.4, -150.25); scene.add(sg);
  }
  // Häuser beidseitig
  world.tag = 'Häuser/Straßenrand';
  const houseZ = [-145, -131, -117, -103, -89];
  houseZ.forEach((z, i) => {
    house(B, M, scene, world, -14, z, 11, 12, i % 4, 'east', i === 1);
    house(B, M, scene, world, 14, z + 4, 11, 12, (i + 2) % 4, 'west', false);
  });
  // Querriegel im Norden
  for (let x = -20; x <= 20; x += 13) house(B, M, scene, world, x, -161, 12, 10, (x + 40) % 4, 'south', false);
  world.addBox(-30, 30, -156, -152);
  // Lücken zwischen Häusern zu
  for (const z of [-138, -124, -110, -96, -82]) { world.addBox(-20, -8.4, z - 1, z + 1); world.addBox(8.4, 20, z + 3, z + 5); }
  for (const z of [-138, -124, -110, -96]) { B.add(boxGeo(0.1, 1.8, 2, 1), M.planksTower, -8.6, 0.9, z); B.add(boxGeo(0.1, 1.8, 2, 1), M.planksTower, 8.6, 0.9, z + 4); }
  // Vorgärten: niedrige Hecken
  for (const z of houseZ) {
    for (const sx of [-1, 1]) {
      const hz = sx < 0 ? z : z + 4;
      for (const off of [-4, 3.2]) { B.add(boxGeo(0.6, 0.8, 2.6, 1), M.hedgeBox, sx * 7.6, 0.4, hz + off, 0, 0, 0, 1, 1, 1); world.addBox(sx * 7.6 - 0.3, sx * 7.6 + 0.3, hz + off - 1.3, hz + off + 1.3, -1, 0.8); }
    }
  }

  // Laternen
  const lampPos = [[-5.9, -146], [-5.9, -121], [-5.9, -96], [5.9, -133], [5.9, -108], [5.9, -83]];
  for (const [x, z] of lampPos) streetLamp(B, M, scene, world, x, z, x < 0 ? 1 : -1);
  // geparkte Autos
  car(B, M, 2.35, -141, 0, 0x2a3540); car(B, M, 2.35, -119, 0, 0x5a1c18);
  car(B, M, 2.35, -98, Math.PI, 0x3c3c3a); car(B, M, -2.35, -126, Math.PI, 0x1e2a22); car(B, M, -2.35, -106, 0, 0x6a6a66);
  for (const [x, z] of [[2.35, -141], [2.35, -119], [2.35, -98], [-2.35, -126], [-2.35, -106]]) world.addBox(x - 0.95, x + 0.95, z - 2.15, z + 2.15, -1, 1.5);
  // Mülltonnen
  for (const [x, z] of [[-7.2, -128], [-7.2, -127.2], [7.2, -100], [7.2, -113]]) { B.add(boxGeo(0.6, 1.0, 0.7, 1), lam('bin' + (x > 0 ? 1 : 0), { color: x > 0 ? 0x2a3a52 : 0x3a3a3a }), x, 0.5, z); world.addBox(x - 0.3, x + 0.3, z - 0.35, z + 0.35, -1, 1.0); }
  // Kürbis auf einer Treppe (Halloween)
  pumpkin(scene, 7.25, 0.15, -98.45, -Math.PI / 2);
  world.addLamp({ pos: [6.9, 0.55, -98.45], color: 0xff8a30, intensity: 1.8, distance: 5, flicker: (t) => 0.75 + Math.sin(t * 13) * 0.12 + Math.sin(t * 31.7) * 0.1 });
  { const h2 = haloSprite(0xff8a30, 0.9, 0.35); h2.position.set(7.0, 0.38, -98.45); scene.add(h2); }
  // Straßenschilder
  const s1 = signMesh([{ t: 'Wendelsweg', font: 'bold 64px Arial' }], 1.2, 0.3, { w: 512, h: 128, bg: '#f2f2ec', border: '#222' });
  s1.position.set(-5.9, 2.6, -149); s1.rotation.y = Math.PI / 2; scene.add(s1);
  B.add(cylGeo(0.04, 0.04, 2.8, 6), M.metal, -5.9, 1.4, -149);
  const s2 = signMesh(['Waldspielpark', { t: 'Goetheturm  →', font: 'bold 56px Arial' }], 1.4, 0.7, { bg: '#5a3a20', fg: '#f0e6cc', border: '#e8dcc0' });
  s2.position.set(5.6, 2.1, -76); s2.rotation.y = -Math.PI / 2; scene.add(s2);
  B.add(cylGeo(0.05, 0.05, 2.2, 6), M.wood, 5.6, 1.1, -76);
  // Schranke Wanderparkplatz
  B.add(cylGeo(0.06, 0.06, 1.0, 8), M.white, -3.8, 0.5, -73); B.add(boxGeo(5.5, 0.1, 0.1, 1), M.stripes, -1.0, 0.95, -73);
  // Straßenbäume
  for (const z of [-140, -114, -90]) streeTree(B, M, scene, world, -7.4, z);

  // =====================================================================
  // WALDSPIELPARK GOETHETURM (x -28..28, z -72..-30)
  // =====================================================================
  world.tag = 'Spielplatz Goetheturm';
  const pg = new THREE.Mesh(planeGeo(56, 44, 2.5), M.mulch);
  pg.rotation.x = -Math.PI / 2; pg.position.set(0, 0.02, -51); pg.receiveShadow = true; scene.add(pg);
  const pgPath = new THREE.Mesh(stripGeo(terrain, [[0, -72], [0, -60], [-2, -50], [0, -38], [0, -29]], 3.6, 1, 0.045), M.gravel);
  pgPath.receiveShadow = true; scene.add(pgPath);
  world.addRegionBox(-27, 27, -72.5, -29.5);
  world.addSurface(-28, 28, -72, -29, 'mulch');
  world.addSurface(-2, 2, -72, -29, 'gravel');

  buildTower(B, M, scene, world, P.tower[0], P.tower[1]);
  kiosk(B, M, scene, world, -18, -65);
  climbingFrame(B, M, world, -12, -47);
  G.objects.swing = swings(B, M, scene, world, -17, -37);
  // Sandkasten
  for (const [x, z, w, d] of [[-4, -40, 4.4, 0.3], [-4, -36, 4.4, 0.3], [-6.05, -38, 0.3, 4.4], [-1.95, -38, 0.3, 4.4]]) B.add(boxGeo(w, 0.3, d, 1), M.wood, x, 0.15, z);
  { const s = new THREE.Mesh(planeGeo(3.8, 3.8, 2), M.sand); s.rotation.x = -Math.PI / 2; s.position.set(-4, 0.12, -38); s.receiveShadow = true; scene.add(s); world.addFloor(-6, -2, -40, -36, 0.12); world.addSurface(-6, -2, -40, -36, 'sand'); }
  matschanlage(B, M, world, 12, -66);
  // Bänke
  bench(B, M, -3.6, 0, -55, Math.PI / 2); world.addBox(-3.9, -3.3, -55.9, -54.1, -1, 0.9);
  bench(B, M, 8, 0, -34.5, Math.PI); world.addBox(7.1, 8.9, -34.8, -34.2, -1, 0.9);
  trashBin(B, M, -3.6, 0, -53.2);
  // Deniz' Dose
  const can = new THREE.Mesh(new THREE.CylinderGeometry(0.033, 0.033, 0.16, 12), new THREE.MeshLambertMaterial({ color: 0x1f3a20, emissive: 0x020402 }));
  can.position.set(-3.55, 0.54, -55.35); can.castShadow = true; scene.add(can);
  G.objects.can = can;
  // Labyrinth-Andeutung (Irrgarten)
  for (let i = 0; i < 5; i++) { const z = -39 + i * 2.0; const w = 6 - (i % 2) * 2.2; const hx = 22 + (i % 2) * 1.1; B.add(boxGeo(w, 1.3, 0.7, 1), M.hedgeBox, hx, 0.65, z); world.addBox(hx - w / 2, hx + w / 2, z - 0.35, z + 0.35, -1, 1.3); }
  // Parklampen
  parkLamp(B, M, scene, world, 1.6, -69, null);
  G.objects.flickerLamp = parkLamp(B, M, scene, world, -7, -52, (t) => (Math.sin(t * 2.1) > 0.75 ? (Math.random() < 0.35 ? 0.05 : 1) : 1));
  parkLamp(B, M, scene, world, 3, -33.5, () => 0, true);
  // Eingangsschild
  const s3 = signMesh([{ t: 'WALDSPIELPARK', font: 'bold 54px Georgia' }, { t: 'GOETHETURM', font: 'bold 62px Georgia' }], 3.2, 1.2, { bg: '#4a3220', fg: '#ecdcb8', border: '#2a1a10' });
  s3.position.set(-5, 2.3, -71.2); scene.add(s3);
  B.add(cylGeo(0.12, 0.12, 3, 8), M.wood, -6.5, 1.5, -71.2); B.add(cylGeo(0.12, 0.12, 3, 8), M.wood, -3.5, 1.5, -71.2);
  world.addCircle(-6.5, -71.2, 0.15); world.addCircle(-3.5, -71.2, 0.15);
  // ein paar große Bäume im Park
  const parkTrees = [[-22, -58], [-20, -44], [18, -66], [22, -58], [-14, -68], [24, -34], [-24, -33], [10, -38]];

  // =====================================================================
  // HÜGELSCHNEISE (x -2.5..2.5, z -30..62)
  // =====================================================================
  world.tag = 'Hügelschneise';
  const sch = new THREE.Mesh(stripGeo(terrain, [...P.schneise.slice(0, -1), [0, 63]], 5.2, 0.5, 0.09, 3), M.gravel);
  sch.receiveShadow = true; scene.add(sch);
  world.addRegionPath(P.schneise, 2.6, { label: 'Hügelschneise' });
  for (let i = 0; i < P.schneise.length - 1; i++) {
    const [ax, az] = P.schneise[i], [bx, bz] = P.schneise[i + 1];
    world.addSurface(Math.min(ax, bx) - 2.8, Math.max(ax, bx) + 2.8, az - 0.5, bz + 0.5, 'gravel');
  }
  world.addSurface(-2.8, 2.8, 52, 64, 'gravel');
  // Abzweigungen: schmale Trampelpfade, die im Nichts enden
  P.branches.forEach((b, i) => world.addRegionPath(b, 1.25, { label: 'Abzweigung ' + (i + 1) }));
  // Wegweiser
  {
    B.add(cylGeo(0.07, 0.07, 2.4, 8), M.wood, 2.9, H(2.9, -27) + 1.2, -27); world.addCircle(2.9, -27, 0.12);
    const a = signMesh([{ t: 'Hügelschneise', font: 'bold 60px Georgia' }], 1.1, 0.28, { w: 512, h: 128, bg: '#e8e0c8', fg: '#2a2a1a', border: '#3a2a1a' });
    a.position.set(2.9, H(2.9, -27) + 2.1, -27); a.rotation.y = -0.3; scene.add(a);
    const b = signMesh([{ t: 'Maunzenweiher 1,8 km', font: 'bold 44px Georgia' }], 1.0, 0.22, { w: 512, h: 112, bg: '#e8e0c8', fg: '#2a2a1a', border: '#3a2a1a' });
    b.position.set(2.9, H(2.9, -27) + 1.75, -27); b.rotation.y = 0.4; scene.add(b);
  }
  { const bx = schX(12) + 3.3; bench(B, M, bx, H(bx, 12), 12, -Math.PI / 2); }
  // Hochsitz
  hochsitz(B, M, 11.2, H(11.2, 31), 31);
  // Absperrung + umgestürzter Baum
  world.tag = 'Sperrung Forstarbeiten';
  {
    const z = 60.5;
    B.add(cylGeo(0.42, 0.55, 17, 10, 1.2), M.barkOak, 1, H(1, z) + 0.55, z, 0, 0, Math.PI / 2);
    const disc = cylGeo(1.6, 1.6, 0.6, 12, 1); B.add(disc, lam('rootdirt', { color: 0x2a1e14 }), 9.6, H(9.6, z) + 1.2, z, 0, 0, Math.PI / 2);
    for (let i = 0; i < 7; i++) B.add(cylGeo(0.04, 0.1, 2.5, 5, 1), M.barkOak, -4 + i * 1.8, H(0, z) + 1.4, z + (i % 2 ? 0.6 : -0.6), (i % 2 ? 0.9 : -0.9), 0, 0.2);
    world.addBox(-8, 10, z - 0.7, z + 0.7);
    for (const x of [-2.3, 2.3]) { B.add(cylGeo(0.06, 0.06, 1.2, 8), M.white, x, H(x, 57.5) + 0.6, 57.5); }
    B.add(boxGeo(4.6, 0.25, 0.04, 1), M.stripes, 0, H(0, 57.5) + 1.0, 57.5); B.add(boxGeo(4.6, 0.25, 0.04, 1), M.stripes, 0, H(0, 57.5) + 0.45, 57.5);
    world.addBox(-2.6, 2.6, 57.3, 57.7);
    const sg = signMesh([{ t: 'FORSTARBEITEN', font: 'bold 50px Arial', color: '#b01010' }, { t: 'Lebensgefahr!', font: 'bold 40px Arial' }, { t: 'Weg gesperrt', font: '36px Arial' }], 0.9, 0.6, { w: 384, h: 256, bg: '#f4f0e0' });
    sg.position.set(0.6, H(0, 57.4) + 1.45, 57.4); sg.rotation.y = Math.PI; scene.add(sg);
    B.add(cylGeo(0.035, 0.035, 1.4, 6), M.metal, 0.6, H(0, 57.4) + 0.7, 57.45);
  }

  // Engstelle zum Durchzwängen (ducken)
  world.tag = 'Durchschlupf';
  world.addRegionPath([[-2.2, 54.4], [-7.8, 54.6]], 0.75);
  {
    const [sx, sz] = P.squeeze;
    // zwei dicke Stämme + schräg liegender Ast auf Kopfhöhe
    G.squeezeTrees = [[sx, sz - 1.25], [sx, sz + 1.25]];
    const yb = H(sx, sz);
    B.add(cylGeo(0.08, 0.17, 3.4, 6, 1.2), M.barkOak, sx - 0.2, yb + 1.32, sz, Math.PI / 2 - 0.06, 0, 0);
    world.addOBB(sx - 0.2, sz, 0.22, 1.7, 0, yb + 1.2, yb + 1.55);
    world.addBox(sx - 1.8, sx + 1.0, sz - 2.6, sz - 0.75);
    world.addBox(sx - 1.8, sx + 1.0, sz + 0.75, sz + 2.6);
  }
  // Ast-Haufen (wegräumen)
  G.objects.pile = branchPile(scene, world, P.pile[0], H(...P.pile), P.pile[1]);
  // links und rechts vom Ast-Haufen dichtes Gestrüpp: durch kommt man nur, wenn die Äste weg sind
  world.addBox(-7.6, -6.4, 50.8, 53.25, -50, 50, { label: 'Gestrüpp am Durchschlupf' });
  world.addBox(-7.6, -6.4, 55.95, 58.6, -50, 50, { label: 'Gestrüpp am Durchschlupf' });
  const pileBrush = [[-7.0, 52.2], [-6.9, 51.1], [-7.1, 57.1], [-6.9, 58.1], [-7.4, 53.0], [-7.3, 56.3]];

  // Sackgassen am Ende der Abzweigungen
  {
    const [ex, ez] = P.branches[0][P.branches[0].length - 1];
    B.add(cylGeo(0.3, 0.38, 5.4, 9, 1.2), M.barkOak, ex - 0.9, H(ex, ez) + 0.32, ez - 0.7, 0, 0.55, Math.PI / 2);
    world.addOBB(ex - 0.9, ez - 0.7, 2.7, 0.38, -0.55, -50, H(ex, ez) + 0.75, { label: 'Umgestürzter Baum (Sackgasse)' });
    B.add(cylGeo(0.05, 0.05, 1.5, 6), M.wood, ex + 0.9, H(ex + 0.9, ez + 0.6) + 0.75, ez + 0.6);
    const ps = signMesh([{ t: 'PRIVATWEG', font: 'bold 46px Georgia' }, { t: 'Betreten verboten', font: '30px Georgia' }], 0.8, 0.36, { w: 384, h: 172, bg: '#d8d0b8', fg: '#2a1a10', border: '#3a2a1a' });
    ps.position.set(ex + 0.9, H(ex + 0.9, ez + 0.6) + 1.35, ez + 0.6); ps.rotation.y = 0.9; scene.add(ps);
  }
  {
    const [ex, ez] = P.branches[2][P.branches[2].length - 1];
    const gy = H(ex, ez);
    for (let r = 0; r < 3; r++) for (let i = 0; i < 4 - r; i++) B.add(cylGeo(0.26, 0.28, 4.2, 9, 1.2), M.barkOak, ex - 1.0 + i * 0.52 + r * 0.26, gy + 0.27 + r * 0.46, ez + 0.4, Math.PI / 2, 0.75, 0);
    world.addOBB(ex - 0.2, ez + 0.4, 1.3, 2.2, -0.75, -50, gy + 1.5, { label: 'Holzpolter (Sackgasse)' });
  }

  // =====================================================================
  // ABSEITS: Korridor durch den dichten Wald
  // =====================================================================
  world.tag = 'Wald-Korridor';
  world.addRegionPath(P.corridor, 3.0);
  world.addRegionPath(P.escape, 3.0);
  world.addRegionCircle(P.clearing[0], P.clearing[1], 9.5);
  // Trampelpfad (festgetretener, dunklerer Boden) als Wegführung: Durchschlupf -> Korridor, Hütte -> Tor
  {
    const c = document.createElement('canvas'); c.width = 64; c.height = 256; const cx = c.getContext('2d');
    const img = cx.createImageData(64, 256);
    for (let j = 0; j < 256; j++) for (let i = 0; i < 64; i++) {
      const u = i / 63, e = 1 - Math.abs(u - 0.5) * 2;
      const n = (Math.sin(i * 1.7 + j * 0.31) + Math.sin(j * 0.73 + i * 0.4) * 0.6) * 0.16 + (R() - 0.5) * 0.4;
      const a = Math.max(0, Math.min(1, e * 1.7 - 0.3 + n)); const k = (j * 64 + i) * 4;
      img.data[k] = img.data[k + 1] = img.data[k + 2] = a * 255; img.data[k + 3] = 255;
    }
    cx.putImageData(img, 0, 0);
    const am = new THREE.CanvasTexture(c); am.wrapS = am.wrapT = THREE.RepeatWrapping;
    const tm = lam('trodden', { map: T.mulchTex(), alphaMap: am, alphaTest: 0.5, color: new THREE.Color(2.0, 1.8, 1.55) });
    for (const pts of [[[-2.4, 54.4], [-7.8, 54.6], ...P.corridor.slice(1)], P.escape, ...P.branches]) {
      const m = new THREE.Mesh(stripGeo(terrain, pts, 1.6, 1, 0.05, 1.6), tm); m.receiveShadow = true; scene.add(m);
    }
  }
  // liegender Stamm quer über dem Fluchtweg (drüberspringen)
  {
    const lx = -75.15, lz = 121.0, ly = H(lx, lz);
    B.add(cylGeo(0.2, 0.24, 6.8, 9, 1.2), M.barkOak, lx, ly + 0.2, lz, 0, 0.15, Math.PI / 2);
    for (let i = 0; i < 4; i++) B.add(cylGeo(0.03, 0.06, 1.1, 5, 1), M.barkOak, lx - 2.4 + i * 1.5, ly + 0.45, lz + (i % 2 ? 0.25 : -0.25), (i % 2 ? 0.7 : -0.7), 0, 0.3);
    world.addOBB(lx, lz, 3.4, 0.24, 0.15, -50, ly + 0.42, { label: 'Stamm auf dem Fluchtweg (springen)' });
  }

  // Wiedererkennungsbäume (gespalten, mit Flatterband)
  const markerTrees = [[-24.6, 73.2, 0.2], [-58.0, 90.4, 0.2]];
  G.markerTrees = markerTrees;
  // Flatterband an Bäumen entlang des Korridors
  const tapeSpots = [[-11.2, 58.2], [-18.5, 64.6], [-24.6, 73.2], [-32.2, 82.6], [-41.5, 86.2], [-50.5, 82.3], [-58.0, 90.4], [-64.2, 100.0], [-72.5, 103.2], [-77.2, 112.4], [-74.8, 123.6], [-69.9, 131.6]];
  const tapeMeshes = [];
  for (const [x, z] of tapeSpots) tapeMeshes.push(tape(scene, x, H(x, z) + 1.5, z, R() * 6));
  G.objects.tapes = tapeMeshes;
  // Grablicht am Zaun
  const gl = graveLight(scene, -76.6, H(-76.6, 115.5) + 0.02, 115.5);
  world.addLamp({ pos: [-76.6, H(-76.6, 115.5) + 0.25, 115.5], color: 0xff3a20, intensity: 1.2, distance: 5, flicker: (t) => 0.7 + Math.sin(t * 9) * 0.15 + Math.sin(t * 23) * 0.1 });

  // =====================================================================
  // WALD generieren
  // =====================================================================
  world.tag = 'Wald (Bäume)';
  const V = treeVariants(M);
  const F = new Forest(V, 36);
  const areas = [
    { t: 'box', minX: -28, maxX: 28, minZ: -76, maxZ: -29 },
    { t: 'path', pts: [...P.schneise.slice(0, -1), [0, 64]], r: 2.6 },
    ...P.branches.map((b) => ({ t: 'path', pts: b, r: 1.25 })),
    { t: 'path', pts: P.corridor, r: 3 },
    { t: 'path', pts: P.escape, r: 3 },
    { t: 'path', pts: [[-2.2, 54.4], [-7.8, 54.6]], r: 1.1 },
    { t: 'circle', x: P.clearing[0], z: P.clearing[1], r: 9.5 },
  ];
  const sd = (x, z) => {
    let best = Infinity;
    for (const a of areas) {
      let d;
      if (a.t === 'box') {
        const dx = Math.max(a.minX - x, 0, x - a.maxX), dz = Math.max(a.minZ - z, 0, z - a.maxZ);
        d = dx || dz ? Math.hypot(dx, dz) : -Math.min(x - a.minX, a.maxX - x, z - a.minZ, a.maxZ - z);
      } else if (a.t === 'circle') d = Math.hypot(x - a.x, z - a.z) - a.r;
      else { let m = Infinity; for (let i = 0; i < a.pts.length - 1; i++) m = Math.min(m, segDist(x, z, ...a.pts[i], ...a.pts[i + 1]).d); d = m - a.r; }
      if (d < best) best = d;
    }
    return best;
  };
  G.walkSD = sd;
  const occupied = [];
  const blocked = (x, z, r) => {
    for (const o of occupied) if (Math.hypot(o[0] - x, o[1] - z) < o[2] + r) return true;
    return false;
  };
  // feste Bäume zuerst
  for (const [x, z] of markerTrees) { F.add(V.length - 1, x, H(x, z), z, 1, 0.4); world.addCircle(x, z, 0.62); occupied.push([x, z, 1.2]); }
  for (const [x, z] of G.squeezeTrees) { F.add(0, x, H(x, z), z, 1.2, R() * 6); world.addCircle(x, z, 0.55); occupied.push([x, z, 1.0]); }
  for (const [x, z] of parkTrees) { F.add((R() * 3) | 0, x, H(x, z), z, 1.25, R() * 6); world.addCircle(x, z, 0.55); occupied.push([x, z, 1.5]); }
  occupied.push([11.2, 31, 3.2]);
  // Fluchtweg am Zaun: mehr Hindernisse (drunter ducken, Slalom, springen)
  {
    // Baum, der quer in Kopfhöhe hängt: nur geduckt kommt man drunter durch
    const zc = 126.5; let gmax = -Infinity;
    for (let x = -79; x <= -69; x += 2.5) gmax = Math.max(gmax, H(x, zc));
    B.add(cylGeo(0.19, 0.24, 10.6, 9, 1.2), M.barkOak, -74.0, gmax + 1.43, zc, 0, 0.04, Math.PI / 2);
    for (const x of [-79.6, -68.5]) { B.add(cylGeo(0.34, 0.42, 2.4, 9, 1.2), M.barkOak, x, H(x, zc) + 1.0, zc); world.addCircle(x, zc, 0.42); occupied.push([x, zc, 1.0]); }
    for (let i = 0; i < 5; i++) B.add(cylGeo(0.03, 0.05, 1.3, 5, 1), M.barkOak, -77.5 + i * 1.7, gmax + 1.2, zc + (i % 2 ? 0.2 : -0.2), (i % 2 ? 0.5 : -0.5), 0, 0.2);
    world.addOBB(-74.0, zc, 5.3, 0.26, -0.04, gmax + 1.2, gmax + 1.7, { label: 'Hängender Baum (ducken)' });
    G.duckTrunk = [-74.0, zc];
    // zwei dicke tote Stämme: Slalom
    for (const [x, z] of [[-76.9, 117.6], [-73.8, 116.0]]) { B.add(cylGeo(0.34, 0.44, 7, 9, 1.2), M.barkOak, x, H(x, z) + 3.4, z); world.addCircle(x, z, 0.44); occupied.push([x, z, 1.1]); }
    // zweiter Stamm quer vor dem Tor (springen)
    const lz = 110.6, ly = H(-75.4, lz);
    B.add(cylGeo(0.2, 0.24, 6.6, 9, 1.2), M.barkOak, -75.4, ly + 0.2, lz, 0, -0.05, Math.PI / 2);
    world.addOBB(-75.4, lz, 3.3, 0.24, 0.05, -50, ly + 0.42, { label: 'Stamm vor dem Tor (springen)' });
    occupied.push([-75.4, lz, 1.0]);
  }
  // Baum mit dem Ast, der bei der Flucht runterkracht
  F.add(1, -69.6, H(-69.6, 136.4), 136.4, 1.15, 0.7); world.addCircle(-69.6, 136.4, 0.52); occupied.push([-69.6, 136.4, 1.2]);
  G.branchTree = [-69.6, 136.4];
  for (const [x, z] of tapeSpots) {
    if (markerTrees.some((m) => m[0] === x && m[1] === z)) continue;
    const vi = [0, 3, 5][(R() * 3) | 0]; const r = F.add(vi, x, H(x, z), z, 0.9, R() * 6); world.addCircle(x, z, r); occupied.push([x, z, 1.0]);
  }

  const cell = 2.5;
  for (let x = -112; x < 44; x += cell) {
    for (let z = -82; z < 176; z += cell) {
      const jx = x + (R() - 0.5) * cell * 0.9, jz = z + (R() - 0.5) * cell * 0.9;
      if (jx < -78.6) continue;               // jenseits des Zauns kein Wald
      if (jz < -72 && Math.abs(jx) < 34) continue; // Stadt
      if (jz < -76) continue;
      const d = sd(jx, jz);
      if (d < 0.9 || d > 30) continue;
      if (R() > (d < 7 ? 0.85 : 0.62)) continue;
      if (blocked(jx, jz, 0.9)) continue;
      let vi;
      const rr = R();
      if (rr < 0.36) vi = (R() * 3) | 0; else if (rr < 0.66) vi = 3 + ((R() * 2) | 0); else vi = 5 + ((R() * 2) | 0);
      const sc = 0.75 + R() * 0.5;
      const r = F.add(vi, jx, H(jx, jz), jz, sc, R() * 6.28);
      if (d < 9) world.addCircle(jx, jz, r);
      occupied.push([jx, jz, 0.8]);
    }
  }
  // dichter Rand direkt am Korridor (junge Bäume + Stämme)
  for (let x = -112; x < 44; x += 1.35) {
    for (let z = -80; z < 176; z += 1.35) {
      const jx = x + (R() - 0.5) * 1.1, jz = z + (R() - 0.5) * 1.1;
      if (jx < -78.6 || jz < -74) continue;
      const d = sd(jx, jz);
      if (d < 0.5 || d > 4.5) continue;
      if (R() > 0.55) continue;
      if (blocked(jx, jz, 0.35)) continue;
      if (R() < 0.6) F.add(V.length - 2, jx, H(jx, jz), jz, 0.6 + R() * 0.7, R() * 6);
      else { const r = F.add(3 + ((R() * 4) | 0), jx, H(jx, jz), jz, 0.55 + R() * 0.35, R() * 6); if (d < 6) world.addCircle(jx, jz, r); }
      occupied.push([jx, jz, 0.35]);
    }
  }
  F.build(scene);

  // Unterholz
  const bushes = new Scatter(crossGeo(2.2, 1.6, 3), M.leafBush);
  const ferns = new Scatter(crossGeo(1.2, 0.8, 3), M.fern, 36, false);
  const grass = new Scatter(crossGeo(1.0, 0.45, 2), M.grass, 36, false);
  // Dichter Rand entlang aller begehbaren Wege: keine Lücke, die nach „da geht's weiter“ aussieht
  {
    const along = (pts, r) => {
      for (let i = 0; i < pts.length - 1; i++) {
        const [ax, az] = pts[i], [bx, bz] = pts[i + 1]; const Lg = Math.hypot(bx - ax, bz - az); if (Lg < 0.01) continue;
        const nx = -(bz - az) / Lg, nz = (bx - ax) / Lg;
        for (let t = 0; t < Lg; t += 0.9) {
          for (const side of [-1, 1]) for (const row of [0, 1]) {
            if (row && R() < 0.45) continue;
            const off = r + (row ? 1.7 + R() * 0.8 : 0.85 + R() * 0.6);
            const x = ax + (bx - ax) * t / Lg + nx * off * side + (R() - 0.5) * 0.4, z = az + (bz - az) * t / Lg + nz * off * side + (R() - 0.5) * 0.4;
            if (sd(x, z) < 0.45 || x < -78.7) continue;   // Kreuzung oder anderer Weg bleibt frei, jenseits des Zauns nichts
            bushes.add(x, H(x, z) - 0.05, z, 1.0 + R() * 0.55, R() * 6);
          }
        }
      }
    };
    along(P.schneise, 2.6); P.branches.forEach((b) => along(b, 1.25));
    along(P.corridor, 3.0); along(P.escape, 3.0);
    along([[-27, -72.5], [-27, -29.5], [27, -29.5], [27, -72.5]], 0);
    const [cx, cz] = P.clearing;
    for (let a = 0; a < Math.PI * 2; a += 0.09) { const rr = 9.5 + 0.9 + R() * 0.8; const x = cx + Math.cos(a) * rr, z = cz + Math.sin(a) * rr; if (sd(x, z) > 0.45) bushes.add(x, H(x, z) - 0.05, z, 1.0 + R() * 0.5, R() * 6); }
    for (const [x, z] of pileBrush) bushes.add(x, H(x, z) - 0.05, z, 1.3, R() * 6);
  }
  for (let i = 0; i < 26000; i++) {
    const x = -105 + R() * 148, z = -78 + R() * 254;
    if (x < -78.6) continue;
    if (z < -72 && Math.abs(x) < 34) continue;
    const d = sd(x, z);
    if (d > 24) continue;
    if (d > 0.3 && R() < 0.22) bushes.add(x, H(x, z) - 0.05, z, 0.7 + R() * 0.8, R() * 6);
    else if (d > -0.6 && R() < 0.5) ferns.add(x, H(x, z) - 0.02, z, 0.6 + R() * 0.8, R() * 6);
    else if (d > -1.2 && d < 2 && R() < 0.3) grass.add(x, H(x, z), z, 0.8 + R() * 0.6, R() * 6);
  }
  // Büsche am Parkrand
  for (let i = 0; i < 70; i++) { const x = (R() - 0.5) * 60, z = -73 + R() * 2.5; bushes.add(x, 0, z, 0.8 + R() * 0.5, R() * 6); }
  bushes.build(scene); ferns.build(scene); grass.build(scene);
  // Laubstreu (flache Blatthaufen) und Zweige direkt an Wegen und im Korridor
  const flat = new THREE.PlaneGeometry(1, 1); flat.rotateX(-Math.PI / 2); flat.translate(0, 0.03, 0);
  const litter = new Scatter(flat, M.litter, 36, false);
  const twigGeo = cylGeo(0.012, 0.02, 1, 4, 1); twigGeo.rotateZ(Math.PI / 2);
  const twigs = new Scatter(twigGeo, M.barkOak, 36, false);
  for (let i = 0; i < 16000; i++) {
    const x = -80 + R() * 115, z = -76 + R() * 225;
    const d = sd(x, z);
    if (d > 3 || d < -3.2) continue;
    if (R() < 0.6) litter.add(x, H(x, z), z, 0.5 + R() * 0.9, R() * 6);
    else if (R() < 0.18) twigs.add(x, H(x, z) + 0.02, z, 0.4 + R() * 0.9, R() * 6);
  }
  litter.build(scene); twigs.build(scene);
  // Moosige Steine
  for (let i = 0; i < 90; i++) {
    const x = -80 + R() * 115, z = -28 + R() * 200; const d = sd(x, z);
    if (d < 0.4 || d > 8) continue;
    const r = 0.15 + R() * 0.4;
    B.add(new THREE.DodecahedronGeometry(r, 1), M.rock, x, H(x, z) + r * 0.3, z, R(), R(), R(), 1, 0.6, 1);
  }

  // Totholz / liegende Stämme
  world.tag = 'Totholz';
  for (let i = 0; i < 160; i++) {
    const x = -78 + R() * 120, z = -28 + R() * 200;
    const d = sd(x, z);
    if (d < 0.6 || d > 16) continue;
    const L = 2 + R() * 6, rad = 0.12 + R() * 0.25;
    B.add(cylGeo(rad * 0.8, rad, L, 7, 1.2), M.barkOak, x, H(x, z) + rad * 0.8, z, 0, R() * 6, Math.PI / 2);
  }
  // ein paar Stämme mitten im Korridor (drübersteigen/umgehen)
  for (const [x, z, ry] of [[-31, 80.6, 0.4], [-52.5, 84.3, 1.4], [-68, 104.2, 0.1]]) {
    B.add(cylGeo(0.2, 0.26, 4.2, 8, 1.2), M.barkOak, x, H(x, z) + 0.2, z, 0, ry, Math.PI / 2);
    world.addOBB(x, z, 2.1, 0.25, -ry, -50, H(x, z) + 0.42);
  }

  // =====================================================================
  // WILDZAUN mit Tor
  // =====================================================================
  world.tag = 'Wildzaun';
  const fx = P.fenceX;
  for (let z = 70; z <= 170; z += 3) {
    B.add(cylGeo(0.07, 0.08, 2.5, 7, 1), M.wood, fx, H(fx, z) + 1.15, z);
  }
  for (let z = 70; z < 170; z += 3) {
    if (z + 3 > P.gateZ - 0.8 && z < P.gateZ + 0.8) continue;
    const y = (H(fx, z) + H(fx, z + 3)) / 2;
    B.add(planeGeo(3, 2.2, 0.5), M.wire, fx, y + 1.1, z + 1.5, 0, Math.PI / 2, 0, 1, 1, 1, { cast: false });
  }
  world.addBox(fx - 0.12, fx + 0.12, 60, P.gateZ - 0.8);
  world.addBox(fx - 0.12, fx + 0.12, P.gateZ + 0.8, 175);
  // Zaunstücke zum Torpfosten
  for (const [a, b] of [[P.gateZ - 2, P.gateZ - 0.8], [P.gateZ + 0.8, P.gateZ + 1]]) { const y = H(fx, a); B.add(planeGeo(b - a, 2.2, 0.5), M.wire, fx, y + 1.1, (a + b) / 2, 0, Math.PI / 2, 0, 1, 1, 1, { cast: false }); }
  for (const z of [P.gateZ - 0.85, P.gateZ + 0.85]) B.add(cylGeo(0.1, 0.11, 2.7, 8, 1), M.darkWood, fx, H(fx, z) + 1.3, z);
  G.objects.gate = gate(scene, world, fx, H(fx, P.gateZ), P.gateZ);
  // Lichter hinter dem Zaun (weit weg, ohne Nebel)
  for (const [x, z, s] of [[-120, 96, 3], [-128, 118, 2.5], [-140, 108, 4], [-112, 132, 2]]) {
    const sp = haloSprite(0xffb070, s, 0.35, false); sp.position.set(x, 3 + R() * 3, z); scene.add(sp);
  }

  // =====================================================================
  // BACH, GASSE, KLEINGÄRTEN
  // =====================================================================
  world.tag = 'Bach/Gasse/Gärten';
  buildBeyond(B, M, scene, world, terrain);

  // Grenzen mit Waldtextur
  world.tag = 'Weltgrenze (Waldwand)';
  const bounds = { minX: -110, maxX: 44, minZ: -80, maxZ: 178 };
  const wallH = 26;
  const addWall = (x, z, w, ry) => { const m = new THREE.Mesh(planeGeo(w, wallH, 26), M.fwall); m.position.set(x, wallH / 2 - 2, z); m.rotation.y = ry; scene.add(m); };
  addWall((bounds.minX + bounds.maxX) / 2, bounds.maxZ, bounds.maxX - bounds.minX, Math.PI);
  addWall(bounds.maxX, (bounds.minZ + bounds.maxZ) / 2, bounds.maxZ - bounds.minZ, -Math.PI / 2);
  addWall(-79.3, 170, 30, Math.PI / 2);
  world.addBox(bounds.minX - 5, bounds.maxX + 5, bounds.maxZ, bounds.maxZ + 3);
  world.addBox(bounds.maxX, bounds.maxX + 3, bounds.minZ, bounds.maxZ);

  // Statische Geometrie bauen
  B.build(scene);

  // Nebel-Schwaden, die vom Licht getroffen werden
  G.objects.fogPuffs = fogPuffs(scene);

  // Karte fürs Handy
  G.mapData = {
    lines: [
      { pts: [[0, -72], ...P.schneise], color: '#c9b88a', width: 5 },
      { pts: [[-30, -40], [-60, 20], [-90, 60], [-90, 180]], color: '#7a6a4a', width: 2, dash: [3, 4] },
      { pts: [[-85.5, 40], [-85.5, 180]], color: '#b8a678', width: 3 },
      { pts: [[-83.2, 40], [-83.2, 180]], color: '#3a6ea8', width: 3 },
      { pts: [[-79, 60], [-79, 180]], color: '#888', width: 1.5, dash: [2, 2] },
      { pts: [[-87, 106], [-126, 106]], color: '#b8a678', width: 3 },
      { pts: [[-126, 106], [-126, 40], [-60, -60], [0, -150]], color: '#d8d0b8', width: 4 },
      { pts: [[-12, -152], [12, -152]], color: '#d8d0b8', width: 4 },
      { pts: [[0, -152], [0, -72]], color: '#d8d0b8', width: 4 },
    ],
    labels: [
      { t: 'Goetheturm', x: 15, z: -50 }, { t: 'Hügelschneise', x: 3, z: 20 }, { t: 'Tor', x: -78, z: 104 },
      { t: 'Kleingärten', x: -120, z: 100 }, { t: 'Bach', x: -82, z: 80 }, { t: 'Wendelsweg', x: 3, z: -120 },
    ],
  };

  return { terrain, sd };
}

// ---------------------------------------------------------------------
function buildSky(scene) {
  const g = new THREE.SphereGeometry(900, 32, 16);
  const m = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: { time: { value: 0 } },
    vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: `varying vec3 vP;
      float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233)))*43758.5453); }
      float n(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f); return mix(mix(h(i),h(i+vec2(1,0)),f.x), mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x), f.y); }
      void main(){
        float y = max(vP.y, 0.0);
        vec3 zen = vec3(0.006,0.008,0.014), hor = vec3(0.02,0.022,0.03);
        vec3 c = mix(hor, zen, pow(y, 0.45));
        // Stadtglühen im Norden
        float north = max(0.0, -vP.z);
        c += vec3(0.09,0.05,0.025) * pow(north, 1.6) * pow(1.0 - y, 4.0);
        // Wolken
        vec2 q = vP.xz / (vP.y + 0.25) * 2.0;
        float cl = n(q) * 0.6 + n(q * 2.3) * 0.3 + n(q*5.1)*0.1;
        // Mond hinter dünnen Wolken
        vec3 md = normalize(vec3(-0.5, 0.42, 0.62));
        float mdot = max(dot(normalize(vP), md), 0.0);
        float cover = smoothstep(0.5, 0.85, cl);
        c += vec3(0.85, 0.88, 0.95) * smoothstep(0.99935, 0.99965, mdot) * (1.0 - cover * 0.75);
        c += vec3(0.1, 0.13, 0.2) * (pow(mdot, 220.0) * 1.2 + pow(mdot, 14.0) * 0.12) * (1.0 - cover * 0.4);
        // vom Mond angeleuchtete Wolkenränder
        c += vec3(0.05, 0.06, 0.08) * cover * pow(mdot, 6.0);
        c += vec3(0.02,0.019,0.022) * smoothstep(0.45, 0.85, cl) * smoothstep(0.0, 0.3, y) + vec3(0.03,0.018,0.01) * smoothstep(0.45, 0.85, cl) * pow(north, 2.0) * (1.0 - y);
        gl_FragColor = vec4(c, 1.0);
      }`,
  });
  const sky = new THREE.Mesh(g, m); sky.renderOrder = -10; sky.frustumCulled = false;
  scene.add(sky);
  G.objects.sky = sky;
}

function house(B, M, scene, world, cx, cz, w, depth, variant, facing, isHome) {
  const h = 10;
  let bw = w, bd = depth, fxp, fzp, fry;
  if (facing === 'east' || facing === 'west') { bw = depth; bd = w; }
  B.add(boxGeo(bw, h, bd, 3), M.plaster, cx, h / 2, cz);
  const roof = prismGeo(facing === 'south' ? bw : bd, 3.6, facing === 'south' ? bd : bw, 2);
  if (facing === 'south') B.add(roof, M.roof, cx, h, cz);
  else B.add(roof, M.roof, cx, h, cz, 0, Math.PI / 2, 0);
  const tex = T.facadeTex(variant);
  const fm = new THREE.MeshLambertMaterial({ map: tex });
  const facade = new THREE.Mesh(new THREE.PlaneGeometry(w, h - 0.6), fm);
  if (facing === 'east') { fxp = cx + bw / 2 + 0.02; fzp = cz; fry = Math.PI / 2; }
  else if (facing === 'west') { fxp = cx - bw / 2 - 0.02; fzp = cz; fry = -Math.PI / 2; }
  else { fxp = cx; fzp = cz + bd / 2 + 0.02; fry = 0; }
  facade.position.set(fxp, h / 2 + 0.4, fzp); facade.rotation.y = fry; facade.receiveShadow = true;
  scene.add(facade);
  // plastische Details vor der Fassade: Fensterbänke, Gesimse, Fallrohr, Sockel
  {
    const nx = facing === 'east' ? 1 : facing === 'west' ? -1 : 0, nz = facing === 'south' ? 1 : 0;
    const tx = nz ? 1 : 0, tz = nz ? 0 : 1; // Richtung entlang der Fassade
    const ry = facing === 'south' ? 0 : Math.PI / 2;
    const at = (u, y, out) => [fxp + tx * u + nx * out, y, fzp + tz * u + nz * out];
    for (let fy = 0; fy < 3; fy++) {
      const yy = 0.4 + (h - 0.6) * ((2 - fy) * 170 + 28 + 116 + 4) / 512 * -1 + (h - 0.6) / 2 + h / 2 - (h - 0.6) / 2;
      for (let fx = 0; fx < 3; fx++) {
        const u = -w / 2 + w * ((50 + fx * 160 + 40) / 512);
        B.add(boxGeo(w * 96 / 512, 0.06, 0.16, 1), M.concrete, ...at(u, 0.7 + (h - 0.6) * (1 - ((fy * 170 + 28 + 120) / 512)), 0.08), 0, ry, 0);
        void yy;
      }
      B.add(boxGeo(w, 0.1, 0.1, 1), M.plaster, ...at(0, 0.7 + (h - 0.6) * (1 - ((fy * 170 + 163) / 512)), 0.05), 0, ry, 0);
    }
    B.add(boxGeo(w + 0.1, 0.5, 0.08, 1), M.concrete, ...at(0, 0.25, 0.04), 0, ry, 0);
    B.add(cylGeo(0.05, 0.05, h, 8, 1), M.darkMetal, ...at(w / 2 - 0.25, h / 2, 0.1));
  }
  world.addBox(cx - bw / 2, cx + bw / 2, cz - bd / 2, cz + bd / 2);
  // Haustür + Stufen
  const dir = facing === 'east' ? 1 : facing === 'west' ? -1 : 0;
  if (dir) {
    const dx = cx + dir * (bw / 2 + 0.03);
    B.add(boxGeo(0.1, 2.25, 1.15, 1), M.darkWood, dx, 1.42, cz);
    B.add(boxGeo(0.6, 0.15, 1.6, 1), M.concrete, dx + dir * 0.3, 0.22, cz);
    B.add(boxGeo(0.6, 0.15, 1.6, 1), M.concrete, dx + dir * 0.9, 0.08, cz);
    B.add(boxGeo(0.9, 0.06, 1.6, 1), M.darkWood, dx + dir * 0.4, 2.8, cz);
    if (isHome) {
      world.addFloor(Math.min(dx, dx + dir * 0.6), Math.max(dx, dx + dir * 0.6), cz - 0.8, cz + 0.8, 0.3);
      world.addFloor(Math.min(dx + dir * 0.6, dx + dir * 1.2), Math.max(dx + dir * 0.6, dx + dir * 1.2), cz - 0.8, cz + 0.8, 0.15);
      // Hausnummer + Klingel
      const nr = signMesh([{ t: '17', font: 'bold 90px Arial' }], 0.22, 0.16, { w: 128, h: 96, bg: '#1a2a4a', fg: '#eee', border: '#eee', worn: false });
      nr.position.set(dx + dir * 0.02, 2.5, cz + 0.85); nr.rotation.y = dir > 0 ? Math.PI / 2 : -Math.PI / 2; scene.add(nr);
      const pl = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.18, 0.12), emissive(0xffe0b0)); pl.position.set(dx + dir * 0.1, 2.55, cz - 0.75); scene.add(pl);
      const halo = haloSprite(0xffd8a0, 1.2, 0.5); halo.position.copy(pl.position); scene.add(halo);
      G.objects.porch = world.addLamp({ pos: [dx + dir * 0.6, 2.4, cz - 0.6], color: 0xffd0a0, intensity: 7, distance: 9 });
      G.objects.porchMeshes = [pl, halo];
    }
  }
}

function streetLamp(B, M, scene, world, x, z, dir) {
  B.add(cylGeo(0.07, 0.1, 6, 8, 1), M.darkMetal, x, 3, z);
  B.add(boxGeo(1.4, 0.08, 0.08, 1), M.darkMetal, x + dir * 0.6, 5.95, z);
  B.add(boxGeo(0.6, 0.15, 0.32, 1), M.darkMetal, x + dir * 1.2, 5.9, z);
  const bulb = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.25), emissive(0xffd29a));
  bulb.rotation.x = Math.PI / 2; bulb.position.set(x + dir * 1.2, 5.81, z); scene.add(bulb);
  const halo = haloSprite(0xffb070, 3.4, 0.45); halo.position.set(x + dir * 1.2, 5.6, z); scene.add(halo);
  world.addLamp({ pos: [x + dir * 1.2, 5.6, z], color: 0xffb47a, intensity: 75, distance: 22, visibleDist: 60 });
  world.addCircle(x, z, 0.15);
}

function streeTree(B, M, scene, world, x, z) {
  B.add(cylGeo(0.15, 0.22, 4, 8, 1.2), M.barkOak, x, 2, z);
  for (let i = 0; i < 6; i++) {
    const a = i / 6 * Math.PI * 2;
    B.add(cylGeo(0.04, 0.08, 2.4, 5, 1), M.barkOak, x + Math.cos(a) * 0.6, 4.6, z + Math.sin(a) * 0.6, Math.cos(a) * 0.6, 0, -Math.sin(a) * 0.6);
  }
  const crown = new Scatter(crossGeo(3, 3, 3), M.leafOak); crown.add(x, 3.4, z, 1, 0.3); crown.build(scene);
  world.addCircle(x, z, 0.25);
}

function parkLamp(B, M, scene, world, x, z, flicker, dead = false) {
  B.add(cylGeo(0.06, 0.08, 3.8, 8, 1), M.darkMetal, x, 1.9, z);
  B.add(cylGeo(0.22, 0.12, 0.45, 6, 1), M.darkMetal, x, 4.0, z);
  const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 6), emissive(dead ? 0x222222 : 0xfff0d0));
  bulb.position.set(x, 3.8, z); scene.add(bulb);
  const halo = haloSprite(0xffe0b0, 2.4, dead ? 0 : 0.4); halo.position.set(x, 3.8, z); scene.add(halo);
  world.addCircle(x, z, 0.12);
  if (dead) return null;
  const l = world.addLamp({ pos: [x, 3.7, z], color: 0xffe2b8, intensity: 32, distance: 16, flicker });
  l.meshes = [bulb, halo];
  if (flicker) G.world.updaters.push((dt, t) => { const k = flicker(t); bulb.material.color.setScalar(k > 0.5 ? 1 : 0.15); halo.material.opacity = 0.4 * k; });
  return l;
}

function buildTower(B, M, scene, world, cx, cz) {
  const segs = 10, top = 40, r0 = 6.2, r1 = 3.3;
  const rad = (y) => r0 + (r1 - r0) * (y / top);
  const corner = (i, y) => { const a = (i / 8) * Math.PI * 2 + Math.PI / 8; return [cx + Math.cos(a) * rad(y), y, cz + Math.sin(a) * rad(y)]; };
  const mat = M.planksTower;
  for (let s = 0; s < segs; s++) {
    const y0 = (s / segs) * top, y1 = ((s + 1) / segs) * top;
    for (let i = 0; i < 8; i++) {
      beam(B, mat, corner(i, y0), corner(i, y1), 0.32);
      const j = (i + 1) % 8;
      beam(B, mat, corner(i, y1), corner(j, y1), 0.22);
      beam(B, mat, corner(i, y0), corner(j, y1), 0.14);
      beam(B, mat, corner(j, y0), corner(i, y1), 0.14);
    }
  }
  // innerer Treppenschacht + Podeste
  for (let k = 1; k < 10; k++) {
    const y = k * 4;
    B.add(cylGeo(1.8, 1.8, 0.12, 8, 1), mat, cx, y, cz);
    beam(B, mat, [cx - 1.4, y - 4, cz - 0.8], [cx + 1.4, y, cz - 0.8], 0.25, 0.9);
  }
  // Plattform + Dach + Netz
  B.add(cylGeo(r1 + 0.6, r1 + 0.6, 0.25, 8, 1), mat, cx, top, cz, 0, Math.PI / 8, 0);
  for (let i = 0; i < 8; i++) { const c = corner(i, top); beam(B, mat, c, [c[0], top + 2.4, c[2]], 0.2); }
  B.add(cylGeo(0.2, r1 + 1.2, 2.4, 8, 2), M.felt, cx, top + 3.4, cz, 0, Math.PI / 8, 0);
  const net = new THREE.Mesh(new THREE.CylinderGeometry(r1 + 0.15, rad(26) + 0.15, top - 26 + 1.1, 8, 1, true), M.wire);
  net.position.set(cx, (26 + top + 1.1) / 2, cz); net.rotation.y = Math.PI / 8; scene.add(net);
  // Fundamente
  for (let i = 0; i < 8; i++) { const c = corner(i, 0); B.add(boxGeo(0.9, 0.5, 0.9, 1), M.concrete, c[0], 0.2, c[2]); world.addCircle(c[0], c[2], 0.5); }
  // Bauzaun ringsum
  const n = 18, rr = 9;
  for (let i = 0; i < n; i++) {
    const a0 = (i / n) * Math.PI * 2, a1 = ((i + 1) / n) * Math.PI * 2;
    const x0 = cx + Math.cos(a0) * rr, z0 = cz + Math.sin(a0) * rr, x1 = cx + Math.cos(a1) * rr, z1 = cz + Math.sin(a1) * rr;
    const mx = (x0 + x1) / 2, mz = (z0 + z1) / 2, len = Math.hypot(x1 - x0, z1 - z0), ry = -Math.atan2(z1 - z0, x1 - x0);
    B.add(planeGeo(len, 2, 0), M.bauzaun, mx, 1.12, mz, 0, ry, 0, 1, 1, 1, { cast: false });
    B.add(boxGeo(0.6, 0.15, 0.25, 1), M.concrete, x0, 0.08, z0, 0, ry, 0);
    world.addOBB(mx, mz, len / 2, 0.12, -ry);
  }
  const sg = signMesh([{ t: 'GOETHETURM', font: 'bold 50px Georgia' }, { t: 'Vom 01.11. bis 31.03.', font: '34px Arial' }, { t: 'GESCHLOSSEN', font: 'bold 44px Arial', color: '#b01010' }], 1.2, 0.8, { w: 384, h: 256 });
  const a = Math.PI * 0.72; sg.position.set(cx + Math.cos(a) * (rr - 0.06), 1.3, cz + Math.sin(a) * (rr - 0.06)); sg.rotation.y = -a - Math.PI / 2; scene.add(sg);
  G.towerSign = sg.position.clone();
}

function kiosk(B, M, scene, world, x, z) {
  B.add(boxGeo(7, 3.2, 4.5, 2), M.plasterW, x, 1.6, z);
  B.add(boxGeo(8, 0.25, 5.5, 2), M.darkWood, x, 3.3, z);
  const sh = new THREE.Mesh(planeGeo(5, 1.6, 2), M.shutter); sh.position.set(x + 0.4, 1.7, z + 2.26); scene.add(sh);
  world.addBox(x - 3.5, x + 3.5, z - 2.25, z + 2.25);
  // Biertische
  for (const [tx, tz] of [[-12, -60], [-16, -58.5], [-20, -60]]) {
    B.add(boxGeo(2.2, 0.06, 0.7, 1), M.wood, tx, 0.75, tz);
    for (const o of [-0.65, 0.65]) B.add(boxGeo(2.2, 0.05, 0.28, 1), M.wood, tx, 0.45, tz + o);
    for (const o of [-0.9, 0.9]) B.add(boxGeo(0.06, 0.75, 1.6, 1), M.darkMetal, tx + o, 0.37, tz);
    world.addBox(tx - 1.1, tx + 1.1, tz - 0.8, tz + 0.8, -1, 0.8);
  }
}

function climbingFrame(B, M, world, x, z) {
  for (const [ox, oz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) { B.add(boxGeo(0.14, 3.6, 0.14, 1), M.planksTower, x + ox, 1.8, z + oz); world.addCircle(x + ox, z + oz, 0.12); }
  B.add(boxGeo(2.1, 0.1, 2.1, 1), M.planksTower, x, 1.5, z);
  for (const s of [-1, 1]) B.add(boxGeo(2.1, 0.5, 0.06, 1), M.planksTower, x, 1.85, z + s * 1.02);
  B.add(prismGeo(2.4, 1.0, 2.4, 1), M.felt, x, 3.6, z);
  // Rutsche
  const L = 3.4; beam(B, lam('slide', { color: 0x7a2a1e }), [x + 1.05, 1.5, z], [x + 1.05 + 2.8, 0.25, z], 0.06, 0.6);
  for (let i = 0; i < 5; i++) B.add(boxGeo(0.5, 0.05, 0.06, 1), M.wood, x - 1.05 - i * 0.13, 0.3 + i * 0.3, z, 0.4, Math.PI / 2, 0);
}

function swings(B, M, scene, world, x, z) {
  for (const s of [-1, 1]) {
    beam(B, M.planksTower, [x + s * 1.8, 0, z - 0.8], [x + s * 1.8, 2.6, z], 0.14);
    beam(B, M.planksTower, [x + s * 1.8, 0, z + 0.8], [x + s * 1.8, 2.6, z], 0.14);
    world.addCircle(x + s * 1.8, z - 0.8, 0.12); world.addCircle(x + s * 1.8, z + 0.8, 0.12);
  }
  beam(B, M.planksTower, [x - 1.9, 2.6, z], [x + 1.9, 2.6, z], 0.16);
  const out = [];
  for (const ox of [-0.8, 0.8]) {
    const g = new THREE.Group(); g.position.set(x + ox, 2.55, z);
    for (const cx of [-0.22, 0.22]) { const ch = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 2.0, 4), M.metal); ch.position.set(cx, -1.0, 0); g.add(ch); }
    const seat = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.05, 0.2), lam('seat', { color: 0x222222 })); seat.position.y = -2.0; seat.castShadow = true; g.add(seat);
    scene.add(g); out.push(g);
  }
  G.world.updaters.push((dt, t) => { out[0].rotation.x = Math.sin(t * 1.1) * 0.12 + Math.sin(t * 0.37) * 0.05; out[1].rotation.x = Math.sin(t * 0.8 + 1) * 0.03; });
  return out;
}

function matschanlage(B, M, world, x, z) {
  B.add(boxGeo(1.2, 0.5, 1.2, 1), M.concrete, x, 0.25, z);
  B.add(cylGeo(0.12, 0.14, 1.2, 8, 1), M.rust, x, 1.1, z);
  beam(B, M.rust, [x, 1.6, z], [x + 0.7, 1.9, z], 0.05);
  beam(B, M.rust, [x - 0.15, 1.5, z], [x - 0.35, 1.45, z], 0.07);
  for (let i = 0; i < 3; i++) {
    const cx = x - 1.2 - i * 1.5, y = 0.6 - i * 0.12, cz = z + (i % 2) * 0.4;
    B.add(boxGeo(1.6, 0.18, 0.3, 1), M.planksTower, cx, y, cz);
    B.add(boxGeo(0.12, y, 0.12, 1), M.planksTower, cx, y / 2, cz);
  }
  B.add(boxGeo(1.6, 0.3, 1.6, 1), M.concrete, x - 5.6, 0.15, z + 0.3);
  world.addBox(x - 0.6, x + 0.6, z - 0.6, z + 0.6, -1, 1.5);
  world.addBox(x - 6.4, x - 0.6, z - 0.4, z + 1.1, -1, 0.7);
}

function hochsitz(B, M, x, y, z) {
  for (const [ox, oz] of [[-0.9, -0.9], [0.9, -0.9], [-0.7, 0.7], [0.7, 0.7]]) beam(B, M.barkPine, [x + ox * 1.3, y, z + oz * 1.3], [x + ox, y + 4.5, z + oz], 0.16);
  B.add(boxGeo(1.9, 0.08, 1.9, 1), M.planksOld, x, y + 4.0, z);
  B.add(boxGeo(1.9, 1.0, 0.06, 1), M.planksOld, x, y + 4.5, z - 0.95);
  B.add(boxGeo(0.06, 1.0, 1.9, 1), M.planksOld, x - 0.95, y + 4.5, z);
  B.add(boxGeo(0.06, 1.0, 1.9, 1), M.planksOld, x + 0.95, y + 4.5, z);
  B.add(prismGeo(2.3, 0.7, 2.3, 1), M.felt, x, y + 5.5, z);
  for (let i = 0; i < 9; i++) B.add(boxGeo(0.6, 0.05, 0.08, 1), M.barkPine, x - 1.6 + i * 0.05, y + 0.4 + i * 0.42, z, 0, Math.PI / 2, 0);
  beam(B, M.barkPine, [x - 2.0, y, z - 0.3], [x - 1.1, y + 4.0, z - 0.3], 0.08); beam(B, M.barkPine, [x - 2.0, y, z + 0.3], [x - 1.1, y + 4.0, z + 0.3], 0.08);
}

function tape(scene, x, y, z, ry) {
  const g = new THREE.Group();
  const knot = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.03, 4, 18), lam('tapeKnot', { color: 0xaa2018, emissive: 0x100202 }));
  knot.rotation.x = Math.PI / 2; knot.scale.set(1, 1, 3); g.add(knot);
  const ends = [];
  for (const s of [-1, 1]) {
    const e = new THREE.Mesh(new THREE.PlaneGeometry(0.07, 0.75), lam('tapeEnd', { map: T.tapeTex(), side: THREE.DoubleSide, emissive: 0x180404 }));
    e.geometry.translate(0, -0.37, 0);
    e.position.set(0.44, 0, s * 0.05); e.rotation.z = s * 0.2; g.add(e); ends.push(e);
  }
  g.position.set(x, y, z); g.rotation.y = ry;
  scene.add(g);
  G.world.updaters.push((dt, t) => { ends[0].rotation.x = Math.sin(t * 2.3 + x) * 0.35; ends[1].rotation.x = Math.sin(t * 1.9 + z) * 0.3; });
  return g;
}

function branchPile(scene, world, x, y, z) {
  const g = new THREE.Group();
  const R = rng(5);
  const parts = [];
  for (let i = 0; i < 9; i++) {
    const L = 1.6 + R() * 1.6;
    const m = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.07, L, 5), lam('barkOakD', { map: T.barkTex('oak') }));
    m.position.set((R() - 0.5) * 0.6, 0.3 + R() * 0.9, (R() - 0.5) * 1.6);
    m.rotation.set(R() * 0.8, R() * 3, Math.PI / 2 - 0.3 + R() * 0.6);
    m.castShadow = true; g.add(m); parts.push(m);
    // Laub dran
    const lf = new THREE.Mesh(crossGeo(1.0, 0.8, 2), new THREE.MeshLambertMaterial({ map: T.leafCardTex('bush'), alphaTest: 0.45, side: THREE.DoubleSide }));
    lf.position.copy(m.position); lf.position.y -= 0.3; g.add(lf); parts.push(lf);
  }
  g.position.set(x, y, z); scene.add(g);
  const col = world.addBox(x - 0.5, x + 0.5, z - 1.4, z + 1.4);
  let t = -1;
  const api = {
    g, col,
    clear(instant = false) {
      col.enabled = false;
      if (instant) { g.visible = false; return; }
      t = 0;
    },
    reset() { col.enabled = true; g.visible = true; t = -1; parts.forEach((p, i) => { p.userData.o = p.userData.o || p.position.clone(); p.position.copy(p.userData.o); }); },
  };
  parts.forEach((p) => { p.userData.o = p.position.clone(); p.userData.v = new THREE.Vector3((R() - 0.5) * 0.8, 0, (R() > 0.5 ? 1 : -1) * (1.2 + R())); });
  G.world.updaters.push((dt) => {
    if (t < 0 || t > 1.2) return;
    t += dt;
    for (const p of parts) { p.position.addScaledVector(p.userData.v, dt * 1.1); p.position.y = Math.max(0.05, p.position.y - dt * 0.6); }
  });
  return api;
}

function gate(scene, world, x, y, z) {
  const hinge = new THREE.Group();
  hinge.position.set(x, y, z - 0.8);
  const frameMat = lam('gateWood', { map: T.planksTex('old') });
  const add = (w, h, d, px, py, pz, mat = frameMat) => { const m = new THREE.Mesh(boxGeo(w, h, d, 0.5), mat); m.position.set(px, py, pz); m.castShadow = true; hinge.add(m); return m; };
  add(0.08, 0.1, 1.6, 0, 0.3, 0.8); add(0.08, 0.1, 1.6, 0, 1.9, 0.8); add(0.08, 1.7, 0.1, 0, 1.1, 0.05); add(0.08, 1.7, 0.1, 0, 1.1, 1.55);
  const w = new THREE.Mesh(planeGeo(1.5, 1.6, 0.5), lam('wire', {}));
  w.material = G.M.wire; w.position.set(0, 1.1, 0.8); w.rotation.y = Math.PI / 2; hinge.add(w);
  // Kette + Schloss
  const chainMat = lam('chain', { color: 0x6a6a64 });
  for (let i = 0; i < 6; i++) { const r = new THREE.Mesh(new THREE.TorusGeometry(0.03, 0.008, 4, 8), chainMat); r.position.set(0.05, 1.15 - i * 0.04, 1.58 + (i % 2) * 0.01); r.rotation.y = (i % 2) * Math.PI / 2; hinge.add(r); }
  const lock = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.08, 0.035), lam('brass', { color: 0x8a7030 }));
  lock.position.set(0.06, 0.9, 1.6); hinge.add(lock);
  scene.add(hinge);
  const col = world.addBox(x - 0.12, x + 0.12, z - 0.85, z + 0.85);
  const reg = world.addRegionBox(-82.5, -78.2, z - 0.85, z + 0.85, { enabled: false });
  let target = 0, ang = 0;
  G.world.updaters.push((dt) => { ang += (target - ang) * (1 - Math.exp(-4 * dt)); hinge.rotation.y = ang; });
  return {
    hinge, lock, col, reg, lockPos: new THREE.Vector3(x + 0.1, y + 0.95, z + 0.8),
    open() { target = -1.75; col.enabled = false; reg.enabled = true; lock.visible = false; },
    close() { target = 0; col.enabled = true; },
    reset() { target = 0; ang = 0; col.enabled = true; reg.enabled = false; lock.visible = true; },
  };
}

function buildBeyond(B, M, scene, world, terrain) {
  const H = (x, z) => terrain.height(x, z);
  const sx = P.streamX;
  // Wasser
  const water = new THREE.Mesh(planeGeo(2.2, 140, 3), M.water);
  water.rotation.x = -Math.PI / 2; water.position.set(sx, -0.42, 110); scene.add(water);
  G.world.updaters.push((dt, t) => { M.water.map.offset.y = t * 0.25; });
  // Steine im Bach
  for (let i = 0; i < 40; i++) { const z = 70 + Math.random() * 80; B.add(new THREE.DodecahedronGeometry(0.15 + Math.random() * 0.2, 0), M.concrete, sx + (Math.random() - 0.5) * 1.6, -0.45, z, Math.random(), Math.random(), 0); }
  // Bach blockiert normales Gehen, Springen geht drüber
  // Höhe so, dass ein Sprung mit Anlauf sicher drüber reicht (Uferhöhe + 0.55)
  const bankY = Math.max(H(sx + 0.9, P.gateZ), H(sx - 0.9, P.gateZ));
  world.addBox(sx - 0.5, sx + 0.5, 60, 170, -5, bankY + 0.55, { label: 'Bach (mit Anlauf springen)' });
  // Wege & Regionen
  world.addRegionBox(-82.3, -78.3, P.gateZ - 1.3, P.gateZ + 1.3, { enabled: false, id: 'bank' });
  world.addRegionBox(-87.6, -81.8, P.gateZ - 2.2, P.gateZ + 2.2, { enabled: false, id: 'stream' });
  world.addRegionBox(-105, -86, 104.7, 107.3, { enabled: false, id: 'alley' });
  world.addRegionBox(-127.5, -104, 104.7, 107.3, { enabled: false, id: 'gardens' });
  const path = new THREE.Mesh(stripGeo(terrain, [[-85.6, 60], [-85.6, 160]], 2.4, 1, 0.03), M.gravel); path.receiveShadow = true; scene.add(path);
  const path2 = new THREE.Mesh(stripGeo(terrain, [[-86.5, 106], [-127, 106]], 2.6, 1, 0.03), M.gravel); path2.receiveShadow = true; scene.add(path2);
  world.addSurface(-130, -84.3, 100, 112, 'gravel');
  // Gasse: Backsteinmauern
  for (const z of [104.4, 107.6]) {
    B.add(boxGeo(18, 3.4, 0.4, 2.5), M.brick, -95.5, 1.7, z);
    world.addBox(-104.5, -86.5, z - 0.2, z + 0.2);
  }
  // alte Backsteinhäuser (höher) mit dunklen Fenstern
  for (const [x, z, w] of [[-91, 110.5, 7], [-99.5, 110.5, 8], [-95, 101.4, 10]]) {
    B.add(boxGeo(w, 8, 5.6, 2.5), M.brick, x, 4, z);
    B.add(prismGeo(w, 2.8, 5.6, 2), M.roof, x, 8, z);
    for (let i = 0; i < Math.floor(w / 2.4); i++) for (const fy of [4.2, 6.6]) {
      const win = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 1.3), M.glass);
      const face = z > 106 ? z - 2.81 : z + 2.81;
      win.position.set(x - w / 2 + 1.4 + i * 2.4, fy, face); win.rotation.y = z > 106 ? Math.PI : 0; scene.add(win);
    }
  }
  // zwei erleuchtete Fenster Richtung Wald (sieht man durch den Zaun)
  for (const [x, y, z] of [[-87.48, 4.2, 109.2], [-87.48, 6.6, 111.6]]) {
    const w = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 1.3), emissive(0x8a5a2a)); w.position.set(x, y, z); w.rotation.y = Math.PI / 2; scene.add(w);
    const h = haloSprite(0xffa860, 2.2, 0.25); h.position.set(x + 0.3, y, z); scene.add(h);
  }
  // eine einsame Wandlampe in der Gasse
  const wl = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.25, 0.15), emissive(0xffcc88)); wl.position.set(-96, 2.6, 107.35); scene.add(wl);
  const wh = haloSprite(0xffaa60, 1.3, 0.45); wh.position.copy(wl.position); scene.add(wh);
  world.addLamp({ pos: [-96, 2.4, 107.0], color: 0xffb070, intensity: 6, distance: 9, flicker: (t) => (Math.sin(t * 7.3) > 0.97 ? 0.2 : 1) });
  // Kleingärten
  const R = rng(77);
  for (let x = -106; x > -127; x -= 3) {
    // Jägerzaun beidseits
    for (const z of [104.4, 107.6]) {
      if (z === 104.4 && x <= -109 && x >= -118) continue;
      jaegerzaun(B, M, x, z, 3);
    }
  }
  // Hecken + Lauben
  for (const [x, z] of [[-110, 111.5], [-120, 112], [-104.5, 99.5], [-124, 99.5]]) {
    gardenShed(B, M, x, z, R);
  }
  for (const [x, z, w] of [[-108, 109.5, 4], [-116, 109.2, 5], [-123, 109.6, 3], [-106, 102, 3], [-121, 102, 5]]) B.add(boxGeo(w, 1.8, 0.9, 1), M.hedgeBox, x, 0.9, z);
  world.addBox(-128, -104, 107.5, 108);
  world.addBox(-128, -104, 104.0, 104.5);
  // niedriger Jägerzaun beim Strahler-Garten
  for (let x = -118; x < -109; x += 3) jaegerzaun(B, M, x + 3, 104.4, 3, 0.9);
  // Gartenzwerg
  const gz = new THREE.Group();
  const gb = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.3, 8), lam('gnomeB', { color: 0x2a4a7a })); gb.position.y = 0.15; gz.add(gb);
  const gh = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), lam('gnomeF', { color: 0xc89a7a })); gh.position.y = 0.34; gz.add(gh);
  const gc = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.2, 8), lam('gnomeH', { color: 0x9a1a14 })); gc.position.y = 0.48; gz.add(gc);
  gz.position.set(-107.2, 0, 105.0); gz.rotation.y = 0.5; scene.add(gz);
  // Strahler + Vogelscheuche
  const fl = new THREE.Group();
  const fb = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.22, 0.12), lam('flood', { color: 0x222222 })); fl.add(fb);
  const fg = new THREE.Mesh(new THREE.PlaneGeometry(0.26, 0.18), new THREE.MeshBasicMaterial({ color: 0x111111 })); fg.position.z = 0.065; fl.add(fg);
  fl.position.set(-113.0, 2.6, 100.32); fl.rotation.x = -0.4; scene.add(fl);
  gardenShed(B, M, -113, 99.0, R, true);
  const flLamp = world.addLamp({ pos: [-113.0, 2.4, 101.4], color: 0xf4f6ff, intensity: 0, distance: 16, enabled: true, level: 0 });
  const flHalo = haloSprite(0xffffff, 2.2, 0); flHalo.position.set(-113, 2.6, 100.5); scene.add(flHalo);
  const sc = scarecrow(scene, -114.4, 0, 103.3);
  G.objects.flood = {
    on() { fg.material.color.set(0xffffff); flLamp.intensity = 120; flLamp.level = 1; flHalo.material.opacity = 0.9; },
    off() { fg.material.color.set(0x111111); flLamp.intensity = 0; flLamp.level = 0; flHalo.material.opacity = 0; },
    scarecrow: sc,
  };
  // Hindernisse in der Gasse (Slalom unter Druck): umgekippte Tonne, Paletten, Schutt
  {
    const binM = lam('binGreen', { color: 0x1f3a2a });
    B.add(boxGeo(1.15, 0.62, 0.66, 1), binM, -92.0, 0.33, 105.35, 0.05, 0.1, Math.PI / 2 * 0.0);
    B.add(boxGeo(0.06, 0.66, 0.7, 1), binM, -91.4, 0.33, 105.1, 0, 0.5, 0);
    world.addBox(-92.6, -91.4, 104.6, 106.0, -50, 0.75, { label: 'Umgekippte Tonne' });
    for (let k = 0; k < 6; k++) B.add(boxGeo(1.2, 0.14, 0.95, 1), M.planksTower, -97.0, 0.08 + k * 0.17, 106.75, 0, (k % 2) * 0.12, 0);
    world.addBox(-97.7, -96.3, 106.15, 107.4, -50, 1.2, { label: 'Paletten' });
    const brickM = M.brick;
    for (let k = 0; k < 18; k++) B.add(boxGeo(0.24, 0.08, 0.12, 1), brickM, -101.5 + (R() - 0.5) * 0.7, 0.05 + R() * 0.22, 104.8 + R() * 2.4, R(), R() * 3, R());
    B.add(boxGeo(0.25, 0.3, 2.6, 1), lam('rubble', { color: 0x4a4038 }), -101.5, 0.15, 106.0, 0, 0, 0.12);
    world.addBox(-101.75, -101.25, 104.6, 107.4, -50, 0.36, { label: 'Schutt (springen)' });
    // Schubkarre und Blumentöpfe quer im Weg (springen)
    const wb = lam('wheelbarrow', { color: 0x4a5a3a });
    B.add(boxGeo(0.62, 0.26, 0.9, 1), wb, -106.45, 0.34, 105.55, 0.0, 0.0, -0.08);
    B.add(boxGeo(0.5, 0.04, 0.78, 1), M.black, -106.45, 0.47, 105.55, 0.0, 0.0, -0.08);
    for (const dz of [-0.24, 0.24]) {
      B.add(cylGeo(0.022, 0.022, 1.0, 6, 1), M.metal, -106.1, 0.38, 105.55 + dz, 0, 0, Math.PI / 2 - 0.22);
      B.add(cylGeo(0.02, 0.02, 0.3, 6, 1), M.metal, -105.95, 0.15, 105.55 + dz);
    }
    B.add(cylGeo(0.16, 0.16, 0.08, 12, 1), M.black, -106.95, 0.16, 105.55, Math.PI / 2, 0, 0);
    const pot = lam('terracotta', { color: 0x9a5236 });
    for (let k = 0; k < 6; k++) B.add(cylGeo(0.13, 0.095, 0.22, 8, 1), pot, -106.55 + (R() - 0.5) * 0.45, 0.11, 106.35 + k * 0.19, 0, 0, k % 3 === 2 ? 1.45 : 0);
    B.add(boxGeo(0.5, 0.3, 0.4, 1), lam('crate', { color: 0x6a5232 }), -106.5, 0.15, 104.85);
    world.addBox(-107.0, -105.7, 104.5, 107.5, -50, 0.45, { label: 'Schubkarre (springen)' });
    // Wäscheleine mit Laken in Kopfhöhe (ducken)
    for (const z of [104.55, 107.45]) B.add(cylGeo(0.03, 0.03, 2.1, 6, 1), M.metal, -109.4, 1.05, z);
    B.add(cylGeo(0.006, 0.006, 2.9, 4, 1), M.white, -109.4, 2.0, 106.0, Math.PI / 2, 0, 0);
    for (const [z, w, c] of [[105.0, 0.9, 0xd8d4c8], [105.95, 0.8, 0x8a9ab0], [106.85, 0.85, 0xc8b8a8]]) {
      const sh = new THREE.Mesh(new THREE.PlaneGeometry(w, 0.75), new THREE.MeshLambertMaterial({ color: c, side: THREE.DoubleSide }));
      sh.position.set(-109.4, 1.6, z); sh.rotation.y = Math.PI / 2; scene.add(sh);
    }
    world.addBox(-109.6, -109.2, 104.5, 107.5, 1.22, 2.0, { label: 'Wäscheleine (ducken)' });
  }
  // Ufergebüsch am Übergang über den Bach (zeigt die Grenze)
  {
    const reeds = crossGeo(1.2, 1.3, 2);
    for (let x = -87.4; x < -78.8; x += 0.9) for (const z of [103.5 - R() * 0.4, 108.5 + R() * 0.4]) B.add(reeds, M.grass, x + (R() - 0.5) * 0.4, H(x, z) - 0.05, z, 0, R() * 6, 0, 1 + R() * 0.6, 1 + R() * 0.8, 1, { cast: false });
  }
  // Endlaterne
  streetLamp(B, M, scene, world, -126.2, 108.2, 1);
}

function jaegerzaun(B, M, x, z, w, h = 1.1) {
  const mat = M.planksTower;
  B.add(boxGeo(0.08, h + 0.2, 0.08, 1), mat, x, (h + 0.2) / 2, z);
  for (let i = 0; i < 4; i++) {
    const a = [x - i * w / 4, 0.1, z], b = [x - (i + 1) * w / 4, h, z];
    beam(B, mat, a, b, 0.05, 0.02);
    beam(B, mat, [a[0], h, z], [b[0], 0.1, z], 0.05, 0.02);
  }
}

function gardenShed(B, M, x, z, R, floodWall = false) {
  B.add(boxGeo(3, 2.3, 2.4, 1), M.planksOld, x, 1.15, z);
  B.add(prismGeo(3.4, 0.9, 2.8, 1), M.felt, x, 2.3, z, 0, Math.PI / 2, 0);
  B.add(boxGeo(0.06, 0.6, 0.8, 1), M.glass, x + 1.52, 1.4, z);
  if (!floodWall) B.add(boxGeo(1.5, 1.0, 0.6, 1), lam('compost', { color: 0x3a2a1a }), x + 2.4, 0.5, z + 0.6);
  else B.add(cylGeo(0.35, 0.3, 0.9, 10, 1), lam('barrel', { color: 0x1a3a2a }), x - 2.0, 0.45, z + 1.4);
}

function scarecrow(scene, x, y, z) {
  const g = new THREE.Group();
  const wood = lam('scWood', { color: 0x4a3a28 });
  const post = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.05, 2.0, 6), wood); post.position.y = 1.0; g.add(post);
  const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 1.5, 6), wood); arm.rotation.z = Math.PI / 2; arm.position.y = 1.45; g.add(arm);
  const coat = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.42, 1.0, 8, 1, true), new THREE.MeshLambertMaterial({ color: 0x2c2a22, side: THREE.DoubleSide }));
  coat.position.y = 1.1; g.add(coat);
  for (const s of [-1, 1]) { const sl = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.13, 0.6, 6, 1, true), coat.material); sl.rotation.z = s * (Math.PI / 2 - 0.15); sl.position.set(s * 0.45, 1.42, 0); g.add(sl); }
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.17, 12, 10), new THREE.MeshLambertMaterial({ map: T.sackFaceTex() }));
  head.position.y = 1.82; head.rotation.y = -Math.PI / 2; head.scale.set(1, 1.15, 1); g.add(head);
  const hat = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.3, 0.2, 10), new THREE.MeshLambertMaterial({ color: 0x1a1612 }));
  hat.position.y = 2.02; g.add(hat);
  g.position.set(x, y, z);
  g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  scene.add(g);
  return g;
}

function fogPuffs(scene) {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, 'rgba(255,255,255,0.55)'); g.addColorStop(0.6, 'rgba(255,255,255,0.15)'); g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g; ctx.fillRect(0, 0, 128, 128);
  const tex = new THREE.CanvasTexture(c);
  const mat = new THREE.MeshLambertMaterial({ map: tex, transparent: true, opacity: 0.13, depthWrite: false, color: 0x9aa0a8 });
  const geo = new THREE.PlaneGeometry(1, 1);
  const puffs = [];
  for (let i = 0; i < 46; i++) { const m = new THREE.Mesh(geo, mat); m.renderOrder = 2; scene.add(m); puffs.push({ m, life: 0, sz: 0 }); }
  const api = { enabled: true, mat };
  G.world.updaters.push((dt, t) => {
    const cam = G.camera; const p = G.player.p;
    const show = api.enabled && p.y > -1 && p.x < 400;
    for (const f of puffs) {
      f.m.visible = show;
      if (!show) continue;
      const dx = f.m.position.x - p.x, dz = f.m.position.z - p.z;
      if (f.life <= 0 || dx * dx + dz * dz > 22 * 22) {
        const a = Math.random() * Math.PI * 2, r = 3 + Math.random() * 18;
        const x = p.x + Math.cos(a) * r, z = p.z + Math.sin(a) * r;
        f.m.position.set(x, (G.terrain ? G.terrain.height(x, z) : 0) + 0.3 + Math.random() * 1.6, z);
        f.sz = 2.5 + Math.random() * 4; f.life = 8 + Math.random() * 10; f.age = 0;
        f.v = new THREE.Vector3((Math.random() - 0.5) * 0.2, 0, (Math.random() - 0.5) * 0.2);
      }
      f.age += dt; f.life -= dt;
      f.m.position.addScaledVector(f.v, dt);
      const k = Math.min(1, f.age / 2, f.life / 2);
      f.m.scale.setScalar(f.sz * (0.6 + k * 0.4));
      f.m.quaternion.copy(cam.quaternion);
    }
  });
  return api;
}

export { makeHuman };
