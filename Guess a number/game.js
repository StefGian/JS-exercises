//create secret number
var secretNumber = 4;

//ask user to guess
var guess = Number(prompt("Guess a number"));


//check guess
if (guess === secretNumber) {
  alert("You got it RIGHT!");
}
else if (guess > secretNumber) {
  alert("Too hight! Guess again!");
}
else {
  alert("Too low! Guess again!");
}
