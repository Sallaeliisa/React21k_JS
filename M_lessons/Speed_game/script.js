let body = document.querySelector("body")
let circles = document.querySelectorAll(".circle");
let stopBtn = document.getElementById("stopBtn");

let score = 0;

console.log(circleArray[2]);


const clickFunction = () => {
    console.log(circleArray[this.Number]);
    score++;
    console.log(score);
}

const stopFunction = () => {
    console.log("stop");
    body.classList.add("bg");
}

circleArray.forEach((el) => {
el.addEventListener("click", clickFunction);
});

stopBtn.addEventListener("click", stopFunction);