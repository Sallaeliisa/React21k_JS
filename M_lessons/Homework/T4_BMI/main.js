function calculate() {
    let weight = Number(document.getElementById("weight").value);
    let height = Number((document.getElementById("height").value) / 100);
    let bmi = Math.round(weight / (height * height) * 10) / 10;

    let answer = document.getElementById("answer");
    let text;

    if (bmi < 18.5) {
        text = "Your body mass index is " + bmi + ". That means your status is: Underweight";
    } else if (18.5 <= bmi && bmi <= 24.9) {
        text = "Your body mass index is " + bmi + ". That means your status is: Healthy Weight";
    } else if (25.0 <= bmi && bmi <= 29.9) {
        text = "Your body mass index is " + bmi + ". That means your status is: Overweight";
    } else {
        text = "Your body mass index is " + bmi + ". That means your status is: Obese";
    }

    answer.textContent = text; 
        
    }