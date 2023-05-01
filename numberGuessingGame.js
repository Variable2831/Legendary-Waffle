// Create variables 
let randomNumber; 
let guess;
let guessCount;

// Generate a random number between 1 and 10
randomNumber = Math.floor(Math.random() * 10) + 1;

// Assign guess count to 0
guessCount = 0;

// Ask the user to guess a number between 1 and 10
guess = prompt("Guess a number between 1 and 10");

// Check if the user guessed the right number
while(+guess !== randomNumber) {
  guessCount++;
  if (+guess < randomNumber) {
    guess = prompt("Your guess is too low. Guess again!");
  } else {
    guess = prompt("Your guess is too high. Guess again!");
  }
}

// If the user guessed the right number, congratulate them and show the number of attempts
if (+guess === randomNumber) {
  alert("Congratulations! You guessed the right number! It only took you " + guessCount + " attempts.");
}
 
//End of program
