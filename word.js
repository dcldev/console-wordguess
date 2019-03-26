var Letter = require("./Letter");

function Word(string){

  var array = string.split("");

  this.letters = array.map(function(character){
    return new Letter(character);
  });
}

Word.prototype.solution = function() {
    return this.letters.map(function(letter) { // used the map function (instead of for loop)
    return letter.solution(); // accessed the solution function in (Letter.js) for each to form an array of solved letters
    }).join(""); // create a string from the array of solved letters
  };

Word.prototype.toString = function() {
    return this.letters.join(" "); // accessed the Letter function to toString in Letter.js
};

Word.prototype.guessLetter = function(character) {
    // accesses the correctGuess function in Letter.js 
    var discoveredLetter = false;
    this.letters.forEach(function(letter) {
      if (letter.correctGuess(character)) {
        discoveredLetter = true;
      }
    });
  
    console.log("\n" + this + "\n");
    // return whether we found a letter
    return discoveredLetter;
  };
  
  // Returns true if all letters in the word have been guessed
  Word.prototype.guessedCorrectly = function() {
    return this.letters.every(function(letter) {
      return letter.visible;
    });
  };

  module.exports = Word;

// var word = new Word ("Harrison");
// console.log(word.toString());
