const grid = document.getElementsByClassName('grid')[0];
const scoreCounter = document.getElementsByClassName('score-counter')[0];
const endGameScreen = document.getElementsByClassName('end-game-screen')[0];
const endGameText = document.getElementsByClassName('end-game-text')[0];

for (let i = 0; i < 100; i++){
    grid.innerHTML += `<div class="cell">${i + 1}</div>`;
}