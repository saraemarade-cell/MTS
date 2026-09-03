# CLAUDE CODE TASK — MTS MOTORISTA RACING LANDING PAGE

## Obiettivo

Crea una nuova landing page **MTS — Motorista Racing** all'interno del progetto esistente.

La nuova pagina deve essere **coerente al 100% con le altre landing presenti nella stessa cartella**, sia a livello di:

- struttura;
- griglia;
- gerarchia visiva;
- header e footer;
- dimensioni e proporzioni;
- spacing;
- tipografia;
- componenti;
- form;
- CTA;
- card;
- animazioni;
- reveal on scroll;
- hover;
- transizioni;
- responsive;
- comportamento ai diversi breakpoint;
- comportamento con zoom del browser.

**Prima di scrivere codice, analizza le landing già presenti nella stessa cartella e individua quella strutturalmente più simile da usare come riferimento.**

Non creare un nuovo linguaggio visivo e non reinterpretare liberamente il design.

La nuova landing deve sembrare **parte dello stesso identico sistema MTS**, non una pagina progettata separatamente.

---

# 1. Regola principale: usa le landing esistenti come source of truth

Prima di implementare:

1. ispeziona le landing MTS già presenti nella stessa cartella;
2. individua componenti, CSS, layout, token, breakpoint, animazioni e pattern già riutilizzabili;
3. riutilizza il più possibile componenti e classi già esistenti;
4. evita duplicazioni inutili;
5. non modificare il comportamento delle altre landing;
6. non introdurre nuove dipendenze se non strettamente necessario;
7. mantieni convenzioni di naming, struttura file e architettura già usate nel progetto.

Quando esiste già un componente equivalente, **riusalo invece di ricrearlo**.

La priorità è:

> **stessa struttura + stesso visual + stessi comportamenti delle landing esistenti, con il contenuto specifico del corso Motorista Racing.**

---

# 2. Visual Identity — da rispettare rigorosamente

Usa la Visual Identity MTS già implementata nel progetto.

### Colori

- **RED GOAL:** `#D72E1F`
- **ASPHALT BLACK:** `#191919`
- **WHITE SMOKE:** `#F2F2F2`

### Gradient principale

```css
linear-gradient(135deg, #191919 0%, #D72E1F 100%)
```

### Typography

- **Headline font:** `GOOD TIMES`
- **Body font:** `NEXA`
- **Decorative / technical font:** `Andale Mono`

Non sostituire i font se sono già caricati localmente nel progetto.

Mantieni esattamente:

- font-weight;
- line-height;
- letter-spacing;
- text-transform;
- dimensioni responsive;
- trattamento dei numeri;
- eyebrow;
- label;
- CTA;

delle landing esistenti.

---

# 3. Direzione UX/UI

La pagina deve comunicare:

- Motorsport;
- tecnica;
- precisione;
- performance;
- professionalità;
- concretezza;
- formazione pratica;
- accesso al mondo racing.

Il design deve restare quello MTS esistente.

Non aggiungere effetti gratuiti o elementi decorativi incoerenti.

I numeri chiave come:

- `168`
- `60%`
- `7`
- `40%`
- `3.900€`

devono avere la stessa forza visiva dei KPI presenti nelle altre landing.

---

# 4. Above the fold / Hero

La hero deve seguire **esattamente il pattern delle altre landing MTS** presenti nella cartella.

Deve essere forte, leggibile e immediatamente orientata alla conversione.

Contenuto:

### Eyebrow / label

**MTS — MOTORISTA RACING**

### H1

# Diventa Motorista nel Motorsport

### Testo

Corso professionale in formula weekend a MTS Lesmo: lavora direttamente su **motori da competizione** e sviluppa le competenze tecniche per lavorare nel mondo del Motorsport.

### KPI / benefit

- **168 ore** di formazione
- **60% pratica** su motori e componenti racing
- **7 weekend** di formazione
- **Opportunità di colloquio con Autotecnica Motori** per i 3 migliori studenti

### CTA primaria

**Candidati ora**

La CTA deve portare alla sezione form/candidatura della pagina tramite anchor o comportamento già utilizzato nelle altre landing.

Se la hero delle altre landing contiene immagine/video/background media, replica **lo stesso sistema**, usando gli asset locali più coerenti con Motorista Racing.

Non usare immagini prese casualmente dal web.

---

# 5. Sezione candidatura / lead generation

Mantieni la stessa UI del form presente nelle altre landing MTS.

### Titolo

## Ricevi informazioni e candidati alle selezioni

### Body

Ti contatteremo per spiegarti il percorso, le selezioni e verificare la tua candidatura.

### Form

Usa il form previsto per **Motorista Racing**.

Se nel progetto esistono già:

- componenti form;
- validation;
- campi;
- checkbox privacy;
- integrazioni;
- messaggi di errore/successo;

riutilizzali senza alterarne il funzionamento.

Non inventare nuovi campi se non necessari.

Assegna a questa sezione un anchor chiaro, ad esempio:

```text
#candidatura
```

e collega tutte le CTA “Candidati ora” a questa sezione.

---

# 6. Partner

Titolo / label:

## I nostri partner

Partner da visualizzare:

- **Autotecnica Motori**
- **USAG**
- **Sparco**

Cerca prima i loghi nelle cartelle asset locali del progetto.

Se esistono, usa **i file locali ufficiali**.

Mantieni:

- proporzioni;
- dimensioni;
- filtri colore;
- allineamento;
- comportamento responsive;

della sezione partner presente nelle altre landing.

Non deformare i loghi.

---

# 7. Sezione 01 — Cos'è un Motorista Racing

### Eyebrow

`01 — COS'È UN MOTORISTA RACING`

### Titolo

## Il professionista che prepara il motore per le massime prestazioni

### Body

Il Motorista Racing lavora direttamente sul **motore da competizione**, occupandosi di analisi, lavorazioni, assemblaggio e messa in fase dei suoi componenti.

Ogni operazione richiede precisione, metodo e conoscenza della meccanica: dalla misurazione dei componenti alle lavorazioni meccaniche, fino alla verifica del corretto funzionamento del motore.

### Blocco — NON È

**Il meccanico generico** — lavora su componenti, tolleranze e procedure specifiche dei motori da competizione.

### Blocco — È

- **Lo specialista del motore racing**
- **È chi trasforma precisione e competenza meccanica in performance e affidabilità**

### Blocco — UNA FIGURA SPECIALIZZATA

Una professionalità tecnica richiesta dal settore dello sviluppo dei **motori da competizione**, dove è presente una carenza di personale altamente specializzato.

### UI

Usa la stessa soluzione visuale adottata nelle landing esistenti per sezioni analoghe:

- contrapposizione “non è / è”;
- card;
- box;
- griglie;
- divisori;
- label tecniche;
- eventuali immagini.

Non inventare una nuova composizione se esiste già un pattern adatto nel progetto.

---

# 8. Sezione 02 — A chi si rivolge

### Eyebrow

`02 — A CHI SI RIVOLGE`

### Titolo

## Fa per te se:

Crea 4 elementi/card mantenendo lo stile delle card analoghe presenti nelle altre landing.

### 01

**Hai passione per la meccanica**

Vuoi trasformare il tuo interesse per motori e tecnologia in una competenza professionale.

### 02

**Ami lavorare con precisione**

Misurazioni, tolleranze e procedure sono fondamentali nel lavoro di un motorista racing.

### 03

**Vuoi lavorare direttamente sui motori**

Cerchi una formazione pratica in cui mettere realmente le mani su componenti e motori da competizione.

### 04

**Vuoi entrare nel Motorsport**

Il tuo obiettivo è costruire una specializzazione tecnica per lavorare nel mondo delle corse.

### Nota finale

La selezione avviene tramite **colloquio attitudinale online**. Il corso è a numero chiuso e le iscrizioni possono chiudere anticipatamente al raggiungimento del numero massimo di posti.

---

# 9. Sezione 03 — Perché MTS

### Eyebrow

`03 — PERCHÉ MTS`

### Titolo

## Perché questo corso è diverso

Usa il sistema di card/benefit già presente nelle altre landing.

### 01 — 60% di pratica

Lavori direttamente su motori e componenti per acquisire un'esperienza concreta.

### 02 — 168 ore · 7 weekend

Un percorso intensivo in formula weekend, compatibile con lavoro e studio.

### 03 — Docenti professionisti

Formazione con professionisti che lavorano ai massimi livelli del Motorsport.

### 04 — Opportunità professionale

I **3 migliori studenti** potranno sostenere un colloquio presso Autotecnica Motori per valutare un possibile inserimento in organico.

I numeri devono avere forte evidenza grafica, coerente con le altre pagine MTS.

---

# 10. Sezione 04 — Struttura del corso

### Eyebrow

`04 — STRUTTURA DEL CORSO`

### Titolo

## Formula weekend

### KPI

**168**  
`h`  
Ore di corso

**7**  
`WE`  
Weekend · Ven–Dom

**60%**  
`PRATICA`  
Formazione pratica

**40%**  
`TEORIA`  
Formazione teorica

Usa `Andale Mono` per unità, label e microcopy tecnici se questo corrisponde al sistema già presente.

---

## Dettagli

- **Sede** — MTS Lesmo
- **Inizio** — 7 Maggio 2027
- **Formula** — Weekend · Ven–Dom
- **Durata** — 168 ore
- **Accesso** — Numero chiuso — colloquio attitudinale online

---

## Incluso nel corso

- Materiale didattico
- Attività scolastiche
- Tuta da officina
- Scarpe e guanti
- Assicurazione
- Accesso area riservata MTS
- Visita presso Autotecnica Motori

La struttura grafica deve seguire quella delle sezioni “programma / struttura / dettagli” già presenti nel progetto.

---

# 11. Sezione 05 — Investimento

### Eyebrow

`05 — INVESTIMENTO`

### Titolo

## Investi nella tua carriera

### Prezzo

Prezzo del corso

# 3.900€

**+ IVA**

Per partecipare bisogna completare il processo di selezione previsto da MTS.

### CTA

**Candidati ora**

CTA collegata al form.

---

## Pagamento in 3 rate

### RATA 1

**700€ + IVA**

Al momento dell'iscrizione

### RATA 2

**1.500€ + IVA**

Entro 15 gg dal superamento Step 1 Selezioni

### RATA 3

**1.700€ + IVA**

Entro il 14 Giugno 2027

Usa la stessa UI delle card prezzo/rate delle altre landing.

Non creare uno stile e-commerce.

Deve restare una sezione istituzionale e high-conversion coerente con MTS.

---

# 12. Sezione 06 — CTA finale

### Eyebrow

`06 — CANDIDATURA`

### Titolo

## Il Motorsport ha bisogno di Motoristi

### Body

Impara a lavorare sui motori da competizione.  
Costruisci una specializzazione tecnica e porta la tua passione nel Motorsport.

### CTA

**Candidati ora**

### Nota

Posti limitati — selezione tramite colloquio attitudinale online.

La CTA finale deve essere molto evidente ma usare lo stesso componente CTA delle altre pagine.

---

# 13. Sezioni ricorrenti delle altre landing

Se le landing MTS presenti nella stessa cartella includono sezioni ricorrenti come:

- testimonianze;
- gallery;
- strip immagini;
- FAQ;
- loghi partner;
- CTA intermedie;
- footer CTA;
- proof bar;
- numeri/KPI;
- elementi grafici motorsport;

mantieni lo **stesso ordine e lo stesso pattern strutturale**, purché coerente con questa landing.

### Importante

Non inventare:

- recensioni;
- nomi di studenti;
- aziende partner non indicate;
- percentuali;
- risultati lavorativi;
- placement;
- certificazioni;
- claim non presenti nel copy.

Se una sezione ricorrente richiede contenuti non disponibili:

1. riusa eventuali contenuti generici già condivisi tra le landing solo se sono realmente globali al brand MTS;
2. altrimenti lascia una struttura facilmente popolabile o un placeholder tecnico chiaramente identificabile nel codice;
3. non mostrare all'utente finale copy fittizio.

---

# 14. Immagini e media

Cerca prima gli asset già presenti localmente nel progetto.

Priorità:

1. immagini specifiche Motorista Racing;
2. motori racing;
3. componenti motore;
4. lavorazioni meccaniche;
5. officina;
6. dettagli tecnici;
7. immagini MTS Lesmo.

Usa gli stessi:

- aspect ratio;
- border radius;
- crop;
- overlay;
- trattamento colore;
- blending;
- animazioni;

delle landing esistenti.

### Regola importante

Non deformare le immagini e non usare crop che facciano perdere il soggetto principale.

Usa `object-fit` e `object-position` in modo responsivo.

---

# 15. Animazioni e scroll

Replica le animazioni già presenti nelle altre landing MTS.

Uniforma:

- reveal dei titoli;
- reveal dei body;
- ingresso card;
- KPI;
- immagini;
- CTA;
- eventuale parallax;
- fade;
- scroll-trigger.

Non creare animazioni più lente, più aggressive o visivamente diverse dalle altre pagine.

Il reveal deve risultare naturale anche quando l'utente scrolla velocemente.

Rispetta `prefers-reduced-motion` se già gestito dal progetto.

---

# 16. Responsive

La landing deve essere completamente responsive.

Verifica almeno:

- desktop wide;
- desktop standard;
- laptop;
- tablet landscape;
- tablet portrait;
- mobile large;
- mobile standard;
- mobile small.

Non limitarti ai breakpoint nominali: testa anche dimensioni intermedie.

### Regole

- nessun testo deve uscire dal viewport;
- nessuna sezione deve tagliare il contenuto;
- niente `overflow: hidden` usato per mascherare problemi di layout;
- le sezioni devono crescere in altezza quando necessario;
- i titoli devono mantenere una line-height corretta;
- KPI e card devono ricomporsi senza perdere gerarchia;
- il form deve essere completamente visibile;
- CTA sempre accessibili;
- loghi partner mai deformati;
- nessun horizontal scroll indesiderato.

---

# 17. Browser zoom

Controlla il comportamento almeno a:

- 80%
- 90%
- 100%
- 110%
- 125%
- 150%

La pagina non deve rompersi quando cambia lo zoom del browser.

In particolare:

- evita altezze rigide che tagliano il contenuto;
- evita sovrapposizioni tra sezioni;
- non lasciare testi fuori dai container;
- non far sparire elementi dell'header;
- consenti ai layout multi-colonna di diventare verticali quando lo spazio reale non è sufficiente.

---

# 18. Header e footer

Usa **gli stessi header e footer delle altre landing MTS**, senza reinterpretazioni.

Devono essere identici per:

- altezza;
- logo;
- navigazione;
- CTA;
- mobile menu;
- spacing;
- colori;
- sticky behavior;
- transizioni;
- comportamento su scroll.

Se header/footer sono componenti condivisi, riutilizza direttamente quelli.

---

# 19. Conversione

L'obiettivo primario è portare l'utente alla candidatura.

Mantieni una gerarchia CTA coerente:

**Primary CTA:** `Candidati ora`

**Secondary conversion point:** form `Ricevi informazioni e candidati alle selezioni`

Tutte le CTA di candidatura devono convergere sullo stesso form o sullo stesso flusso previsto dal progetto.

Non creare CTA con destinazioni incoerenti.

---

# 20. Copy

Usa **esattamente il copy fornito in questo documento**, salvo:

- correzioni di refusi evidenti;
- apostrofi;
- accenti;
- maiuscole/minuscole necessarie alla coerenza editoriale;
- adattamenti puramente tipografici.

Non riscrivere i messaggi commerciali.

Non aggiungere claim non verificati.

### Nota

Il nome corretto della landing e del corso è:

**MTS — MOTORISTA RACING**

Non usare “Morista Racing”.

---

# 21. Accessibilità

Mantieni o migliora il livello delle landing esistenti:

- struttura semantica corretta;
- un solo `h1`;
- gerarchia heading coerente;
- contrasto sufficiente;
- focus state visibile;
- label form accessibili;
- immagini con `alt` appropriati;
- bottoni e link semanticamente corretti;
- navigazione tastiera;
- niente testo essenziale inserito soltanto come immagine.

---

# 22. Performance

Non peggiorare la performance del sito.

Usa:

- asset ottimizzati;
- lazy loading dove opportuno;
- componenti esistenti;
- animazioni performanti;
- immagini responsive se il progetto le prevede.

Evita JavaScript aggiuntivo se la stessa cosa è già gestibile dal sistema esistente.

---

# 23. QA finale obbligatorio

Prima di considerare completato il task:

1. confronta visivamente la nuova landing con le altre landing MTS;
2. verifica che sembri parte dello stesso progetto;
3. controlla desktop e mobile;
4. controlla zoom browser;
5. verifica anchor e CTA;
6. verifica il form;
7. verifica font;
8. verifica palette;
9. verifica immagini;
10. verifica overflow;
11. verifica che nessun contenuto sia tagliato;
12. verifica che non siano stati introdotti errori nelle altre pagine;
13. verifica console;
14. verifica eventuali warning;
15. elimina codice duplicato o workaround non necessari.

---

# Risultato atteso

La pagina finale deve sembrare progettata insieme alle altre landing MTS.

Non voglio una semplice pagina che utilizza gli stessi colori.

Voglio una landing che replichi realmente:

- **design system**
- **struttura**
- **ritmo**
- **layout**
- **componenti**
- **interazioni**
- **motion**
- **responsive behavior**

delle landing già presenti nella stessa cartella.

La differenza deve essere esclusivamente nel contenuto specifico del corso **Motorista Racing** e negli asset pertinenti.

Agisci sia come **frontend developer** sia come **UX/UI designer**: se durante l'implementazione individui piccoli problemi di impaginazione, leggibilità o responsive, risolvili con la soluzione più coerente con il sistema già esistente, senza introdurre variazioni arbitrarie nel design.
