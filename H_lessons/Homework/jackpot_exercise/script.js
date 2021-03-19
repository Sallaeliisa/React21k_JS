let i = 0;
let roundsTotal = 0;

while (i <= 4) {
  i++;
  let rounds = 0;

  while (true) {
    let counter0 = 0;
    let counter1 = 0;

    let myArray = [
      Math.floor(Math.random() * 6),
      Math.floor(Math.random() * 6),
      Math.floor(Math.random() * 6),
      Math.floor(Math.random() * 6),
      Math.floor(Math.random() * 6),
    ];

    switch (myArray[0]) {
      case 0:
        counter0 += 1;
        break;
      case 1:
        counter1 += 1;
        break;
    }
    switch (myArray[1]) {
      case 0:
        counter0 += 1;
        break;
      case 1:
        counter1 += 1;
        break;
    }
    switch (myArray[2]) {
      case 0:
        counter0 += 1;
        break;
      case 1:
        counter1 += 1;
        break;
    }
    switch (myArray[3]) {
      case 0:
        counter0 += 1;
        break;
      case 1:
        counter1 += 1;
        break;
    }
    switch (myArray[4]) {
      case 0:
        counter0 += 1;
        break;
      case 1:
        counter1 += 1;
        break;
    }
    rounds += 1;
    roundsTotal += 1;

    // console.log("Number of 1s: " + counter1);
    // console.log("Number of 0s: " + counter0);

    if (counter1 == 5) {
      console.log(
        "Congratulations! You win the jackpot! It took " + rounds + " rounds.");
      break;
    } else if (counter0 == 5) {
      console.log("Congratulations! You got all five 0s.");
    } else if (3 < counter1 && counter1 < 5) {
      console.log("Congratulations! You got " + counter1 + " 1s. You win a small prize.");
    }
  }
}
let roundsAverage = Math.round(roundsTotal / 5);
let cost = roundsAverage * 0.5

console.log(
  "It takes " + roundsAverage + " rounds on average to win the jackpot. " + roundsAverage +
  " rounds cost " + cost + " €.");

  if (cost > 30000) {
      console.log("You make " + (cost - 30000) + " € loss.")
  } else {
      console.log("You make " + (30000 - cost) + " € profit.")
  }
