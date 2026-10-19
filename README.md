# Verschönerei Weinheim — Sandtöne, drei Einstiege

Die neue Entwurfsrunde vom 19. Oktober 2026 setzt Peggys Rückmeldung um:
ein großes Salonfoto, den Schriftzug „Dein Stil. Dein Moment.“ und neutrale
Beige- und Sandfarben aus der gelieferten Palette.

**[Aktuelle Entwürfe ansehen](https://garytimeless.github.io/verschoenerei/)**

| Variante | Einstieg | Link |
|---|---|---|
| A · Milchig | Weichgezeichnetes Foto, heller Schleier und feine Körnung | [Ansehen](https://garytimeless.github.io/verschoenerei/variante-a.html) |
| B · Sandfläche | Klares Foto und eine quadratische, abgerundete Textfläche | [Ansehen](https://garytimeless.github.io/verschoenerei/variante-b.html) |
| C · Pur | Weiße Schrift direkt auf dem Salonfoto in Schwarz-Weiß | [Ansehen](https://garytimeless.github.io/verschoenerei/variante-c.html) |

Aufbau, Texte, Typografie und weitere Seitenbereiche sind gleich. So lässt sich
im Gespräch gezielt die Bild- und Schriftwirkung vergleichen. Die separate
Übersichtsseite entfällt. Der Hauptlink startet direkt mit A. Der Wechsler unten
zeigt die Reihenfolge A · Milchig → B · Sandfläche → C · Pur.
Die früher geteilten Direktlinks `galerie.html`, `salon.html` und `klar.html`
führen weiterhin zu Pur, Milchig und Sandfläche (jetzt C, A und B).

In A lässt sich die **Milchigkeit unten live von 0 bis 100 % einstellen**.
Der Startwert ist 40 %; 100 % entspricht dem ursprünglichen starken Effekt.
Die letzte Einstellung bleibt lokal im jeweiligen Browser gespeichert.

Alle aktuellen Entwürfe verwenden das Foto
`WhatsApp Image 2026-10-12 at 09.05.45 (1).jpeg` des heutigen Salons.
Alle drei Entwürfe verwenden denselben responsiven Bildausschnitt: Auf breiten
Bildschirmen werden Decke und Boden beschnitten; hochkant wird der Ausschnitt
nach oben versetzt. Die jeweiligen Effekte bleiben erhalten. Auf dem Handy stehen
die drei Varianten im Wechsler in einer Reihe.

## Archiv

Die bisherigen Entwürfe bleiben vollständig erhalten:

- [Helle Entwürfe vom 16. Oktober 2026](https://garytimeless.github.io/verschoenerei/archiv/2026-10-16-helle-entwuerfe/): Galerie, Salon und Klar samt Übersicht, CSS, JavaScript, Bildern, lokalen Schriften und Dokumentation. Die 32 Dateien wurden unverändert archiviert.
- [Frühere acht Vorschläge](https://garytimeless.github.io/verschoenerei/archiv/bisherige-entwuerfe/).

Die archivierten hellen Entwürfe funktionieren unabhängig von den neuen
Stylesheets und Bildern, weil alle benötigten Dateien im Archiv liegen.

## Bearbeitung und Vorschau

Statische HTML-Seiten ohne Build-Schritt: `variante-a.html`, `variante-b.html`,
`variante-c.html`. `index.html` leitet auf A weiter. Gemeinsame Gestaltung und Interaktionen: `sand.css` und
`sand.js`. Bei Inhaltsänderungen alle drei Seiten aktualisieren.

Lokal `python3 -m http.server 8000` starten und <http://localhost:8000> öffnen.
GitHub Pages veröffentlicht den Hauptordner von `main`; `.nojekyll` bleibt erhalten.

Gestaltungsentscheidungen und offene Inhalte: [DESIGN.md](DESIGN.md).
Bild- und Schriftquellen: [ASSETS.md](ASSETS.md).
