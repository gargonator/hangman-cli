// import required modules
const inquirer = require('inquirer');
const Word = require('./Word.js');

// index.js: The file containing the logic for the course of the game, which depends on Word.js and:

// Randomly selects a word and uses the Word constructor to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses

// array of words to guess
var words = ['the','quick','brown','fox','jumps','over','the','lazy','dog'];

// executes game play logic
function hangmanGame() {

	// set guesses allowed to 6 and choose random word to guess from words array
	var guessesRemaining = 6;
	var w = new Word(words[Math.floor(Math.random()*words.length)]);

	// start user prompts to ask for guesses
	guessPrompt();

	// asks for guesses and displays outcomes
	function guessPrompt() {
		console.log('Word to guess: ');
		w.printWord(); // show masked word to the user

		inquirer.prompt([{
			type: 'input',
			name: 'guess',
			message: 'Please guess a letter in the word: ', // ask for guess
		}]).then(function(answer) {
			var isCorrect = w.checkGuess(answer.guess);
			if (isCorrect) { // if guess is correct
				console.log('Congrats! You guessed correctly.');
			} else { // if guess is incorrect
				guessesRemaining--;
				console.log(`Sorry, try again. You have ${guessesRemaining} guesses remaining.`);
			}
			// keep asking for guesses until user runs out of guesses or correctly guesses word
			if (guessesRemaining > 0 && w.wordGuessed() === false) {
				guessPrompt();
			} else {
				if (guessesRemaining === 0) {
					console.log('*****************************************************');
					console.log(`Sorry, you've run out of guesses.`);
					console.log('*****************************************************');
					endGamePrompt();
				}
				else if (w.wordGuessed() === true) {
					console.log('****************************************');
					console.log(`You've won the game! Awesome!`);
					console.log(`The word you guessed was: ${w.returnWord()}`);
					console.log('****************************************');
					endGamePrompt();
				}
				else {
					console.log('Something went wrong. Exiting the game.')
				}
			}
		});
	}

	function endGamePrompt() {
		inquirer.prompt([{
			type: 'input',
			name: 'input',
			message: `Enter any key to continue with a new word, or enter 'e' to exit game.`,
		}]).then(function(answer) {
			if (answer.input === 'e') {
				null;
			} else {
				hangmanGame();
			} 
		})
	}

}

// initialize the game!
hangmanGame();

// see updated portfolio page here: https://gargonator.github.io/Responsive-Portfolio/portfolio.html

// game pseudocode
// 1. select random word
// 2. display word
// 3. ask user to guess letter (input)
// 4. check letter to see if in word
// 5. if in word, display congratulations message. otherwise display consolation message & the number of guesses remaining.
// 6. repeat steps 2-5 until guesses run out or all letters are guessed correctly
// 7. display win or loss message
// 8. repeat from step 1