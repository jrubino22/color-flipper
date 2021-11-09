const colorsArray = ["blue", "green", "red", "yellow"]


let button = document.body.querySelector(".button");
 
 function changeColor() {
    const targetNumber = Math.floor(Math.random() * colorsArray.length) 
    const targetColor = targetNumber[colorsArray];
    return document.body.style.backgroundColor = "targetColor";
}