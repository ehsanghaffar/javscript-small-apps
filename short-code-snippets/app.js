/*
 * here some examples of short code
 * for more programming examples check out the github: https://github.com/ehsanghaffarii
 */

// for loop regular example
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = 0; i < array.length; i++) {
  console.log(i);
}
// now with short code ⬇️
for (let value of array) {
  console.log(value);
}

// return example in regular way
dummyMultiply = (value) => {
  w;
  return value * value;
};
// now with short code ⬇️
dummyMultiply = (value) => value * value;
// or
dummyMultiply = (value) => {
  value * value;
};

// example of default parameters
function volume(length, width, height = 1) {
  if (height === undefined) {
    height = 1;
  }
  if (width === undefined) {
    width = 1;
  }
  return length * width * height;
}
// now with short code ⬇️
volume = (length, width, height = 1) => length * width * height;

// example of use destructuring
const name = employee.name;
const age = employee.age;

// now with short code ⬇️
const { name, age } = employee;

// example of regular function
function setFullName(firstName, lastName) {
  return function () {
    return "Hello I'm" + firstName + " " + lastName;
  };
}
// now with short code with arrow function & template literal ⬇️
const setFullName = (firstName, lastName) => {
  () => `Hello I'm ${firstName} ${lastName}`;
};
