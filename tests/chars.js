async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const L = [];
  window.__fast = 1; __G.settings.scale = 0.5; __G.post.resize(innerWidth, innerHeight);
  __start(1);
  await sleep(5000);
  const H = __G.objects.home, O = __G.objects;
  const pl = __G.player;
  // Wohnzimmer: Mama auf dem Sofa, Papa steht daneben
  pl.teleport(501.0, 0, 13.5, Math.PI * 0.75, 0); await sleep(800);
  const seat = H.sofaSeat; L.push('sofa ' + JSON.stringify(seat));
  H.mom.root.position.set(...seat); H.mom.root.rotation.y = -Math.PI / 2; H.mom.root.visible = true; H.mom.sit(); H.mom.say(4);
  const f = pl.forward();
  H.dad.root.position.set(pl.p.x + f.x * 2.6, 0, pl.p.z + f.z * 2.6); H.dad.root.rotation.y = pl.yaw; H.dad.root.visible = true; H.dad.walk(0.016, 1.0);
  await sleep(1500); await __shot('living');
  pl.teleport(seat[0] + 1.8, 0, seat[2], Math.PI / 2, -0.2); await sleep(1200); await __shot('mom');
  L.push('ok ' + __state());
  return L.join('\n');
}
