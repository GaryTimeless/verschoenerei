# Verschönerei Weinheim — Sandtöne und Dreiklang

Die neue Entwurfsrunde vom 19. Oktober 2026 setzt Peggys Rückmeldung um:
ein großes Salonfoto, den Schriftzug „Dein Stil. Dein Moment.“ und neutrale
Beige- und Sandfarben aus der gelieferten Palette.

**[Aktuelle Entwürfe ansehen](https://garytimeless.github.io/verschoenerei/)**

| Variante | Einstieg | Link |
|---|---|---|
| A · Milchig | Weichgezeichnetes Foto, heller Schleier und feine Körnung | [Ansehen](https://garytimeless.github.io/verschoenerei/variante-a.html) |
| B · Sandfläche | Klares Foto und eine quadratische, abgerundete Textfläche | [Ansehen](https://garytimeless.github.io/verschoenerei/variante-b.html) |
| C · Dreiklang | Der frühere Entwurf mit drei aufklappbaren Holzflächen | [Ansehen](https://garytimeless.github.io/verschoenerei/variante-c.html) |

A und B teilen Aufbau, Texte und Typografie und vergleichen die Bildwirkung.
C holt den früheren Dreiklang-Entwurf als dritte Auswahl zurück. Die separate
Übersichtsseite entfällt. Der Hauptlink startet direkt mit A. Der Wechsler unten
zeigt die Reihenfolge A · Milchig → B · Sandfläche → C · Dreiklang.
Die früher geteilten Direktlinks `galerie.html`, `salon.html` und `klar.html`
führen weiterhin zu Pur, Milchig und Sandfläche.
[Foto pur](https://garytimeless.github.io/verschoenerei/variante-pur.html)
bleibt separat erhalten. Die ursprüngliche Dreiklang-Datei im Archiv bleibt unverändert.

In A lässt sich die **Milchigkeit unten live von 0 bis 100 % einstellen**.
Der Startwert ist 40 %; 100 % entspricht dem ursprünglichen starken Effekt.
Die letzte Einstellung bleibt lokal im jeweiligen Browser gespeichert.

A, B und Foto pur verwenden das Foto
`WhatsApp Image 2026-10-12 at 09.05.45 (1).jpeg` des heutigen Salons.
Diese Fotoausführungen verwenden denselben responsiven Bildausschnitt: Auf breiten
Bildschirmen werden Decke und Boden beschnitten; hochkant wird der Ausschnitt
nach oben versetzt. Die jeweiligen Effekte bleiben erhalten. Auf dem Handy stehen
die drei Varianten im Wechsler in einer Reihe.

In allen drei Optionen und Foto pur stehen drei echte Kundenstimmen als Bewertungskarten
mit Sternen, Initialen und einem Link zu den Google-Bewertungen. Die statischen
Zitate sind mit ihren Quellen verlinkt; es wird kein Live-Feed geladen.

## Archiv

Die bisherigen Entwürfe bleiben vollständig erhalten:

- [Helle Entwürfe vom 16. Oktober 2026](https://garytimeless.github.io/verschoenerei/archiv/2026-10-16-helle-entwuerfe/): Galerie, Salon und Klar samt Übersicht, CSS, JavaScript, Bildern, lokalen Schriften und Dokumentation. Die 32 Dateien wurden unverändert archiviert.
- [Frühere acht Vorschläge](https://garytimeless.github.io/verschoenerei/archiv/bisherige-entwuerfe/).

Die archivierten hellen Entwürfe funktionieren unabhängig von den neuen
Stylesheets und Bildern, weil alle benötigten Dateien im Archiv liegen.

## Bearbeitung und Vorschau

Statische HTML-Seiten ohne Build-Schritt: `variante-a.html`, `variante-b.html`,
`variante-c.html`; zusätzlich `variante-pur.html`. `index.html` leitet auf A weiter.
A, B und Foto pur teilen `sand.css` und `sand.js`. C behält den eigenen Stil und
die aufklappbaren Bereiche des Archiv-Entwurfs. Die Karten teilen `kundenstimmen.css`.
Bei Inhaltsänderungen alle vier Seiten aktualisieren.

Lokal `python3 -m http.server 8000` starten und <http://localhost:8000> öffnen.
GitHub Pages veröffentlicht den Hauptordner von `main`; `.nojekyll` bleibt erhalten.

Gestaltungsentscheidungen und offene Inhalte: [DESIGN.md](DESIGN.md).
Bild- und Schriftquellen: [ASSETS.md](ASSETS.md).
