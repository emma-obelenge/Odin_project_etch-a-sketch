let divPerSide = 16;
let totalSquares = divPerSide * divPerSide;
let userInput;

// creating elements
const container = document.querySelector(".container");
const userInputButton = document.createElement("button");
const gridDiv = document.createElement("div");

// appending initial elements before the gridbox
container.appendChild(userInputButton);
container.appendChild(gridDiv);

// initializing attributes
gridDiv.setAttribute("class", "gridDiv")

// styling
userInputButton.textContent = "Modify Grid";
userInputButton.style.marginBottom = "0.5rem";

function userModifiedLoadGrid(userInput) {
    let userInputValue = parseInt(userInput);
    if(isNaN(userInputValue) || userInputValue < 1 || userInputValue >100) {
        alert("Please Enter a valid number (between 1 and 100)");
        return;
    } else {
        divsToRemove = document.querySelectorAll(".squares")
        divsToRemove.forEach(div => {
            div.remove();
        });
        divPerSide = userInputValue
        totalSquares = divPerSide * divPerSide;
        loadGrid();
    }
}
function loadGrid() {
    gridDiv.style.width = divPerSide + 0.26+ "rem";
    gridDiv.style.height = divPerSide + 0.26 + "rem";
    for(i = 1; i <= totalSquares; i++) {
            const squareDiv = document.createElement("div");
            squareDiv.setAttribute("id", "square" + i);
            squareDiv.setAttribute("class", "squares");
            gridDiv.appendChild(squareDiv);
    }
    container.appendChild(gridDiv);
}

function getColor() {
    colorHex = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++) {
        color += colorHex[Math.floor(Math.random() * 16)]
    }
    return(color);
}

// event listeners
container.addEventListener("mouseover", (eventObj) => {
    const target = eventObj.target;
    if(target.classList.contains("squares")) {
        pixelColor = getColor();
        target.style.backgroundColor = pixelColor;
    }
});

userInputButton.addEventListener("click", () => {
    userInput = prompt("Enter your prefered number of squares per side");
    userModifiedLoadGrid(userInput);

})

window.addEventListener("DOMContentLoaded", () => {
    loadGrid();
})