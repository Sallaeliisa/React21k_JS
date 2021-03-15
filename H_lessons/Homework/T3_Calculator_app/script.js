let rightNumber = '';
let leftNumber = '';
let operator = '';
let negativeOrPositive = "";
const display = document.getElementById('input');
display.innerText = "0";
const clearBtn = document.querySelector('#clear');
let operatorBtns = document.querySelectorAll('.operators > *');

document.querySelectorAll('.numbers > *').forEach(button => {
    button.addEventListener('click', function(){
        number = button.value;
        updateSelectedNumber();
        updateDisplay();
    });
})

operatorBtns.forEach(button => {
    button.addEventListener('click', function(){
        operator = button.value;
        if (display.innerText == "0") {
            display.innerText = "";
        }
        if (operator === "-" && rightNumber == '') {
            negativeOrPositive = "negative";
        }
        updateNewNumber();
        updateDisplay();
    })
})

function updateDisplay() {
    if(leftNumber == ""){
    display.innerText = `${operator} ${rightNumber}`;
} else {
    display.innerText = `${leftNumber} ${operator} ${rightNumber}`;
}
}

function updateSelectedNumber() {
    if (number === '.' && rightNumber.indexOf('.') > -1){
        return;
    }
    
    rightNumber += number;
}

function updateNewNumber(){
    if (negativeOrPositive == "negative") {
        leftNumber -= rightNumber;
    } else {
    leftNumber += rightNumber;
}
rightNumber = ''; 
}

function performCalculation(){
    let answer;
    if (operator === '+') answer = Number(leftNumber) + Number(rightNumber);
    if (operator === '-') answer = Number(leftNumber) - Number(rightNumber);
    if (operator === '*') answer = Number(leftNumber) * Number(rightNumber);
    if (operator === '/') answer = Number(leftNumber) / Number(rightNumber);
    display.innerText = answer;
}

const clear = () => {
    leftNumber = '';
    rightNumber = '';
    operator = '';
    display.innerText = 0;
}

document.getElementById('result').addEventListener('click', performCalculation);
clearBtn.addEventListener('click', clear, updateDisplay);