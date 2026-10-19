# Verschönerei Weinheim — Sandtöne, drei Einstiege

Die neue Entwurfsrunde vom 19. Oktober 2026 setzt Peggys Rückmeldung um:
ein großes Salonfoto, schwarze Schrift „Dein Stil. Dein Moment.“ und neutrale
Beige- und Sandfarben aus der gelieferten Palette.

**[Aktuelle Entwürfe ansehen](https://garytimeless.github.io/verschoenerei/)**

| Variante | Einstieg | Link |
|---|---|---|
| A · Pur | Schwarze Schrift direkt auf dem unveränderten Salonfoto | [Ansehen](https://garytimeless.github.io/verschoenerei/) |
| B · Milchig | Weichgezeichnetes Foto, heller Schleier und feine Körnung | [Ansehen](https://garytimeless.github.io/verschoenerei/variante-b.html) |
| C · Sandfläche | Klares Foto und eine quadratische, abgerundete Textfläche | [Ansehen](https://garytimeless.github.io/verschoenerei/variante-c.html) |

Aufbau, Texte, Typografie und weitere Seitenbereiche sind gleich. So lässt sich
im Gespräch gezielt die Bild- und Schriftwirkung vergleichen. Die separate
Übersichtsseite entfällt. Der Wechsler unten führt direkt zwischen A, B und C.
Die früher geteilten Direktlinks `galerie.html`, `salon.html` und `klar.html`
führen zu den aktuellen Varianten A, B und C.

In B lässt sich die **Milchigkeit unten live von 0 bis 100 % einstellen**.
Der Startwert ist 40 %; 100 % entspricht dem ursprünglichen starken Effekt.
Die letzte Einstellung bleibt lokal im jeweiligen Browser gespeichert.

## Archiv

Die bisherigen Entwürfe bleiben vollständig erhalten:

- [Helle Entwürfe vom 16. Oktober 2026](https://garytimeless.github.io/verschoenerei/archiv/2026-10-16-helle-entwuerfe/): Galerie, Salon und Klar samt Übersicht, CSS, JavaScript, Bildern, lokalen Schriften und Dokumentation. Die 32 Dateien wurden unverändert archiviert.
- [Frühere acht Vorschläge](https://garytimeless.github.io/verschoenerei/archiv/bisherige-entwuerfe/).

Die archivierten hellen Entwürfe funktionieren unabhängig von den neuen
Stylesheets und Bildern, weil alle benötigten Dateien im Archiv liegen.

## Bearbeitung und Vorschau

Statische HTML-Seiten ohne Build-Schritt: `index.html`, `variante-b.html`,
`variante-c.html`. Gemeinsame Gestaltung und Interaktionen: `sand.css` und
`sand.js`. Bei Inhaltsänderungen alle drei Seiten aktualisieren.

Lokal `python3 -m http.server 8000` starten und <http://localhost:8000> öffnen.
GitHub Pages veröffentlicht den Hauptordner von `main`; `.nojekyll` bleibt erhalten.

Gestaltungsentscheidungen und offene Inhalte: [DESIGN.md](DESIGN.md).
Bild- und Schriftquellen: [ASSETS.md](ASSETS.md).
