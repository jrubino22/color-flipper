
const colorsArray = ["blue", "green", "red", "yellow"]

const butn = document.querySelector("#btn")
 
 butn.addEventListener("click", function()  {

    const targetNumber = Math.floor(Math.random() * colorsArray.length) 
    const targetColor = colorsArray[targetNumber];

    
   
    document.body.style.backgroundColor = targetColor;
    document.querySelector(".label").textContent = "This color is " + targetColor
})