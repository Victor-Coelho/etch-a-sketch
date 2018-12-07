/* let gridRow = document.createElement("div");
gridRow.classList.toggle("row");
let gridColumn = document.createElement("div");
gridColumn.classList.toggle("column");
gridRow.appendChild(gridColumn);
document.body.appendChild(gridRow); */

let grid = document.querySelector(".grid");
for(let i = 0; i < 16; i++) {
    let gridRow = document.createElement("div");
    gridRow.classList.toggle("row");
    for(let j = 0; j < 16; j++) {
        let gridColumn = document.createElement("div");
        gridColumn.classList.toggle("column");
        gridRow.appendChild(gridColumn);
    }
    grid.appendChild(gridRow);
}

document.addEventListener("mouseover", function(event) {
    if(event.target.matches(".column")) {
        event.target.style.backgroundColor = "#414141";
        console.log(event.target);
    }
})
