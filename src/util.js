// Kleine Helfer: Zufall, Noise, Mathe
export function rng(seed = 1) {
  let s = (seed * 2654435761) >>> 0 || 1;
  return () => {
    s ^= s << 13; s >>>= 0;
    s ^= s >>> 17;
    s ^= s << 5; s >>>= 0;
    return s / 4294967296;
  };
}

export function makeNoise(seed = 1) {
  const r = rng(seed);
  const P = 256;
  const vals = new Float32Array(P * P);
  for (let i = 0; i < vals.length; i++) vals[i] = r();
  const val = (ix, iy) => vals[(((iy % P) + P) % P) * P + (((ix % P) + P) % P)];
  return function noise(x, y, period = 0) {
    let x0 = Math.floor(x), y0 = Math.floor(y);
    const fx = x - x0, fy = y - y0;
    let x1 = x0 + 1, y1 = y0 + 1;
    if (period) {
      const w = (v) => Math.floor(((v % period) + period) % period);
      x0 = w(x0); x1 = w(x1); y0 = w(y0); y1 = w(y1);
    }
    const sx = fx * fx * (3 - 2 * fx), sy = fy * fy * (3 - 2 * fy);
    const a = val(x0, y0), b = val(x1, y0), c = val(x0, y1), d = val(x1, y1);
    return a + (b - a) * sx + (c - a) * sy + (a - b - c + d) * sx * sy;
  };
}

export function fbm(noise, x, y, oct = 4, period = 0) {
  let s = 0, a = 0.5, f = 1, n = 0;
  for (let i = 0; i < oct; i++) {
    s += a * noise(x * f, y * f, period ? period * f : 0);
    n += a; a *= 0.5; f *= 2;
  }
  return s / n;
}

export const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
export const lerp = (a, b, t) => a + (b - a) * t;
export const smooth = (t) => t * t * (3 - 2 * t);
export const damp = (a, b, k, dt) => lerp(a, b, 1 - Math.exp(-k * dt));

// Abstand Punkt -> Strecke (2D)
export function segDist(px, pz, ax, az, bx, bz) {
  const dx = bx - ax, dz = bz - az;
  const l2 = dx * dx + dz * dz || 1e-9;
  let t = ((px - ax) * dx + (pz - az) * dz) / l2;
  t = clamp(t, 0, 1);
  const cx = ax + dx * t, cz = az + dz * t;
  return { d: Math.hypot(px - cx, pz - cz), cx, cz, t };
}

export function angleDiff(a, b) {
  let d = b - a;
  while (d > Math.PI) d -= Math.PI * 2;
  while (d < -Math.PI) d += Math.PI * 2;
  return d;
}
