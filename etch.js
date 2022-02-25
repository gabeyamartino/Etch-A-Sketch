const container = document.querySelector('#container');

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
                let x = Math.floor(Math.random() * 256);
                let y = Math.floor(Math.random() * 256);
                let z = Math.floor(Math.random() * 256);
                let rainbow = "rgb(" + x + "," + y + "," + z + ")";
                cell.style.backgroundColor = rainbow;  
            });
        }
    }
}

createGrid(16);

let resetButton = document.getElementById('reset');
resetButton.addEventListener("click", resetGrid);

function resetGrid() {
    document.getElementById('container').innerHTML = "";
    let x = prompt("Please type a number between 1-100");
    createGrid(x);
};

