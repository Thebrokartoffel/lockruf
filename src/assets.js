// Assets: Figuren, Modelle und Geräusche vorladen (GLB über XHR, damit es auch aus Dateien und in der App läuft)
// In der Windows-App und der Offline-Browser-Version liegen alle Dateien eingebettet in assets.js (window.__ASSETS).
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { FILES } from './assetlist.gen.js';

const gltfs = {}, raw = {};
const b64 = (s) => { const bin = atob(s); const u = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i); return u.buffer; };
function getBuffer(path) {
  const emb = window.__ASSETS && window.__ASSETS[path];
  if (emb) return Promise.resolve(b64(emb));
  return new Promise((res, rej) => {
    const x = new XMLHttpRequest();
    x.open('GET', 'assets/' + path); x.responseType = 'arraybuffer';
    x.onload = () => ((x.status === 200 || x.status === 0) && x.response && x.response.byteLength) ? res(x.response) : rej(new Error('Datei fehlt: assets/' + path));
    x.onerror = () => rej(new Error('Datei nicht ladbar: assets/' + path));
    x.send();
  });
}


export const Assets = {
  loaded: false,
  async loadAll(onProgress = () => {}) {
    const jobs = FILES.map((f) => [f, f.endsWith('.glb') ? 'gltf' : 'raw', f.split('/').pop().replace(/\.\w+$/, '')]);
    let done = 0;
    const loader = new GLTFLoader();
    await Promise.all(jobs.map(async ([path, kind, key]) => {
      const buf = await getBuffer(path);
      if (kind === 'gltf') gltfs[key] = await loader.parseAsync(buf, '');
      else raw[key] = buf;
      done++; onProgress(done / jobs.length, path);
    }));
    this.loaded = true;
  },
  gltf(name) { const g = gltfs[name]; if (!g) throw new Error('Modell nicht geladen: ' + name); return g; },
  has(name) { return !!gltfs[name] || !!raw[name]; },
  sound(name) { return raw[name] || null; },
  soundNames() { return Object.keys(raw); },
};
