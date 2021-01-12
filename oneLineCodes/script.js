
// 1 - Check if an array is empty  //
// arr is an array
const isEmpty = arr => !Array.isArray(arr) || arr.length === 0;
// uses example
isEmpty([]) // true
isEmpty([1, 2, 3]) // false

// 2 - Convert an array of string to number //
const toNumber = arr => arr.map(Number);
// example
console.log(toNumber(['1', '2', '3']));

// 3 - Create an empty function
const noop = () => {};

// 4 - Check if the code is running in node js
const isNode = typeof process !== 'undefined' && process.versions !== null && process.versions.node !== null;

// 5 - Check if the code is running in the browser
const isBrowser = typeof window === 'object' && typeof document === 'object';

// 6 - Redirect the page to https if it is in http
const redirectHttps = () => (location.protocol === 'https') ? {} : location.replace(`https://${location.split('//')[1]}`);

// 7 - Convert a string to url slug
const slugify = string => string.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

// Example
slugify('Chapter One: Once upon a time...');    // 'chapter-one-once-upon-a-time'
