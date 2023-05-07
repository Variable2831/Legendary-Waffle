// arrow function to calculate the area of a circle
const circleArea = (radius) => Math.PI * Math.pow(radius, 2);

// arrow function to calculate the volume of a cube
const cubeVolume = (side) => Math.pow(side, 3);

// arrow function to calculate the perimeter of a rectangle
const rectanglePerimeter = (length, width) => 2*(length + width);

// arrow function to calculate the surface area of a sphere
const sphereSurfaceArea = (radius) => 4 * Math.PI * Math.pow(radius, 2);

// arrow function to calculate the hypotenuse of a right triangle
const rightTriangleHypotenuse = (a, b) => Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

console.log(circleArea(2));
console.log(cubeVolume(3));
console.log(rectanglePerimeter(3, 4));
console.log(sphereSurfaceArea(3));
console.log(rightTriangleHypotenuse(3, 4))

//12.5664
//27
//14
//113.0976
//5

//  arrow function to calculate the area of a triangle
const triangleArea = (base, height) => (base * height) / 2;

// arrow function to calculate the volume of a cylinder
const cylinderVolume = (radius, height) => Math.PI * Math.pow(radius, 2) * height;

// arrow function to calculate the circumference of a circle
const circleCircumference = (radius) => 2 * Math.PI * radius;

// arrow function to calculate the surface area of a cone
const coneSurfaceArea = (radius, slantHeight) => Math.PI * radius * (radius + slantHeight);

// arrow function to calculate the length of a diagonal in a square
const squareDiagonalLength = (side) => Math.sqrt(2 * Math.pow(side, 2));

console.log(triangleArea(2, 3));
console.log(cylinderVolume(2, 3));
console.log(circleCircumference(2));
console.log(coneSurfaceArea(2, 3));
console.log(squareDiagonalLength(2));

// 3
// 37.69911184307752
// 12.566370614359172
// 25.132741228718345
// 2.8284271247461903

// arrow function to calculate the average of an array of numbers
const averageArray = (arr) => arr.reduce((acc, curr) => acc + curr) / arr.length;

console.log(averageArray([1, 2, 3, 4, 5]));

//3