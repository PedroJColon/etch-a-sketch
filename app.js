let numOfCells = 16;

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
    gatherCells();
}

function resetBoard() {
    const gridContainer = document.querySelector(".grid-container");
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
}

function gatherCells() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
    cell.addEventListener("mouseover", (e) => {
        const targetCell = e.target.closest(".cell");
        if (targetCell) {
            targetCell.style.backgroundColor = "red";
        }
        });
    });
}

const data = document.querySelector("#submit-button");
data.addEventListener("click", (e) => {
    const userNumber = document.querySelector("input");
    numOfCells = userNumber.value;
    resetBoard();
    drawBoard();
});