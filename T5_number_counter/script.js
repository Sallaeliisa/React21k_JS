const myNumber = Math.round(Math.random() * 1001);
let result;

if (0 <= myNumber && myNumber <= 10) {

  switch (myNumber) {
    case 0:
      result = "nolla";
      break;
    case 1:
      result = "yksi";
      break;
    case 2:
      result = "kaksi";
      break;
    case 3:
      result = "kolme";
      break;
    case 4:
      result = "neljä";
      break;
    case 5:
      result = "viisi";
      break;
    case 6:
      result = "kuusi";
      break;
    case 7:
      result = "seitsemän";
      break;
    case 8:
      result = "kahdeksan";
      break;
    case 9:
      result = "yhdeksän";
      break;
    case 10:
      result = "kymmenen";
      break;
    default:
      break;
  }
} else if (10 <= myNumber && myNumber <= 19) {
  let ones = myNumber - 10;

  switch (ones) {
    case 1:
      result = "yksi";
      break;
    case 2:
      result = "kaksi";
      break;
    case 3:
      result = "kolme";
      break;
    case 4:
      result = "neljä";
      break;
    case 5:
      result = "viisi";
      break;
    case 6:
      result = "kuusi";
      break;
    case 7:
      result = "seitsemän";
      break;
    case 8:
      result = "kahdeksan";
      break;
    case 9:
      result = "yhdeksän";
      break;
    default:
      break;
  }
  result += "toista";
} else if (20 <= myNumber && myNumber <= 99) {
  let tens = Math.floor(myNumber / 10);
  let ones = myNumber % 10;

  switch (tens) {
    case 1:
      result = "yksi";
      break;
    case 2:
      result = "kaksi";
      break;
    case 3:
      result = "kolme";
      break;
    case 4:
      result = "neljä";
      break;
    case 5:
      result = "viisi";
      break;
    case 6:
      result = "kuusi";
      break;
    case 7:
      result = "seitsemän";
      break;
    case 8:
      result = "kahdeksan";
      break;
    case 9:
      result = "yhdeksän";
      break;
    default:
      break;
  }
  result += "kymmentä";

  switch (ones) {
    case 1:
      result += "yksi";
      break;
    case 2:
      result += "kaksi";
      break;
    case 3:
      result += "kolme";
      break;
    case 4:
      result += "neljä";
      break;
    case 5:
      result += "viisi";
      break;
    case 6:
      result += "kuusi";
      break;
    case 7:
      result += "seitsemän";
      break;
    case 8:
      result += "kahdeksan";
      break;
    case 9:
      result += "yhdeksän";
      break;
    default:
      break;
  }
} else if (myNumber == 100) {
  result = "sata";
} else if (101 <= myNumber && myNumber <= 999 && 11 <= myNumber % 100 &&
          myNumber % 100 <= 19) {
  let hundreds = Math.floor(myNumber / 100);

  switch (hundreds) {
    case 1:
      result = "sata";
      break;
    case 2:
      result = "kaksisataa";
      break;
    case 3:
      result = "kolmesataa";
      break;
    case 4:
      result = "neljäsataa";
      break;
    case 5:
      result = "viisisataa";
      break;
    case 6:
      result = "kuusisataa";
      break;
    case 7:
      result = "seitsemänsataa";
      break;
    case 8:
      result = "kahdeksansataa";
      break;
    case 9:
      result = "yhdeksänsataa";
      break;
    default:
      break;
  }

  switch (myNumber % 100) {
    case 11:
      result += "yksitoista";
      break;
    case 12:
      result += "kaksitoista";
      break;
    case 13:
      result += "kolmetoista";
      break;
    case 14:
      result += "neljätoista";
      break;
    case 15:
      result += "viisitoista";
      break;
    case 16:
      result += "kuusitoista";
      break;
    case 17:
      result += "seitsemäntoista";
      break;
    case 18:
      result += "kahdeksantoista";
      break;
    case 19:
      result += "yhdeksäntoista";
      break;
    default:
      break;
  }
} else if (101 <= myNumber && myNumber <= 999) {
  let hundreds = Math.floor(myNumber / 100);
  let tens = Math.floor((myNumber % 100) / 10);
  let ones = myNumber % 10;

  switch (hundreds) {
    case 1:
      result = "sata";
      break;
    case 2:
      result = "kaksisataa";
      break;
    case 3:
      result = "kolmesataa";
      break;
    case 4:
      result = "neljäsataa";
      break;
    case 5:
      result = "viisisataa";
      break;
    case 6:
      result = "kuusisataa";
      break;
    case 7:
      result = "seitsemänsataa";
      break;
    case 8:
      result = "kahdeksansataa";
      break;
    case 9:
      result = "yhdeksänsataa";
      break;
    default:
      break;
  }

  switch (tens) {
    case 1:
      result += "kymmenen";
      break;
    case 2:
      result += "kaksikymmentä";
      break;
    case 3:
      result += "kolmekymmentä";
      break;
    case 4:
      result += "neljäkymmentä";
      break;
    case 5:
      result += "viisikymmentä";
      break;
    case 6:
      result += "kuusikymmentä";
      break;
    case 7:
      result += "seitsemänkymmentä";
      break;
    case 8:
      result += "kahdeksankymmentä";
      break;
    case 9:
      result += "yhdeksänkymmentä";
      break;
    default:
      break;
  }

  switch (ones) {
    case 1:
      result += "yksi";
      break;
    case 2:
      result += "kaksi";
      break;
    case 3:
      result += "kolme";
      break;
    case 4:
      result += "neljä";
      break;
    case 5:
      result += "viisi";
      break;
    case 6:
      result += "kuusi";
      break;
    case 7:
      result += "seitsemän";
      break;
    case 8:
      result += "kahdeksan";
      break;
    case 9:
      result += "yhdeksän";
      break;
    default:
      break;
  }
} else {
  result = "tuhat";
}

console.log(myNumber);
console.log(result);
