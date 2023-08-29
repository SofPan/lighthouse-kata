let prompt = require("prompt-sync")();

// winning condition
const randomNum = Math.floor(Math.random() * 10).toString();
// user input
let answer = prompt("Guess a number: ");
let tries = [];

const numberGuesser = (num) => {
  // check if answer is valid
  if (isNaN(parseInt(num))){
    console.log("error, you must enter a number");
  } else {
    // conditionally check if number matches
    if (num > randomNum){
      console.log("Too high!")
    }
    if (num < randomNum){
      console.log("Too low!");
    }
    if (num === randomNum){
      console.log("You got it! You took " + (tries.length + 1) + " tries.");
      return;
    }
    // check if number has already been tried
    if (!tries.includes(answer)){
      tries.push(answer);
    }
  }
  answer =  prompt("Guess a number: ");
  numberGuesser(answer);
}

numberGuesser(answer);

