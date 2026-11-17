// Rückspulen in Kapitel 2 mit den neuen Inhalten: Gespräch mit Nessa (Auswahl), Schlüssel, Gatter.
// Prüft, dass Position, Inventar, Gesprächs-Status und Gatter nach dem Rückspulen exakt gleich sind.
async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const L = [];
  const G = __G, D = G.dev;
  const key = (code, down) => window.dispatchEvent(new KeyboardEvent(down ? 'keydown' : 'keyup', { code, key: code }));
  const hold = async (codes, ms) => { codes.forEach((c) => key(c, true)); await sleep(ms); codes.forEach((c) => key(c, false)); };
  const until = async (fn, ms = 60000) => { const t0 = performance.now(); while (!fn()) { if (performance.now() - t0 > ms) return false; await sleep(80); } return true; };
  window.__norender = 1; window.__fast = 1; window.__speed = 1;
  __start(2);
  await until(() => G.story.chapter === 2 && G.started);
  await sleep(1500);
  const snaps = [];
  const snap = (n) => { const p = G.player.p; snaps.push({ n, f: D.frame, x: p.x, y: p.y, z: p.z, inv: [...G.inv].join(','), talks: (G.story.st2 && G.story.st2.nessaTalks) || 0, gate: !!G.objects.gatter.open, busy: !!G.story.busyTalk, stam: G.player.stamina }); };
  snap('start');
  await hold(['KeyW'], 1200); snap('gelaufen');
  __tp(-10.4, -77.6); __look(Math.PI / 2, -0.05); await sleep(800); snap('parkplatz');
  await until(() => !G.story.busyTalk, 60000); __use('Ansprechen'); await until(() => !!G.ui.choice, 30000); snap('gespräch');
  __reply(0); await until(() => !G.story.busyTalk, 60000); await sleep(300); snap('nach gespräch');
  __tp(-20.4, -61.2); await sleep(400); __use('Blumentopf anheben'); await sleep(600); __use('Schlüssel nehmen'); await sleep(600); snap('schlüssel');
  __tp(0.3, -30.6); __look(Math.PI, 0); await sleep(1200); __use('aufschließen'); await until(() => G.objects.gatter.open, 20000); await sleep(400); snap('gatter offen');
  L.push('live:\n  ' + snaps.map((s) => `${s.n} f${s.f} (${s.x.toFixed(2)},${s.z.toFixed(2)}) inv=[${s.inv}] talks=${s.talks} gate=${s.gate} busy=${s.busy}`).join('\n  '));
  let worst = 0;
  for (const s of snaps.slice(1, -1).reverse()) {
    await D.rewindTo(s.f);
    const p = G.player.p;
    const d = Math.hypot(p.x - s.x, p.y - s.y, p.z - s.z);
    const same = [...G.inv].join(',') === s.inv && ((G.story.st2 && G.story.st2.nessaTalks) || 0) === s.talks && !!G.objects.gatter.open === s.gate && !!G.story.busyTalk === s.busy;
    worst = Math.max(worst, d + (same ? 0 : 1));
    L.push(`rewind ${s.n} f${s.f}: frames=${D.frame} d=${d.toFixed(5)} inv=[${[...G.inv].join(',')}] talks=${(G.story.st2 && G.story.st2.nessaTalks) || 0} gate=${!!G.objects.gatter.open} busy=${!!G.story.busyTalk} ${same ? 'gleich' : 'ABWEICHUNG'}`);
  }
  L.push('größte Abweichung: ' + worst.toFixed(6) + (worst < 1e-4 ? ' -> exakt' : ' -> FEHLER'));
  return L.join('\n');
}
