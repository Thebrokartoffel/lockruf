async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const L = [];
  window.__fast = 1;
  L.push('mem0 ' + (performance.memory ? Math.round(performance.memory.usedJSHeapSize / 1e6) : '?'));
  __start(2);
  await sleep(5000);
  L.push('A ' + __state());
  L.push('mem1 ' + (performance.memory ? Math.round(performance.memory.usedJSHeapSize / 1e6) : '?'));
  const r = __G.renderer.info; L.push('render ' + JSON.stringify({ calls: r.render.calls, tris: r.render.triangles, geo: r.memory.geometries, tex: r.memory.textures, prog: r.programs.length }));
  await __shot('spawn');
  return L.join('\n');
}
