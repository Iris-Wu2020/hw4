/* Tutorial 4
Example 1 JavaScript code
*/
console.log("Wu's Output from hw4 Exercise 1");

const calculationFunction = (number1, number2, operation) => {
    switch (operation) {
    case "+":
        console.log(`${number1} + ${number2} = ${number1 + number2}`);
        break;
    case "-":
        console.log(`${number1} - ${number2} = ${number1 - number2}`);
        break;
    case "*":
        console.log(`${number1} * ${number2} = ${number1 * number2}`);
        break;
    case "/":
        console.log(`${number1} / ${number2} = ${number1 / number2}`);
        break;
    default:
        console.log("The operation you entered is invalid!");
    }

}

let number1 = Number(prompt("Please enter an integer:"));
let number2 = Number(prompt("Please enter another integer:"));
let operation = prompt("Please enter a mathematical operation: +, =, *, or /");
calculationFunction(`${number1}`,`${number2}`, `${operation}`)



