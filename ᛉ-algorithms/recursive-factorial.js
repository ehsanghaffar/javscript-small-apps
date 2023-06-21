
/*
 * This recursive function takes in a number num and returns its factorial. 
 * The base case is when num is equal to 0, in which case the function returns 1. 
 * The recursive case multiplies num by the result of the function called with num - 1 as the argument. 
 * This continues recursively until the base case is reached.
*/

function factorial(num) {
  if (num === 0) { // base case
    return 1;
  } else {
    return num * factorial(num - 1); // recursive case
  }
}

console.log(factorial(4))