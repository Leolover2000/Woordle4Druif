const word = "appel";  // You can change this to any word you want
const maxAttempts = 6;
let currentAttempt = 0;
let currentGuess = "";

const gameBoard = document.getElementById('game-board');
const message = document.getElementById('message');
const keys = document.querySelectorAll('.key');
const enterKey = document.getElementById('enter');
const deleteKey = document.getElementById('delete');

keys.forEach(key => {
    key.addEventListener('click', (event) => handleKeyPress(event.target.textContent));
});
enterKey.addEventListener('click', handleSubmitGuess);
deleteKey.addEventListener('click', handleDeleteLetter);

function handleKeyPress(letter) {
    if (letter.toLowerCase() === 'del') {
        handleDeleteLetter();
    } else if (letter.toLowerCase() === 'enter') {
        handleSubmitGuess();
    } else if (currentGuess.length < 5) {
        currentGuess += letter.toLowerCase();
        updateCurrentRow();
    }
}

function handleDeleteLetter() {
    if (currentGuess.length > 0) {
        // Remove the last character
        currentGuess = currentGuess.slice(0, -1);
        updateCurrentRow();
    }
}

function updateCurrentRow() {
    const row = gameBoard.children[currentAttempt];
    const letters = row.children;
    for (let i = 0; i < 5; i++) {
        letters[i].textContent = currentGuess[i] || "";
    }
}

async function handleSubmitGuess() {
    if (currentGuess.length !== 5) {
        alert('Voer een woord van 5 letters in');
        return;
    }

    if (!await isValidDutchWord(currentGuess)) {
        message.textContent = 'Woord bestaat niet';
        return;
    }

    const row = gameBoard.children[currentAttempt];
    let correctGuess = true;

    for (let i = 0; i < 5; i++) {
        const letterDiv = row.children[i];
        const letter = currentGuess[i];
        const keyButton = Array.from(keys).find(key => key.textContent.toLowerCase() === letter);
        
        if (letter === word[i]) {
            letterDiv.classList.add('correct');
            updateKeyButtonColor(keyButton, 'correct');
        } else if (word.includes(letter)) {
            letterDiv.classList.add('present');
            updateKeyButtonColor(keyButton, 'present');
            correctGuess = false;
        } else {
            letterDiv.classList.add('absent');
            updateKeyButtonColor(keyButton, 'absent');
            correctGuess = false;
        }
    }

    currentAttempt++;
    currentGuess = "";

    if (correctGuess) {
        message.textContent = 'Gefeliciteerd! Je hebt het woord geraden!';
    } else if (currentAttempt >= maxAttempts) {
        message.textContent = `Game over! Het woord was ${word}.`;
    }
}

async function isValidDutchWord(word) {
    const response = await fetch(`https://api.datamuse.com/words?sp=${word}&v=nl`);
    const data = await response.json();
    return data.length > 0;
}

function updateKeyButtonColor(keyButton, colorClass) {
    // Remove previous color classes
    keyButton.classList.remove('correct', 'present', 'absent');
    // Add the new color class
    keyButton.classList.add(colorClass);
}
