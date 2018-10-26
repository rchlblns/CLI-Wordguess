function Letter(character, isGuessed) {
    this.character = character;
    this.isGuessed = false;

    this.checkIfGuessed = function() {
        let placeholder = " _ ";
        if (this.isGuessed) {
            return this.character;
        } else {
            return placeholder;
        }
    }

    this.correctGuess.toString = function(userGuess) {
        if ( userGuess === this.character) {
            isGuessed = true;
        } else {
            isGuessed = false;
        }
    }
}

module.exports = Letter;