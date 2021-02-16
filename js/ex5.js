console.log("Wu's Output from hw4 Exercise 5");

let word = prompt("Please enter a word:");

const isPalindrome = (s) => {
    let left;
    let right;
    left = 0;;
    right = s.length - 1;
    while (left < right) {
        if ((left < right) && (s.toLowerCase()[left] !== s.toLowerCase()[right])) {
            return false
        }
        right++;
        left--;
    }
    return true

}



