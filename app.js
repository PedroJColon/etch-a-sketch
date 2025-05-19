const numOfCells = 16;

function drawBoard() {
    const gridContainer = document.querySelector(".grid-container");
    for (let y = 0; y < numOfCells; y++) {
        console.log("Y Cell Num: " + y);
        for (let x = 0; x < numOfCells; x++) {
            console.log("X Cell Num: " + x);        
            const cell = document.createElement("div");
            cell.classList.toggle("cell");
            gridContainer.appendChild(cell);
        }
    }
}

drawBoard();

const cells = document.querySelectorAll(".cell");
cells.forEach(cell => {
    cell.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "red";
    });
});