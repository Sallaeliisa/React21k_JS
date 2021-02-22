
const numberOfBulbs = 10;
const delay = 500;

let counter = 0;
let arrayOfBulbs = [];

while(counter < numberOfBulbs) {
    const newEl = document.createElement("div");
    newEl.className = "bulb";
    document.getElementById("bulbs").appendChild(newEl);
    arrayOfBulbs[counter] = false;
    counter++;
}

counter=0;
arrayOfBulbs[counter] = true;
document.getElementsByClassName("bulb")[counter].classList.add("active");

const play = setInterval (() => {
    arrayOfBulbs[counter] = false;
    document.getElementsByClassName("bulb")[counter].classList.remove("active");

    if (counter < numberOfBulbs -1) {
        counter++;
    } else {
        counter = 0;
    }

    arrayOfBulbs[counter] = true;
    document.getElementsByClassName("bulb")[counter].classList.add("active");

    console.clear();
    console.log(arrayOfBulbs);
}, delay);

document.getElementById("stopBtn").addEventListener("click", () => {
    document.getElementsByClassName("bulb")[counter].classList.add("chosen");
    arrayOfBulbs[counter] = false;
    document.getElementsByClassName("bulb")[counter].classList.remove("active");
    counter++;
    clearInterval(play);
})

