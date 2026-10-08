# Landing — Race Car Design, Engineering and Development (MTS × Tatuus)

Branch: `landing/race-car-design`
File: `race-car-design.html` · `race-car-design.css` · `race-car-design.js`
Asset: `Assetracecar/`

## Fedeltà al testo cliente
Il copy è ripreso **letteralmente** dal documento Basecamp, grassetti inclusi. Non sono state aggiunte, accorciate o riformulate frasi.
Unici elementi non presenti nel documento, perché necessari all'interfaccia:
- i campi del form (il documento indica solo il pulsante `[RICHIEDI INFORMAZIONI]`);
- i pulsanti ripetuti a fine sezione, tutti etichettati con la dicitura del cliente "Richiedi informazioni".

## Fonte dei contenuti
- CLIENTE — testi copiati dal documento Basecamp "MTS × TATUUS — Race Car Design, Engineering and Development" (ore, date, programma, quote, rate, criteri di selezione).
- MATERIALE — struttura, design system e componenti ripresi dalla landing `motorista-racing` (branch `landing/motorista-racing`).
- MATERIALE — immagini riutilizzate dalle landing Model Maker e Ingegnere Auto, selezionate escludendo scatti in pista/pit lane.
- PROPOSTA — copy di raccordo UI (etichette form, label statistiche, CTA, microcopy): da validare col cliente.

## Struttura sezioni
1. Hero + form application (`#candidatura`)
2. Lockup partner MTS × Tatuus
3. 01 — Cos'è il percorso + "Cosa imparerai" (9 punti)
4. 02 — A chi è rivolto (4 profili) + box colloquio di selezione
5. 03 — Perché MTS × Tatuus (5 card, la 4ª in evidenza)
6. 04 — Programma didattico (9 moduli)
7. 05 — Struttura del corso (statistiche + dettagli + test finale)
8. 06 — Investimento (€3.250 + IVA, 3 rate)
9. 07 — Application finale + footer

## Scostamenti dal template Motorista Racing
- Nuova sezione "Programma didattico" (`.programma-grid` / `.programma-card`): non presente nelle altre landing.
- Griglia "Perché" a 5 card invece di 4 (`.perche-grid-mm.grid-5`, 3 + 2 centrate).
- Alternanza sfondi riallineata per la sezione aggiuntiva: investimento su sfondo base, final CTA su `section-dark`.
- Form: campi "Percorso di studi" ed "Esperienze automotive/Motorsport" al posto di età/obiettivo; CTA "Richiedi informazioni" invece di "Candidati ora".
- Rimossa la coppia "NON È / È": non applicabile a un corso di engineering.

## Immagini selezionate
Mix dalle tre landing indicate dal cliente — Model Maker, Ingegnere Auto (Race Car Engineering), Motorista Racing (Auto Racing).

| File | Origine (branch) | Soggetto | Uso |
|---|---|---|---|
| `Hero-modelmaker.webp` | model-maker `foto/5` | Team attorno alla monoposto in officina | Hero |
| `Grid-modelmaker.webp` | model-maker `foto/1` | Assemblaggio monoposto | Visual grid, card grande |
| `Grid-ingegnereauto.webp` | ingegnere-auto `fotoingenereauto/Ingauto3` | Analisi dati al laptop | Visual grid |
| `Grid-motorista.webp` | motorista-racing `Assetmotorista/fotomotorista/Motoristahero` | Power unit in officina | Visual grid |
| `Sfondo-modelmaker.webp` | model-maker `foto/2` | Banco di lavoro | Sfondo sezione struttura |

Escluse tutte le foto con pista, pit lane, pneumatici, casco o pilota (p.es. `Ingauto2/4/5/6`, che sono scatti in circuito).

## Verifiche fatte
- Rendering su server locale: desktop 1280, tablet 1000, mobile 375.
- Nessun overflow orizzontale su tutti i breakpoint testati.
- Griglie: perché 3+2 centrate (desktop), 2+2+1 (tablet), 1 colonna (mobile); programma 3/2/1 colonne.

## Aperti — WAITING_FOR_APPROVAL
- Logo Tatuus: tutti i file in `LoghiTartus/` sono opachi con fondo bianco (nessuna trasparenza, verificato sul canale alpha). Usata la versione a colori su chip bianca (`.logo-tatuus`), copiata in `Assetracecar/TatuusLogoColori.webp`. Da chiedere al cliente un PNG/SVG con sfondo trasparente per poterlo integrare direttamente sul fondo scuro.
- Form senza backend: invio simulato come nelle altre landing MTS.
- Foto dedicate al corso non disponibili: le immagini attuali sono un riuso da altre landing, da sostituire se il cliente fornisce materiale proprio.
- Link Privacy/Cookie Policy ancora `#`.
