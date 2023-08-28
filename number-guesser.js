/*
  - user has to guess a number
  - program tells user if their number is too low or too high
  - when guessed, print number of tries
  - inputting the same number should only count as one try
  - if the user inputs something that is not a number, print an error and do not count as a try
*/ 
let prompt = require("prompt-sync")();

const randomNum = Math.floor(Math.random() * 10).toString();
let answer = prompt("Guess a number: ");

const numberGuesser = (num) => {
  if (num > randomNum){
    console.log("Too high!")
    answer =  prompt("Guess a number: ");
    numberGuesser(answer);
  }
  if (num < randomNum){
    console.log("Too low!");
    answer =  prompt("Guess a number: ");
    numberGuesser(answer);
  }
  if (num === randomNum){
    console.log("You got it!");
  }
}

numberGuesser(answer);

