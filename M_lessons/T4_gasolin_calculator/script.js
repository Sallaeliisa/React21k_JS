

function calculate() {
    let price = Number(document.getElementById("price").value);
    let money = Number(document.getElementById("money").value);
    let answer = document.getElementById("answer");
    let liters = money / price;
    let text;
    let solution = document.getElementById("solution");
    answer.textContent = Math.floor(liters);

    liters >= 10
        ? (text = "Good, you can escape now")
        : (text = "Oops, you have to stay here");

    solution.textContent = text;
        
    }



    // calculate = (price, money) => {
    //     answer.textContent = money / price;
    // }
    // const calculate = (val) => console.log(answe.textContent);




// function hello() {
//     alert("Hello, my name is Salla");
//     whoareyou();
// }
// function whoareyou() {
//     let yourname = prompt("What is your name?");
//     greeting(yourname);  
// }

// function greeting(name) {
//     document.write(name);
// }

// hello();