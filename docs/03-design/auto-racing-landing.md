# Landing — Meccanico Auto Racing (MTS)

Branch: `landing/auto-racing` (da `origin/main`)
Cartella di lavoro isolata: `MTS-auto-racing/`
File: `auto-racing.html` · `auto-racing.css` · `auto-racing.js`
Asset: `Assetautoracing/` (logo MTS, logo partner, `foto/autoracing1-5.webp`)

## Fonte dei contenuti
- CLIENTE — testi, ore, date, programma, quota, rate, procedura di selezione dal documento Basecamp "LANDING PAGE — MECCANICO AUTO RACING"; grassetti e corsivi ripresi dagli screenshot forniti.
- MATERIALE — struttura e componenti dalla landing `moto-racing` (stessa articolazione del documento), codice copiato in file nuovi.
- Nessun testo aggiunto o riformulato.

## Non sovrapposizione con le altre landing
Nomi nuovi e non esistenti su `main`: `auto-racing.*` e `Assetautoracing/`.
Nessun file esistente modificato. Distinta da Ingegnere Auto.

## Struttura sezioni
1. Hero + form candidatura (`#candidatura`)
2. I nostri partner (marquee loghi MTS)
3. 01 — Cos'è un Meccanico Auto Racing (NON È / È + "Una formazione orientata alla pista")
4. 02 — A chi si rivolge (4 profili + nota numero chiuso)
5. 03 — Perché MTS (6 card, la 6ª in evidenza)
6. 04 — Struttura del corso (statistiche, dettagli, cosa è incluso, programma didattico in 4 gruppi)
7. 05 — Investimento (5.600€ + IVA, 5 rate, "Selezionato o rimborsato")
8. 06 — Candidatura (4 passi + chiusura + CTA)

## Foto (fornite dal cliente, in `Assetautoracing/foto/`)
- autoracing1 → sfondo hero
- autoracing2 (grande), autoracing3, autoracing4 → griglia "Cos'è"
- autoracing5 → sfondo sezione struttura (opacity 0.12)

## Scostamenti dal template
- "Perché MTS": 6 card in griglia 3×2 (`.grid-6`) invece di 4.
- Form ridotto a nome, email, telefono, messaggio, privacy: il documento indica solo `[FORM MECCANICO AUTO RACING]`.
- Etichetta pulsanti "Candidati ora" come nelle altre landing; nel documento compare solo `[CANDIDATI ORA]` a fine pagina.

## Verifiche fatte
- Rendering su server locale a 1280, 1000, 375: nessun overflow orizzontale.
- Griglie: Perché 3×2 → 2×3 → 1 colonna; programma 2×2 → 2×2 → 1 colonna; statistiche 4 → 2×2 → 1.
- Tutti i 25 file immagine (logo MTS + 24 loghi partner) rispondono 200.
- Somma rate: 400 + 600 + 1.500 + 1.500 + 1.600 = 5.600€.

## Aperti — WAITING_FOR_APPROVAL
- Abbinamento foto → sezioni da confermare (vedi "Foto").
- Form senza backend: invio simulato come nelle altre landing MTS.
- Privacy e Cookie Policy: link iubenda di MTS già collegati.
- Pubblicazione: il branch è solo locale, non pushato.
