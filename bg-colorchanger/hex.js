const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A","B", "C", "D","E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
let hexColor = "#";
for(let i = 0; i<6 ;i++) {
    const number = getRandomNumber();
    hexColor += hex[number]
}
color.textContent = hexColor;
document.body.style.backgroundColor = hexColor;

alert("Copied Hex Color : " + hexColor);
})

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

//copy color code
btn.addEventListener ("click", function(){
    let hex = document.getElementById("hex");


    navigator.clipboard.writeText(hexColor);
    
    

} );