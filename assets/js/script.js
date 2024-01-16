const grid = document.getElementsByClassName('grid')[0];
const scoreCounter = document.getElementsByClassName('score-counter')[0];
const endGameScreen = document.getElementsByClassName('end-game-screen')[0];
const endGameText = document.getElementsByClassName('end-game-text')[0];

const totalCells = 100;
let bombList = [];
const totalBombs = 50;

let score = 0;

function updateScore() {
    score++;
    scoreCounter.innerText = score.toString().padStart(5, 0);
}

for (let i = 0; i < totalCells; i++){
    const cell = document.createElement('div');
    cell.classList.add('cell');

    cell.addEventListener('click', function() {
        console.log(`clicked: ${i}`);
    });

    grid.appendChild(cell);
}