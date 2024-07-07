const word = "apple";  // You can change this to any word you want
const maxAttempts = 6;
let currentAttempt = 0;

const gameBoard = document.getElementById('game-board');
const guessInput = document.getElementById('guess-input');
const submitGuess = document.getElementById('submit-guess');
const message = document.getElementById('message');

submitGuess.addEventListener('click', handleGuess);

function handleGuess() {
    const guess = guessInput.value.toLowerCase();
    if (guess.length !== 5) {
        alert('Please enter a 5 letter word');
        return;
    }

    if (currentAttempt >= maxAttempts) {
        message.textContent = 'No more attempts left. Game over!';
        return;
    }

    const row = document.createElement('div');
    row.classList.add('row');
    let correctGuess = true;

    for (let i = 0; i < 5; i++) {
        const letterDiv = document.createElement('div');
        letterDiv.classList.add('letter');
        letterDiv.textContent = guess[i];

        if (guess[i] === word[i]) {
            letterDiv.classList.add('correct');
        } else if (word.includes(guess[i])) {
            letterDiv.classList.add('present');
            correctGuess = false;
        } else {
            letterDiv.classList.add('absent');
            correctGuess = false;
        }

        row.appendChild(letterDiv);
    }

    gameBoard.appendChild(row);
    guessInput.value = '';
    currentAttempt++;

    if (correctGuess) {
        message.textContent = 'Congratulations! You guessed the word!';
    } else if (currentAttempt >= maxAttempts) {
        message.textContent = `Game over! The word was ${word}.`;
    }
}
