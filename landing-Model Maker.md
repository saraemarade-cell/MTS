# MTS Visual Identity — Documento di Riferimento
### Uso: Landing page futura (Model Maker)

> Questo documento descrive l'identità visiva estratta dalla landing MTS esistente.
> La nuova landing erediterà questi valori ma potrà avere una struttura diversa.

---

## 1. Colori

### Palette primaria (CSS custom properties)

| Token | Valore | Ruolo |
|---|---|---|
| `--red` | `#D72E1F` | Accent, CTA, icone, bordi hover |
| `--black` | `#191919` | Background principale |
| `--smoke` | `#F2F2F2` | Testo principale su sfondo scuro |
| `--dark-alt` | `#111111` | Background alternativo per sezioni |
| `--dark-card` | `#1E1E1E` | Background card e form |
| `--dark-border` | `rgba(242,242,242,0.08)` | Bordi sottili su sfondo scuro |

### Gradienti

```css
/* Gradient principale — hero overlay, bottoni, decorazioni */
--gradient:       linear-gradient(135deg, #191919 0%, #D72E1F 100%);
--gradient-hover: linear-gradient(135deg, #D72E1F 0%, #191919 100%);

/* Hero overlay cinematico (direzione 105°) */
background: linear-gradient(
  105deg,
  rgba(17,17,17,0.97) 0%,
  rgba(17,17,17,0.9) 40%,
  rgba(25,25,25,0.75) 65%,
  rgba(215,46,31,0.25) 100%
);

/* Overlay card immagine (fade bottom) */
background: linear-gradient(to top, rgba(17,17,17,0.7), transparent 60%);

/* Overlay sezione territorio */
background: linear-gradient(
  160deg,
  rgba(10,10,10,0.97) 0%,
  rgba(17,17,17,0.94) 50%,
  rgba(25,10,10,0.88) 100%
);
```

### Trasparenze ricorrenti

- Testo body secondario: `rgba(242,242,242,0.75)`
- Testo muted: `rgba(242,242,242,0.55)` / `rgba(242,242,242,0.5)`
- Testo placeholder/label: `rgba(242,242,242,0.35)` / `rgba(242,242,242,0.25)`
- Input background: `rgba(255,255,255,0.05)`
- Input border focus: rosso + `rgba(215,46,31,0.06)` come fill
- Shadow CTA hover: `0 8px 32px rgba(215,46,31,0.4)`
- Card background vetro: `rgba(25,25,25,0.9)` + `backdrop-filter: blur(20px)`

---

## 2. Tipografia

### Font stack

```css
--font-headline: 'good-times', sans-serif;   /* Adobe Fonts: bty4mzk.css */
--font-body:     'nexa', sans-serif;          /* Adobe Fonts: acx6tcp.css */
--font-mono:     'Andale Mono', 'Courier New', monospace;
```

**Import Typekit in `<head>`:**
```html
<link rel="stylesheet" href="https://use.typekit.net/bty4mzk.css">
<link rel="stylesheet" href="https://use.typekit.net/acx6tcp.css">
```

### Scale tipografica

| Elemento | Font | Dimensione | Peso | Note |
|---|---|---|---|---|
| Hero headline | Good Times | `clamp(36px, 4.5vw, 58px)` | 700 | `uppercase`, `letter-spacing: -0.02em` |
| Section title | Good Times | `clamp(32px, 5vw, 52px)` | 700 | `uppercase`, `letter-spacing: -0.02em` |
| Territorio title | Good Times | `clamp(38px, 6vw, 68px)` | 700 | `uppercase` |
| Card title (corso) | Good Times | `22px` | 700 | `uppercase`, `line-height: 1.1` |
| Card title (perché) | Good Times | `16px` | 700 | `uppercase` |
| Quote blockquote | Good Times | `clamp(20px, 3vw, 30px)` | 400 | `italic`, `letter-spacing: 0.01em` |
| Body text | Nexa | `16px` / `17px` | 400 | `line-height: 1.6` / `1.75` |
| Body secondario | Nexa | `13px`–`15px` | 400 | `line-height: 1.6`–`1.65` |
| Label form | Nexa | `11px` | 600 | `uppercase`, `letter-spacing: 0.08em` |
| Mono tag | Andale Mono | `11px` | 400 | `uppercase`, `letter-spacing: 0.12em` |
| Bottoni | Good Times | `14px` / `16px` large | 700 | `uppercase`, `letter-spacing: 0.08em` |
| Nav links | Nexa | `13px` | 500 | `uppercase`, `letter-spacing: 0.06em` |

### Convenzione mono tag

I tag decorativi delle sezioni usano la classe `.mono` con il pattern `// 01 — NOME SEZIONE`:
```html
<span class="mono section-tag">// 01 — CHI SIAMO</span>
```
Colore: `var(--red)`. Il `//` è un riferimento alla sintassi tecnica/racing.

---

## 3. Spacing

```css
/* Container */
max-width: 1280px;
padding: 0 24px;

/* Sezioni */
.section { padding: 100px 0; }
.section-header { margin-bottom: 64px; }

/* Card gap */
gap: 20px;   /* griglia corsi, perché */
gap: 16px;   /* griglia sede, gallery */
gap: 12px;   /* visual grid chi siamo */

/* Padding card */
padding: 32px 24px;   /* perche-card */
padding: 24px;        /* corso-content, sede-info */
padding: 36px 32px;   /* form card */

/* Border separator */
border-top: 1px solid var(--dark-border);
padding-top: 40px / 48px / 56px;
```

---

## 4. Border Radius

```css
--radius:    4px;   /* bottoni, input, elementi piccoli */
--radius-lg: 8px;   /* card, form-card, visual card */
```

---

## 5. Transizioni

```css
--transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

Usata per: hover card (translateY -4px / -8px), hover bottoni, colori bordo, filtri immagine.

---

## 6. Componenti

### Bottoni

```css
/* Struttura base */
display: inline-flex; align-items: center; justify-content: center;
padding: 14px 32px;
font-family: Good Times; font-size: 14px; font-weight: 700;
letter-spacing: 0.08em; text-transform: uppercase;
border-radius: 4px; border: 2px solid transparent;

/* Varianti dimensione */
.btn-sm    { padding: 10px 20px; font-size: 12px; }
.btn-large { padding: 18px 48px; font-size: 16px; }
.btn-full  { width: 100%; }

/* Primario (gradient) */
.btn-primary { background: var(--gradient); color: #fff; }
.btn-primary:hover {
  background: var(--gradient-hover);
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(215,46,31,0.4);
}

/* Outline */
.btn-outline { background: transparent; color: var(--smoke); border-color: rgba(242,242,242,0.3); }
.btn-outline:hover { border-color: var(--red); color: var(--red); transform: translateY(-2px); }
```

### Navbar

- Posizione: `fixed`, `z-index: 100`, `padding: 16px 0`
- Stato scrolled: `background: rgba(17,17,17,0.95)`, `backdrop-filter: blur(12px)`, `padding: 10px 0`
- Trigger: `window.scrollY > 60`
- Logo: altezza `48px`, `object-fit: contain`, `object-position: left center`
- CTA nav: gradient primario, `padding: 10px 20px`

### Form card (lead form)

- Background: `rgba(25,25,25,0.9)`, `backdrop-filter: blur(20px)`
- Bordo: `1px solid var(--dark-border)`
- Border radius: `var(--radius-lg)`
- Shadow: `0 24px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(242,242,242,0.05)`
- Input: `background: rgba(255,255,255,0.05)`, `border: 1px solid rgba(242,242,242,0.12)`
- Input focus: `border-color: var(--red)`, `background: rgba(215,46,31,0.06)`
- Checkbox custom: quadrato 16×16px, fill `var(--red)` su checked con checkmark bianca

### Card corso

- Background: `var(--dark-card)` + `border: 1px solid var(--dark-border)`
- Hover: `translateY(-8px)`, `border-color: rgba(215,46,31,0.4)`, shadow profonda
- Immagine: `height: 200px`, `background-size: cover`, zoom su hover (`scale(1.05)`)
- Overlay immagine: fade bottom `rgba(17,17,17)`
- Badge "POPOLARE": rosso, `font-family: Andale Mono`, `font-size: 9px`, `border-radius: 2px`
- Tag corso: `var(--red)`, Andale Mono, `font-size: 10px`
- Lista features: `—` rosso come bullet

### Card perché MTS

- Background: `var(--dark-card)`, centrata
- Icona SVG: contenitore `56×56px`, icone `40×40` viewBox
- Hover: `translateY(-4px)`, `border-color: rgba(215,46,31,0.4)`

### Icone SVG — sistema

```
viewBox="0 0 40 40"
fill="none"
stroke="#D72E1F"
stroke-width="1.5"
stroke-linecap="round"
stroke-linejoin="round"
```

Cerchio esterno decorativo: `<circle cx="20" cy="20" r="19" stroke="#D72E1F" stroke-width="1.5"/>`

### Hero badge

```html
<div class="hero-badge">
  <span class="mono">// MOTORSPORT TECHNICAL SCHOOL</span>
</div>
```
Con `::before` — linea rossa `32px × 2px` a sinistra.

### Bullet dots

```css
.bullet-dot { width: 6px; height: 6px; background: var(--red); border-radius: 50%; }
```

### Marquee partner

- Duplicazione set A + set B → `translateX(-50%)` su `48s linear infinite`
- Edge fade: `mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)`
- Logo: `mix-blend-mode: screen`, `filter: grayscale(1) opacity(0.5)`
- Hover logo: `filter: grayscale(0) opacity(0.95)`, `transform: scale(1.08)`
- Pausa su hover track: `animation-play-state: paused`

### Griglia decorativa (grid lines)

```css
background-image:
  linear-gradient(rgba(215,46,31,0.04) 1px, transparent 1px),
  linear-gradient(90deg, rgba(215,46,31,0.04) 1px, transparent 1px);
background-size: 60px 60px;
mask-image: linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%);
```

Usata in: hero, sezione territorio. Effetto tecnico/racing sottile.

### World card (card con top accent)

```css
.world-card::before {
  height: 2px;
  background: var(--gradient);
  transform: scaleX(0);  /* → scaleX(1) su hover */
  transform-origin: left;
}
```

### Scroll hint

Linea verticale `1px` con gradient da rosso a trasparente, animazione `scrollPulse` (opacity + scaleY pulsante).

---

## 7. Animazioni

### Fade-up (IntersectionObserver)

```css
.fade-up {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.fade-up.visible { opacity: 1; transform: translateY(0); }
```

Stagger: `(index % 4) * 80ms` di `transition-delay` applicato via JS agli elementi in griglia.

Elementi animati: `.section-header`, `.corso-card`, `.perche-card`, `.testi-card`, `.gallery-item`, `.chi-siamo-text`, `.chi-siamo-visuals`, `.target-list li`, `.stat`.

### scrollPulse (scroll hint)

```css
@keyframes scrollPulse {
  0%, 100% { opacity: 0.4; transform: scaleY(1); }
  50%       { opacity: 1;   transform: scaleY(1.2); }
}
animation: scrollPulse 2s ease-in-out infinite;
```

### marquee-scroll

```css
@keyframes marquee-scroll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
animation: marquee-scroll 48s linear infinite;
/* mobile: 36s */
```

---

## 8. Layout e Responsive

### Breakpoints

| Breakpoint | Target |
|---|---|
| `1200px` | Large tablet / small laptop |
| `1024px` | Tablet landscape |
| `768px` | Tablet portrait / large mobile |
| `480px` | Mobile |
| `360px` | Small mobile |

### Principali variazioni responsive

- Hero: da 2 colonne (`1fr 440px`) → 1 colonna a `1024px`
- Corsi: `4 col` → `2 col` a `1200px` → `1 col` a `480px`
- Perché: `5 col` → `3 col` → `2 col` → `1 col`
- Sedi: `3 col` → `2 col` a `1024px` → `1 col` a `768px`
- Footer: `4 col` → `2 col` → `1 col`
- `.desktop-br { display: none }` a `1024px` (niente `<br>` artificiali su mobile)

---

## 9. Immagini e Stile Visivo

### Asset disponibili nel repository

**Sfondi / hero:**
- `SFONDO.webp` — sfondo hero e territorio (cinematic, racing)

**Logo:**
- `MTS-Logo_Payoff-Negativo-colori.webp` — versione colori su sfondo scuro (navbar, footer)
- `MTS-Logo_Payoff-B.webp` — versione bianca
- `MTS-Logo_Payoff-N.webp` — versione nera
- `MTS-Logo_Payoff-Positivo.webp` — versione positivo

**Sezione Chi Siamo:**
- `Workshop.webp` — officina/workshop
- `Auto.webp` — auto da racing
- `Moto.webp` — moto da racing

**Corsi:**
- `Race bike.webp` — Race Bike Engineer
- `Sospensionista.webp` — Corso Sospensionista Racing
- `Master bike.webp` — Master Bike
- `Formula weekend copia.webp` — Formula Weekend

**Gallery (fotografie editoriali):**
- `AIV01101.jpg`
- `AIV03317 copia.webp`
- `AIV03336 copia.webp`
- `AIV03811 copia.webp`
- `AIV04254.webp`
- `AIV07010.webp`
- `AIV07012 copia.webp`

**Partner logos (in `assets/`):**
- brembo, andreani, marelli, Telwin, arp_suspension, hrs, mechanix, FMI, confartigianato-motori, autotecnica, crg, motorquality, gieffe, aessecom, new-exan, DAL, mc-1, museo-fratelli-cozzi, Senza-titolo (×2)

### Tecnica overlay immagini

Tutte le immagini hero/card usano un overlay scuro con gradient:
```css
/* Fade bottom (card corso, sede) */
background: linear-gradient(to top, rgba(17,17,17,0.7), transparent 60%);

/* Overlay pesante su sezioni fullscreen */
linear-gradient(105deg, rgba(17,17,17,0.97) 0%, … rgba(215,46,31,0.25) 100%);
```

Le card immagine hanno `background-size: cover`, `background-position: center`, con zoom a `scale(1.04–1.05)` su hover via `transition: transform 0.5s ease`.

### Gallery

CSS Grid con `grid-auto-rows: 220px` e slot `grid-column: span 2` per immagini larghezza doppia. Gap `16px`.

---

## 10. Struttura HTML — Pattern semantici

```html
<!-- Sezione standard -->
<section class="nome-sezione section [section-dark]" id="id-sezione">
  <div class="container">
    <div class="section-header [left-align]">
      <span class="mono section-tag">// 01 — TAG SEZIONE</span>
      <h2 class="section-title">Titolo Sezione</h2>
    </div>
    <!-- contenuto -->
  </div>
</section>
```

- `section-dark` → `background: var(--dark-alt)` per alternare il colore di fondo
- `.mono section-tag` → tag decorativo con `//` in rosso
- Tutti gli `id` sono kebab-case: `chi-siamo`, `corsi`, `perche-mts`, `contatti`

---

## 11. Stile della Voce Visiva (Design Mood)

| Carattere | Implementazione |
|---|---|
| **Cinematico** | Overlay gradient opachi, sfondo foto con blur, grid lines sottili |
| **Tecnico** | Font mono `Andale Mono` per tag/label, pattern `// 01 —`, SVG stroke |
| **Premium / Dark** | Black `#191919` come base, smoke `#F2F2F2` come testo, poco bianco puro |
| **Racing** | Accent unico rosso `#D72E1F`, zero pastelli, shadow intense |
| **Urbano / Moderno** | `border-radius` minimo (4–8px), gradients direzionali, no rounded pill |
| **Ad alta conversione** | Form prominente in hero, CTA gradient, microcopy sotto form |

---

## 12. JS Behaviors da ereditare

- `IntersectionObserver` con threshold `0.12` per fade-up on scroll
- Navbar scroll: classe `.scrolled` a `window.scrollY > 60`
- Hamburger mobile: toggle `.open` su `navLinks` e `navToggle`
- Smooth scroll con offset navbar: `target.getBoundingClientRect().top + window.scrollY - navH - 12`
- Active nav link su scroll: confronto `section.offsetTop - 120`
- Form: validazione required + stato `Invio in corso…` → `Richiesta Inviata!` + reset

---

*Documento estratto dalla landing MTS esistente — branch `main` — per uso esclusivo sul branch `landing/model-maker`.*
## 12. JS Behaviors da ereditare
## 13. Struttura della Landing — Model Maker Dallara

> Questa sezione descrive esclusivamente la struttura informativa e il contenuto della landing.
> La visual identity, i componenti, le animazioni e le regole di design devono essere ereditati dai capitoli precedenti.

### 01. Hero Section

#### Headline

Diventa Model Maker nel Motorsport Professionale

#### Subheadline

Formati con professionisti del settore e accedi a un colloquio garantito con Dallara al termine del corso.

#### Proof Bar

* 144 ore in formula weekend
* 65% pratica
* Attività in modelleria e galleria del vento
* Colloquio finale garantito con Dallara

#### Form Hero

**Titolo**
Ricevi informazioni e candidati alle selezioni

**Testo**
Ti contatteremo per spiegarti il percorso, le selezioni e verificare la tua candidatura.

**Campi**

* Nome e cognome
* Email
* Telefono
* Età
* Qual è il tuo obiettivo?
* Hai già esperienze tecniche?
* Raccontaci il tuo interesse per il corso (opzionale)

**CTA**
Candidati ora

**Microcopy**
Posti limitati — selezione tramite colloquio attitudinale online.

---

### 02. Partner Section

#### Eyebrow

I nostri partner

#### Contenuto

Marquee o griglia loghi partner.

---

### 03. Cos'è un Model Maker

#### Titolo

Il professionista dietro lo sviluppo aerodinamico

#### Contenuti

* Ruolo del Model Maker nello sviluppo aerodinamico.
* Collaborazione con ingegneri e tecnici.
* Precisione manuale e competenze tecniche.
* Impatto diretto sulle prestazioni delle vetture.

#### Highlight

Una figura rara e sempre più richiesta nel motorsport professionale.

---

### 04. Cosa Imparerai

#### Elenco competenze

* Costruzione e preparazione modelli
* Lavorazioni meccaniche di precisione
* Riparazione e lavorazione del carbonio
* Gestione delle linee di pressione
* Finiture tecniche e prefitting
* Montaggio componenti da galleria del vento
* Strumenti di misura e Laser Tracker
* Workflow di una modelleria motorsport
* Preparazione delle sessioni di sviluppo aerodinamico

#### CTA

Ricevi il programma completo

---

### 05. Perché Questo Corso è Diverso

#### Blocchi contenuto

* Accesso al mondo Dallara
* Formazione pratica reale
* Tecnologie professionali
* Colloquio garantito

---

### 06. A Chi Si Rivolge

#### Target

Persone che:

* sognano di lavorare nel motorsport;
* amano precisione tecnica e manualità;
* cercano una specializzazione concreta;
* vogliono trasformare una passione in professione.

#### CTA

Prenota un colloquio orientativo

---

### 07. Struttura del Corso

#### Formula

144 ore distribuite in 6 weekend.

#### Include

* Materiale didattico
* DPI e abbigliamento tecnico
* Assicurazione
* Area riservata MTS
* Corso sicurezza alto rischio

#### Informazioni

* Sede: MTS Lesmo
* Inizio: 25 Settembre 2026
* Formula: Weekend
* Posti: Numero limitato

---

### 08. Programma Didattico

#### Moduli

* Workflow di modelleria professionale
* Disegno tecnico
* Galleria del vento
* Strumenti di misura
* Laser Tracker
* Lavorazioni meccaniche
* Carbonio e compositi
* Gestione linee di pressione
* Montaggio modelli
* Sicurezza alto rischio

#### CTA

Richiedi la brochure

---

### 09. Dopo il Corso

#### Contenuto

Accesso a colloquio garantito con Dallara al termine del percorso.

#### CTA

Parla con un advisor MTS

---

### 10. Investimento

#### Prezzo

* Corso: 2.800€ + IVA
* MTS Card: 69€ + IVA

#### Rateizzazione

* 900€ + IVA
* 950€ + IVA
* 950€ + IVA

#### Garanzia

Selezionato o rimborsato.

---

### 11. Final CTA

#### Headline

Il motorsport ha bisogno di specialisti

#### Testo

Trasforma la tua passione in una competenza professionale.

#### CTA

Candidati ora

#### Microcopy

Posti limitati — selezione tramite colloquio attitudinale online.

