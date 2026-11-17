async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const L = [];
  window.__fast = 1; __G.settings.scale = 0.3; __G.post.resize(innerWidth, innerHeight);
  __start(1, 'og'); await sleep(3000);
  L.push('mic vorher: on=' + __G.mic.on + ' status=' + __G.mic.status);
  const ok = await __G.mic.enable();
  L.push('enable -> ' + ok + ' status=' + __G.mic.status);
  let mx = 0; for (let i = 0; i < 30; i++) { await sleep(100); mx = Math.max(mx, __G.mic.level); }
  L.push('max level (Fake-Ton 440 Hz) = ' + mx.toFixed(2) + ' micLvl=' + (__G.micLvl || 0).toFixed(2) + ' dad alert=' + __G.story.dad.alert.toFixed(2));
  L.push('HUD noise sichtbar: ' + document.getElementById('noise').classList.contains('show') + ', Mikro-Label: ' + document.querySelector('#noise .mic').style.display);
  __G.mic.disable();
  L.push('disable -> on=' + __G.mic.on + ' tracks=' + (__G.mic.stream ? 'noch da' : 'gestoppt'));
  return L.join('\n');
}
