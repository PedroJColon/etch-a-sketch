let numOfCells = 16;
const maxCellNum = 100;

function drawBoard() {
    const gridContainer = document.querySelector(".grid-container");

    if (numOfCells > 16) {
        const container = document.querySelector(".container");
        container.style.paddingTop = "12%"
        gridContainer.style.width = "520px";
    }
    else {
        const container = document.querySelector(".container");
        container.style.paddingTop = "12%"
        gridContainer.style.width = "265px";
    }
    if (numOfCells > 32) {
        const container = document.querySelector(".container");
        container.style.paddingTop = "22%"
        gridContainer.style.width = "1030px";
    }
    if (numOfCells > 64) {
        const container = document.querySelector(".container");
        container.style.paddingTop = "30%"
        gridContainer.style.width = "2060px";
    }
    for (let y = 0; y <= numOfCells; y++) {
        console.log("Y Cell Num: " + y);
        for (let x = 0; x < numOfCells; x++) {
            console.log("X Cell Num: " + x);        
            const cell = document.createElement("div");
            cell.classList.toggle("cell");
            cell.style.height = 
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
    if (numOfCells > maxCellNum) {
        alert("Cell number entered exceeds the maximum limit!");
        return;
    }
    resetBoard();
    drawBoard();
});