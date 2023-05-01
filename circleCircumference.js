// This program will calculate the area and circumference of a circle 

// Declare variables 
let radius;
let area;
let circumference;

// Define the function to calculate area and circumference
function calculateCircle(r) {
  radius = r;
  area = Math.PI * (radius * radius);
  circumference = 2 * Math.PI * radius;
}

// Call the function 
calculateCircle(5);

// Print the result
console.log(`The area of the circle is ${area} and the circumference is ${circumference}`);
