async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const key = (code, down) => window.dispatchEvent(new KeyboardEvent(down ? 'keydown' : 'keyup', { code, key: code }));
  const L = [];
  window.__fast = 1; window.__norender = 1;
  __start(1, 'og'); await sleep(2500);
  const pl = __G.player, D = __G.dev;
  // ohne Noclip gegen die Badtür (Wand) laufen
  __tp(503.0, 8.8, 3); __look(Math.PI, 0); key('KeyW', true); await sleep(1500); key('KeyW', false);
  L.push('ohne Noclip: z=' + pl.p.z.toFixed(2) + ' blockiert=' + (pl.blockedBy || []).length);
  D.on = true;
  __tp(503.0, 8.8, 3); key('KeyW', true); await sleep(800); key('KeyW', false);
  L.push('Godmode an, Anzeige blockiert: ' + (pl.blockedBy || []).map((b) => b.c.label || b.c.type).join(', '));
  D.ev('set', 'noclip', true);
  __tp(503.0, 8.8, 3); key('KeyW', true); await sleep(1500); key('KeyW', false);
  L.push('mit Noclip: z=' + pl.p.z.toFixed(2));
  D.ev('set', 'noclip', false); D.ev('set', 'fly', true); D.ev('set', 'flySpeed', 20);
  __tp(503.0, 6.0, 3); __look(Math.PI, 0.6); key('KeyW', true); key('Space', true); await sleep(1500); key('KeyW', false); key('Space', false);
  L.push('Flug: y=' + pl.p.y.toFixed(2) + ' z=' + pl.p.z.toFixed(2) + ' fly=' + D.fly + ' noclip=' + D.noclip);
  return L.join('\n');
}
