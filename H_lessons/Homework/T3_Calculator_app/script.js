let rightNumber = '';
let leftNumber = '';
let operator = '';
let quality = "";
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
            quality = "negative";
        }
        updateNewNumber();
        updateDisplay();
    })
})


function updateDisplay() {
    if(leftNumber == "0"){
    display.innerText = `${operator} ${rightNumber}`;
} else {
    display.innerText = `${leftNumber} ${operator} ${rightNumber}`;
}
}

function updateSelectedNumber() {
    // if (number === '.' && firstNumber.indexOf('.') > -1){
    //     return;
    // }
    
    rightNumber += number;
}

/**
 * update the variable operation with the user choice
 * @return {void}
 */
function updateNewNumber(){
console.log(quality);
    if (quality == "negative") {
        leftNumber -= rightNumber;
    } else {
    leftNumber += rightNumber;
}
rightNumber = '';



    
    

    // switch(operator){
    //     case '+':
    //         operation = '+';
    //         break;
    //     case '-':
    //         operation = '-';
    //         break;
    //     case '*':
    //         operation = '*';
    //         break;
    //     case '/':
    //         operation = '/';
    //         break;   
    //     default:
    //         console.log('Oops?');
    //         break;
    // }
}

/**
 * perform the actual calculation depending on user choice
 * @return {number} result of the calculation
 */
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