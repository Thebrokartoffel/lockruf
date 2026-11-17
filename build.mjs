// LOCKRUF bauen
//   node build.mjs          -> dist/  lesbar, für Entwicklung und Tests
//   node build.mjs --min    -> dist/  minifiziert (für die Desktop-App)
//   node build.mjs --pages  -> docs/  minifiziert, für GitHub Pages
import * as esbuild from 'esbuild';
import { copyFileSync, readdirSync, mkdirSync, writeFileSync } from 'fs';

const pages = process.argv.includes('--pages');
const out = pages ? 'docs' : 'dist';
mkdirSync(out, { recursive: true });

await esbuild.build({
  entryPoints: ['src/main.js'],
  bundle: true,
  format: 'iife',
  outfile: out + '/game.js',
  minify: pages || process.argv.includes('--min'),
  target: ['chrome110', 'edge110', 'firefox115', 'safari16'],
  legalComments: 'eof',            // Lizenzhinweis von three.js (MIT) bleibt in game.js erhalten
  logLevel: 'info',
});

// HTML-Hülle, Manifest, Icons, Offline-Cache, Lizenztext von three.js
copyFileSync('index.html', out + '/index.html');
for (const f of readdirSync('web')) copyFileSync('web/' + f, out + '/' + f);
copyFileSync('node_modules/three/LICENSE', out + '/LICENSE-three.txt');
if (pages) writeFileSync(out + '/.nojekyll', '');   // GitHub Pages: Dateien unverändert ausliefern
