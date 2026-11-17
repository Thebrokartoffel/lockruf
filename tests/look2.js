async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const L = [];
  const pl = __G.player, H = () => __G.objects.home;
  const yawTo = (dx, dz) => Math.atan2(-dx, -dz);
  const at = async (name, x, y, z, tx, ty, tz, wait = 1200) => {
    if (y === null) y = __G.world.groundAt(x, z, 60);
    pl.teleport(x, y, z, 0, 0); await sleep(120);
    const c = __G.camera.position; const dx = tx - x, dz = tz - z;
    pl.yaw = yawTo(dx, dz); pl.pitch = Math.atan2(ty - c.y, Math.hypot(dx, dz));
    await sleep(wait); await __shot(name); L.push(name + ' p=' + pl.p.toArray().map((v) => v.toFixed(2)).join(','));
  };
  window.__speed = 1; __G.settings.scale = 0.7; __G.post.resize(innerWidth, innerHeight);
  __start(1, 'og'); await sleep(2500);
  // Mama-Szene: echte Auslösung im EG (Spielzeit abwarten, Rendern ist im Test langsam)
  const gwait = async (sec) => { const t = __G.time; while (__G.time - t < sec) await sleep(30); };
  const subHas = (s) => (document.getElementById('subtitle').textContent || '').includes(s);
  pl.setFlash(false);
  __start(1, 'eg');
  let t0 = performance.now(); while (performance.now() - t0 < 60000 && !(JSON.parse(__state()).obj || '').includes('Haustür')) await sleep(50);
  pl.teleport(502.6, 0, 12.4, yawTo(500.6 - 502.6, 11.2 - 12.4), 0); await gwait(0.3);
  const key = (code, down) => window.dispatchEvent(new KeyboardEvent(down ? 'keydown' : 'keyup', { code, key: code }));
  key('KeyW', true);
  t0 = performance.now(); while (performance.now() - t0 < 60000 && !subHas('Leon?!')) await sleep(20);
  key('KeyW', false);
  await gwait(0.25); await __shot('mama_jumpscare');
  L.push('sub: ' + document.getElementById('subtitle').textContent + ' p=' + pl.p.toArray().map((v) => v.toFixed(2)).join(','));
  await gwait(1.0); await __shot('mama_jumpscare2');
  await gwait(4.0); await __shot('mama_dialog');
  window.__norender = 1; window.__speed = 3;
  t0 = performance.now(); while (performance.now() - t0 < 120000 && !subHas('Ich geh ins Bett')) await sleep(50);
  await gwait(4.2); window.__norender = 0; window.__speed = 1; pl.yaw = yawTo(__G.objects.home.mom.root.position.x - pl.p.x, __G.objects.home.mom.root.position.z - pl.p.z); await gwait(0.2); await __shot('mama_geht');
  await gwait(5.0); pl.yaw = yawTo(__G.objects.home.mom.root.position.x - pl.p.x, __G.objects.home.mom.root.position.z - pl.p.z); await gwait(0.2); await __shot('mama_treppe');
  L.push('mama pos ' + __G.objects.home.mom.root.position.toArray().map((v) => v.toFixed(2)).join(','));
  return L.join('\n');
}
