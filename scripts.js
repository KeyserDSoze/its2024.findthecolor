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
