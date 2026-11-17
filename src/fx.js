// Atmosphäre: Staub im Lichtkegel, fallendes Laub
import * as THREE from 'three';
import { G } from './state.js';
import { leafCardTex } from './textures.js';

export function createDust(scene) {
  const N = 700;
  const pos = new Float32Array(N * 3), rnd = new Float32Array(N);
  for (let i = 0; i < N; i++) { pos[i * 3] = Math.random() * 10; pos[i * 3 + 1] = Math.random() * 10; pos[i * 3 + 2] = Math.random() * 10; rnd[i] = Math.random(); }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('rnd', new THREE.BufferAttribute(rnd, 1));
  const mat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: { camPos: { value: new THREE.Vector3() }, lPos: { value: new THREE.Vector3() }, lDir: { value: new THREE.Vector3(0, 0, -1) }, lOn: { value: 0 }, time: { value: 0 }, cosA: { value: 0.88 }, amount: { value: 1 }, pxScale: { value: 1 } },
    vertexShader: `uniform vec3 camPos, lPos, lDir; uniform float lOn, time, cosA, pxScale; attribute float rnd; varying float vB;
      void main(){
        vec3 o = position + vec3(sin(time*0.31+rnd*6.3), sin(time*0.17+rnd*9.1)*0.6 - time*0.04, cos(time*0.23+rnd*3.7)) * 0.45;
        vec3 w = camPos + mod(o - camPos + 5.0, 10.0) - 5.0;
        vec3 d = w - lPos; float L = length(d);
        float cone = smoothstep(cosA, cosA + 0.05, dot(d / L, lDir));
        vB = cone * lOn * clamp(1.0 - L / 8.0, 0.0, 1.0) * smoothstep(0.25, 0.8, L) * (0.45 + 0.55 * sin(time * 1.7 + rnd * 40.0));
        vec4 mv = viewMatrix * vec4(w, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = clamp(5.0 * pxScale / max(0.3, -mv.z), 1.0, 4.0);
      }`,
    fragmentShader: `uniform float amount; varying float vB; void main(){ vec2 c = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.1, length(c)); gl_FragColor = vec4(vec3(0.85, 0.88, 0.95) * vB * a * 0.55 * amount, 1.0); }`,
  });
  const pts = new THREE.Points(g, mat); pts.frustumCulled = false; scene.add(pts);
  return (dt) => {
    const u = mat.uniforms, pl = G.player;
    u.time.value = G.time;
    u.camPos.value.copy(G.camera.position);
    u.lPos.value.copy(pl.flash.position);
    u.lDir.value.copy(pl.flashDir);
    u.lOn.value = pl.flash.intensity / Math.max(1, pl.flashIntensity);
    u.pxScale.value = (G.post ? G.post.rt.height : 540) / 540;
    // drinnen/Keller mehr Staub, im Wald weniger
    const inside = pl.p.y < -1 || pl.p.x > 400 || (pl.p.x > -64.6 && pl.p.x < -59.4 && pl.p.z > 137.9 && pl.p.z < 142.1);
    u.amount.value += ((inside ? 1.6 : 0.6) - u.amount.value) * Math.min(1, dt * 2);
  };
}

export function createFallingLeaves(scene) {
  const tex = (() => {
    const c = document.createElement('canvas'); c.width = 32; c.height = 32;
    const x = c.getContext('2d');
    x.fillStyle = '#7a4a22'; x.beginPath(); x.moveTo(2, 16); x.quadraticCurveTo(16, 2, 30, 16); x.quadraticCurveTo(16, 30, 2, 16); x.fill();
    x.strokeStyle = '#4a2a12'; x.beginPath(); x.moveTo(2, 16); x.lineTo(30, 16); x.stroke();
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
  })();
  void leafCardTex;
  const mat = new THREE.MeshLambertMaterial({ map: tex, alphaTest: 0.5, side: THREE.DoubleSide, color: new THREE.Color(1.6, 1.6, 1.6) });
  const geo = new THREE.PlaneGeometry(0.09, 0.09);
  const L = [];
  for (let i = 0; i < 45; i++) { const m = new THREE.Mesh(geo, mat); m.visible = false; scene.add(m); L.push({ m, y: 0, v: new THREE.Vector3(), spin: new THREE.Vector3(), alive: false }); }
  return (dt) => {
    const p = G.player.p;
    const outdoors = p.x < 400 && p.y > -1 && p.z > -74 && p.x > -86;
    for (const l of L) {
      if (!outdoors) { l.m.visible = false; l.alive = false; continue; }
      if (!l.alive) {
        if (Math.random() > dt * 1.5) continue;
        const a = Math.random() * Math.PI * 2, r = 1.5 + Math.random() * 10;
        l.m.position.set(p.x + Math.cos(a) * r, p.y + 5 + Math.random() * 4, p.z + Math.sin(a) * r);
        l.v.set((Math.random() - 0.5) * 0.4, -0.55 - Math.random() * 0.35, (Math.random() - 0.5) * 0.4);
        l.spin.set(Math.random() * 3, Math.random() * 3, Math.random() * 3);
        l.alive = true; l.m.visible = true;
      }
      const t = G.time;
      l.m.position.x += (l.v.x + Math.sin(t * 1.3 + l.spin.x) * 0.35) * dt;
      l.m.position.z += (l.v.z + Math.cos(t * 1.1 + l.spin.y) * 0.35) * dt;
      l.m.position.y += l.v.y * dt;
      l.m.rotation.x += l.spin.x * dt; l.m.rotation.y += l.spin.y * dt; l.m.rotation.z += l.spin.z * dt;
      const gy = G.terrain ? G.terrain.height(l.m.position.x, l.m.position.z) : 0;
      if (l.m.position.y < gy + 0.03) { l.alive = false; l.m.visible = false; }
    }
  };
}
