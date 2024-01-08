let operation = "";
let firstNumber = "";
let secondNumber = "";

function appendNumber(num) {
    if (operation === "") {
        firstNumber += num;
        document.getElementById("result").value = firstNumber;
    } else {
        secondNumber += num;
        document.getElementById("result").value = secondNumber;
    }
}

function setOperation(op) {
    operation = op;
}

function calculate() {
    let result;
    switch (operation) {
        case "+":
            result = parseInt(firstNumber) + parseInt(secondNumber);
            break;
        case "-":
            result = parseInt(firstNumber) - parseInt(secondNumber);
            break;
        case "*":
            result = parseInt(firstNumber) * parseInt(secondNumber);
            break;
        case "/":
            result = parseInt(firstNumber) / parseInt(secondNumber);
            break;
    }
    document.getElementById('result').value = result;
}

function clearResult() {
    operation = '';
    firstNumber = '';
    secondNumber = '';
    document.getElementById('result').value = '';
}
