// Create a variable called "name" and set it to your name
let name = "John";

// Create a variable called "age" and set it to your age
let age = 25;

// Create a variable called "favoriteFood" and set it to your favorite food
let favoriteFood = "pizza";

// Create a function called "greeting" that takes in one parameter called "name"
function greeting(name) {
    // Inside the function, log a greeting to the console that includes the name parameter
    console.log(`Hello ${name}!`);
}

// Call the greeting function and pass in the "name" variable
greeting(name);

// Create a function called "add" that takes in two parameters called "num1" and "num2"
function add(num1, num2) {
    // Inside the function, add the two parameters together and store the result in a variable called "sum"
    let sum = num1 + num2;
    // Log the result to the console
    console.log(sum);
}

// Call the "add" function and pass in the two numbers 10 and 5
add(10, 5);

// Create an object called "user"
let user = {
    // Add three properties to it: "name", "age", and "favoriteFood"
    name: name,
    age: age,
    favoriteFood: favoriteFood
};

// Log the user object to the console
console.log(user);

// Create a loop that logs the numbers 0-9 to the console
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// Create an if statement that checks if the "age" variable is greater than 18
if (age > 18) {
    // If it is, log a message to the console
    console.log("You are of legal age!");
}
else {
    // If not, log a different message
    console.log("You are not of legal age!");
}

// Create a switch statement that checks the value of the "favoriteFood" variable
switch (favoriteFood) {
    // Add three cases for "pizza", "salad", and "burgers"
    case "pizza":
        console.log("Yum! Pizza is delicious!");
        break;
    case "salad":
        console.log("Healthy choice!");
        break;
    case "burgers":
        console.log("A classic!");
        break;
    // Add a default case that logs a message if none of the above cases are true
    default:
        console.log("That sounds great!");
        break;
}

// Create a function called "sayHello"
function sayHello() {
    // Inside the function, log "Hello!" to the console
    console.log("Hello!");
}

// Call the "sayHello" function
sayHello();

// Create a variable called "myArray" and set it to an empty array
let myArray = [];

// Add three strings to the array
myArray.push("string1", "string2", "string3");

// Log the array to the console
console.log(myArray);

// Create a for loop that loops through the array
for (let i = 0; i < myArray.length; i++) {
    // For each item in the array, log it to the console
    console.log(myArray[i]);
}

// Create a function called "sayBye"
function sayBye() {
    // Inside the function, log "Bye!" to the console
    console.log("Bye!");
}

// Call the "sayBye" function
sayBye();

// Create a while loop that logs "Hello!" to the console 3 times
let count = 0;
while (count < 3) {
    console.log("Hello!");
    count++;
}

// Log a goodbye message to the console
console.log("Goodbye!");
