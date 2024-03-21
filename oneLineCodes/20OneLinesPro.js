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


// Check if a variable is an array
const isArray = (arr) => Array.isArray(arr);

console.log(isArray([1, 2, 3]));
// true
console.log(isArray({ name: 'Ovi' }));
// false
console.log(isArray('Hello World'));
// false


//  Generate a random number between two numbers
const randomBetweenTwoNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

console.log(randomBetweenTwoNumber(1, 50));


// Generate a random string (unique id?)
const randomString = () => Math.random().toString(36).slice(2);

console.log(randomString());


// Scroll to the top of the page
const scrollToTop = () => window.scrollTo(0, 0);

scrollToTop();


// Calculate number of days between two dates
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);

console.log(daysDiff(new Date('2021-05-10'), new Date('2021-11-25')));