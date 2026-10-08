# Landing — Motorsport Engineering Bootcamp (MTS)

Branch: `landing/corso-asia`
File: `motorsport-engineering-bootcamp.html` · `.css` · `.js`
Asset: `Assetbootcamp/`

## Fedeltà al testo cliente
Copy ripreso **letteralmente** dal documento Basecamp "MTS — Motorsport Engineering Bootcamp", grassetti inclusi (verificati sugli screenshot forniti). Nessuna frase aggiunta, accorciata o riformulata.
Lingua della pagina: **inglese** (`lang="en"`), come il documento.

Unici elementi non presenti nel documento, perché necessari all'interfaccia:
- i campi del form (il documento indica solo il pulsante `[REQUEST INFORMATION]`);
- i pulsanti ripetuti a fine sezione, tutti etichettati "Request information" come da documento.

## Fonte dei contenuti
- CLIENTE — testi, ore, date, programma, quota, rate, modalità d'esame dal documento Basecamp.
- MATERIALE — struttura, design system e componenti dalla landing `race-car-design`.
- MATERIALE — foto dalla cartella locale `Motorsport eng/`, indicata dal cliente.

## Struttura sezioni
1. Hero + form application (`#application`)
2. 01 — What is the Motorsport Engineering Bootcamp + "What you will learn" (8 punti) + claim "Build the right technical foundation"
3. 02 — Who is it for (4 profili) + box "No entrance selection"
4. 03 — Why MTS (5 card, la 5ª in evidenza)
5. 04 — Course content (5 gruppi tematici con elenco argomenti)
6. 05 — Course structure (statistiche + dettagli + the final exam)
7. 06 — Investment (€4,000, 3 rate)
8. 07 — Application finale + footer

## Scostamenti dal template Race Car Design
- Nessuna sezione partner: il corso è solo MTS.
- "Course content" usa card a gruppi con elenco argomenti (`.content-grid` / `.content-card` / `.content-list`) invece dei moduli singoli: il documento organizza il programma in 5 aree con sotto-voci.
- Aggiunto blocco "The final exam" con le due prove numerate (`.exam-list`) e l'esito sul Master Race Car Engineer.
- Investment senza riga separatore: il documento riporta solo quota e nota IVA (`.inv-vat-note`).
- Interfaccia e microcopy in inglese, incluso il feedback del form.

## Immagini
Tutte da `Motorsport eng/`, ridimensionate a max 2000 px e ricompresse con ffmpeg: gli originali erano da 5,7 a 11,7 MB (fino a 7008 px di lato), inutilizzabili sul web.

| File | Origine | Soggetto | Uso | Peso |
|---|---|---|---|---|
| `Hero-team-car.webp` | …BootcampA | Team e monoposto in pit lane | Hero | 346 KB |
| `Grid-cockpit.webp` | …BootcampC | Team attorno all'abitacolo | Visual grid, card grande | 191 KB |
| `Grid-data.webp` | …BootcampD | Analisi dati al laptop | Visual grid | 170 KB |
| `Grid-setup.webp` | …BootcampB | Intervento sulla vettura | Visual grid | 159 KB |
| `Background-briefing.webp` | …BootcampF | Studenti con appunti accanto alla vettura | Sfondo sezione struttura | 226 KB |

Non usata: `MotorsportEngineeringBootcampE.webp` (ritratto ravvicinato, disponibile se serve).

Nota: qui gli scatti in circuito sono coerenti col corso, quindi non si applica l'esclusione "niente pista" valida per la landing Race Car Design.

## Verifiche fatte
- Rendering su server locale: desktop 1280, tablet 1000, mobile 375.
- Nessun overflow orizzontale su tutti i breakpoint testati.
- Griglie: Why MTS 3+2 centrate → 2+2+1 → 1 colonna; Course content 3 → 2 → 1 colonne; statistiche 4 → 2×2 → 1.

## Aperti — WAITING_FOR_APPROVAL
- Nome definitivo del corso: il documento Basecamp si intitola "Corso Asia" ma il contenuto è "Motorsport Engineering Bootcamp"; file e title usano il secondo. Branch ancora `landing/corso-asia`.
- Form senza backend: invio simulato come nelle altre landing MTS.
- Link Privacy/Cookie Policy ancora `#`.
- Testi legali e footer restano in italiano/latino (P.IVA, ragione sociale): da confermare se servono in inglese.
