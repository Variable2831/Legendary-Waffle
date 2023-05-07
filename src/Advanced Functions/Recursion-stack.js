
// example one

function recursiveStack(input) { 
 
    if (input.length == 0) { 
      return; 
    } 
    
    const item = input.pop(); 
    console.log(item); 
    recursiveStack(input); 
  } 
    
  const myArray = [1, 2, 3, 4, 5]; 
    
  recursiveStack(myArray);
  
  // example two
  
  function recursiveStack(input, i = 0) { 
    if (i == input.length) { 
      return; 
    } 
    
    const item = input[i]; 
    console.log(item); 
    recursiveStack(input, i + 1); 
  } 
    
  const myArray = [1, 2, 3, 4, 5]; 
    
  recursiveStack(myArray);