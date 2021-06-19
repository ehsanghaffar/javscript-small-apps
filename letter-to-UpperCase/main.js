// program to convert first letter of a string to uppercase

function capitalizeFirstletter(str) {

  // converting first letter to uppercase
  const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

  return capitalized;

}

// take input letter from user
const string = prompt('Enter a String:'); // Enter a string: javaScript

const result = capitalizeFirstletter(string);

console.log(result) // JavaScript