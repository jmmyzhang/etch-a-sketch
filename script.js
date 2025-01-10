let gridSize = 16;
const grid = document.querySelector("#grid");
const change = document.querySelector("#change");
const erase = document.querySelector("#erase");


function changeGrid (size) {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

    for (let i = 0; i < size; i++) {
        const row = document.createElement("div")
        row.id = "row";

        for (let j = 0; j < size; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.id = "white";
            row.appendChild(square);

        grid.appendChild(row);
        }
    }
    const h2 = document.querySelector("h2");
    h2.innerText = `Current Grid: ${gridSize} X ${gridSize}`;
}


document.addEventListener("DOMContentLoaded", changeGrid(gridSize));


grid.addEventListener("mouseover", (e) => {
    let target = e.target;
    if (e.buttons === 1 && target.id === "white") {
        target.id = "black";
    }
});


change.addEventListener("click", () => {
    gridSize = Number(prompt("Enter desired grid size"));
    
    while (gridSize > 100 || !Number.isInteger(gridSize)) {
        gridSize = Number(prompt("Error: please enter valid size"));
    }

    if (gridSize === 0) {
        return
    }

    changeGrid(gridSize);
});


erase.addEventListener("click", () => {
    let colored = document.querySelectorAll("#black");
    colored.forEach(element => {
        element.id = "white";
    });
});