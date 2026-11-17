async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const L = [];
  const st = () => JSON.parse(__state());
  window.__fast = 1; window.__speed = 3; __G.settings.scale = 0.35; __G.post.resize(innerWidth, innerHeight);
  __start(1);
  await sleep(4000);
  L.push('A ' + __state());
  await __shot('room');
  __G.player.teleport(503.2, 3, 6.5, Math.PI, 0); await sleep(1500); await __shot('oghall');
  __G.player.teleport(504.85, 3, 6.6, Math.PI, -0.4); await sleep(1500); await __shot('stairtop');
  __G.player.teleport(503.6, 0, 12.8, 0, 0); await sleep(1500); await __shot('diele');
  L.push('B ' + __state());
  __G.player.teleport(503.2, 0, 5.2, 0, 0); await sleep(1500); await __shot('kitchen');
  __G.player.teleport(501.0, 0, 13.5, Math.PI*0.75, 0); await sleep(1500); await __shot('living');
  L.push('C ' + __state());
  return L.join('\n');
}
