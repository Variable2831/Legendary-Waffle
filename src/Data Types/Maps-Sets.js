
//Create Map: 
let myMap = new Map();

//Set values: 
myMap.set('name', 'John');
myMap.set('age', 30);
myMap.set('job', 'teacher');

console.log(myMap); //Map { 'name' => 'John', 'age' => 30, 'job' => 'teacher' }

//Retrieve values: 
console.log(myMap.get('name')); //John
console.log(myMap.get('age')); //30
console.log(myMap.get('job')); //teacher

//Loop through Map entries:
for(let [key, value] of myMap.entries()){
    console.log(`${key}: ${value}`);
}

//Output: 
//name: John
//age: 30
//job: teacher

//Check for a value in the Map: 
console.log(myMap.has('name')); //true
console.log(myMap.has('address')); //false

//Delete an entry in the Map: 
myMap.delete('age'); 
console.log(myMap); //Map { 'name' => 'John', 'job' => 'teacher' }

//Get the size of the Map:
console.log(myMap.size); //2

//Clear the Map: 
myMap.clear(); 
console.log(myMap); //Map {}

//Iterate through keys: 
for(let key of myMap.keys()){
    console.log(key);
}

//Output: 
//(no output as the Map is empty)

//Iterate through values: 
for(let value of myMap.values()){
    console.log(value);
}

//Output: 
//(no output as the Map is empty)

//Iterate through [key, value] pairs: 
for(let [key, value] of myMap.entries()){
    console.log(`${key}: ${value}`);
}

//Output: 
//(no output as the Map is empty)

//Merge Maps: 
let map1 = new Map();
map1.set('name', 'John');
map1.set('age', 30);

let map2 = new Map();
map2.set('job', 'teacher');
map2.set('city', 'New York');

let mergedMap = new Map([...map1, ...map2]);
console.log(mergedMap); //Map { 'name' => 'John', 'age' => 30, 'job' => 'teacher', 'city' => 'New York' }

//Create a Map from an Array: 
let arr = [['name', 'John'], ['age', 30], ['job', 'teacher']];
let mapFromArr = new Map(arr);
console.log(mapFromArr); //Map { 'name' => 'John', 'age' => 30, 'job' => 'teacher' }

//Create an Array from a Map: 
let arrFromMap = [...mapFromArr];
console.log(arrFromMap); // [ [ 'name', 'John' ], [ 'age', 30 ], [ 'job', 'teacher' ] ]

//Update a value in the Map: 
mapFromArr.set('name', 'Adam');
console.log(mapFromArr); //Map { 'name' => 'Adam', 'age' => 30, 'job' => 'teacher' }

//Check if a Map is empty: 
console.log(mapFromArr.size); //3
console.log(mapFromArr.size > 0); //true
console.log(mapFromArr.size === 0); //false

//Find a value in the Map: 
let findValue = [...mapFromArr].find(entry => entry[1] === 30);
console.log(findValue); // [ 'age', 30 ]

//Find a key in the Map: 
let findKey = [...mapFromArr].find(entry => entry[0] === 'name');
console.log(findKey); // [ 'name', 'Adam' ]

//Get the keys of a Map: 
console.log([...mapFromArr.keys()]); // [ 'name', 'age', 'job' ]

//Get the values of a Map: 
console.log([...mapFromArr.values()]); // [ 'Adam', 30, 'teacher' ]

//Merge Maps with a function: 
let map3 = new Map();
map3.set('name', 'Sarah');
map3.set('age', 25);

let map4 = new Map();
map4.set('job', 'doctor');
map4.set('city', 'Boston');

let mergedMapWithFunction = new Map([...map3, ...map4].map(([key, value]) => [key, value + '!']));
console.log(mergedMapWithFunction); //Map { 'name' => 'Sarah!', 'age' => '25!', 'job' => 'doctor!', 'city' => 'Boston!' }

//Filter a Map: 
let filteredMap = new Map([...map3].filter(([key, value]) => key === 'name'));
console.log(filteredMap); //Map { 'name' => 'Sarah' }

//Clone a Map: 
let clonedMap = new Map(map3);
console.log(clonedMap); //Map { 'name' => 'Sarah', 'age' => 25 }

//Check if a value exists in the Map: 
console.log(map3.has('name')); //true
console.log(map3.has('address')); //false

//Delete an entry in the Map: 
map3.delete('age'); 
console.log(map3); //Map { 'name' => 'Sarah' }

//Clear the Map: 
map3.clear(); 
console.log(map3); //Map {}

//Iterate through values: 
for(let value of map3.values()){
    console.log(value);
}

//Output: 
//(no output as the Map is empty)

//Iterate through [key, value] pairs: 
for(let [key, value] of map3.entries()){
    console.log(`${key}: ${value}`);
}

//Output: 
//(no output as the Map is empty)

//Get the size of the Map:
console.log(map3.size); //0

//Loop through Map entries:
for(let [key, value] of map3.entries()){
    console.log(`${key}: ${value}`);
}

//Output: 
//(no output as the Map is empty)

//Create a Map from an Object: 
let obj = {name: 'John', age: 30, job: 'teacher'};
let mapFromObj = new Map(Object.entries(obj));
console.log(mapFromObj); //Map { 'name' => 'John', 'age' => 30, 'job' => 'teacher' }

//Create an Object from a Map: 
let objFromMap = Object.fromEntries(mapFromObj);
console.log(objFromMap); //{ name: 'John', age: 30, job: 'teacher' }

//Update a value in the Map: 
mapFromObj.set('name', 'Adam');
console.log(mapFromObj); //Map { 'name' => 'Adam', 'age' => 30, 'job' => 'teacher' }

//Check if a Map is empty: 
console.log(mapFromObj.size); //3
console.log(mapFromObj.size > 0); //true
console.log(mapFromObj.size === 0); //false

//Find a value in the Map: 
let findValueFromObj = [...mapFromObj].find(entry => entry[1] === 30);
console.log(findValueFromObj); // [ 'age', 30 ]

//Find a key in the Map: 
let findKeyFromObj = [...mapFromObj].find(entry => entry[0] === 'name');
console.log(findKeyFromObj); // [ 'name', 'Adam' ]

//Get the keys of a Map: 
console.log([...mapFromObj.keys()]); // [ 'name', 'age', 'job' ]

//Get the values of a Map: 
console.log([...mapFromObj.values()]); // [ 'Adam', 30, 'teacher' ]

//Merge Maps with a function: 
let map5 = new Map();
map5.set('name', 'Sarah');
map5.set('age', 25);

let map6 = new Map();
map6.set('job', 'doctor');
map6.set('city', 'Boston');

let mergedMapWithFunctionFromObj = new Map([...map5, ...map6].map(([key, value]) => [key, value + '!']));
console.log(mergedMapWithFunctionFromObj); //Map { 'name' => 'Sarah!', 'age' => '25!', 'job' => 'doctor!', 'city' => 'Boston!' }

//Filter a Map: 
let filteredMapFromObj = new Map([...map5].filter(([key, value ]) => key === 'name'));
console.log(filteredMapFromObj); //Map { 'name' => 'Sarah' }

//Clone a Map: 
let clonedMapFromObj = new Map(map5);
console.log(clonedMapFromObj); //Map { 'name' => 'Sarah', 'age' => 25 }

//Check if a value exists in the Map: 
console.log(map5.has('name')); //true
console.log(map5.has('address')); //false

//Delete an entry in the Map: 
map5.delete('age'); 
console.log(map5); //Map { 'name' => 'Sarah' }

//Clear the Map: 
map5.clear(); 
console.log(map5); //Map {}

//Iterate through values: 
for(let value of map5.values()){
    console.log(value);
}

//Output: 
//(no output as the Map is empty)

//Iterate through [key, value] pairs: 
for(let [key, value] of map5.entries()){
    console.log(`${key}: ${value}`);
}

//Output: 
//(no output as the Map is empty)

//Get the size of the Map:
console.log(map5.size); //0

//Loop through Map entries:
for(let [key, value] of map5.entries()){
    console.log(`${key}: ${value}`);
}

//Output: 
//(no output as the Map is empty)