let number1 = Math.floor(Math.random()*2);
let number2 = Math.floor(Math.random()*2);
let number3 = Math.floor(Math.random()*2);
let number4 = Math.floor(Math.random()*2);
let number5 = Math.floor(Math.random()*2);
let propability = 0.5**5

console.log(number1, number2, number3, number4, number5)
if (number1==1 && number2==1 && number3==1 && number4==1 && number5==1){
    console.log("Congratulations, you won the jackpot prize!\nThe chance of winning the jackpot is 3,125 %.")
    }else if (number1==0 && number2==0 && number3==0 && number4==0 && number5==0){
    console.log("Congratulations! Getting all five 0s is as hard as winning the jackpot.\nUnfortunately you didn't win a prize though.")
    
}
