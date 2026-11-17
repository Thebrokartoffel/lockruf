async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const L = [];
  const st = () => JSON.parse(__state());
  const key = (code, down) => window.dispatchEvent(new KeyboardEvent(down ? 'keydown' : 'keyup', { code, key: code }));
  // Echtzeit wie im Spiel: ohne Bild (schnelle Frames, kleine Zeitschritte), kein __fast
  window.__norender = 1; window.__speed = 1;
  const pl = __G.player;
  __start(6);
  let t0 = performance.now(); while (!(st().obj || '').includes('Tor') && performance.now() - t0 < 40000) await sleep(100);
  L.push('start ' + __state());
  const route = [[-72.4, 137.6], [-73.6, 132], [-74.2, 128.4], [-74.5, 125.0], [-75.0, 123.0], [-75.2, 119.8], [-75.3, 117.0], [-75.4, 114.0], [-75.6, 111.9], [-75.8, 109.0], [-76.8, 108.6], [-78.1, 106.9]];
  const jumpZ = [137.9, 122.4, 111.9];   // kurz vor Ast, Stamm, Stamm vor dem Tor (ein Sprung trägt gut 2,5 m)
  let ducked = false;
  let wi = 0, jumped = new Set();
  key('KeyW', true); key('ShiftLeft', true);
  const tStart = __G.time; let maxClose = 99, died = false, lastLog = 0;
  while (wi < route.length && __G.time - tStart < 40) {
    const [tx, tz] = route[wi];
    const dx = tx - pl.p.x, dz = tz - pl.p.z;
    if (Math.hypot(dx, dz) < 0.9) { wi++; continue; }
    __look(Math.atan2(-dx, -dz), 0);
    jumpZ.forEach((jz, i) => { if (!jumped.has(i) && pl.p.z < jz && pl.p.z > jz - 1.0) { jumped.add(i); key('Space', true); setTimeout(() => key('Space', false), 120); } });
    // unter dem hängenden Baum durchducken
    const inDuck = pl.p.z < 127.7 && pl.p.z > 125.3;
    if (inDuck && !ducked) { ducked = true; key('ShiftLeft', false); key('KeyC', true); }
    if (!inDuck && ducked) { ducked = false; key('KeyC', false); key('ShiftLeft', true); }
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
      const j2x = [-81.35, -100.4, -104.85];    // Bach, Schutt, Schubkarre: Absprung, sobald x kleiner ist
      let duck2 = false;
      let k = 0; const jd = new Set(); const tb = __G.time;
      while (k < r2.length && __G.time - tb < 40) {
        const [tx, tz] = r2[k]; const dx = tx - pl.p.x, dz = tz - pl.p.z;
        if (Math.hypot(dx, dz) < 0.8) { k++; continue; }
        __look(Math.atan2(-dx, -dz), 0);
        j2x.forEach((jx, i) => { if (!jd.has(i) && pl.p.x < jx && pl.p.x > jx - 0.8) { jd.add(i); key('Space', true); setTimeout(() => key('Space', false), 120); } });
        const inD = pl.p.x < -108.1 && pl.p.x > -110.3;
        if (inD && !duck2) { duck2 = true; key('ShiftLeft', false); key('KeyC', true); }
        if (!inD && duck2) { duck2 = false; key('KeyC', false); key('ShiftLeft', true); }
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
