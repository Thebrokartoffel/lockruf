# LOCKRUF – Assets und Lizenzen

## Grafik und Sound
Alle Texturen, 3D-Modelle, Normal-Maps, Geräusche und die Musik-Stinger entstehen beim Start im Code
(prozedural: Canvas-Texturen, Three.js-Geometrie, WebAudio-Synthese). Es werden **keine externen Bild-,
Modell- oder Audiodateien** verwendet, also gibt es auch keine Fremdrechte an Inhalten.

Hintergrund: Die üblichen CC0-Quellen (ambientCG, Poly Haven, Kenney, Freesound, OpenGameArt) waren aus der
Build-Umgebung nicht erreichbar. Statt Dateien unklarer Herkunft einzubauen, wurde alles selbst erzeugt.
Wer später echte CC0-Assets ergänzt, trägt sie hier mit Quelle, Autor und Lizenz ein.

| Bereich | Herkunft | Lizenz |
|---|---|---|
| Texturen (Laub, Rinde, Holz, Beton, Ziegel, Tapete …) | prozedural, `src/textures.js` | eigener Code |
| Normal-/Rauheits-Maps | aus den Texturen berechnet, `src/models.js` (`normalFrom`) | eigener Code |
| Modelle (Bäume, Häuser, Hütte, Figuren, Möbel) | prozedural, `src/models.js`, `src/level/*.js` | eigener Code |
| Geräusche (Schritte, Schrei, Lüftung, Wind …) | WebAudio-Synthese, `src/audio.js` | eigener Code |
| App-Icons (`web/icon-192.png`, `web/icon-512.png`) | per Skript gezeichnet | eigener Code |

## Software von Dritten
| Paket | Zweck | Lizenz |
|---|---|---|
| three.js | 3D-Engine (im Spiel enthalten) | MIT, Lizenztext: `docs/LICENSE-three.txt`, Hinweis am Ende von `game.js` |
| esbuild | Build-Werkzeug (nicht im Spiel enthalten) | MIT |
| Electron | Windows-App-Hülle (nur in der App, nicht in der Web-Version) | MIT, enthält Chromium (Lizenzen: `LICENSES.chromium.html` im App-Ordner) |
| reportlab | Erzeugt das Lösungs-PDF (nicht im Spiel enthalten) | BSD |
| Playwright | automatische Tests (nicht im Spiel enthalten) | Apache-2.0 |

## Mikrofon
Das optionale Mikrofon wird nur lokal zur Pegelmessung genutzt. Es wird nichts aufgenommen, gespeichert oder übertragen.

## Web-Version
Die Web-Version lädt nichts von fremden Servern (keine Schriften, keine Bibliotheken aus dem Netz, kein Tracking). Einstellungen und Kapitel-Fortschritt liegen nur im Browser (localStorage).
