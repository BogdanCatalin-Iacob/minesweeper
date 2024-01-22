document.addEventListener('DOMContentLoaded', () => {
    createBombLocation();
    createCells();
});

const grid = document.getElementsByClassName('grid')[0];
const scoreCounter = document.getElementsByClassName('score-counter')[0];
const endGameScreen = document.getElementsByClassName('end-game-screen')[0];
const endGameText = document.getElementsByClassName('end-game-text')[0];
const playAgainButton = document.getElementsByClassName('play-again')[0];
const totalCells = 100;
let bombList = [];
const totalBombs = 5;

let score = 0;

/**
 * Update and display score
 */
function updateScore() {
    score++;
    scoreCounter.innerText = score.toString().padStart(5, 0);
}

/**
 * Creates game board cells
 * Rely on createBombLocation() to add bombs 
 */
function createCells() {
    for (let i = 0; i < totalCells; i++){
        const cell = document.createElement('div');
        cell.classList.add('cell', 'hidden-cell');

        if (bombList.includes(i + 1)){
            cell.classList.add('cell-bomb');
        }
    
        cell.addEventListener('click', function() {
            cell.classList.remove('hidden-cell');
        });
        
        cell.addEventListener('contextmenu', e => {
            e.preventDefault();
            markCell(cell);
        });
    
        grid.appendChild(cell);
    }
}

/**
 * Create random bombs location
 */
function createBombLocation() {
    while (bombList.length < totalBombs){
        let randomNumber = Math.floor(Math.random() * totalCells) + 1;
    
        if (!bombList.includes(randomNumber)){
            bombList.push(randomNumber);
        }
    }
}

/**
 * Mark the cell as having a bomb
 * and don't reveal it
 * @param {*} cell 
 */
function markCell(cell) {
    if (cell.classList.contains('hidden-cell')) {
        cell.classList.remove('hidden-cell');
        cell.classList.add('marked');
    }else if (cell.classList.contains('marked')) {
        cell.classList.add('hidden-cell');
        cell.classList.remove('marked');
    }
}

/**
 * Display game over screen
 * @param {boolean} isVictory
 *  - true - Game Won | false - Game Lost
 */
function endGame(isVictory) {

    if (isVictory) {
        endGameText.innerHTML = 'YOU<br>WON';
        endGameScreen.classList.add('win');
    }

    endGameScreen.classList.remove('hidden');
}

playAgainButton.addEventListener('click', function() {
    window.location.reload();
});