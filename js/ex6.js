console.log("Wu's Output from hw4 Exercise 6");

let randomNumber = Math.trunc(Math.random() * 100 + 1);
let number = Number(prompt("Enter an integer:"));
let count = 0;
while (randomNumber !== number) {
    if (number < randomNumber) {
        number = Number(prompt("Too low, guess again!"));
        count++;
    }
    if (number > randomNumber) {
        number = Number(prompt("Too high, guess again!"));
        count++;
    }
}
console.log(`Correct! It took you ${count} attempts to guess the correct number.`)