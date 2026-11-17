// Post-Processing: niedrige interne Auflösung, Filmkorn, VHS-Zittern, chromatische Aberration, Vignette, Grading
import * as THREE from 'three';
import { G } from './state.js';

const frag = /* glsl */`
precision highp float;
uniform sampler2D tDiffuse;
uniform vec2 res;
uniform float time, grain, aberr, vignette, flash, vhs, exposure, fade, blurAmt, bloomAmt, aoAmt, hazeAmt, camNear, camFar;
uniform sampler2D tBloom, tDepth;
uniform vec3 hazeCol;
varying vec2 vUv;

float linZ(vec2 uv){ float z = texture2D(tDepth, uv).x * 2.0 - 1.0; return 2.0 * camNear * camFar / (camFar + camNear - z * (camFar - camNear)); }
float hash(vec2 p){ p = fract(p*vec2(123.34, 456.21)); p += dot(p, p+45.32); return fract(p.x*p.y); }

vec3 aces(vec3 x){ const float a=2.51,b=0.03,c=2.43,d=0.59,e=0.14; return clamp((x*(a*x+b))/(x*(c*x+d)+e),0.0,1.0); }
vec3 toSRGB(vec3 c){ return mix(c*12.92, 1.055*pow(c, vec3(1.0/2.4))-0.055, step(0.0031308, c)); }

void main(){
  vec2 uv = vUv;
  // VHS: zeilenweises Zittern + gelegentliches Tracking-Band
  float row = floor(uv.y * res.y * 0.5);
  float tframe = floor(time * 24.0);
  float jit = (hash(vec2(row, tframe)) - 0.5) * 0.0016 * vhs;
  float bandPos = fract(time * 0.045);
  float band = smoothstep(0.035, 0.0, abs(uv.y - bandPos)) * vhs;
  jit += band * (hash(vec2(row, tframe + 3.0)) - 0.5) * 0.02;
  uv.x += jit;

  // leichte Linsenverzerrung (Kamera-Look)
  vec2 cc = uv - 0.5;
  float r2 = dot(cc, cc);
  uv = 0.5 + cc * (1.0 + 0.045 * r2) / 1.012;
  vec2 dir = uv - 0.5;
  float d = length(dir);
  float ca = aberr * (0.0012 + d * d * 0.012);
  vec3 col;
  col.r = texture2D(tDiffuse, uv + dir * ca).r;
  col.g = texture2D(tDiffuse, uv).g;
  col.b = texture2D(tDiffuse, uv - dir * ca).b;


  // Raumschatten (SSAO-light): 8 Nachbarn im Bildschirmraum, nur Verdeckung nach vorn zählt
  float zc = linZ(uv);
  if (aoAmt > 0.0) {
    float occ = 0.0;
    float rad = 0.012 / max(0.35, sqrt(zc) * 0.5);
    float ang = hash(vUv * res) * 6.2831;
    for (int i = 0; i < 8; i++) {
      float a = ang + float(i) * 0.785398;
      vec2 o = vec2(cos(a), sin(a)) * rad * (0.4 + 0.6 * fract(float(i) * 0.618));
      float zs = linZ(uv + o);
      float dz = zc - zs;
      occ += smoothstep(0.03, 0.25, dz) * smoothstep(1.6, 0.4, dz);
    }
    col *= 1.0 - clamp(occ / 8.0 * aoAmt, 0.0, 0.75);
  }
  // Boden-/Nebeldunst: wabernde Dichte, nach hinten dichter, farbig wie Mondnebel
  if (hazeAmt > 0.0) {
    float wob = 0.85 + 0.15 * sin(time * 0.35 + uv.x * 5.0 + zc * 0.08);
    float h = 1.0 - exp(-zc * 0.018 * hazeAmt * wob);
    col = mix(col, hazeCol * 0.55, clamp(h, 0.0, 0.6) * smoothstep(1.0, 0.0, uv.y * 0.4 + 0.4));
  }

  // Schärfen (Unsharp Mask) – wirkt wie eine knackige Kamera
  vec2 px = 1.0 / res;
  vec3 b = texture2D(tDiffuse, uv + vec2(px.x, 0.0)).rgb + texture2D(tDiffuse, uv - vec2(px.x, 0.0)).rgb
         + texture2D(tDiffuse, uv + vec2(0.0, px.y)).rgb + texture2D(tDiffuse, uv - vec2(0.0, px.y)).rgb;
  col = max(col + (col - b * 0.25) * (0.55 - blurAmt), vec3(0.0));

  // Bloom
  col += texture2D(tBloom, uv).rgb * bloomAmt;

  col *= exposure;
  col = aces(col);

  // Grading: entsättigt, Tiefen blau (Mondnacht), Lichter warm
  float lum = dot(col, vec3(0.2126, 0.7152, 0.0722));
  col = mix(vec3(lum), col, 0.78);
  col = mix(col * vec3(0.82, 0.96, 1.22), col * vec3(1.06, 1.0, 0.9), smoothstep(0.02, 0.45, lum));
  // Kontrast nur in Mitten/Lichtern, Tiefen bleiben lesbar
  col = mix(col, col * col * (3.0 - 2.0 * col), smoothstep(0.15, 0.6, lum) * 0.35);
  col = max(col, vec3(0.0));

  vec3 outc = toSRGB(col);
  // angehobene Schwärzen (Videolook)
  outc = outc * 0.965 + vec3(0.014, 0.017, 0.02);

  // Vignette
  outc *= mix(1.0, smoothstep(0.95, 0.28, d), vignette);
  // Filmkorn (stärker in dunklen Bereichen)
  float n = hash(vUv * res + fract(time * 13.7) * 91.0) - 0.5;
  outc += n * grain * (0.05 + 0.07 * (1.0 - lum));
  // feine Zeilen
  outc *= 0.975 + 0.025 * sin(vUv.y * res.y * 3.14159);
  // Band etwas heller und verrauscht
  outc += band * 0.05 * hash(vUv * 400.0 + time);

  outc += flash;
  outc *= fade;
  gl_FragColor = vec4(outc, 1.0);
}`;

export class Post {
  constructor(renderer) {
    this.r = renderer;
    this.rt = new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType, depthBuffer: true, samples: 0 });
    this.rt.depthTexture = new THREE.DepthTexture(4, 4); this.rt.depthTexture.type = THREE.UnsignedIntType;
    this.rt.texture.minFilter = THREE.LinearFilter; this.rt.texture.magFilter = THREE.LinearFilter;
    this.mat = new THREE.ShaderMaterial({
      uniforms: {
        tDiffuse: { value: this.rt.texture }, res: { value: new THREE.Vector2(1, 1) }, time: { value: 0 },
        grain: { value: 1 }, aberr: { value: 1 }, vignette: { value: 0.9 }, flash: { value: 0 }, vhs: { value: 0.6 },
        exposure: { value: 1.25 }, fade: { value: 1 }, blurAmt: { value: 0.18 }, tBloom: { value: null }, bloomAmt: { value: 0.9 },
        tDepth: { value: this.rt.depthTexture }, aoAmt: { value: 1 }, hazeAmt: { value: 1 }, hazeCol: { value: new THREE.Color(0x2a3140) }, camNear: { value: 0.04 }, camFar: { value: 1500 },
      },
      vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }',
      fragmentShader: frag,
      depthTest: false, depthWrite: false,
    });
    this.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.mat);
    this.quad.frustumCulled = false;
    this.scene = new THREE.Scene(); this.scene.add(this.quad);
    this.cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.scareT = 0;
    const mk = () => { const t = new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType, depthBuffer: false }); t.texture.minFilter = t.texture.magFilter = THREE.LinearFilter; return t; };
    this.bA = mk(); this.bB = mk();
    this.mat.uniforms.tBloom.value = this.bA.texture;
    const vs = 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }';
    this.thr = new THREE.ShaderMaterial({ uniforms: { tDiffuse: { value: this.rt.texture }, thr: { value: 0.55 } }, vertexShader: vs, depthTest: false, depthWrite: false,
      fragmentShader: 'uniform sampler2D tDiffuse; uniform float thr; varying vec2 vUv; void main(){ vec3 c = texture2D(tDiffuse, vUv).rgb; float l = max(c.r, max(c.g, c.b)); gl_FragColor = vec4(c * smoothstep(thr, thr * 2.5, l), 1.0); }' });
    this.blur = new THREE.ShaderMaterial({ uniforms: { tDiffuse: { value: null }, dir: { value: new THREE.Vector2() } }, vertexShader: vs, depthTest: false, depthWrite: false,
      fragmentShader: `uniform sampler2D tDiffuse; uniform vec2 dir; varying vec2 vUv;
        void main(){ vec3 c = texture2D(tDiffuse, vUv).rgb * 0.227;
          c += (texture2D(tDiffuse, vUv + dir * 1.385).rgb + texture2D(tDiffuse, vUv - dir * 1.385).rgb) * 0.316;
          c += (texture2D(tDiffuse, vUv + dir * 3.23).rgb + texture2D(tDiffuse, vUv - dir * 3.23).rgb) * 0.07;
          gl_FragColor = vec4(c, 1.0); }` });
  }
  pass(mat, target) { this.quad.material = mat; this.r.setRenderTarget(target); this.r.render(this.scene, this.cam); }
  resize(w, h) {
    const s = G.settings.scale;
    const rw = Math.max(320, Math.floor(w * s)), rh = Math.max(180, Math.floor(h * s));
    this.rt.setSize(rw, rh);
    if (G.camera) { this.mat.uniforms.camNear.value = G.camera.near; this.mat.uniforms.camFar.value = G.camera.far; }
    this.mat.uniforms.res.value.set(rw, rh);
    const bw = Math.max(64, rw >> 2), bh = Math.max(36, rh >> 2);
    this.bA.setSize(bw, bh); this.bB.setSize(bw, bh); this.bw = bw; this.bh = bh;
  }
  // Grafikstufen: 0 niedrig, 1 mittel, 2 hoch, 3 ultra. Wirkt sofort (Raumschatten, Dunst, Bloom, Schatten)
  static LEVELS = ['niedrig', 'mittel', 'hoch', 'ultra'];
  applyGfx() {
    const g = G.settings.gfx ?? 2, u = this.mat.uniforms;
    u.aoAmt.value = [0, 0, 1, 1.5][g];
    u.hazeAmt.value = [0, 1, 1.4, 1.8][g];
    this.bloomPasses = [1, 1, 2, 2][g];
    this.r.shadowMap.enabled = g >= 1;
    this.r.shadowMap.needsUpdate = true;
    if (G.world && G.world.setPoolSize) G.world.setPoolSize([5, 6, 8, 8][g]);
    G.scene && G.scene.traverse((o) => { if (o.material) { const m = Array.isArray(o.material) ? o.material : [o.material]; m.forEach((x) => { x.needsUpdate = true; }); } });
  }
  scare(k = 1) { this.scareT = Math.max(this.scareT, k); }
  // Sichtweite folgt dem Nebel: was vollständig im Nebel liegt, wird gar nicht erst gezeichnet.
  // In geschlossenen Räumen (G.viewCap) reicht ein kurzer Blick – die Außenwelt hinter den Wänden fällt weg.
  fitView(scene, camera) {
    const f = scene.fog, cap = G.viewCap || 1500;
    const far = Math.min(cap, f && f.density > 0.002 ? Math.max(45, 3.4 / f.density) : 1500);
    if (Math.abs(camera.far - far) > 0.25) { camera.far = far; camera.updateProjectionMatrix(); }
    const u = this.mat.uniforms; u.camNear.value = camera.near; u.camFar.value = camera.far;
    const sky = G.objects && G.objects.sky;
    if (sky) {
      sky.position.copy(camera.position); sky.scale.setScalar((camera.far * 0.85) / 900);
      if (f && sky.material.uniforms.fogCol) sky.material.uniforms.fogCol.value.copy(f.color);
    }
  }
  render(scene, camera, dt) {
    const u = this.mat.uniforms;
    u.time.value = G.time;
    u.grain.value = G.settings.grain;
    if (this.scareT > 0) this.scareT = Math.max(0, this.scareT - dt * 1.4);
    const s = this.scareT;
    u.aberr.value = 1 + s * 7;
    u.vhs.value = 0.5 + s * 3 + (G.flags.vhsBoost || 0);
    u.flash.value = s > 0.85 ? (s - 0.85) * 1.2 : 0;
    this.fitView(scene, camera);
    this.r.setRenderTarget(this.rt);
    this.r.render(scene, camera);
    // Bloom: hell extrahieren, zweimal weichzeichnen
    this.pass(this.thr, this.bA);
    for (let i = 0; i < (this.bloomPasses || 2); i++) {
      this.blur.uniforms.tDiffuse.value = this.bA.texture; this.blur.uniforms.dir.value.set((1 + i) / this.bw, 0); this.pass(this.blur, this.bB);
      this.blur.uniforms.tDiffuse.value = this.bB.texture; this.blur.uniforms.dir.value.set(0, (1 + i) / this.bh); this.pass(this.blur, this.bA);
    }
    this.quad.material = this.mat;
    this.r.setRenderTarget(null);
    this.r.render(this.scene, this.cam);
  }
}
