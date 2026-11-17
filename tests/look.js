async () => {
  // Sichtprüfung der neuen Bereiche: Screenshots nach tests/out/look_*.png
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const L = [];
  const pl = __G.player;
  const yawTo = (dx, dz) => Math.atan2(-dx, -dz);
  const at = async (name, x, y, z, tx, ty, tz, wait = 1200) => {
    if (y === null) y = __G.world.groundAt(x, z, 60);
    pl.teleport(x, y, z, 0, 0);
    await sleep(120);
    const c = __G.camera.position; const dx = tx - x, dz = tz - z;
    pl.yaw = yawTo(dx, dz); pl.pitch = Math.atan2(ty - c.y, Math.hypot(dx, dz));
    await sleep(wait);
    await __shot(name); L.push(name + ' p=' + pl.p.toArray().map((v) => v.toFixed(2)).join(','));
  };
  window.__speed = 1; __G.settings.scale = 0.7; __G.post.resize(innerWidth, innerHeight);

  // --- Zimmer: Handy leuchtet, nehmen, Leuchten weg?
  __start(1);
  await sleep(4200);
  const hp = __G.objects.homePhone.pos;
  pl.yaw = yawTo(hp.x - pl.p.x, hp.z - pl.p.z); pl.pitch = -0.45;
  let t0 = performance.now();
  while (performance.now() - t0 < 6000) { const g = __G.scene.children.find((o) => o.isSprite && Math.abs(o.position.x - 503.0) < 0.01 && Math.abs(o.position.z - 0.5) < 0.01); if (g && g.material.opacity > 0.3) break; await sleep(50); }
  await __shot('zimmer_leuchtet');
  __use('Handy nehmen'); await sleep(400); __G.ui.togglePhone(false); await sleep(3500);
  const glow = __G.scene.children.find((o) => o.isSprite && Math.abs(o.position.x - 503.0) < 0.01 && Math.abs(o.position.z - 0.5) < 0.01);
  L.push('Glow nach dem Nehmen: ' + (glow ? glow.material.opacity : 'kein Sprite'));
  await __shot('zimmer_genommen');

  // --- Obergeschoss
  __start(1, 'og'); await sleep(2500);
  pl.setFlash(true);
  await at('zimmertuer_flur', 502.65, 3, 6.2, 502.65, 4.0, 4.45);
  await at('bad', 503.7, 3, 9.9, 502.9, 3.6, 12.3);
  __G.objects.home.curtain(true); await sleep(300);
  await at('bad_vorhang_zu', 503.7, 3, 9.9, 502.9, 3.6, 12.3, 600);
  __G.objects.home.curtain(false);
  await at('elternzimmer', 501.6, 3, 6.85, 498.6, 3.4, 6.5);
  await at('nachttisch_schluessel', 499.0, 3, 5.4, 497.9, 3.45, 5.62);
  __G.story.hide(__G.objects.home.spots.dusche); await sleep(1200); await __shot('versteck_dusche'); __G.story.unhide();
  __G.story.hide(__G.objects.home.spots.bett); await sleep(1200); await __shot('versteck_bett'); __G.story.unhide();
  __G.story.hide(__G.objects.home.spots.schrank); await sleep(1200); await __shot('versteck_schrank'); __G.story.unhide();
  await at('treppe_oben', 504.95, 3, 6.9, 504.95, 0.6, 11.5);

  // --- Erdgeschoss: Fensterfiguren, Mama
  pl.setFlash(false);
  __G.objects.home.figure('kitchen', true);
  await at('kuechenfenster', 503.4, 0, 4.9, 503.45, 1.4, 2.03);
  __G.objects.home.figure('kitchen', false);
  __G.objects.home.figure('living', true);
  await at('wohnzimmerfenster', 499.6, 0, 9.4, 496.03, 1.3, 8.95);
  __G.objects.home.figure('living', false);
  await at('mama_sofa', 501.2, 0, 12.4, 498.88, 1.0, 8.95, 2500);

  // --- Wald: Schneise, Abzweigungen, Ränder
  __start(3); await sleep(2500);
  pl.setFlash(true);
  await at('schneise_start', 0.2, null, -28, -2.6, 0.9, -13);
  await at('schneise_kurve', -3.0, null, -6, 0.6, 1.0, 12);
  await at('abzweig_privatweg', -13.5, null, -16.5, -19.5, 1.0, -18.6);
  await at('abzweig_hochsitz', 6.5, null, 26.2, 11.2, 2.5, 31);
  await at('abzweig_polter', -7.5, null, 47.4, -11.6, 0.8, 47.2);
  await at('rand_seitlich', 3.4, null, 20, 9, 1.0, 20.5);
  await at('rand_seitlich2', -1.4, null, 38, -7, 1.0, 37.5);
  await at('ende_schneise', -0.5, null, 51, -6.8, 0.8, 55);

  // --- Flucht-Hindernisse (Godmode, damit er einen nicht erwischt)
  __start(7); await sleep(1500); __G.dev.ev('set', 'god', true);
  pl.setFlash(true);
  await at('flucht_ast_ducken', -74.4, null, 130.2, -74.0, 1.4, 126.5);
  await at('flucht_slalom', -75.3, null, 121.2, -76.0, 0.8, 116.5);
  await at('flucht_stamm', -75.6, null, 113.6, -75.4, 0.4, 110.6);
  await at('flucht_schubkarre', -103.2, null, 106.0, -106.5, 0.4, 105.9);
  await at('flucht_waesche', -107.6, null, 106.0, -109.4, 1.4, 106.0);
  return L.join('\n');
}
