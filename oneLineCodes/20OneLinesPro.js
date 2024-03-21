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


// Copy text to clipboard
const copyTextToClipboard = async (text) => {
  await navigator.clipboard.writeText(text);
};


// Different ways of merging multiple arrays
// Merge without remove the duplications
const merge = (a, b) => a.concat(b);
// Or
const merge = (a, b) => [...a, ...b];

// Merge with remove the duplications
const merge = [...new Set(a.concat(b))];
// Or
const merge = [...new Set([...a, ...b])];


// Truncate string at the end
const truncateString = (string, length) => {
  return string.length < length ? string : `${string.slice(0, length - 3)}...`;
};

console.log(
  truncateString('Hi, I should be truncated because I am too loooong!', 36),
);
// Hi, I should be truncated because...


// Truncate string from the middle
const truncateStringMiddle = (string, length, start, end) => {
  return `${string.slice(0, start)}...${string.slice(string.length - end)}`;
};

console.log(
  truncateStringMiddle(
    'A long story goes here but then eventually ends!', // string
    25, // total size needed
    13, // chars to keep from start
    17, // chars to keep from end
  ),
);
// A long story ... eventually ends!


// Capitalizing a string
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

console.log(capitalize('hello world'));
// Hello world


// Check if the user is on an Apple device
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);

console.log(isAppleDevice);
// true/false
