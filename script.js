
function drawGrid(number){
    let grid_container = document.querySelector(".grid-container");
    for(let i = 0; i < number; i++){
        const div = document.createElement("div");
        div.classList.add("column");
        div.setAttribute("style", `height: 100%; width: ${100/number}%;`);
        grid_container.appendChild(div);
    

    }

    let columns = document.querySelectorAll(".column");
    for(let j = 0; j < columns.length; j++){
        for(let k = 0; k < number; k++){
            const box = document.createElement("div");
            box.classList.add("box");
            box.setAttribute("style", `height: ${100/number}%; width: 100%;`);
            columns[j].appendChild(box);
        }
    }
}

function colorChange(e) {
    console.log("rajesh")
    if (e.currentTarget.style.backgroundColor == '') {
        e.currentTarget.style.backgroundColor = changeColor();
    }
}

function changeColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    currColor = `rgb(${r}, ${g}, ${b})`

    return currColor;
}

let number = prompt("Enter grid size");
drawGrid(number);
let boxes = document.querySelectorAll(".box");
boxes.forEach(box => {
    box.addEventListener("mouseover", colorChange)
})

let reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
    let grid_container = document.querySelector(".grid-container");
    grid_container.innerHTML = "";
    let number = prompt("Enter grid size");
    drawGrid(number);
    let boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.addEventListener("mouseover", colorChange)
    })
})
