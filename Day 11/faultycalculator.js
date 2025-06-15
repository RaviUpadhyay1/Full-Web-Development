let a = prompt("Enter a first number")
let b = prompt("Enter a second number")
let operator = prompt("Enter an operation(+,-,*,/)")

function faultyCalculator(a, b, operator) {
    if (operator === "+") {
        return a - b;
    }
    else if (operator === "-") {
        return a * b;
    }
    else if (operator === "*") {
        return a / b;
    }
    else if (operator === "/") {
        return a + b;
    }
    else {
        return ("Invalid Operator")
    }
}
let result = faultyCalculator(a, b, operator);
alert("Result: " + result);