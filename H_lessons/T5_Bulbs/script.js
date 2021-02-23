
const numberOfBulbs = 20;
const chosenIndex = Math.round(Math.random() * numberOfBulbs);
const delay = 500;
let play;

let counter = 0;
let arrayOfBulbs = [];


document.getElementById("startBtn").addEventListener ("click", () => {
    const blinkingSpeed = document.getElementById("speed").value ? document.getElementById("speed").value : delay;
    const bulbCount = document.getElementById("bulbCount").value;
    console.log(bulbCount);

    while(counter < bulbCount) {
        const newEl = document.createElement("div");
        newEl.className = "bulb";
        document.getElementById("light-bulbs").appendChild(newEl);
        arrayOfBulbs[counter] = false;
        counter++;
        console.log(bulbCount);
    }

    const arrangeItems = nodes => {   
        const radius = '12em',
            start = -90,
            $els = [...nodes],
            numberOfEls = $els.length,
            slice = 360 / numberOfEls,
            index = 0;
    
        $els.forEach((el, i) => {
            const rotate = slice * i + start;
            const rotateReverse = rotate * -1;
    
            el.style.transform = `rotate(${rotate}deg) translate(${radius}) rotate(${rotateReverse}deg)`;
        })
    }
    arrangeItems(document.getElementsByClassName("bulb"));

    counter=0;
arrayOfBulbs[counter] = true;
arrayOfBulbs[chosenIndex] = true;
document.getElementsByClassName("bulb")[counter].classList.add("active");
document.getElementsByClassName("bulb")[chosenIndex].classList.add("chosen");

play = setInterval (() => {
    arrayOfBulbs[counter] = false;
    document.getElementsByClassName("bulb")[counter].classList.remove("active");

    if (counter < bulbCount -1) {
        counter++;
    } else {
        counter = 0;
    }

    arrayOfBulbs[counter] = true;
    document.getElementsByClassName("bulb")[counter].classList.add("active");

}, blinkingSpeed);});


document.getElementById("stopBtn").addEventListener("click", () => {
    document.getElementsByClassName("bulb")[counter].classList.add("result");
    arrayOfBulbs[counter] = false;
    document.getElementsByClassName("bulb")[counter].classList.remove("active");
    counter++;
    clearInterval(play);
    if (

        (counter - 1) === chosenIndex
    ) {
        alert('won');
    } else {
        alert('No win');
    }
})




