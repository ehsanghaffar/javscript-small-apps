// Get a random boolean
const getRandomNumber = () => Math.random() >= 0.5
console.log(getRandomNumber())


// Check if the date is Weekend
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;

console.log(isWeekend(new Date(2021, 4, 14)));
// false (Friday)
console.log(isWeekend(new Date(2021, 4, 15)));
// true (Saturday)


// Check if a number is even or odd
const isEven = (num) => num % 2 === 0;

console.log(isEven(5));
// false
console.log(isEven(4));
// true


// Get the unique values in an array
const uniqueArr = (arr) => [...new Set(arr)];

console.log(uniqueArr([1, 2, 3, 1, 2, 3, 4, 5]));
// [1, 2, 3, 4, 5]
