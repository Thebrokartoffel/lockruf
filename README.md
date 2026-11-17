# LOCKRUF

Kurzes 3D-Horrorspiel im Stil von Fears to Fathom. Frankfurt, Stadtwald am Goetheturm, Halloween-Nacht.
Läuft im Browser (PC, Handy, Tablet) und als Windows-App. Texturen, Modelle und Sounds entstehen im Code, es stecken keine fremden Bild-, Modell- oder Audiodateien drin.

**Spielen:** https://thebrokartoffel.github.io/lockruf/

## Handy und Tablet

1. Link öffnen, Gerät quer halten (hochkant geht auch, Button im Dreh-Hinweis). Kopfhörer empfohlen.
2. Vollbild ohne Browserleiste: als App auf den Startbildschirm legen.
   - Android, Chrome: Menü ⋮ → „Zum Startbildschirm hinzufügen“ (oder „App installieren“)
   - Samsung Internet: Menü ≡ → „Seite hinzufügen zu“ → „Startbildschirm“
   - iPhone und iPad, Safari: Teilen → „Zum Home-Bildschirm“
3. Nach dem ersten vollständigen Laden läuft das Spiel auch ohne Netz.

| Touch | Aktion |
|---|---|
| linken Daumen irgendwo links aufsetzen | Stick: gehen, ganz nach vorne = rennen |
| rechts wischen | umsehen |
| ✋ | benutzen (bei manchen Sachen halten) |
| ⤒ / ⤓ | springen / ducken (an/aus) |
| ☀ / ▯ | Taschenlampe / Handy |
| Antwort auf dem Handy antippen (quer auch Buttons daneben) | Antwort 1 / 2 |
| ⇄ | Handy: Chat / Karte |
| ☰ | Pause, Kapitel, Einstellungen, Godmode-Panel |

Tablet mit Tastatur oder Maus: Einstellungen → Touch-Steuerung (an / aus / automatisch). Sobald ein Finger den Bildschirm berührt, schaltet „automatisch“ die Touch-Steuerung ein.
Ruckelt es, senkt das Spiel die Render-Auflösung schrittweise selbst (in den Einstellungen abschaltbar). Beim ersten Start am Handy ist die Grafik auf „niedrig“ gestellt.

## PC

| Taste (im Menü frei belegbar) | Aktion |
|---|---|
| W A S D / Maus | gehen, umsehen |
| Shift (links oder rechts) | rennen (Ausdauer) |
| C | ducken |
| Leertaste | springen |
| E | benutzen (bei manchen Sachen halten) |
| F | Taschenlampe |
| Tab | Handy |
| 1 / 2 | Antwort |
| Q | Handy: Chat / Karte |
| Esc | Pause |
| F11 | Vollbild |

Im Browser holt sich das Spiel die Maus mit einem Klick ins Bild. Manche Tastenkombinationen fängt der Browser selbst ab, die Windows-App (unten) hat das Problem nicht.

Im Haus zählt jedes Geräusch: Rennen, Springen und knarzende Dielen wecken Papa. Geduckt ist es leise. „LAUT“ zeigt den Lärm (PC unten links, Handy oben links).
Lösungsweg: `LOCKRUF_Guide.pdf`.

## Mikrofon (optional, standardmäßig aus)

Einstellungen → Mikrofon. Erst nach dem Einschalten fragt der Browser nach der Berechtigung. Das Spiel misst nur die Lautstärke direkt im Gerät, nichts wird aufgenommen, gespeichert oder übertragen. Ausschalten jederzeit in den Einstellungen oder im Pausenmenü. Ohne Berechtigung läuft das Spiel normal weiter.

## Godmode

PC: Taste `+`. Handy: ☰ → Godmode-Panel. Spielstände bleiben dabei unverändert.
Unverwundbar, Gegner ignorieren, Noclip, Fliegen, Kollisionen anzeigen (mit Namen und „blockiert durch“), Zeit anhalten, Einzelbild, 0,25× bis 4×, 5/10/30 s zurückspulen, zu Story-Markern springen, Ereignisse, Kapitel, Checkpoints und Teleports auslösen.
Tasten bei aktivem Godmode: V fliegen, N Noclip, B Kollisionen, R 5 s zurück, T Zeitfaktor, P anhalten, O Einzelbild.

Das Rückspulen spielt die aufgezeichneten Eingaben (Tastatur, Maus und Touch) ab Kapitelstart oder Checkpoint exakt neu ab.

## Selbst bauen

Node.js 18 oder neuer:

```
npm install
npm run dev      # dist/  lesbar, zum Entwickeln: dist/index.html direkt im Browser öffnen
npm run build    # dist/  minifiziert
npm run pages    # docs/  Web-Version für GitHub Pages, wird mit eingecheckt
```

GitHub Pages: Settings → Pages → „Deploy from a branch“ → `main`, Ordner `/docs`. Nach Code-Änderungen `npm run pages` ausführen und `docs/` mit committen.

Test-Hooks (`window.__G` usw.) gibt es nur mit `?dev` oder `?test` in der Adresse oder nachdem der Godmode geöffnet wurde. `?touch` erzwingt die Touch-Steuerung, `?desktop` schaltet sie ab.

## Windows-App

Eigenes Fenster über Electron, ohne Browser und ohne Internet.

```
npm run app        # baut und startet die App
npm run app:pack   # erzeugt release/LOCKRUF-win32-x64/LOCKRUF.exe
```

## Tests

Automatische Durchläufe im Headless-Chrome (Playwright): ganze Story, Verfolgung, Rückspulen, Touch, Mikrofon.

```
pip install playwright && playwright install chromium
npm run dev
python tests/run.py tests/flow.js              # alle Kapitel
python tests/run.py tests/chase.js --low       # Flucht vor dem Mann
python tests/run.py tests/touch.js --touch     # Handy-Steuerung
```

Weitere Aufrufe stehen oben in `tests/run.py`.

## Aufbau

| Pfad | Inhalt |
|---|---|
| `src/main.js` | Start, Menüs, Spielschleife |
| `src/story.js` | Kapitel, Dialoge, Ereignisse |
| `src/level/` | Haus (zwei Etagen), Straße und Wald, Hütte mit Keller |
| `src/player.js`, `father.js`, `noise.js` | Spieler, Vater, Geräusche |
| `src/input.js`, `touch.js` | Eingabe-Ebene (Tastatur, Maus, Touch → Aktionen), Touch-Steuerung |
| `src/dev.js` | Godmode mit Aufzeichnung und Rückspulen |
| `src/audio.js`, `textures.js`, `models.js`, `post.js` | Sound-Synthese, Texturen, Modelle, Bildeffekte |
| `src/mic.js` | optionales Mikrofon (nur Pegel) |
| `index.html` | Oberfläche: HUD, Menüs, Handy |
| `web/` | Manifest, Icons, Offline-Cache |
| `docs/` | fertige Web-Version (GitHub Pages) |
| `app/` | Electron-Hülle |
| `tests/` | automatische Tests |
| `tools/guide.py` | erzeugt `LOCKRUF_Guide.pdf` |

## Lizenzen

three.js steht unter MIT, der Lizenztext liegt in `docs/LICENSE-three.txt` und der Hinweis am Ende von `game.js`. Herkunft aller Inhalte: `ASSETS_LICENSES.md`. Für den Spielcode selbst ist keine offene Lizenz vergeben.
