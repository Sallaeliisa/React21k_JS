let firstNumber = '';
let secondNumber = '';
let operation = '';

document.getElementById('result').addEventListener('click', performCalculation);

document.querySelectorAll('.operators > div').forEach(button => {
    button.addEventListener('click', function(){
        updateSelectedOperation();
        updateDisplay();
    })
})

document.querySelectorAll('.numbers > div').forEach(button => {
    button.addEventListener('click', function(){
        updateSelectedNumber();
        updateDisplay();
    });
})

function updateDisplay() {
    document.getElementById('input').innerText = `${firstNumber} ${operation} ${secondNumber}`;
}

function updateSelectedNumber() {
    if (this.innerText === '.' && firstNumber.indexOf('.') > -1){
        return;
    }

    firstNumber += this.innerText;
}

/**
 * update the variable operation with the user choice
 * @return {void}
 */
function updateSelectedOperation(){
    secondNumber = firstNumber;
    firstNumber = '';

    switch(this.innerText){
        case '+':
            operation = 'plus';
            break;
        case '-':
            operation = 'minus';
            break;
        case '&times;':
            operation = 'multiply';
            break;
        case '&divide;':
            operation = 'divide';
            break;   
        default:
            console.log('Oops?');
            break;
    }
}

/**
 * perform the actual calculation depending on user choice
 * @return {number} result of the calculation
 */
function performCalculation(){
    if (operation === 'plus') return firstNumber + secondNumber;
    if (operation === 'minus') return firstNumber - secondNumber;
}