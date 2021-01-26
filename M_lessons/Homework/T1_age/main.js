function calculate() {
    let age = Number(document.getElementById("age").value);
    let answer = document.getElementById("answer");
    let text;

    if (age < 18) {
        text = "You are too young";
    } else if (age < 27) {
        text = "Right age for military service";
    } else if (age < 41) {
        text = "You are in reserve";
    } else if (age < 55) {
        text = "You are in backup reserve";
    } else {
        text = "Too aged"
    }

    answer.textContent = text;
        
    }