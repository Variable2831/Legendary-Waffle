// The following program outlines a way to compare two JavaScript objects and output the differences between them. We'll use the 'Object.keys()' method to iterate through the object keys, and then compare their values.

// Our comparison function takes in two objects as parameters.
function compareObjects(obj1, obj2) {
  // We use 'Object.keys()' to get an array of the keys in our JavaScript objects.
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  
  // We loop through each of the keys in the first object.
  for (let i = 0; i < keys1.length; i++) {
    let key = keys1[i];
    
    // We check to see if the key exists in the second object.
    if (keys2.includes(key)) {
      // We check to see if the key's values are equal.
      if (obj1[key] === obj2[key]) {
        // If they are equal, we log a message to the console.
        console.log(`${key} is equal in both objects.`);
      } else {
        // If they are not equal, we log a message to the console.
        console.log(`${key} is different in both objects.`);
      }
    } else {
      // If the key isn't present in the second object, we log a message to the console.
      console.log(`${key} is not present in the second object.`);
    }
  }
  
  // We loop through each of the keys in the second object.
  for (let i = 0; i < keys2.length; i++) {
    let key = keys2[i];
    
    // We check to see if the key exists in the first object.
    if (!keys1.includes(key)) {
      // If the key isn't present in the first object, we log a message to the console.
      console.log(`${key} is not present in the first object.`);
    }
  }
}

// We create two sample JavaScript objects.
let obj1 = {
  name: "John",
  age: 30,
  city: "New York"
};

let obj2 = {
  name: "John",
  age: 31,
  city: "Los Angeles"
};

// We call our comparison function and pass in our two objects.
compareObjects(obj1, obj2);

// Output:
// name is equal in both objects.
// age is different in both objects.
// city is different in both objects.
