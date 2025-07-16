function sum(a, b) {
    return a + b;
}
function multiply(a, b) {
    return a * b;
}
function subtract(a, b) {
    return a - b;
}
function divide(a, b) {
    if (b === 0) {
        console.log("Error: Division by zero is not allowed.");
        return null;
    }
    return a / b;
}
function mod(a, b) {
    return a % b;
}

let isContinue = true;

while (isContinue) {
    let userresponse = prompt("Do you want to perform a calculation? (yes/no)");
    if (userresponse === "no") {
        console.log("Exiting the calculator.");
        break;
    }

    let a = parseFloat(prompt("Enter first number:"));
    let b = parseFloat(prompt("Enter second number:"));
    let operation = prompt("Enter operation (+, *, -, /, %):");

    let result;
    switch (operation) {
        case "+":
            result = sum(a, b);
            console.log("result = " + result);  
            break;
        case "*":
            result = multiply(a, b);
            console.log("result = " + result);  
            break;
        case "-":
            result = subtract(a, b);
            console.log("result = " + result);  
            break;
        case "/":
            result = divide(a, b);
            console.log("result = " + result);  
            break;
        case "%":
            result = mod(a, b);
            console.log("result = " + result);  
            break;
        default:
            console.log("Error: Invalid operation.");
            continue;
    }

    
}
