const grid = document.querySelector("#grid");

for (let i = 0; i < 16; i++) {
    const row = document.createElement("div")
    row.id = "row";

    for (let j = 0; j < 16; j++) {
        const square = document.createElement("div");
        square.id = "square";
        row.appendChild(square);

    grid.appendChild(row);
    }
}

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