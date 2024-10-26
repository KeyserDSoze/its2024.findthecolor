### **Prova d'esame: Gioco del Riconoscimento del Colore**

**Descrizione del gioco**  
L’obiettivo del gioco è cliccare sul quadrato del colore corretto quando il nome del colore appare come indicazione. Ogni volta che il giocatore clicca correttamente sul colore indicato, il punteggio aumenta di 1. 

**Durata della prova**: 2.5 ore

---

## **Compiti (20 Punti Totali)**

### **Parte Sufficiente (17 Punti)**

1. **Struttura HTML di base (5 punti)**
   - **(2 punti)**: Creare un file HTML con un titolo `<h1>` che descriva il gioco ("Gioco del Riconoscimento del Colore").
   - **(2 punti)**: Creare un elemento per mostrare il punteggio, ad esempio un paragrafo `<p>` con `id="score"` e un valore iniziale di 0.
   - **(1 punto)**: Creare 4 quadrati colorati utilizzando `<div>` con `class="color-box"`, ciascuno con un colore diverso.

2. **Stile CSS di base (5 punti)**
   - **(2 punti)**: Stilizzare i quadrati colorati per renderli grandi e facilmente cliccabili (ad esempio, 100x100 px).
   - **(2 punti)**: Creare un design semplice e centrato per il titolo, il punteggio e i quadrati colorati.
   - **(1 punto)**: Dare uno sfondo chiaro alla pagina.

3. **Logica JavaScript di base (7 punti)**
   - **(2 punti)**: Selezionare gli elementi HTML necessari (`score`, `color-box`).
   - **(3 punti)**: Generare un colore casuale tra i quadrati e visualizzarlo come **indicazione** (ad esempio, in un testo sopra i quadrati).
   - **(2 punti)**: Aggiungere un evento `click` ai quadrati colorati per verificare se il colore selezionato è corretto e aggiornare il punteggio.

---

### **Parte finale (3 Punti)**

1. **Riposizionamento dei Colori (1 punto)**  
   - Ogni volta che il giocatore clicca correttamente, cambia l’ordine dei colori per renderlo più difficile.

2. **Timer di Gioco (1 punto)**  
   - Aggiungi un timer che limita il tempo di gioco a 30 secondi. Quando il tempo scade, il gioco termina e il punteggio finale viene visualizzato.

3. **Animazione (1 punto)**  
   - Aggiungi un'animazione css durante il cambiamento di ordine dei colori.

---

### **Valutazione**

- **Parte Sufficiente**: 17 punti, che corrispondono alla sufficienza se completati.
- **Parte Finale**: 3 punti per completare tutte le funzionalità aggiuntive.
