/**
 * program to clone the object in JS
 * @author Ehsan Ghaffar
 * @example 1
 */
// declaring object
const person = {
  name: "John",
  age: 21,
};

// cloning the object
const clonePerson = Object.assign({}, person);

console.log(clonePerson);

// changing the value of clonePerson
clonePerson.name = "Peter";

console.log(clonePerson.name);
console.log(person.name);

/**
 * @example 2
 */
// declaring object
const person = {
  name: "John",
  age: 21,
};

// cloning the object
const clonePerson = { ...person };

console.log(clonePerson);

// changing the value of clonePerson
clonePerson.name = "Peter";

console.log(clonePerson.name);
console.log(person.name);

/**
 * @example 3
 * @param {object} obj
 */
// declaring object
const person = {
  name: "John",
  age: 21,
};

// cloning the object
const clonePerson = JSON.parse(JSON.stringify(person));

console.log(clonePerson);

// changing the value of clonePerson
clonePerson.name = "Peter";

console.log(clonePerson.name);
console.log(person.name);
