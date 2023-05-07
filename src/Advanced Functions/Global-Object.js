//Create a global object
let globalObject = {
    //Object properties
    name: "Global Object",
    language: "javascript",
    purpose: "To store data and methods to be used across multiple scripts",
  
    //Object method
    greet: function() {
      console.log(`Hello, I am the ${this.name} and I am written in ${this.language}.`);
    },
  
    //Another method
    description: function() {
      console.log(`I am used for ${this.purpose}.`);
    }
  };
  
  //Call the methods
  globalObject.greet();
  globalObject.description();

//Create a more advanced global object
let globalObject = {
  //Object properties
  name: "Advanced Global Object",
  language: "javascript",
  purpose: "To store data and methods to be used across multiple scripts",
  data: {},
  methods: {},
  
  //Object method
  greet: function() {
    console.log(`Hello, I am the ${this.name} and I am written in ${this.language}.`);
  },
  
  //Another method
  description: function() {
    console.log(`I am used for ${this.purpose}.`);
  },
  
  //Add data to the object
  addData: function(key, value) {
    this.data[key] = value;
  },
  
  //Add methods to the object
  addMethod: function(name, func) {
    this.methods[name] = func;
  }
};

//Call the methods
globalObject.greet();
globalObject.description();

//Add data and methods to the object
globalObject.addData("name", "John Doe");
globalObject.addMethod("sayName", function() {
  console.log(`My name is ${this.data.name}.`);
});

//Call the new method
globalObject.methods.sayName();