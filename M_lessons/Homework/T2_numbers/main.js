function calculate() {
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);
    let number3 = Number(document.getElementById("number3").value);
    let answer = document.getElementById("answer");
    let text;

    if (number1 >= 0 && number2 >= 0 && number3 >= 0) {
        text = "Sum: " + (number1 + number2 + number3) + "\n" + "Multiplication: " + number1 * number2 * number3

    } else if (number1 >= 0 || number2 >= 0 || number3 >= 0) {
        text = number1 + number2 + number3
    } else {
        text = "only negatives"
    }

    answer.textContent = text; 
        
    }