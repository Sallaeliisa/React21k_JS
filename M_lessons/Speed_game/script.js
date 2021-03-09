let buttons = document.querySelectorAll(".circle");
let scoredisplay = document.querySelector("#score");
let overlay = document.getElementById("result");
let gameover = document.getElementById("gameover");
let endBtn = document.getElementById("end");
let startBtn = document.getElementById("start");

let close = document.getElementById("close");

let score = 0;
let active = 0;
let time = 1000;

// Make buttons unclickable and hide stop button

buttons[0].classList.toggle("inactive");
buttons[1].classList.toggle("inactive");
buttons[2].classList.toggle("inactive");
buttons[3].classList.toggle("inactive");
endBtn.style.visibility = "hidden";

// Start game, make buttons clickable again, pick an active button

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const startGame = () => {
    console.log("Game started");

    buttons[0].classList.remove("inactive");
    buttons[1].classList.remove("inactive");
    buttons[2].classList.remove("inactive");
    buttons[3].classList.remove("inactive");
    startBtn.style.visibility = "hidden";
    endBtn.style.visibility = "visible";
  
    let nextActive = pickNew(active);
  
    buttons[nextActive].classList.toggle("active");
    buttons[active].classList.remove("active");
  
    active = nextActive;
  
    console.log("Active:", active);
  
    timer = setTimeout(startGame, time);
  
    function pickNew(active) {
      let nextActive = getRandomInt(0, 3);
  
      if (nextActive != active) {
        return nextActive;
      } else {
        return pickNew(active);
      }
    }

    // Identify which button was clicked

    buttons[0].onclick = function () {
        clicked(0);
      };
      buttons[1].onclick = function () {
        clicked(1);
      };
      buttons[2].onclick = function () {
        clicked(2);
      };
      buttons[3].onclick = function () {
        clicked(3);
      };

    // Increase score and end the game if wrong button is clicked
    // Fasten up the game
    
    const clicked = (i) => {
        if (i == active) {
        console.log(time);
        score++;
        scoredisplay.textContent = `Your score is ${score}`;
        time = time -10;
    } else {
        endGame();
    }
}

// Game ending

  };
  const endGame = () => {
    clearTimeout(timer);
    console.log("Game over");
    overlay.style.visibility = "visible";
    gameover.textContent = `Your score is ${score}`;
  };

  const reloadGame = () => {
    console.log("what?");
    window.location.reload();
  };
  
  close.addEventListener("click", reloadGame);


