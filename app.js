const numOfCells = 16;

function drawBoard() {
    for (let y = 0; y <= numOfCells; y++) {
        console.log("Y Cell Num: " + y);
        for (let x = 0; x <= numOfCells; x++) {
            console.log("X Cell Num: " + x);            
        }
    }
}

drawBoard();