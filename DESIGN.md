# Verschönerei — Entwurfsrunde 19. Oktober 2026

## Bestätigtes Briefing

Peggy wünscht ein großes Salonbild über die volle Seitenbreite, schwarze
Schrift „Dein Stil. Dein Moment.“ und sandige, neutrale Farben entsprechend
dem gelieferten Screenshot. Timatehair dient als Referenz für die Kombination
aus klarer Navigation, großem Bildeinstieg und mittiger Typografie.

Nachträglicher Nutzerwunsch: Der frühere Dreiklang-Entwurf ist wieder die
dritte Auswahl. A und B bleiben die Fotoausführungen in Sandtönen. Foto pur
bleibt unter `variante-pur.html` erhalten; der Archiv-Entwurf selbst wird nicht
verändert. Alle aktuellen Ausführungen erhalten echte Kundenstimmen.

## Farben und Schrift

Die sechs Farben wurden aus den Innenflächen des Screenshot-Farbfächers
abgenommen. Sie sind Näherungen an das gelieferte Bild, keine verbindlichen
Corporate-Design-Werte.

| Rolle | Farbe |
|---|---|
| Leinen / Grund / Navigation | `#F4F2EC` |
| Helles Beige / Leistungen / Textfläche B | `#E5DFD6` |
| Sand / Bild-Fallback | `#D2C7B3` |
| Stein / Kontakt | `#C5B8A7` |
| Taupe / Bedienelement-Rahmen | `#AFA08E` |
| Erde / Linien | `#8A7D6C` |
| Schwarzer Text und Buttons | `#111111` |
| Header-Schrift in Foto pur | `#FFFFFF` |
| Sekundärer Fließtext | `#514B43` |

Manrope ist lokal eingebunden; Fallback Arial/sans-serif. Überschriften
verwenden Gewicht 400, kurze Label Gewicht 600. Fließtext 14–16 px,
große Überschriften fließend skaliert. Körpertext wird auf breiten
Bildschirmen auf etwa 535–650 px begrenzt.

## Die aktuellen Entwürfe

- **A:** Ein Live-Regler „Milchigkeit“ steuert Blur, hellen Schleier, Entsättigung und Körnung gemeinsam von 0 bis 100 %. 0 % zeigt ein klares Bild; 100 % entspricht dem ursprünglichen Look mit 12 px Blur und 62 % deckendem Leinen. Der neue Startwert ist 40 % (4,8 px Blur, 24,8 % Leinen). Die zuletzt gewählte Stärke wird lokal im Browser gespeichert; ohne Speicherzugriff funktioniert die Vorschau weiterhin. Nur die Bildebenen werden gefiltert, die Schrift bleibt scharf.
- **B:** Unverändertes Foto, darüber eine deckende quadratische Fläche in hellem Beige mit 28 px Radius (mobil 23 px). Die feste Fläche stabilisiert den Textkontrast unabhängig vom Foto.
- **C · Dreiklang:** Wiederherstellung von `archiv/bisherige-entwuerfe/vorschlag-i-dreiklang.html` als aktuelle `variante-c.html`. Drei aufklappbare Holzflächen, die ursprünglichen Farben sowie Fraunces/Figtree bleiben erhalten. Der Variantenwechsler führt zurück zu A und B; die neuen Kundenstimmen ersetzen die fiktiven Vorschauzitate.
- **Foto pur (separat):** `salon-aktuell-hochkant.jpg` wird im Header per CSS in Schwarz-Weiß dargestellt, ohne Blur oder aufhellende Ebene. Die Originaldatei bleibt farbig und unverändert. Überschrift und Begleittexte stehen weiß direkt auf dem Motiv; der Kontrast hängt weiterhin vom Bildausschnitt ab.

Die drei Fotoausführungen verwenden dieselbe aktuelle Hochkantaufnahme (1200 × 1600 px).
Das Foto füllt den Hero ohne Verzerrung; `object-position: 50% 44%` hält den
Ausschnitt bei Spiegeln und Friseurstühlen. Im Querformat werden Teile von
Decke und Boden abgeschnitten. Bei hochkantigem Bildschirm wird die Bildebene
auf 125 % Höhe vergrößert und um 25 % nach oben versetzt.

Der Hero füllt mindestens den ersten Bildschirm unter der Navigation. B hält
die Textfläche auch bei schmaler Breite quadratisch. Das Foto bleibt überall
unverändert gespeichert; Effekte entstehen ausschließlich im Browser.

## Seitenaufbau und Verhalten

Die kurze Headerzeile der Fotoausführungen lautet „Haare · Haut · Nägel“.

Navigation → Foto-Hero → Willkommen → Haare/Haut/Nägel → Salon → Kundenstimmen
→ Kontakt → Rechtstextlinks. Keine erfundenen Bewertungen, Teamlisten, News oder Feeds.
Der kleine Variantenwechsler dient nur der Entwurfspräsentation. Die Hinweise
enthalten einen Link zu den archivierten hellen Entwürfen.
Die Präsentationsreihenfolge ist A · Milchig → B · Sandfläche → C · Dreiklang.
Der Hauptlink öffnet A; C ist unter `variante-c.html` weiterhin direkt erreichbar.

Mobil: ausklappbare Navigation, Leistungen untereinander, angepasste
Bildposition, zweispaltiges Salon-Detail, Kontakt bei 320 px einspaltig.
Sprunglinks, sichtbarer Tastaturfokus, Escape zum Schließen und reduzierte
Bewegung sind berücksichtigt. Der Variantenwechsler zeigt auf dem Handy drei
Links in einer Reihe. Ohne JavaScript bleiben Navigation und
Variantenlinks benutzbar; der Hinweisdialog benötigt JavaScript.

Die Kundenstimmen stehen auf einer beigen Fläche zwischen Salon und Kontakt.
Dreiklang übernimmt die Karten mit Figtree innerhalb der bisherigen Holzgestaltung.
Die gewünschte Überschrift lautet „Erzählen können wir viel. Das sagen unsere
Kunden.“ Drei helle Bewertungskarten verwenden Manrope, runde Initialen,
Google-Zeichen und goldene Sterne. Desktop: drei gleich breite Spalten;
mobil: alle Stimmen untereinander. Die bestehenden Farbwerte und Abstände
bleiben maßgeblich; die Karten nehmen die weichen Formen von Variante B auf.
Die Stimmen sind echte, statische Auszüge mit Quellenverweisen, kein Live-Feed.
Der Link zu allen Google-Bewertungen nutzt die Place-ID der bisherigen Website.
Es wird kein unbestätigter Gesamtwert oder Bewertungszähler angegeben.

## Prüfung der Kundenstimmen und des wiederhergestellten Dreiklangs

A, B und C bei 320, 768 und 1440 px im Browser geprüft: jeweils drei Karten,
mobil eine Spalte, ab Tablet drei Spalten, kein horizontaler Seitenüberlauf.
Der Wechsler zeigt überall A · Milchig, B · Sandfläche und C · Dreiklang.
Das Öffnen des Nägel-Bereichs aktualisiert Inhalt und `aria-expanded`.
Desktop-Karten sowie Dreiklang mobil visuell kontrolliert. Lokale Dateiverweise,
Sprungziele und eindeutige IDs der vier aktuellen HTML-Seiten geprüft.

## Bisherige Prüfungen der Fotoausführungen

Alle drei Varianten in Chromium bei 320, 390, 768 und 1440 px geprüft:
keine horizontale Überbreite, Überschriften passen, Fläche B bleibt
quadratisch und Bilder/Schrift werden geladen. Desktop-, Tablet- und
Mobilansichten visuell kontrolliert. Menü, Sprunglink mit automatischem
Menüschluss, Escape, Variantenwechsel und Hinweisdialog bedient;
keine dabei beobachteten JavaScriptwarnungen oder -fehler.

Das alte Headerfoto ist im Asset-Archiv erhalten.

Nach der Übernahme des aktuellen Fotos wurden A, B und C bei 390 und
1280 px visuell geprüft: passender Bildausschnitt, Foto geladen, kein
horizontaler Überlauf. Milchigkeitsfilter, deckende Sandfläche sowie
Schwarz-Weiß-Darstellung mit weißer Schrift bleiben erhalten.

Der nachträglich ergänzte A-Regler wurde per Maus und Tastatur bei 0 %, 100 %
und Zwischenwerten geprüft. Effekt und Prozentanzeige ändern sich sofort;
nach Neuladen bleibt der Wert erhalten. Die Reglerleiste passt bei 320, 390,
768 und 1440 px ohne horizontale Überbreite.

Alle lokalen HTML-/CSS-Dateiverweise geprüft. Die 32 Dateien der vorherigen
hellen Entwurfsrunde wurden per SHA-256 mit dem Archiv verglichen und sind
unverändert.

Gemessene Kontraste der deckenden Textrollen: Schwarz/Leinen 16,87:1,
Schwarz/Beige 14,26:1, Schwarz/Stein 9,70:1; sekundärer Text auf Leinen
7,70:1 und Beige 6,51:1. Bei 100 % Milchigkeit erreicht Variante A selbst
unter konservativen Annahmen (schwarzes Bildpixel, maximale dunkle Körnung)
mindestens 5,53:1. Bei niedrigeren Reglerwerten hängt der Kontrast vom Foto ab;
dieser Mindestwert gilt nicht für den gesamten Reglerbereich.
Foto pur (früher C) erfüllt die nötigen Kontraste über dem Foto stellenweise nicht.
Diese gezielten Prüfungen sind keine vollständige WCAG-Prüfung.

## Vor dem fertigen Auftritt

Leistungen, Öffnungszeiten, Kontaktdaten, Buchungsziel und Rechte/Aktualität der
Bilder mit Peggy bestätigen. Texte sind redaktionelle Vorschläge. Rechtstexte
verlinken auf die bestehende Website und sind für die endgültige Umsetzung
erneut passend bereitzustellen.
