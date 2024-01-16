document.addEventListener('DOMContentLoaded', () => {
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
 */
function createCells() {
    for (let i = 0; i < totalCells; i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
    
        cell.addEventListener('click', function() {
            console.log(`clicked: ${i}`);
        });
    
        grid.appendChild(cell);
    }
}