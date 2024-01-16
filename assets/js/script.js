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
        cell.classList.add('cell');

        if (bombList.includes(i + 1)){
            cell.classList.add('cell-bomb');
        }
    
        cell.addEventListener('click', function() {
            console.log(`clicked: ${i}`);
        });
    
        grid.appendChild(cell);
    }
}


function createBombLocation() {
    while (bombList.length < totalBombs){
        let randomNumber = Math.floor(Math.random() * totalCells) + 1;
    
        if (!bombList.includes(randomNumber)){
            bombList.push(randomNumber);
        }
    }
}
let ada = grid.children;
console.log(ada[9]);
