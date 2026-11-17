async () => {
  // Rückspulen mit Touch-Eingaben: Stick (analog), Rennen, Wischen. Nach dem Rückspulen muss alles exakt gleich sein.
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const L = [];
  const fire = (type, id, x, y) => { const t = document.elementFromPoint(x, y) || document.body; t.dispatchEvent(new PointerEvent(type, { pointerId: id, clientX: x, clientY: y, pointerType: 'touch', bubbles: true, cancelable: true, isPrimary: id === 1 })); };
  window.__fast = 1; __G.settings.scale = 0.3; __G.post.resize(innerWidth, innerHeight);
  __start(1, 'og'); await sleep(3500);
  const D = __G.dev, pl = __G.player;
  const snaps = [];
  const snap = (n) => snaps.push({ n, f: D.frame, x: pl.p.x, y: pl.p.y, z: pl.p.z, yaw: pl.yaw, st: pl.stamina });
  snap('start');
  fire('pointerdown', 1, 160, 300); await sleep(60);
  fire('pointermove', 1, 178, 262); await sleep(900); snap('Stick halb schräg');
  fire('pointermove', 1, 150, 200); await sleep(1200); snap('Stick voll = rennen');
  fire('pointerup', 1, 150, 200); await sleep(200);
  fire('pointerdown', 2, 560, 200); for (let i = 1; i <= 6; i++) { fire('pointermove', 2, 560 + i * 15, 200 + i * 3); await sleep(40); } fire('pointerup', 2, 650, 218);
  await sleep(300); snap('gewischt');
  fire('pointerdown', 1, 160, 300); await sleep(60); fire('pointermove', 1, 205, 300); await sleep(800); fire('pointerup', 1, 205, 300); await sleep(300); snap('seitlich');
  L.push('live: ' + snaps.map((s) => `${s.n} f${s.f} (${s.x.toFixed(2)},${s.z.toFixed(2)}) yaw=${s.yaw.toFixed(3)}`).join(' | '));
  let worst = 0;
  for (const s of snaps.slice(1).reverse()) {
    await D.rewindTo(s.f);
    const d = Math.hypot(pl.p.x - s.x, pl.p.y - s.y, pl.p.z - s.z), dy = Math.abs(pl.yaw - s.yaw), ds = Math.abs(pl.stamina - s.st);
    worst = Math.max(worst, d, dy, ds);
    L.push(`rewind ${s.n} f${s.f}: frames=${D.frame} d=${d.toFixed(5)} dyaw=${dy.toFixed(5)} dstam=${ds.toFixed(5)}`);
  }
  L.push('größte Abweichung: ' + worst.toFixed(6) + (worst < 1e-6 ? '  -> exakt' : '  -> ABWEICHUNG'));
  return L.join('\n');
}
