
// Function object
let Student = {
    name: 'John',
    age: 20,
    course: 'Computer Science',
    getDetails: function(){
        console.log(`Name: ${this.name}, Age: ${this.age}, Course: ${this.course}`)
    }
};

// Calling the function
Student.getDetails(); 
// Output: Name: John, Age: 20, Course: Computer Science

// ES6 syntax
const Student = {
    name: 'John',
    age: 20,
    course: 'Computer Science',
    getDetails(){
        console.log(`Name: ${this.name}, Age: ${this.age}, Course: ${this.course}`)
    }
};

// Calling the function
Student.getDetails(); 
// Output: Name: John, Age: 20, Course: Computer Science

// Arrow function syntax
const Student = {
    name: 'John',
    age: 20,
    course: 'Computer Science',
    getDetails: () => {
        console.log(`Name: ${this.name}, Age: ${this.age}, Course: ${this.course}`)
    }
};

// Calling the function
Student.getDetails(); 
// Output: Name: undefined, Age: undefined, Course: undefined

// As arrow functions do not bind this keyword, we should not use it in function objects.

// ES6 class syntax
class Student {
    constructor(name, age, course){
        this.name = name;
        this.age = age;
        this.course = course;
    }
    
    getDetails(){
        console.log(`Name: ${this.name}, Age: ${this.age}, Course: ${this.course}`);
    }
}

// Creating an instance of the class
const john = new Student('John', 20, 'Computer Science');

// Calling the function
john.getDetails(); 
// Output: Name: John, Age: 20, Course: Computer Science

// ES6 class syntax with static property
class Student {
    constructor(name, age, course){
        this.name = name;
        this.age = age;
        this.course = course;
    }
    
    static getDetails(student){
        console.log(`Name: ${student.name}, Age: ${student.age}, Course: ${student.course}`);
    }
}

// Creating an instance of the class
const john = new Student('John', 20, 'Computer Science');

// Calling the static function
Student.getDetails(john); 
// Output: Name: John, Age: 20, Course: Computer Science

// ES6 class syntax with getter
class Student {
    constructor(name, age, course){
        this._name = name;
        this._age = age;
        this._course = course;
    }
    
    get details(){
        return `Name: ${this._name}, Age: ${this._age}, Course: ${this._course}`;
    }
}

// Creating an instance of the class
const john = new Student('John', 20, 'Computer Science');

// Calling the getter
console.log(john.details); 
// Output: Name: John, Age: 20, Course: Computer Science
