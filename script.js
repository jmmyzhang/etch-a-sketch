let gridSize = 16;
const grid = document.querySelector("#grid");
const change = document.querySelector("#change");


function changeGrid (size) {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

    for (let i = 0; i < size; i++) {
        const row = document.createElement("div")
        row.id = "row";

        for (let j = 0; j < size; j++) {
            const square = document.createElement("div");
            square.id = "square";
            row.appendChild(square);

        grid.appendChild(row);
        }
    }
}


document.addEventListener("DOMContentLoaded", changeGrid(gridSize));


grid.addEventListener("mouseover", (e) => {
    let target = e.target;
    if (target.id === "square") {
        target.style.backgroundColor = "#cccccc";
    }
});


grid.addEventListener("mouseout", (e) => {
    let target = e.target;
    if (target.id === "square") {
        target.style.backgroundColor = "white";
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


change.addEventListener("mouseover", () => {
    change.style.backgroundColor = "#cccccc";
});


change.addEventListener("mouseout", () => {
    change.style.backgroundColor = "#e5e5e5";
});