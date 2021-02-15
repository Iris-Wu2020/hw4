console.log("Wu's Output from hw4 Exercise 3");

const values = []
for (let i = 0; i < 6; i++) {
    let randomNumber;
    randomNumber = Math.trunc(Math.random() * 10 + 1);
    values.push(randomNumber);

}
console.log(values);
console.log(`The maximum number of this array is: ${Math.max.apply(null, values)}`);
console.log(`The minimum number of this array is: ${Math.min.apply(null, values)}`);
let sumOfNumber = 0
values.forEach(value => {
    sumOfNumber += value
});
console.log(`Sum of all array value is ${sumOfNumber}`);
