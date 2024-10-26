// Seleziona gli elementi dal DOM
const scoreDisplay = document.getElementById('score');
const colorToFindDisplay = document.getElementById('color-to-find');
const colorBoxes = document.querySelectorAll('.color-box');
const timerDisplay = document.getElementById('timer');

// Inizializza il punteggio, i colori e il timer
let score = 0;
const colors = ['red', 'blue', 'green', 'yellow'];
let timeLeft = 30;
let colorToFind;
let timer;

// Funzione per generare un colore casuale da trovare
function generateColorToFind() {
    colorToFind = colors[Math.floor(Math.random() * colors.length)];
    colorToFindDisplay.textContent = colorToFind; // Mostra il colore da trovare
}

// Funzione per incrementare il punteggio e generare un nuovo colore
function incrementScore() {
    score++;
    scoreDisplay.textContent = score;
    generateColorToFind(); // Genera un nuovo colore da trovare
    shuffleColors(); // Riposiziona i colori
}

// Funzione per riposizionare casualmente i colori
function shuffleColors() {
    const container = document.querySelector('.colors-container');
    // Rimuove e riaggiunge i colori in ordine casuale
    const shuffledColors = [...colorBoxes].sort(() => Math.random() - 0.5);
    
    // Aggiunge animazione per ogni colore
    shuffledColors.forEach(color => {
        color.classList.add('move-animation'); // Aggiunge la classe per l'animazione
        container.appendChild(color); // Aggiunge il colore al container
        setTimeout(() => color.classList.remove('move-animation'), 300); // Rimuove l'animazione
    });
}

// Timer per il gioco di 30 secondi
function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            alert(`Tempo scaduto! Il tuo punteggio finale è: ${score}`);
            resetGame();
        }
    }, 1000);
}

// Funzione per resettare il gioco
function resetGame() {
    score = 0;
    timeLeft = 30;
    scoreDisplay.textContent = score;
    timerDisplay.textContent = timeLeft;
    generateColorToFind();
    startTimer();
}

// Aggiungi evento click ai quadrati colorati
colorBoxes.forEach(box => {
    box.addEventListener('click', function() {
        if (box.id === colorToFind) { // Verifica se il colore è corretto
            incrementScore();
        }
    });
});

// Avvia il gioco
generateColorToFind();
startTimer();
