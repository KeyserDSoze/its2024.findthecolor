## **HTML: Struttura del Gioco**

Il file HTML crea la struttura di base per il gioco e include i collegamenti al file CSS per gli stili e al file JavaScript per la logica del gioco.

### **Codice HTML**

```html
<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gioco del Riconoscimento del Colore</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Gioco del Riconoscimento del Colore</h1>
    <p>Punteggio: <span id="score">0</span></p>
    <p>Trova il colore: <span id="color-to-find"></span></p>
    <div class="color-box" id="red"></div>
    <div class="color-box" id="blue"></div>
    <div class="color-box" id="green"></div>
    <div class="color-box" id="yellow"></div>

    <script src="script.js"></script>
</body>
</html>
```

### **Spiegazione HTML**

1. **`<!DOCTYPE html>`**: Specifica che il documento utilizza la versione HTML5.
2. **`<html lang="it">`**: Dichiara la lingua del documento come italiano (`lang="it"`).
3. **`<head>`**: Contiene metadati e riferimenti ai file esterni.
   - **`<meta charset="UTF-8">`**: Imposta la codifica dei caratteri a UTF-8.
   - **`<meta name="viewport" content="width=device-width, initial-scale=1.0">`**: Rende la pagina responsive su dispositivi mobili.
   - **`<title>Gioco del Riconoscimento del Colore</title>`**: Imposta il titolo che apparirà nella scheda del browser.
   - **`<link rel="stylesheet" href="styles.css">`**: Collega il file CSS per lo stile della pagina.
4. **`<body>`**: Contiene il contenuto principale della pagina.
   - **`<h1>Gioco del Riconoscimento del Colore</h1>`**: Titolo del gioco.
   - **`<p>Punteggio: <span id="score">0</span></p>`**: Visualizza il punteggio attuale, inizialmente impostato a 0.
   - **`<p>Trova il colore: <span id="color-to-find"></span></p>`**: Visualizza il nome del colore che il giocatore deve trovare. Il `span` ha l'id `color-to-find` per poter aggiornare il testo tramite JavaScript.
   - **`<div class="color-box" id="red"></div>`** (e gli altri `div` con `id="blue"`, `id="green"`, `id="yellow"`): Crea quattro quadrati colorati con la classe `color-box`. Ogni `div` ha un `id` che identifica il colore, necessario per il riconoscimento nel codice JavaScript.
5. **`<script src="script.js"></script>`**: Collega il file JavaScript per la logica del gioco.

---

## **CSS: Stile del Gioco**

Il file CSS definisce lo stile di base per il gioco, rendendo la struttura chiara e visivamente accattivante.

### **Codice CSS**

```css
body {
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
    background-color: #f0f0f0;
}

h1 {
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
}

p {
    font-size: 20px;
    margin: 10px;
}

.color-box {
    width: 100px;
    height: 100px;
    display: inline-block;
    margin: 10px;
    cursor: pointer;
}

#red { background-color: red; }
#blue { background-color: blue; }
#green { background-color: green; }
#yellow { background-color: yellow; }
```

### **Spiegazione CSS**

1. **`body`**: Stile del corpo della pagina.
   - **`font-family: Arial, sans-serif;`**: Imposta il font della pagina a `Arial` (o `sans-serif` come alternativa).
   - **`display: flex; flex-direction: column; align-items: center; justify-content: center;`**: Usa Flexbox per centrare verticalmente e orizzontalmente gli elementi in una colonna.
   - **`height: 100vh;`**: Imposta l'altezza del corpo a 100% dell'altezza della finestra.
   - **`margin: 0;`**: Rimuove il margine predefinito del corpo.
   - **`background-color: #f0f0f0;`**: Imposta lo sfondo a un grigio chiaro.
   
2. **`h1`**: Stile del titolo.
   - **`font-size: 24px;`**: Imposta la dimensione del font a 24px.
   - **`color: #333;`**: Imposta il colore del testo a grigio scuro.
   - **`margin-bottom: 20px;`**: Aggiunge uno spazio di 20px sotto il titolo.
   
3. **`p`**: Stile per il paragrafo (utilizzato per il punteggio e il colore da trovare).
   - **`font-size: 20px;`**: Imposta la dimensione del font a 20px.
   - **`margin: 10px;`**: Aggiunge uno spazio di 10px sopra e sotto il paragrafo.

4. **`.color-box`**: Stile per i quadrati colorati.
   - **`width: 100px; height: 100px;`**: Imposta la dimensione di ogni quadrato a 100x100px.
   - **`display: inline-block;`**: Mostra i quadrati in linea, ma come blocchi indipendenti.
   - **`margin: 10px;`**: Aggiunge uno spazio di 10px attorno a ciascun quadrato.
   - **`cursor: pointer;`**: Cambia il cursore a una mano quando il giocatore passa sopra i quadrati.

5. **Colori dei quadrati** (`#red`, `#blue`, `#green`, `#yellow`): Ogni ID corrisponde al colore di sfondo del quadrato. Ad esempio, `#red` imposta il colore rosso, `#blue` il blu, e così via.

---

## **JavaScript: Logica del Gioco**

Il file JavaScript contiene la logica del gioco: seleziona gli elementi dal DOM, genera un colore casuale da trovare e gestisce gli eventi di clic sui quadrati.

### **Codice JavaScript**

```javascript
// Seleziona gli elementi dal DOM
const scoreDisplay = document.getElementById('score');
const colorToFindDisplay = document.getElementById('color-to-find');
const colorBoxes = document.querySelectorAll('.color-box');

// Inizializza il punteggio e i colori
let score = 0;
const colors = ['red', 'blue', 'green', 'yellow'];

// Funzione per generare un colore casuale da trovare
function generateColorToFind() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorToFindDisplay.textContent = randomColor; // Mostra il colore da trovare
    return randomColor;
}

// Colore da trovare
let colorToFind = generateColorToFind();

// Funzione per incrementare il punteggio e generare un nuovo colore
function incrementScore() {
    score++;
    scoreDisplay.textContent = score;
    colorToFind = generateColorToFind(); // Nuovo colore da trovare
}

// Aggiungi evento click ai quadrati colorati
colorBoxes.forEach(box => {
    box.addEventListener('click', function() {
        if (box.id === colorToFind) { // Verifica se il colore è corretto
            incrementScore();
        }
    });
});
```

### **Spiegazione JavaScript**

1. **Seleziona gli elementi dal DOM**:
   - **`scoreDisplay`**: Elemento `<span id="score">` per mostrare il punteggio.
   - **`colorToFindDisplay`**: Elemento `<span id="color-to-find">` dove viene visualizzato il nome del colore da trovare.
   - **`colorBoxes`**: Seleziona tutti gli elementi con la classe `color-box` (i quadrati colorati).

2. **Inizializza il punteggio e l’array dei colori**:
   - **`let score = 0;`**: Imposta il punteggio

 iniziale a 0.
   - **`const colors = ['red', 'blue', 'green', 'yellow'];`**: Array con i colori disponibili.

3. **Funzione `generateColorToFind()`**:
   - **`const randomColor = colors[Math.floor(Math.random() * colors.length)];`**: Sceglie un colore casuale dall'array `colors`.
   - **`colorToFindDisplay.textContent = randomColor;`**: Visualizza il colore da trovare nell’elemento `color-to-find`.
   - **`return randomColor;`**: Ritorna il colore generato, per confrontarlo con i clic dell'utente.

4. **Imposta il colore iniziale da trovare**:
   - **`let colorToFind = generateColorToFind();`**: Genera un colore casuale all'inizio del gioco.

5. **Funzione `incrementScore()`**:
   - **`score++;`**: Incrementa il punteggio di 1.
   - **`scoreDisplay.textContent = score;`**: Aggiorna la visualizzazione del punteggio.
   - **`colorToFind = generateColorToFind();`**: Genera un nuovo colore da trovare ogni volta che il giocatore clicca correttamente.

6. **Event Listener per i clic sui quadrati**:
   - **`colorBoxes.forEach(box => {...})`**: Aggiunge un `event listener` a ogni quadrato `color-box`.
   - **`if (box.id === colorToFind) {...}`**: Controlla se il `id` del quadrato cliccato corrisponde al colore da trovare.
   - **`incrementScore();`**: Se il colore è corretto, chiama `incrementScore()` per incrementare il punteggio e generare un nuovo colore.

---

### **Conclusioni**

Questa soluzione crea un gioco semplice ma interattivo, dove gli studenti possono praticare la manipolazione del DOM e la gestione degli eventi. Ogni sezione (HTML, CSS e JavaScript) ha compiti chiari, rendendo il progetto adatto a principianti e facilmente espandibile.