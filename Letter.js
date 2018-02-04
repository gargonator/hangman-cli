// Displays an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter.

// Includes:
// A string value to store the underlying character for the letter
// A boolean value that stores whether that letter has been guessed yet
// A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
// A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

function Letter(char) {
	// stores the character in local variable
	var char = char;
	// stores whether letter has been guessed or not in local variable
	var isGuessed = false;
	// displays letter if it has been guessed, displays '_' otherwise
	this.displayLetter = function() {
		if (!this.isGuessed) {
			return '_';
		} else {
			return char;
		}
	}
	// checks if guess is equal to letter. updates the isGuessed local variable.
	// returns true if guess is correct, false otherwise
	this.checkGuess = function(guess) {
		if (guess === char) {
			this.isGuessed = true;
			return true;
		} else {
			return false;
		}
	}
}

// use to test Letter constructor
function testLetter() {
	// create new Letter objects
	l1 = new Letter('a');
	l2 = new Letter('b');

	// test constructur
	t1 = l1.displayLetter() === '_';
	t2 = l2.displayLetter() === '_';	

	l1.checkGuess('c');
	t3 = l1.displayLetter() === '_';
	l1.checkGuess('a');
	t4 = l1.displayLetter() === 'a';

	// if tests pass display success message, otherwise display error message
	if (t1 && t2 && t3 && t4) {
		console.log('Tests passed! Letter constructor is functioning correctly.');
	} else {
		console.log('Tests failed. Check Letter constructor code.');
	}
}

// export Letter as a node module
module.exports = Letter;

// testLetter();