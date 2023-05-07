
function toJSON(object) {
    let json = JSON.stringify(object);
    return json;
  }
  
  let obj = {
    name: 'John',
    age: 20
  }
  
  let json = toJSON(obj);
  console.log(json); // {"name":"John","age":20}
  
  
  //another example
  
  function toJSON(array) {
    let json = JSON.stringify(array);
    return json;
  }
  
  let arr = [1, 2, 3, 4];
  
  let json = toJSON(arr);
  console.log(json); // [1,2,3,4]
  
  
  //another example
  
  function toJSON(obj) {
    let json = JSON.stringify(obj);
    return json;
  }
  
  let myObj = {
    name: 'John',
    age: 20,
    hobbies: ['running', 'hiking', 'reading']
  }
  
  let json = toJSON(myObj);
  console.log(json); // {"name":"John","age":20,"hobbies":["running","hiking","reading"]}