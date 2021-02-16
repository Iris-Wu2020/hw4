console.log("Wu's Output from hw4 Exercise 4");

let word = prompt("Please enter a word:");
if (`${word.toLowerCase()}` === "stop") {
    console.log("Bingo!");
} 
else {
    let wordArray = []
    let count = 0
    while (`${word.toLowerCase()}`!== "stop") {
        wordArray.push(`${word}`);
        count++;
        word = prompt("Please enter another word:");
    }

    console.log("You entered the following words:");
    for (i = 0; i < wordArray.length; i++) {
        console.log(wordArray[i]);
    }
}

