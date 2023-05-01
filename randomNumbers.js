//This program generates random numbers

//declare randomNumber variable
let randomNumber;

//declare min and max variables
let min = 0;
let max = 100;

//generate random number
randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

//log random number to console
console.log(randomNumber);

//end of program
console.log("Program complete!");
