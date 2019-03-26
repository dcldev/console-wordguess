function Letter(character){
    this.character = character;
    this.visible = false;
    this.toString = function () {
        if (this.visible === true) {
            return this.character;
        } return "_";
    };
    this.solution = function (){
        return this.character;
    };

    this.correctGuess = function (userGuess) {
        if (userGuess === this.character) {
        this.visible = true;
        return true;
        } return false;
    };

};
   
    module.exports = Letter;
