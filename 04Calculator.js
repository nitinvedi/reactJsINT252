const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const calculator = (num1, num2, operation) => {
    if(operation == '+'){
        return add(num1, num2);
    }
    else if(operation == '-'){
        return subtract(num1, num2);
    }
    else if(operation == '*'){
        return multiply(num1, num2);
    }
    else if(operation == '/'){
        return divide(num1, num2);
    }
}

console.log(calculator(10, 5, '+'));