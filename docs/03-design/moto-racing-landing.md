# Landing — Meccanico Moto Racing (MTS)

Branch: `landing/moto-racing`
File: `moto-racing.html` · `.css` · `.js`
Asset: `Assetmotoracing/`

## Fedeltà al testo cliente
Copy ripreso **letteralmente** dal documento Basecamp "LANDING PAGE — MECCANICO MOTO RACING", grassetti inclusi (verificati sugli screenshot forniti). Nessuna frase aggiunta, accorciata o riformulata. Lingua: **italiano** (`lang="it"`).
Verifica automatica: 107 righe del documento confrontate con l'HTML, tutte presenti.

Unici elementi non presenti nel documento, perché necessari all'interfaccia:
- i campi del form (il documento indica solo il segnaposto `[FORM MECCANICO MOTO RACING]`): nome e cognome, email, telefono, messaggio facoltativo, consenso privacy;
- i pulsanti ripetuti a fine sezione, tutti "Candidati ora" come da `[CANDIDATI ORA]`;
- footer, navigazione, link Privacy/Cookie Policy (iubenda MTS, come le altre landing).

## Fonte dei contenuti
- CLIENTE — testi, ore, date, programma, quota, rate e modalità di selezione dal documento Basecamp.
- MATERIALE — struttura, design system e componenti dalla landing `motorista-racing` (stessa tipologia di corso in formula weekend).
- MATERIALE — loghi partner: gli stessi della home MTS (`[LOGHI PARTNER MTS]`), copiati in `Assetmotoracing/loghipartner/`.

## Struttura sezioni
1. Hero + form candidatura (`#candidatura`)
2. Partner MTS (marquee loghi)
3. 01 — Cos'è un Meccanico Moto Racing (non è / è, formazione orientata alla pista)
4. 02 — A chi si rivolge (4 profili + nota numero chiuso)
5. 03 — Perché MTS (7 punti)
6. 04 — Struttura del corso (formula weekend, dettagli, cosa è incluso, programma didattico in 4 gruppi)
7. 05 — Investimento (5.400€ + IVA, MTS Card, 5 rate, selezionato o rimborsato)
8. 06 — Candidatura (4 passi, chiusura, CTA)

## Scostamenti dal template Motorista Racing
- Partner: marquee con i loghi MTS al posto della riga fissa di 3 partner.
- "Perché MTS": 7 card (4 + 3 centrate), solo titolo perché il documento non ha descrizioni.
- Programma didattico: 4 card con elenco (`.content-grid`), non presente nel template.
- Investimento: 5 rate; le scadenze restano visibili anche su mobile (il template le nascondeva sotto i 480 px); box "Selezionato o rimborsato" sotto la griglia.
- Candidatura finale con i 4 passi del documento.
- Nessun elemento inventato nel form (niente età né menu obiettivo, che non sono nel documento).

## Immagini — DA FORNIRE
Il documento non include foto di moto/officina. Il CSS ha uno sfondo scuro di riserva, quindi la pagina non si rompe, ma le immagini vanno aggiunte in `Assetmotoracing/foto/` (formato `.webp`, nomi senza spazi o caratteri speciali):

| File atteso | Uso |
|---|---|
| `Heromotoracing.webp` | Hero |
| `Gridmotoracing1.webp` | Visual grid, card grande |
| `Gridmotoracing2.webp` | Visual grid |
| `Gridmotoracing3.webp` | Visual grid |
| `Sfondomotoracing.webp` | Sfondo sezione struttura (opacità 12%) |

Il logo MTS (`MTSLogoPayoffNegativocolori.webp`) è già presente.

## Verifiche fatte
- Rendering su server locale: desktop 1280, tablet 800, mobile 375.
- Nessun overflow orizzontale su tutti i breakpoint testati.
- Griglie: Perché MTS 4+3 → 2+2+2+1 → 1 colonna; programma 2 → 1 colonne; statistiche 4 → 2×2 → 1.
- Loghi partner: 24 SVG caricati senza errori; marquee in pausa all'hover e disattivato con `prefers-reduced-motion`.

## Aperti — WAITING_FOR_APPROVAL
- Foto della landing (vedi sopra).
- Form senza backend: invio simulato come nelle altre landing MTS.
- Loghi partner in formato `.svg` (come nella home MTS): da confermare se serve la conversione in `.webp`.
- `lang="it"` e meta description scritta da me a partire dal testo dell'hero: da confermare.
