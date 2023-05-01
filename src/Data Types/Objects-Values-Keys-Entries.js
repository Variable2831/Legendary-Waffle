// Program to demonstrate the use of Object.keys(), values(), entries()

// Create an object with some properties
const person = {
    name: "John Doe",
    age: 45,
    city: "New York"
  };
  
  // Use Object.keys() to get the key values
  const keys = Object.keys(person);
  console.log("The keys of the person object are: " + keys);
  
  // Use Object.values() to get the values
  const values = Object.values(person);
  console.log("The values of the person object are: " + values);
  
  // Use Object.entries() to get the key/value pairs
  const entries = Object.entries(person);
  console.log("The key/value pairs of the person object are: ");
  for (let i = 0; i < entries.length; i++) {
    console.log(entries[i][0] + " : " + entries[i][1]);
  }
  
  // Output
  // The keys of the person object are: name,age,city
  // The values of the person object are: John Doe,45,New York
  // The key/value pairs of the person object are:
  // name : John Doe
  // age : 45
  // city : New York
  