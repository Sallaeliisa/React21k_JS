let buttons = document.querySelectorAll(".circle");
let scoredisplay = document.querySelector("#score");
let overlay = document.getElementById("result");
let gameover = document.getElementById("gameover");
let feedback = document.getElementById("feedback");
let bestScore = document.getElementById("bestScore");
let endBtn = document.getElementById("end");
let startBtn = document.getElementById("start");
let againBtn = document.getElementById("again");
let music = document.getElementById("music");
let sound = document.getElementById("sound");
let close = document.getElementById("close");
let message;
let score = 0;
let active = 0;
let time = 1000;
let missed = -1;
let record = 0;

// Make buttons unclickable and hide stop & play again buttons

buttons[0].classList.toggle("inactive");
buttons[1].classList.toggle("inactive");
buttons[2].classList.toggle("inactive");
buttons[3].classList.toggle("inactive");
endBtn.style.visibility = "hidden";
againBtn.style.visibility = "hidden";

// Start game, make buttons clickable again, pick an active button

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const startGame = () => {
  music.play();
  buttons[0].classList.remove("inactive");
  buttons[1].classList.remove("inactive");
  buttons[2].classList.remove("inactive");
  buttons[3].classList.remove("inactive");
  startBtn.style.visibility = "hidden";
  againBtn.style.visibility = "hidden";
  endBtn.style.visibility = "visible";

  let nextActive = pickNew(active);

  buttons[nextActive].classList.toggle("active");
  buttons[active].classList.remove("active");

  active = nextActive;

  missed += 1;

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
      score++;
      missed = -1;
      scoredisplay.textContent = `Your score is ${score}`;
      time = time - 10;
    } else {
      endGame();
    }
  };

  // Game ends if player misses 3 in a row in the beginning, or 1 later

  if (missed == 3) {
    endGame();
  } else if (score > 0 && missed > 0) {
    endGame();
  }
};

// Game ending

const endGame = () => {
  music.pause();
  sound.play();
  buttons[active].classList.remove("active");
  buttons[0].classList.toggle("inactive");
  buttons[1].classList.toggle("inactive");
  buttons[2].classList.toggle("inactive");
  buttons[3].classList.toggle("inactive");
  clearTimeout(timer);
  overlay.style.visibility = "visible";

  if (score < 5) {
    message = "You can do better. Try again?";
  } else if (score < 10) {
    message = "Keep practicing";
  } else if (score < 20) {
    message = "Not bad";
  } else if (score < 30) {
    message = "Well done!";
  } else if (score < 40) {
    message = "You really are fast!";
  } else {
    message = "Amazing!";
  }

  if (score > record) {
    record = score;
  }

  gameover.textContent = `Your score is ${score}`;
  feedback.textContent = message;
  bestScore.textContent = `Your best score is ${record}`;
}

// Reload game without losing best score record

const reloadGame = () => {
  score = 0;
  missed = -1;
  time = 1000;
  scoredisplay.textContent = `Your score is 0`;
  overlay.style.visibility = "hidden";
  console.log(score);
  againBtn.style.visibility = "visible";
  startBtn.style.visibility = "hidden";
  endBtn.style.visibility = "hidden";
};

close.addEventListener("click", reloadGame);
