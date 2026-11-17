async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const L = [];
  const st = () => JSON.parse(__state());
  const key = (code, down) => window.dispatchEvent(new KeyboardEvent(down ? 'keydown' : 'keyup', { code, key: code }));
  const hold = async (codes, ms) => { codes.forEach((c) => key(c, true)); await sleep(ms); codes.forEach((c) => key(c, false)); };
  window.__fast = 1; window.__speed = 1; __G.settings.scale = 0.3; __G.post.resize(innerWidth, innerHeight);
  const D = __G.dev;
  __start(1, 'og');
  const t0 = performance.now(); while (!(st().obj || '').includes('Schleich') && performance.now() - t0 < 30000) await sleep(100);
  const snaps = [];
  const snap = () => { const p = __G.player.p, d = __G.story.dad; snaps.push({ f: D.frame, x: p.x, y: p.y, z: p.z, a: d.alert, st: __G.player.stamina, obj: st().obj }); };
  snap();
  await hold(['KeyW'], 1500); snap();
  await hold(['KeyW', 'ShiftLeft'], 1500); snap();
  __look(Math.PI / 2 + Math.PI / 2 * 1.0, 0); // Richtung Treppe? (Test-Look, aufgezeichnet)
  await hold(['KeyD'], 900); snap();
  await hold(['KeyW', 'ShiftRight'], 1200); snap();
  await hold(['KeyC', 'KeyW'], 1500); snap();
  await sleep(1500); snap();
  L.push('live: ' + snaps.map((s) => `f${s.f} (${s.x.toFixed(3)},${s.y.toFixed(3)},${s.z.toFixed(3)}) a=${s.a.toFixed(3)} st=${s.st.toFixed(3)}`).join('\n  '));
  // Rückspulen auf mehrere Snapshot-Frames, rückwärts
  for (const s of snaps.slice(1, -1).reverse()) {
    await D.rewindTo(s.f);
    const p = __G.player.p, d = __G.story.dad;
    L.push(`rewind f${s.f}: frames=${D.frame} ms=${D.lastReplayMs} d=${Math.hypot(p.x - s.x, p.z - s.z, p.y - s.y).toFixed(5)} alert=${(d.alert - s.a).toFixed(5)} stam=${(__G.player.stamina - s.st).toFixed(5)}`);
  }
  return L.join('\n');
}
