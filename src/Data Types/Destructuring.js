// Destructuring assignment allows you to assign properties of an object or elements of an array to separate variables.

// Destructuring assignment of an object
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 45
  };
  
  // Destructuring
  let {firstName, lastName, age} = person;
  
  console.log(firstName); // John 
  console.log(lastName); // Doe 
  console.log(age); // 45
  
  // Destructuring assignment of an array
  let colors = ["red", "green", "blue"];
  
  // Destructuring 
  let [firstColor, secondColor, thirdColor] = colors;
  
  console.log(firstColor); // red 
  console.log(secondColor); // green 
  console.log(thirdColor); // blue
  
  // Destructuring with default values
  let [color1, color2, color3, color4 = "black"] = colors;
  
  console.log(color1); // red 
  console.log(color2); // green 
  console.log(color3); // blue 
  console.log(color4); // black (default value)
  
  // Nested destructuring 
  let person2 = {
    name: {
      first: "John",
      last: "Doe"
    },
    age: 45
  };
  
  // Destructuring 
  let {name: {first, last}, age} = person2;
  
  console.log(first); // John 
  console.log(last); // Doe 
  console.log(age); // 45
  
  // Destructuring with rest parameter 
  let [colorA, colorB, ...restColors] = colors;
  
  console.log(colorA); // red 
  console.log(colorB); // green 
  console.log(restColors); // [blue]
  
  // Destructuring with renaming 
  let [colorX, colorY, colorZ] = colors;
  
  console.log(colorX); // red 
  console.log(colorY); // green 
  console.log(colorZ); // blue 
  
  let [newX = "black", newY, newZ] = colors;
  
  console.log(newX); // red (not black) 
  console.log(newY); // green 
  console.log(newZ); // blue
  
  // Swapping variables with destructuring 
  let a = 1;
  let b = 3;
  
  [a, b] = [b, a];
  
  console.log(a); // 3 
  console.log(b); // 1
  
  // Destructuring with functions 
  function calculateBmi(weight, height) {
    let bmi = weight / (height * height);
    return bmi;
  }
  
  let w = 60;
  let h = 1.70;
  
  // Destructuring 
  let [weight, height] = [w, h];
  
  console.log(calculateBmi(weight, height)); // 20.761245674740486
  
  // Destructuring with a return statement 
  let numbers = [1, 2, 3, 4];
  
  function sumUp(toAdd) {
    let result = 0;
    for (let i = 0; i < toAdd.length; i++) {
      result += toAdd[i];
    }
    return result;
  }
  
  // Destructuring 
  let [num1, num2, num3, num4] = numbers;
  
  console.log(sumUp([num1, num2, num3, num4])); // 10
  
  // Destructuring with a for-of loop
  let cars = ["Tesla", "BMW", "Audi"];
  
  for (let [index, car] of cars.entries()) {
    console.log(`${index} - ${car}`); // 0 - Tesla, 1 - BMW, 2 - Audi
  }