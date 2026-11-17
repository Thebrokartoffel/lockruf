async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  window.__fast = 1;
  if (window.__NOAUDIO) { __G.audio.init = function () { this.ready = false; this.ctx = { state: 'running', resume() {} }; }; }
  __start(2);
  await sleep(3000);
  const G = __G;
  __tp(-9.5, -76.0); __look(Math.PI / 2 + 0.3, -0.05);
  let f0 = 0; const cnt = () => { f0++; requestAnimationFrame(cnt); }; cnt();
  for (let i = 0; i < 10; i++) {
    await sleep(4000);
    const m = G.renderer.info.memory;
    console.log('t' + i + ' frames=' + f0 + ' geo=' + m.geometries + ' tex=' + m.textures + ' prog=' + G.renderer.info.programs.length + ' heap=' + (performance.memory ? Math.round(performance.memory.usedJSHeapSize / 1e6) : '?') + ' upd=' + G.world.updaters.length + ' loops=' + Object.keys(G.audio.loops || {}).length);
  }
  return 'ok';
}
