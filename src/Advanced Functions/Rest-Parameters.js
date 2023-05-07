
// example one

//Rest parameters

function sumArray(...arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
      sum += arr[i];
    }
    return sum;
  }
  
  console.log(sumArray(1,2,3,4,5));
  
  //Spread syntax
  
  let array1 = [1, 2, 3];
  let array2 = [4, 5, 6];
  
  let combinedArray = [...array1, ...array2];
  
  console.log(combinedArray);
  
  // example two
  
  //Rest parameters
  
  function sumOfNumbers(...nums){
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
      sum += nums[i];
    }
    return sum;
  }
  
  console.log(sumOfNumbers(1,2,3,4,5,6));
  
  //Spread syntax
  
  let array3 = [1, 2, 3];
  let array4 = [4, 5, 6];
  let array5 = [7, 8, 9];
  
  let combinedArray2 = [...array3, ...array4, ...array5];
  
  console.log(combinedArray2);