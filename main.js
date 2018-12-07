let grid = document.querySelector(".grid");
for(let i = 1; i <= 16; i++) {
    for(let j = 1; j <= 16; j++){
        let gridElem = document.createElement("div");
        gridElem.classList.add(`cell[${i}][${j}]`, "grid-cells");
        gridElem.setAttribute("style", `grid-column: ${i} ${j}; grid-row: ${i} ${j}`);
        gridElem.style.backgroundColor = "#949494";
        grid.appendChild(gridElem);
    }
    
}

document.addEventListener("mouseover", function(event) {
    if(event.target.matches(".grid-cells")) {
        event.target.style.backgroundColor = "#414141";
        console.log(event.target);
    }
})
