document.addEventListener('DOMContentLoaded', () => {
    // createBombLocation();
    // createCells();
});

const grid = document.getElementsByClassName('grid')[0];
const scoreCounter = document.getElementsByClassName('score-counter')[0];
const endGameScreen = document.getElementsByClassName('end-game-screen')[0];
const endGameText = document.getElementsByClassName('end-game-text')[0];
const playAgainButton = document.getElementsByClassName('play-again')[0];
let width = 10; // initial number of cells on a row
const totalCells = 100;
const totalBombs = 5;
let bombs = Array.from(createBombLocation());

let score = 0;

let cells = Array.from(createCells());

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
        
        // if (bombs.includes(i + 1)){
        //     cell.classList.add('cell-bomb');
        // }
    
        cell.addEventListener('click', function() {
            
            revealCell(cell);
        });

        cell.addEventListener('contextmenu', e => {
            e.preventDefault();
            markCell(cell);
        });
    
        grid.appendChild(cell);
    }
    return grid.childNodes;
}

/**
 * Create random bombs location
 */
function createBombLocation() {
    let bombList = [];
    while (bombList.length < totalBombs){
        let randomNumber = Math.floor(Math.random() * totalCells) + 1;
    
        if (!bombList.includes(randomNumber)){
            bombList.push(randomNumber);
        }
    }
    return bombList;
}

/**
 * Mark the cell as having a bomb
 * and don't reveal it
 * @param {*} cell 
 */
function markCell(cell) {
    if (cell.classList.contains('hidden-cell') && !cell.classList.contains('marked')) {
        cell.classList.add('marked');
    }else {
        cell.classList.remove('marked');
    }
    
}

function revealCell(cell) {
    if (!cell.classList.contains('hidden-cell')){
        return;
    }
    if (cell.classList.contains('cell-bomb')) {
        return;
    }
    cell.classList.remove('hidden-cell');
    

    // cell.classList.add('number');
    const adjacentCells = nearbyCells(cell);
}

function nearbyCells(cell){
    const cells = [];
    let parent = cell.parentNode;
    let selectedCellIndex = Array.prototype.indexOf.call(parent.children, cell);
    // check if selected cell has a bomb
    if (bombs.includes(selectedCellIndex)){
        cell.classList.add('cell-bomb');
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