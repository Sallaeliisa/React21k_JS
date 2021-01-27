function calculate() {
    let hSalary = Number(document.getElementById("hSalary").value);
    let hours = Number(document.getElementById("hours").value);
    let answer = document.getElementById("answer");
    let salary;

    if (hours <= 7) {
        salary = hours * hSalary;
    } else if (7 < hours && hours <= 9) {
        salary = 7 * hSalary + 1.5 * hSalary * (hours - 7);
    } else {
        salary = 7 * hSalary + 2 * 1.5 * hSalary + (hours - 9) * 2 * hSalary;
    }

    answer.textContent = "Your salary is " + salary + " €."; 
        
    }