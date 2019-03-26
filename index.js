var Word = require("./word.js");
var inquirer = require("./node_modules/inquirer");
var ranWord = require("./node_modules/random-words")


// Global Variables
var numberOfGuesses;
var currentWord;
var newWord;


// Testing initial functionality //

// var testGuess = "r";

// var testLetter = newWord.guessLetter(testGuess);
// console.log(testLetter);

// Game initializer
initGame();

// Acquiring User Input by using NPM Inquier

function userInput() {

    if (numberOfGuesses > 0) {
        inquirer
            .prompt({
                type: "input",
                message: "Guess a letter or the word! ",
                name: "guessInput"
            }).then(function (response) {

                if (currentWord = newWord.guessedCorrectly(response.guessInput)) {
                    console.log("You WON!");
                    initGame();
                } else if (newWord.guessLetter(response.guessInput)) {
                    userInput();
                } else {
                    numberOfGuesses--;
                    if (numberOfGuesses === 0) {
                        console.log("NOPE! The Word is: " + newWord.solution());

                        initGame();
                    } else {
                        console.log("Wrong, Number of Guesses Left: " + numberOfGuesses);
                        userInput();
                    }
                }
            })
    }
}

function initGame() {
    numberOfGuesses = 10;
    currentWord = newWord;
    newWord = new Word("harrison");

    console.log(newWord.toString());

    userInput();
}

//         if (newWord.guessLetter(testGuess) === true) {
//         return testLetter();
//     } console.log("guess again")// Use user feedback for... whatever!!
//   });