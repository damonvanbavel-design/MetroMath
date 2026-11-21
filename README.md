# 🚆 Wiskunde Lijn

Wiskunde leren in de trein: van **VMBO** naar **HAVO wiskunde B**, en daarna de lerarenopleiding.

De app is een treinkaart. Elk station is een onderwerp, elke lijn een vakgebied. Je reist van *VMBO Centraal* naar *HAVO B Eindstation*.

## Wat zit erin (fase 1)

**Lijn 0 · Basis** (de brug van VMBO naar HAVO 4):

| Station | Onderwerp |
|---|---|
| 🌡️ Negatieve getallen | getallenlijn, min min wordt plus, keer en delen |
| 🚦 Volgorde van bewerkingen | Meneer Van Dale, de valkuil −3² en (−3)² |
| 🍕 Breuken | vereenvoudigen, optellen, keer, delen |
| 🚀 Machten en wortels | rekenregels, negatieve exponenten, wortels |
| 🧪 Formules invullen | haakjes om negatieve getallen |
| ⚖️ Vergelijkingen | de balansmethode, met haakjes |
| 👑 Eindbaas | 8 vragen op het hoogste niveau, 6 goed = Lijn 0 klaar |

**Functies**
- **Uitleg → Voorbeeld → Oefenen** per station; het voorbeeld tik je stap voor stap door
- **Oneindig veel vragen**: alle opgaven worden willekeurig gemaakt, op 3 niveaus die meegroeien met je beheersing
- **Slimme feedback**: herkent veelgemaakte fouten ("Je mag de noemers niet optellen!", "Haakjes vergeten!")
- **3 hints per vraag**: een duwtje, dan de eerste stap, dan bijna het antwoord
- **Volledige uitwerking** na elke vraag
- **Eigen toetsenbord** met −, / en komma: typ ook breuken zoals `3/4`
- **Kladblok**: rekenen met je vinger
- **🚆 Treinrit**: kies 5–20 minuten (of "tot ik uitstap"); de app mixt wat je lastig vindt met herhaling
- **🔁 Herhaling (spaced repetition)**: stations die je al kunt, komen na een paar dagen terug
- **⚡ Sprint**: 60 seconden snel rekenen, versla je record
- **XP en rangen**: Reiziger → Conducteur → Machinist → Stationschef → Leraar
- **🔥 Reeks** met een wekelijks 🎫 vertragingskaartje (één dag missen mag)
- **👩‍🏫 Leraar-modus**:
  - *Vind de fout*: spot de fout in het werk van een leerling
  - *Leg het uit*: schrijf je eigen uitleg, die wordt bewaard in je **Notitieboek**
- **Offline**: werkt zonder internet (via de service worker als je hem zelf host)

Voortgang wordt bewaard in je browser (localStorage) op je eigen telefoon.

## Gebruiken

Het is één HTML-bestand zonder afhankelijkheden.

```bash
npm start        # lokale server op http://localhost:3000
npm test         # test 54.000 willekeurige vragen op fouten
```

### Op je telefoon zetten (gratis, via GitHub Pages)
1. Push deze map naar een GitHub-repository
2. *Settings → Pages → Deploy from branch → main / root*
3. Open de link op je telefoon → **Deel → Zet op beginscherm** (iPhone) of **⋮ → App installeren** (Android)
4. Daarna werkt hij ook offline in de trein

## Structuur

```
index.html              de hele app (rekenkern + stations + interface)
manifest.webmanifest    maakt hem installeerbaar
sw.js                   offline cache
icon.svg                app-icoon
tests/                  test van alle vraaggeneratoren
```

In `index.html` staat alle lesinhoud in de lijst `STATIONS`. Elk station heeft:
- `intro`: uitlegkaartjes
- `example`: een stap-voor-stap voorbeeld
- `gen(niveau)`: maakt een willekeurige vraag met antwoord, hints, uitwerking en foutherkenning
- `mc()`: een "vind de fout"-opgave
- `explain`: de opdracht voor leraar-modus

## Routekaart

- [x] **Fase 1**: Lijn 0 Basis, oefenen, hints, feedback, XP, reeks, treinrit, sprint, eindbaas, leraar-modus
- [ ] **Fase 2**: Lijn 1 Algebra (haakjes, ontbinden, abc-formule) en Lijn 2 Functies en grafieken
- [ ] **Fase 3**: interactieve grafieken met schuifjes, Lijn 3 Exponentieel en log, Lijn 4 Goniometrie
- [ ] **Fase 4**: Lijn 5 Differentiëren, Lijn 6 Meetkunde, examenmodus in CSE-stijl

Check bij het uitbreiden de syllabus HAVO wiskunde B op [examenblad.nl](https://www.examenblad.nl).
