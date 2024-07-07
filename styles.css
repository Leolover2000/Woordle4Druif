const word = "appel";  // You can change this to any word you want
const validWords = [
    "appel", "bomen", "druif", "fiets", "appel", "stoel", "tafel", "wonen", "laken",
    "appel", "bloem", "eiken", "fruit", "garen", "hazen", "ijzer", "jager", "koets"
];  // Add a comprehensive list of valid Dutch words here
const maxAttempts = 6;
let currentAttempt = 0;
let currentGuess = "";

const gameBoard = document.getElementById('game-board');
const message = document.getElementById('message');
const keys = document.querySelectorAll('.key');
const enterKey = document.getElementById('enter');
const deleteKey = document.getElementById('delete');

keys.forEach(key => {
    key.addEventListener('click', () => handleKeyPress(key.textContent));
});
enterKey.addEventListener('click', handleSubmitGuess);
deleteKey.addEventListener('click', handleDeleteLetter);

function handleKeyPress(letter) {
    if (currentGuess.length < 5) {
        currentGuess += letter.toLowerCase();
        updateCurrentRow();
    }
}

function handleDeleteLetter() {
    currentGuess = currentGuess.slice(0, -1);
    updateCurrentRow();
}

function updateCurrentRow() {
    const row = gameBoard.children[currentAttempt];
    const letters = row.children;
    for (let i = 0; i < 5; i++) {
        letters[i].textContent = currentGuess[i] || "";
    }
}

function handleSubmitGuess() {
    if (currentGuess.length !== 5) {
        alert('Please enter a 5 letter word');
        return;
    }

    if (!validWords.includes(currentGuess)) {
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
            if (keyButton) keyButton.classList.add('correct');
        } else if (word.includes(letter)) {
            letterDiv.classList.add('present');
            if (keyButton) keyButton.classList.add('present');
            correctGuess = false;
        } else {
            letterDiv.classList.add('absent');
            if (keyButton) keyButton.classList.add('absent');
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
