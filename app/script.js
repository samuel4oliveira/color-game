let colors = [];
let pickedColor = '';
let numberOfSquares = 6;
let h1 = document.querySelector("h1");
let squares = document.querySelectorAll(".square");
let resetButton = document.querySelector("#resetButton");
let colorDisplay = document.getElementById("colorDisplay");
let modeButtons = document.querySelectorAll(".modeButton");
let messageDisplay = document.getElementById("messageDisplay");

init();

function init() {
    setupModeButtons();
    setupSquares();
    reset();
}

function reset(){
    messageDisplay.textContent = '';
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "NEW COLORS";
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    squareColoring();
}

function setupModeButtons() {
    for(let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "EASY"? numberOfSquares = 3: numberOfSquares = 6;
            reset()
        })
    }
    resetButton.addEventListener("click", function(){reset();});
}

function setupSquares() {
    for(let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function(){
            let clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?"
                changeColors(clickedColor);
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try again";
            }
        });
    }
}

function squareColoring() {
    for(let i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }else {
            squares[i].style.display = "none";
        }
    }
}

function changeColors(clickedColor) {
    h1.style.backgroundColor = clickedColor;
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = clickedColor;
    }
}

function pickColor() {
   let random = Math.floor( Math.random() * colors.length);
   return colors[random];
}

function generateRandomColors(number) {
    let array = [];

    for(let i = 0; i < number; i++){
        array.push(randomColor());
    }
    return array;
}

function randomColor() {
    let rgb = '';
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    
    rgb = "rgb(" + r + ', ' + g + ', ' + b + ")";
    return rgb;
}