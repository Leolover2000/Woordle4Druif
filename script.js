let words = [];
let currentWord = '';

document.addEventListener('DOMContentLoaded', () => {
    loadWords();
    startGame();
});

function loadWords() {
    // words.js will define a `words` array
    currentWord = words[Math.floor(Math.random() * words.length)];
}

function startGame() {
    const grid = document.querySelector('.grid');
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 5; j++) {
            const cell = document.createElement('div');
            cell.id = `cell-${i}-${j}`;
            grid.appendChild(cell);
        }
    }
}

function submitGuess() {
    const guess = document.getElementById('guessInput').value.toLowerCase();
    if (guess.length !== 5) return;
    const grid = document.querySelector('.grid');
    const row = Math.floor(grid.children.length / 5) - 6 + document.getElementsByTagName('input').length;

    for (let i = 0; i < 5; i++) {
        const cell = document.getElementById(`cell-${row}-${i}`);
        cell.textContent = guess[i];
        if (guess[i] === currentWord[i]) {
            cell.style.backgroundColor = 'green';
        } else if (currentWord.includes(guess[i])) {
            cell.style.backgroundColor = 'yellow';
        } else {
            cell.style.backgroundColor = 'grey';
        }
    }

    if (guess === currentWord) {
        alert('You guessed the word!');
        location.reload();
    }
}
