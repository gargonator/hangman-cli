## User interface

### Starting the game

* Start command line prompt in the game directory and enter `node index.js` to start game.

### Game play

* Enter guesses when prompted as single, lowercase letters.
* Repeated correct guesses don't count against you, whereas repeated incorrect guesses will decrease the number of guesses you have remaining.
* If you correctly guess the full word, it is shown to you. If you run out of guesses, the word will remain a mystery.
* The game round ends when you either run out of guesses or have correctly guessed the full word.
* Enter any key after a round to continue playing the game with a new randomly chosen word.

### Ending the game

Press Ctrl-C twice any time to end the game, or enter 'e' when prompted to end the game.


## Developer interface

### Changing word list

* Update the 'words' array in `index.js` in order to initialize the game with different words.

### Changing guesses allowed

* Update the 'guessesRemaining' variable in `index.js` to change the number of guesses the user is allowed in each game round. The default is 6 guesses per round.

--

Enjoy! Reach out to bhask.garg@gmail.com for any questions.