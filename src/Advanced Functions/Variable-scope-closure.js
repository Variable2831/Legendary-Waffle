
// Variable scope example
function example() {
    let a = 5;  // Variable 'a' has a local scope
    return a;
  }
  
  example(); // Outputs 5
  
  // Closure example
  function outerFunc() {
    let a = 5;
    let innerFunc = function () {
      return a;
    }
    return innerFunc;
  }
  
  let inner = outerFunc();
  inner(); // Outputs 5
  
  // Closure example with arguments
  function outerFunc2(x) {
    return function (y) {
      return x + y;
    }
  }
  
  let add5 = outerFunc2(5); 
  add5(3); // Outputs 8
  add5(10); // Outputs 15
  
  // Closure example with object
  let obj = {
    a: 5,
    b: 10
  };
  
  function closureFunc(obj) {
    return function () {
      return obj.a + obj.b;
    }
  }
  
  let addObj = closureFunc(obj);
  addObj(); // Outputs 15
  
  // Closure example with setTimeout
  function outerFunc3() {
    let x = 0;
    let innerFunc = function () {
      x++;
      console.log(x);
    }
    setTimeout(innerFunc, 1000);
  }
  
  outerFunc3(); // Outputs 1 after 1 second
  
  // Closure example with a counter
  function closureCounter(start) {
    let x = start;
    return function () {
      x++;
      return x;
    }
  }
  
  let counter1 = closureCounter(1);
  counter1(); // Outputs 2
  counter1(); // Outputs 3
  
  let counter2 = closureCounter(10);
  counter2(); // Outputs 11
  counter2(); // Outputs 12
  counter1(); // Outputs 4
  
  // Closure example with a private variable
  function closurePrivate() {
    let privateVariable = 5;
    return function () {
      privateVariable++;
      console.log(privateVariable);
    }
  }
  
  let privateFunc = closurePrivate();
  privateFunc(); // Outputs 6
  privateFunc(); // Outputs 7
  
  
  // Closure example with a shared variable
  function closureShared() {
    let sharedVariable = 0;
    return {
      increment: function () {
        sharedVariable++;
      },
      decrement: function () {
        sharedVariable--;
      },
      get: function () {
        return sharedVariable;
      }
    }
  }
  
  let sharedCounter = closureShared();
  sharedCounter.increment();
  sharedCounter.increment();
  sharedCounter.get(); // Outputs 2
  sharedCounter.decrement();
  sharedCounter.get(); // Outputs 1
  
  // Closure example with a global variable
  let globalVariable = 0;
  
  function closureGlobal() {
    let localVariable = 1;
    return function () {
      globalVariable += localVariable;
      console.log(globalVariable);
    }
  }
  
  let globalFunc = closureGlobal();
  globalFunc(); // Outputs 1
  globalFunc(); // Outputs 2
  
  // Closure example with a recursive function
  function closureRecursiveFunc(n) {
    return function (x) {
      if (n === 0) {
        return x;
      } else {
        return closureRecursiveFunc(n - 1)(x * n);
      }
    }
  }
  
  let factorial = closureRecursiveFunc(3);
  factorial(4); // Outputs 24  