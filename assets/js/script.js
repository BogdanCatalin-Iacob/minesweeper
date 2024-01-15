let grid = document.getElementsByClassName('grid')[0];

for (let i = 0; i < 100; i++){
    grid.innerHTML += `<div class="cell">${i + 1}</div>`;
}