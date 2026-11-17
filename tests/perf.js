async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const L = [];
  window.__norender = 1;
  __start(2);
  await sleep(3000);
  const G = __G, pl = G.player;
  G.renderer.domElement.addEventListener('webglcontextlost', () => console.log('CONTEXT LOST'));
  console.log('start prog=' + G.renderer.info.programs.length);
  const time = (label, n = 2) => { G.world.updateLights(G.camera.position, G.time); const t0 = performance.now(); for (let i = 0; i < n; i++) { G.post.render(G.scene, G.camera, 0.016);  } const ms = (performance.now() - t0) / n; L.push(label + ' ' + ms.toFixed(0) + ' ms'); console.log('T ' + label + ' ' + ms.toFixed(0) + ' prog=' + G.renderer.info.programs.length); return ms; };
  pl.teleport(-6.6, 0, -131, 0, 0); await sleep(500); time('spawn');
  pl.teleport(-9.5, 0, -76, Math.PI / 2 + 0.3, -0.05); await sleep(500); time('parking');
  G.objects.nessa.root.visible = false; time('parking ohne Nessa'); G.objects.nessa.root.visible = true;
  const sv = G.settings.gfx; G.settings.gfx = 0; G.post.applyGfx(); time('parking gfx0'); G.settings.gfx = sv ?? 2; G.post.applyGfx();
  G.renderer.shadowMap.enabled = false; time('parking ohne Schatten'); G.renderer.shadowMap.enabled = true;
  const r = G.renderer.info; L.push('info ' + JSON.stringify({ calls: r.render.calls, tris: r.render.triangles, prog: r.programs.length }));
  // Szene: Anzahl Lichter
  let lights = 0, spots = 0, shadowL = 0; G.scene.traverse((o) => { if (o.isLight) { lights++; if (o.isSpotLight) spots++; if (o.castShadow) shadowL++; } });
  L.push('lights ' + lights + ' spots ' + spots + ' shadow ' + shadowL);
  pl.teleport(23, 0, -120, -Math.PI / 2 - 0.25, 0); await sleep(500); time('court');
  pl.teleport(13, 0, -60, 0, 0.95); await sleep(500); time('tower');
  return L.join('\n');
}
