// import Letter constructor
const Letter = require('./Letter.js')

// Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

// An array of new Letter objects representing the letters of the underlying word
// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)

function Word(word) {
	// create array of Letter objects representing word
	this.letterArray = word.split('').map((char) => new Letter(char));
	// prints word, with underscores used for unguessed letters
	this.printWord = () =>
		console.log(this.letterArray.map((letter) => letter.displayLetter()).join(' '));
	// returns word string, with underscores used for unguessed letters
	this.returnWord = () =>
		this.letterArray.map((letter) => letter.displayLetter()).join('');
	// checks if guessed letter is in word. returns true if letter is in word, false otherwise
	this.checkGuess = function(guess) {
			var isGuessed = false;
			this.letterArray.forEach(function(letter) { 
				if (letter.checkGuess(guess)) {
					isGuessed = true;
				}
			})
			return isGuessed;
		}
	// checks if entire word has been correctly guessed. returns true if guessed, false otherwise	
	this.wordGuessed = () => this.letterArray.every((letter) => letter.isGuessed === true);
}

// use to test Word constructor
function testWord() {
	// create new word
	w = new Word('hello');

	// test constructor
	t1 = w.returnWord() === '_____';
	w.checkGuess('l');
	w.checkGuess('e');
	t2 = w.returnWord() === '_ell_';

	// if tests pass display success message, otherwise display error message
	if (t1 && t2) {
		console.log('Tests passed! Word constructor is functioning correctly.');
	} else {
		console.log('Tests failed. Check Word constructor code.');
	}
}

// export Word constructor in node module
module.exports = Word;

// testWord();