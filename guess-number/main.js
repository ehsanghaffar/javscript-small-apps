/**
 * programm to guess a number
 * @method guessNumber()
 * @param {number} number - the number to guess
 * @param {number} guess - the number to guess
 * @return {boolean} true if the number is guessed, false otherwise
 * @author: Ehsan Ghaffar
 */
function guessNumber() {
  // generate a random number from 1 to 10
  const random = Math.floor(Math.random() * 10) + 1;

  // take input from the user
  let number = parseInt(prompt("Guess a number from 1 to 10:"));

  // take the input until the guess is correct
  while (number !== random) {
    number = parseInt(prompt("Guess a number from 1 to 10:"));
  }

  // check if the guess is correct
  if (number == random) {
    console.log("You guessed the correct number.");
  }
}

// Call the function
guessNumber();
