// Screenshots der Grafikstufen an typischen Orten (Straße, Wald, Turm oben, Wohnung, Garagenhof)
async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const G = __G, L = [];
  const frames = (n) => new Promise((r) => { let k = 0; const f = () => (++k >= n ? r() : requestAnimationFrame(f)); requestAnimationFrame(f); });
  const until = async (fn, ms = 60000) => { const t0 = performance.now(); while (!fn()) { if (performance.now() - t0 > ms) return false; await sleep(100); } return true; };
  window.__norender = 1; window.__fast = 1;
  G.settings.scale = 0.5; G.settings.autoRes = false; G.post.resize(innerWidth, innerHeight);
  __start(2);
  await until(() => G.story.chapter === 2 && G.started);
  await sleep(1500);
  const shot = async (name) => { window.__norender = 0; await frames(3); await __shot(name); window.__norender = 1; };
  const spots = [
    ['street', -3, -126, Math.PI, -0.02],
    ['forest', 0.5, 12, Math.PI, 0.0],
    ['tower', 13, -53, Math.PI * 0.75, -0.35, 40.13],
    ['court', 24, -119.5, -Math.PI / 2 + 0.2, -0.05],
  ];
  for (const g of [0, 2, 3]) {
    G.settings.gfx = g; G.post.applyGfx(); await sleep(300);
    for (const [n, x, z, yaw, pitch, y] of spots) {
      if (y) G.player.teleport(x, y, z, yaw, pitch); else { __tp(x, z); __look(yaw, pitch); }
      await sleep(1200);   // Nebel/Licht einschwingen lassen (Simulation läuft)
      await shot(`g${g}_${n}`);
      L.push(`g${g} ${n}: far=${G.camera.far.toFixed(0)} fog=${G.scene.fog.density.toFixed(3)} calls=${G.renderer.info.render.calls} tris=${G.renderer.info.render.triangles}`);
    }
  }
  // Wohnung (Nebel aus, kurze Sichtweite)
  __start(1); await until(() => G.story.chapter === 1 && G.started); await sleep(1500);
  G.settings.gfx = 2; G.post.applyGfx();
  await shot('g2_home');
  L.push(`home: far=${G.camera.far.toFixed(0)} calls=${G.renderer.info.render.calls}`);
  return L.join('\n');
}
