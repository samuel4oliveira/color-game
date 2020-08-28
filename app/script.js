let colors = [];
let numberOfSquares = 6;
let pickedColor = '';
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#resetButton");
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("messageDisplay");
let easyButton = document.getElementById("easyButton");
let hardButton = document.getElementById("hardButton");


initilizeGame(numberOfSquares);

easyButton.addEventListener("click", setEasyMode);
hardButton.addEventListener("click", setHardMode);
resetButton.addEventListener("click", function(){initilizeGame(numberOfSquares);});

function setEasyMode(){
    numberOfSquares = 3;
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    initilizeGame(numberOfSquares);
}

function setHardMode(){
    numberOfSquares = 6;
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    initilizeGame(numberOfSquares);
}

function initilizeGame(numberOfSquares){
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "#232323";
    squareColoring();
}

function squareColoring() {
    for(let i = 0; i < squares.length; i++) {
        //Add colors to squares
        if(colors[i]) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }else {
            squares[i].style.display = "none";
        }
        
        //Add click listeners to squares
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