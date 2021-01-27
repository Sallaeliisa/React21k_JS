function test() {
    let number = Number(document.getElementById("number").value);
    let positive = document.getElementById("positive");
    let answer = document.getElementById("answer");
    let text1;
    let text2;

    number >= 0
        ? (text1 = "positive number") : (text1 = "negative number");

    positive.textContent = text1;

    if (number % 2 == 0) {
        text2 = "that is even number"; 
    } else {
        text2 = "that number is odd";
    }

    answer.textContent = text2; 
        
    }