
function drawGrid(){
    let grid_container = document.querySelector(".grid-container");
    for(let i = 0; i < 16; i++){
        const div = document.createElement("div");
        div.classList.add("column");
        div.setAttribute("style", `height: 100%; width: ${100/16}%;`);
        grid_container.appendChild(div);
    

    }

    let columns = document.querySelectorAll(".column");
    for(let j = 0; j < columns.length; j++){
        console.log(j);
        for(let k = 0; k < 16; k++){
            const box = document.createElement("div");
            box.classList.add("box");
            box.setAttribute("style", `height: ${100/16}%; width: 100%;`);
            columns[j].appendChild(box);
        }
    }
}

drawGrid();