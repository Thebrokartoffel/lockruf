async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const L = [];
  const st = () => JSON.parse(__state());
  const key = (code, down) => window.dispatchEvent(new KeyboardEvent(down ? 'keydown' : 'keyup', { code, key: code }));
  window.__fast = 1; window.__speed = 1; __G.settings.scale = 0.25; __G.post.resize(innerWidth, innerHeight);
  const pl = __G.player;
  __start(6);
  let t0 = performance.now(); while (!(st().obj || '').includes('Tor') && performance.now() - t0 < 40000) await sleep(100);
  L.push('start ' + __state());
  const route = [[-72.4, 137.6], [-73.6, 132], [-74.6, 126], [-75.2, 119.5], [-75.6, 114], [-76.8, 108.6], [-78.1, 106.9]];
  const jumps = [[-72.3, 137.2], [-75.15, 121.6]];
  let wi = 0, jumped = new Set();
  key('KeyW', true); key('ShiftLeft', true);
  const tStart = __G.time; let maxClose = 99, died = false, lastLog = 0;
  while (wi < route.length && __G.time - tStart < 40) {
    const [tx, tz] = route[wi];
    const dx = tx - pl.p.x, dz = tz - pl.p.z;
    if (Math.hypot(dx, dz) < 0.9) { wi++; continue; }
    __look(Math.atan2(-dx, -dz), 0);
    jumps.forEach((j, i) => { if (!jumped.has(i) && Math.hypot(j[0] - pl.p.x, j[1] - pl.p.z) < 1.6) { jumped.add(i); key('Space', true); setTimeout(() => key('Space', false), 120); } });
    const c = __G.story.chase;
    if (c) { const d = Math.hypot(pl.p.x - c.pos.x, pl.p.z - c.pos.z); maxClose = Math.min(maxClose, d); if (__G.time - lastLog > 1.5) { lastLog = __G.time; L.push(`t=${(__G.time - tStart).toFixed(1)} p=${pl.p.x.toFixed(1)},${pl.p.z.toFixed(1)} man=${c.pos.x.toFixed(1)},${c.pos.z.toFixed(1)} d=${d.toFixed(1)} stam=${pl.stamina.toFixed(2)} ex=${pl.exhausted} st=${c.state}`); } }
    if (document.getElementById('death').classList.contains('show')) { died = true; break; }
    await sleep(60);
  }
  key('KeyW', false); key('ShiftLeft', false);
  L.push(`am Tor t=${(__G.time - tStart).toFixed(1)} wi=${wi} died=${died} closest=${maxClose.toFixed(1)}`);
  if (!died) {
    // Aufschließen dauert 1.6 s (gedrückt halten)
    const tg = __G.time; while (__G.time - tg < 1.6) { await sleep(50); if (document.getElementById('death').classList.contains('show')) { died = true; break; } }
    const c = __G.story.chase; L.push('nach Aufschließen: d=' + (c ? Math.hypot(pl.p.x - c.pos.x, pl.p.z - c.pos.z).toFixed(1) : '-') + ' died=' + died);
    if (!died) {
      L.push(__use('Tor aufschließen'));
      await sleep(400);
      key('KeyW', true); key('ShiftLeft', true);
      const r2 = [[-80.8, 106.3], [-82.2, 106.1], [-86.0, 106.0], [-91.0, 106.6], [-96.0, 105.2], [-99.5, 105.6], [-103.0, 106.0], [-108, 106], [-113, 106]];
      const j2 = [[-81.5, 106.1], [-100.8, 105.9]];
      let k = 0; const jd = new Set(); const tb = __G.time;
      while (k < r2.length && __G.time - tb < 40) {
        const [tx, tz] = r2[k]; const dx = tx - pl.p.x, dz = tz - pl.p.z;
        if (Math.hypot(dx, dz) < 0.8) { k++; continue; }
        __look(Math.atan2(-dx, -dz), 0);
        j2.forEach((j, i) => { if (!jd.has(i) && Math.hypot(j[0] - pl.p.x, j[1] - pl.p.z) < 0.7) { jd.add(i); key('Space', true); setTimeout(() => key('Space', false), 120); } });
        const c2 = __G.story.chase;
        if (c2 && __G.time - lastLog > 1.5) { lastLog = __G.time; L.push(`t=${(__G.time - tStart).toFixed(1)} ch${st().ch} p=${pl.p.x.toFixed(1)},${pl.p.z.toFixed(1)} man=${c2.pos.x.toFixed(1)},${c2.pos.z.toFixed(1)} d=${Math.hypot(pl.p.x - c2.pos.x, pl.p.z - c2.pos.z).toFixed(1)} stam=${pl.stamina.toFixed(2)} st=${c2.state} gate=${!__G.objects.gate.col.enabled}`); }
        if (document.getElementById('death').classList.contains('show')) { died = true; break; }
        await sleep(60);
      }
      key('KeyW', false); key('ShiftLeft', false);
      L.push(`ende k=${k} died=${died} ` + __state());
      await sleep(3000); L.push('danach ' + __state());
    }
  }
  return L.join('\n');
}
