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
        
        if (bombs.includes(i + 1)){
            cell.classList.add('bomb');
        }
        
        // click to reveal the cell
        cell.addEventListener('click', function() {
            revealCell(cell);
        });

        // right click to mark / unmark the cell
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
 * @param {cell} cell 
 */
function markCell(cell) {
    if (cell.classList.contains('hidden-cell') && !cell.classList.contains('marked')) {
        cell.classList.add('marked');
    }else {
        cell.classList.remove('marked');
    }
    
}

/**
 * Shows the number of bombs around an empty cell
 * or call endGame() if the cell contains a bomb
 * @param {cell} cell 
 */
function revealCell(cell) {

    // calculate the number of bombs around a cell
    nearbyCells(cell);

    if (!cell.classList.contains('hidden-cell')){
        return;
    }
    if (cell.classList.contains('bomb')) {
        endGame(false);
    }
    cell.classList.remove('hidden-cell');
    
    // show numbers of bombs only if there is 1 or more bombs around cell
    if (cell.getAttribute('data') != 0){
        cell.innerHTML = cell.getAttribute('data');
    }
}

/**
 * Counts the number of bombs around the clicked cell
 * @param {cell} cell 
 */
function nearbyCells(cell){
    for (let i = 0; i < totalCells; i++){
        let total = 0;
        const isLeftEdge = (i % width === 0);
        const isRightEdge = ( i% width === width - 1);

        if(cells[i].classList.contains('hidden-cell')){
            if (i > 0 && !isLeftEdge && cells[i - 1].classList.contains('cell-bomb')){
                total++;
            }
            if (i > 9 && !isRightEdge && cells[i + 1 - width].classList.contains('bomb')){
                total++;
            }
            if (i > 10 && cells[i - width].classList.contains('bomb')){
                total++;
            }
            if (i > 11 && !isLeftEdge && cells[i - width - 1].classList.contains('bomb')){
                total++;
            }
            if (i < 99 && !isRightEdge && cells[i + 1].classList.contains('bomb')){
                total++;
            }
            if (i < 90 && !isLeftEdge && cells[i - 1 + width].classList.contains('bomb')){
                total++;
            }
            if (i < 88 && !isRightEdge && cells[i + 1 + width].classList.contains('bomb')){
                total++;
            }
            if (i < 89 && cells[i + width].classList.contains('bomb')){
                total++;
            }
            
            cells[i].setAttribute('data', total);
        }
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

    cells.forEach((cell) => {
        if (cell.classList.contains('bomb')){
            cell.classList.add('cell-bomb');
        }
    });
    endGameScreen.classList.remove('hidden');
}

playAgainButton.addEventListener('click', function() {
    window.location.reload();
});