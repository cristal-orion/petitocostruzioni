# Petito Costruzioni — Prompt immagini (ChatGPT / DALL·E · Midjourney)

Tutti i placeholder del sito sono marcati con la classe `.ph` e un attributo
`data-ph` che descrive cosa va inserito. Qui trovi un prompt pronto per ognuno.

## Come inserire le immagini
1. Genera l'immagine col prompt corrispondente.
2. Salvala in `public/img/` con **esattamente** il nome file indicato (es. `hero.jpg`).
3. Nel componente, dentro il blocco `<div class="ph" ...>`, aggiungi:
   ```html
   <img src="/img/hero.jpg" alt="Descrizione del lavoro" />
   ```
   (per l'hero c'è già il commento pronto da scommentare in `Hero.astro`).
4. `npm run build` e ricarica.

> Formato consigliato: **JPG/WebP**, qualità alta. Rispetta gli **aspect ratio**
> indicati o l'immagine verrà ritagliata (object-fit: cover).

---

## STYLE BLOCK condiviso (incolla in coda a ogni prompt)
Da usare in fondo a ciascun prompt per mantenere coerenza visiva su tutto il sito:

> Stile: fotografia architettonica professionale, fotorealistica, luce
> cinematografica naturale con calde dominanti dorate, ombre profonde, ampi
> spazi neri/scuri, contrasto elevato ed elegante. Palette: nero inchiostro
> (#0C0B0A), oro caldo (#C9A96A), bianco caldo "bone" (#F3ECDD). Atmosfera di
> lusso sobrio, precisione e materia (marmo, legno, ottone, cemento liscio).
> Nessun testo, nessun watermark, nessun logo, nessuna persona in primo piano.
> Composizione pulita con spazio negativo. 8k, fotografia editoriale di
> architettura, grana minima.

---

## 1 · HERO — `public/img/hero.jpg`
**Aspect ratio:** 16:9 orizzontale (immagine di sfondo full-bleed)
**Componente:** `src/components/Hero.astro`

> Interno di un appartamento di lusso appena ristrutturato al crepuscolo:
> grande soggiorno open space con pavimento in marmo lucido, pareti in
> microcemento, ampie vetrate che incorniciano una luce dorata al tramonto.
> Dettagli in ottone brunito, arredi minimal di pregio. Inquadratura ampia,
> prospettiva profonda, una sola sorgente di luce calda che taglia la scena.
> Mood scuro, cinematografico, da rivista di architettura di alta gamma.
>
> [+ STYLE BLOCK]

*Alternativa (esterno):* facciata di un edificio elegante restaurato di notte,
illuminazione architetturale dorata dal basso, cielo blu profondo.

---

## 2 · SERVIZI (4 immagini · aspect ratio 16:10)
**Componente:** `src/components/Servizi.astro`

### 2.1 — `public/img/servizio-residenziale.jpg`
> Dettaglio di un interno residenziale di lusso ristrutturato: angolo di un
> living con boiserie in legno scuro, una nicchia in marmo retroilluminata,
> finiture sartoriali e luce calda radente che esalta i materiali. Elegante,
> intimo, sobrio.
> [+ STYLE BLOCK]

### 2.2 — `public/img/servizio-sanitario.jpg`
> Studio dentistico/medico moderno e di pregio: reception minimal con bancone
> in pietra chiara, parete in microcemento, illuminazione tecnica calda,
> ambiente impeccabile e clinico ma accogliente. Pulizia delle linee,
> materiali di qualità, nessuna persona.
> [+ STYLE BLOCK]

### 2.3 — `public/img/servizio-business.jpg`
> Ufficio direzionale / showroom di rappresentanza: sala riunioni con grande
> tavolo, pareti scure, dettagli in ottone, vetro e illuminazione dorata
> d'atmosfera. Senso di solidità e prestigio aziendale.
> [+ STYLE BLOCK]

### 2.4 — `public/img/servizio-restauro.jpg`
> Facciata di un edificio storico in fase di restauro conservativo: ponteggio
> ordinato e pulito, dettaglio di cornicione/decoro recuperato, luce dorata del
> mattino. Senso di cura artigianale e competenza tecnica.
> [+ STYLE BLOCK]

---

## 3 · PORTFOLIO (6 immagini · le proporzioni variano nella griglia)
**Componente:** `src/components/Portfolio.astro`
*La griglia ritaglia le immagini: usa scatti con soggetto centrato e respiro ai bordi.*

### 3.1 — `public/img/lavoro-attico.jpg` *(tile larga, orizzontale)*
> Living di un attico ristrutturato a Napoli, ampia vetrata con vista sui tetti,
> pavimento in marmo, arredo di lusso, luce dorata del tardo pomeriggio.
> [+ STYLE BLOCK]

### 3.2 — `public/img/lavoro-dentistico.jpg` *(tile verticale)*
> Reception di uno studio dentistico elegante, bancone in pietra, parete con
> logo a rilievo neutro (senza testo leggibile), illuminazione calda e tecnica.
> [+ STYLE BLOCK]

### 3.3 — `public/img/lavoro-ufficio.jpg`
> Interno di una sede direzionale a Roma: corridoio con pareti scure, pavimento
> lucido, illuminazione lineare dorata, atmosfera istituzionale e raffinata.
> [+ STYLE BLOCK]

### 3.4 — `public/img/lavoro-facciata.jpg`
> Facciata di un edificio storico restaurato ad Aversa, intonaco recuperato,
> cornici e decori puliti, luce calda radente che ne esalta i rilievi.
> [+ STYLE BLOCK]

### 3.5 — `public/img/lavoro-villa.jpg` *(tile verticale)*
> Esterno di una villa di pregio in costiera al tramonto, finiture in pietra e
> intonaco chiaro, illuminazione architetturale dorata, giardino curato.
> [+ STYLE BLOCK]

### 3.6 — `public/img/lavoro-strutturale.jpg` *(tile larga, orizzontale)*
> Cantiere tecnico di un intervento strutturale/consolidamento: armature,
> casseforme e dettaglio di getto in cemento, luce industriale calda, senso di
> precisione ingegneristica e controllo. Pulito, nessuna persona in primo piano.
> [+ STYLE BLOCK]

---

## Note
- Per coerenza, genera tutte le immagini con lo **stesso stile/luce** (usa lo
  STYLE BLOCK ogni volta) così la galleria appare di un'unica mano.
- Evita immagini troppo chiare/sature: il sito è scuro, immagini scure con
  accenti dorati si integrano meglio con gli scrim/overlay già previsti.
- Se un'immagine risulta troppo luminosa, l'overlay scuro dell'hero la
  scurirà comunque; per le card servizi/portfolio invece scegli scatti già
  abbastanza scuri.
