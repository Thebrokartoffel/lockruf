async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const key = (code, down) => window.dispatchEvent(new KeyboardEvent(down ? 'keydown' : 'keyup', { code, key: code }));
  const G = __G, L = [];
  window.__norender = 1; window.__fast = 1;
  __start(1, 'og'); await sleep(4000);
  const p = () => G.player.p.x.toFixed(2) + ',' + G.player.p.z.toFixed(2) + ' ' + G.player.stance;
  for (const k of ['KeyW', 'KeyS', 'KeyA', 'KeyD']) {
    __tp(503, 6); await sleep(300);
    key('KeyC', true); await sleep(400); const a = p(); key(k, true); await sleep(1200); const b = p(); key(k, false); key('KeyC', false); await sleep(400);
    L.push(k + ': ' + a + ' -> ' + b);
  }
  return L.join('\n') + '\nact: ' + JSON.stringify(Object.keys(window).filter(k=>k.startsWith('__')).length);
}
