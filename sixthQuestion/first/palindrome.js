const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isPalindromeOrReverse() {
    rl.question("Enter a word: ", input => {
        const reversedInput = input.split("").reverse().join("");
        if (input === reversedInput)
            console.log("The word is a palindrome.");
        else
            console.log(`The word is not a palindrome. Reversed word: ${reversedInput}`);
        rl.close();
    });
}

isPalindromeOrReverse();