async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const L = [];
  window.__fast = 1; window.__speed = 2; window.__norender = 1;
  for (const [ch, cp] of [[1, 'eg'], [5, null], [6, 'tor'], [8, null]]) {
    __start(ch, cp); await sleep(2500);
    L.push(`ch${ch}${cp ? ':' + cp : ''} -> ` + __state());
  }
  __G.dev.toggle(); await sleep(300); __G.dev.timeScale = 0.5; await sleep(800); await __G.dev.rewind(1);
  L.push('dev ok replay ms=' + __G.dev.lastReplayMs + ' panel=' + document.getElementById('dev').classList.contains('show'));
  return L.join('\n');
}
