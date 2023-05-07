
// Create a function
function greet (name) {
    console.log("Hello, " + name);
  }
  
  // Create a variable to hold the function
  let boundGreet = greet.bind(this);
  
  // Call the bound function
  boundGreet("John"); // Outputs "Hello, John"
  
  // Create a different function
  function sayGoodbye (name) {
    console.log("Goodbye, " + name);
  }
  
  // Bind the new function to the variable
  boundGreet = sayGoodbye.bind(this);
  
  // Call the bound function
  boundGreet("John"); // Outputs "Goodbye, John"
  
  // Create an object
  let person = {
    name: "John",
    sayHello: greet
  };
  
  // Bind the function to the object
  let boundSayHello = person.sayHello.bind(person);
  
  // Call the bound function
  boundSayHello(); // Outputs "Hello, John"
  
  // Bind the same function to a different object
  person = {
    name: "Jane",
    sayHello: greet
  };
  
  // Call the bound function
  boundSayHello(); // Outputs "Hello, Jane"
  
  // Bind a different function to the object
  person.sayHello = sayGoodbye;
  
  // Call the bound function
  boundSayHello(); // Outputs "Goodbye, Jane"
  
  // Bind the same function to a different object
  person = {
    name: "John",
    sayHello: sayGoodbye
  };
  
  // Call the bound function
  boundSayHello(); // Outputs "Goodbye, John"
  
  // Try to bind a new function to the variable
  boundSayHello = greet.bind(this);
  
  // Call the bound function
  boundSayHello(); // Outputs "Goodbye, John"
  // (because the original binding is still in effect)
  
  // Create a function
  function greet (name, message) {
    console.log(message + ", " + name);
  }
  
  // Create a variable to hold the function
  let boundGreet = greet.bind(this);
  
  // Call the bound function
  boundGreet("John", "Hello"); // Outputs "Hello, John"
  
  // Create a different function
  function sayGoodbye (name, message) {
    console.log(message + ", " + name);
  }
  
  // Bind the new function to the variable with one parameter
  boundGreet = sayGoodbye.bind(this, "John");
  
  // Call the bound function
  boundGreet("Goodbye"); // Outputs "Goodbye, John"
  
  // Create an object
  let person = {
    name: "John",
    sayHello: greet
  };
  
  // Bind the function to the object with two parameters
  let boundSayHello = person.sayHello.bind(person, person.name, "Hello");
  
  // Call the bound function
  boundSayHello(); // Outputs "Hello, John"
  
  // Bind the same function to a different object
  person = {
    name: "Jane",
    sayHello: greet
  };
  
  // Call the bound function
  boundSayHello(); // Outputs "Hello, Jane"
  
  // Bind a different function to the object with two parameters
  person.sayHello = sayGoodbye;
  
  // Call the bound function
  boundSayHello(); // Outputs "Goodbye, Jane"
  
  // Bind the same function to a different object
  person = {
    name: "John",
    sayHello: sayGoodbye
  };
  
  // Call the bound function
  boundSayHello(); // Outputs "Goodbye, John"
  
  // Try to bind a new function to the variable
  boundSayHello = greet.bind(this, person.name, "Hello");
  
  // Call the bound function
  boundSayHello(); // Outputs "Goodbye, John"
  // (because the original binding is still in effect)