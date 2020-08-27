let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("messageDisplay");

let colors = generateRandomColors(6);
let pickedColor = pickColor();

colorDisplay.textContent = pickedColor;
for(let i = 0; i < squares.length; i++) {
    //Add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    
    //Add click listeners to squares
    squares[i].addEventListener("click", function(){
        let clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct";
            changeColors(clickedColor);
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again";
        }
    });
}

function changeColors(clickedColor) {
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
    console.log(array);
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