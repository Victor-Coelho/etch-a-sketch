function createGrid(numRows, numColumns) {
    let grid = document.querySelector(".grid");
    grid.setAttribute("style", `grid-template-columns: repeat(${numColumns}, 1fr); grid-template-rows: repeat(${numRows}, 1fr);`);
    for(let i = 1; i <= numRows; i++) {
        for(let j = 1; j <= numColumns; j++){
            let gridElem = document.createElement("div");
            gridElem.classList.add(`cell[${i}][${j}]`, "grid-cells");
            gridElem.setAttribute("style", `grid-column: ${i} ${j}; grid-row: ${i} ${j}`);
            gridElem.style.backgroundColor = "#949494";
            grid.appendChild(gridElem);
        }
    }
}

document.addEventListener("mouseover", function(event) {
    if(event.target.matches(".grid-cells")) {
        event.target.style.backgroundColor = "#414141";
    }
})

document.addEventListener("click", function(event) {
    if(event.target.matches(".reset")) {
        location.reload(true);
    }
})

let size = prompt("What size should the board be? Remember: input only one number!", "Example: 16");
createGrid(Number(size), Number(size));