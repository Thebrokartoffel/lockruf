async () => {
  // Kapitel 1 mit echter Bewegung (Tastatur): Treppe runter, Mama, Schlüssel aus dem Schlafzimmer, Verstecken, raus
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const L = [];
  const st = () => JSON.parse(__state());
  const key = (code, down) => window.dispatchEvent(new KeyboardEvent(down ? 'keydown' : 'keyup', { code, key: code }));
  const pl = __G.player;
  const log = (m) => { const s = st(); L.push(`${m} | obj="${s.obj}" sub="${s.sub}" p=${s.p} dad=${s.dad} alert=${__G.story.dad.alert.toFixed(2)} tok=${__G.story.token} inv=${s.inv}`); };
  const yawTo = (dx, dz) => Math.atan2(-dx, -dz);
  const aim = (x, y, z) => { const c = __G.camera.position; const dx = x - c.x, dy = y - c.y, dz = z - c.z; __look(yawTo(dx, dz), Math.atan2(dy, Math.hypot(dx, dz))); };
  const goTo = async (x, z, { crouch = false, tol = 0.3, ms = 15000 } = {}) => {
    if (crouch) key('KeyC', true);
    key('KeyW', true);
    const t0 = performance.now(); let ok = false;
    while (performance.now() - t0 < ms) {
      const dx = x - pl.p.x, dz = z - pl.p.z;
      if (Math.hypot(dx, dz) < tol) { ok = true; break; }
      __look(yawTo(dx, dz), -0.1);
      await sleep(40);
    }
    key('KeyW', false); if (crouch) key('KeyC', false);
    await sleep(80);
    if (!ok) log(`NICHT ERREICHT (${x},${z})`);
    return ok;
  };
  const path = async (pts, o) => { for (const [x, z] of pts) if (!(await goTo(x, z, o))) return false; return true; };
  const holdE = async (ms) => { key('KeyE', true); await sleep(ms); key('KeyE', false); await sleep(150); };
  const waitFor = async (name, fn, ms = 60000) => { const t0 = performance.now(); while (!fn()) { if (performance.now() - t0 > ms) { log('TIMEOUT ' + name); return false; } await sleep(100); } log('ok ' + name); return true; };
  window.__norender = 1; window.__speed = 1;
  const fromKeys = window.__ONLY === 2;     // run.py --only 2: ab dem Checkpoint „Schlüssel holen“
  __start(1, fromKeys ? 'mama' : 'og');
  await sleep(2600);
  log(fromKeys ? 'Start Checkpoint Schlüssel' : 'Start OG');
  if (!fromKeys) {
  // --- OG -> Treppe runter (geduckt, an den knarzenden Dielen vorbei)
  const okStairs = await path([[502.7, 4.9], [503.4, 5.95], [504.3, 6.25], [504.95, 6.7], [504.95, 7.4], [504.95, 9.4], [504.95, 11.0], [504.7, 11.95]], { crouch: true });
  L.push(`Treppe: geschafft=${okStairs} y=${pl.p.y.toFixed(2)} z=${pl.p.z.toFixed(2)}`);
  await waitFor('unten (Ziel Haustür)', () => (st().obj || '').includes('Haustür'), 20000);
  // --- Haustür probieren
  await path([[504.0, 13.6], [503.6, 14.55]]);
  aim(503.6, 1.1, 15.4); await sleep(200); await holdE(120);
  await waitFor('Schlüssel suchen', () => (st().obj || '').includes('Hausschlüssel'), 6000);
  // --- ins Wohnzimmer: Mama
  await path([[503.4, 12.4], [502.1, 12.4], [501.0, 12.1], [500.4, 11.2]]);
  await waitFor('Mama-Szene vorbei (Ziel Schlafzimmer)', () => (st().obj || '').includes('Schlafzimmer'), 70000);
  L.push('Mama im Bett: ' + __G.objects.home.momLump.visible + ', Fernseher aus');
  }
  // --- hoch zur Elterntür
  await path([[501.3, 12.3], [503.0, 12.4], [504.85, 12.0], [504.95, 11.0], [504.95, 7.4], [504.9, 6.55], [503.4, 6.6], [502.8, 6.85]], { crouch: true });
  aim(502.0, 4.0, 6.85); await sleep(200); await holdE(2000);
  await sleep(1500);
  L.push('Elterntür offen: ' + (!__G.world.colliders.find((c) => c.label === 'Elterntür').enabled));
  // --- geduckt zum Nachttisch, Schlüssel vorsichtig nehmen
  const okIn = await path([[501.5, 6.85], [500.6, 5.3], [499.1, 5.15], [498.55, 5.2]], { crouch: true, ms: 20000 });
  L.push('im Schlafzimmer: ' + okIn + ' alert=' + __G.story.dad.alert.toFixed(2));
  key('KeyC', true); await sleep(700);
  aim(497.9, 3.52, 5.62); await sleep(250);
  L.push('Ziel: ' + (__G.player.current ? (typeof __G.player.current.text === 'function' ? __G.player.current.text() : __G.player.current.text) : '-'));
  await holdE(2400); key('KeyC', false);
  await waitFor('Schlüssel genommen', () => st().inv.includes('homeKeys'), 4000);
  if (window.__SLOWLOG) for (let i = 0; i < 6; i++) { await sleep(500); log('nach Schlüssel +' + (i * 0.5)); }
  // --- raus und im Kleiderschrank verstecken
  const okOut = await path([[499.4, 5.1], [500.9, 5.5], [501.6, 6.85], [502.8, 6.8], [503.1, 5.6], [502.7, 4.7], [501.25, 3.75]], { ms: 20000 });
  aim(500.7, 4.1, 3.75); await sleep(250); await holdE(120); await sleep(300);
  L.push('versteckt: ' + pl.hidden + ' (' + (__G.story._hideSpot && __G.story._hideSpot.id) + ') raus=' + okOut);
  await waitFor('Papa sucht', () => st().dad === 'patrol', 15000);
  await waitFor('Papa wieder im Bett (Ziel raus)', () => (st().obj || '').includes('Raus. Leise'), 160000);
  // --- raus aus dem Schrank, runter, Kette, aufschließen
  await holdE(120); await sleep(400);
  L.push('aus dem Versteck: hidden=' + pl.hidden);
  await path([[502.7, 4.7], [503.4, 5.95], [504.3, 6.25], [504.95, 6.7], [504.95, 7.4], [504.95, 9.4], [504.95, 11.0], [504.2, 12.6], [503.75, 14.6]], { crouch: true, ms: 20000 });
  aim(503.96, 1.45, 15.37); await sleep(250); await holdE(1500);
  aim(503.6, 1.1, 15.4); await sleep(250); await holdE(2300);
  await waitFor('Kapitel 2', () => st().ch === 2, 15000);
  return L.join('\n');
}
