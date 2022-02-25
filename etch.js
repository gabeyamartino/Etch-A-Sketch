const container = document.querySelector('#container');
let cell = document.createElement('div');
cell.classList.add('columns');
let resetButton = document.getElementById('reset');


function createGrid(num) {
    for (i = 0; i < num; i++) {
        let rows = document.createElement('div');
        rows.classList.add('rows');
        container.appendChild(rows);
        for (j = 0; j < num; j++) {
            let cell = document.createElement('div');
            cell.classList.add('columns');
            rows.appendChild(cell);
            cell.addEventListener('mouseover', function() {
                cell.style.backgroundColor = 'blue';  
            });
        }
    }
}

createGrid(16);

resetButton.addEventListener("click", resetGrid);

function resetGrid() {
    document.getElementById('container').innerHTML = "";
    let x = prompt("Please type a number between 1-100");
    createGrid(x);
}
// the code below is bullshit.
// look it over & find out why.

let coloredCells = document.querySelectorAll('div.columns');
console.log(coloredCells.length)

let newCell;
function changeColor() {
    cell.style.backgroundColor = 'blue';
}

coloredCells.forEach((newCell) => {
    newCell.addEventListener('mouseover', changeColor);
});
console.log(newCell)

// crapy example of a for loop to add listeners

for (i = 0; i < frog.length; i++) {
    frog[i].addEventListener
}


