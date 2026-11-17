// Renderkosten (GPU-Zeit pro Bild, Draw-Calls, Dreiecke) an typischen Orten – Regressionstest für die Performance
async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  window.__norender = 1;
  __start(2);
  await sleep(2500);
  const G = __G, pl = G.player, gl = G.renderer.getContext();
  const px = new Uint8Array(4);
  const sync = () => gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, px);
  G.renderer.info.autoReset = false;
  const time = (label) => { G.world.updateLights(G.camera.position, G.time); G.renderer.info.reset(); const t0 = performance.now(); G.post.render(G.scene, G.camera, 0.016); sync(); const ms = performance.now() - t0; console.log('T ' + label + ' ' + ms.toFixed(0) + ' far=' + G.camera.far.toFixed(0) + ' calls=' + G.renderer.info.render.calls + ' tris=' + G.renderer.info.render.triangles); return ms; };
  const spots = [['street', -6.6, 0, -125, Math.PI], ['parking', -9.5, 0, -76, Math.PI / 2 + 0.3], ['forest', 0, 0, 10, 0], ['court', 30, 0, -118, -Math.PI / 2], ['gate', 0, 0, -33, Math.PI]];
  for (const [n, x, y, z, yaw] of spots) {
    pl.teleport(x, y, z, yaw, 0); G.scene.fog.density = 0.03; await sleep(400);
    time(n + ' warm'); await sleep(30); time(n);
  }
  return 'done';
}
