async () => {
  // Abkürzung: Äste wegräumen und durch, bevor Deniz „geh links durchs gebüsch“ schreibt
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const L = []; const pl = __G.player; const st = () => JSON.parse(__state());
  const key = (code, down) => window.dispatchEvent(new KeyboardEvent(down ? 'keydown' : 'keyup', { code, key: code }));
  const yawTo = (dx, dz) => Math.atan2(-dx, -dz);
  window.__norender = 1; window.__speed = 1;
  __start(3); await sleep(2500);
  __tp(-4.9, 54.6); await sleep(600);
  const c = __G.camera.position; __look(yawTo(-6.6 - pl.p.x, 54.6 - pl.p.z), Math.atan2(__G.terrain.height(-7, 54.6) + 0.7 - c.y, Math.hypot(-6.6 - pl.p.x, 54.6 - pl.p.z)));
  await sleep(300);
  L.push('vorher: ' + __state());
  L.push('Ziel im Blick: ' + (pl.current ? (typeof pl.current.text === 'function' ? pl.current.text() : pl.current.text) : '-'));
  key('KeyE', true); await sleep(2400); key('KeyE', false); await sleep(300);
  L.push('Haufen weg: ' + !__G.objects.pile.col.enabled);
  key('KeyC', true); key('KeyW', true);
  const t0 = performance.now();
  while (performance.now() - t0 < 15000 && st().ch === 3) { __look(yawTo(-11 - pl.p.x, 56.5 - pl.p.z), 0); await sleep(50); }
  key('KeyW', false); key('KeyC', false);
  L.push('danach: ' + __state());
  await sleep(4000); L.push('Kapitel 4 läuft: ' + __state());
  return L.join('\n');
}
