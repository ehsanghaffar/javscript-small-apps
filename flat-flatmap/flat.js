/**
 * ES2019 version new methods for Array.prototype.flatMap
 * @param {Function} callback
 * @param {Object} thisArg
 * @returns {Array}
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap
 * @see https://tc39.es/ecma262/#sec-array.prototype.flatmap
 * @description
 * This method is like Array.prototype.map except that the callback is invoked with three arguments:
 * the value, the index, and the array.
 */

// Syntax:
// Arrow function
flatMap((currentValue) => {
  /* ... */
});
flatMap((currentValue, index) => {
  /* ... */
});
flatMap((currentValue, index, array) => {
  /* ... */
});

// Callback function
flatMap(callbackFn);
flatMap(callbackFn, thisArg);

// Inline callback function
flatMap(function (currentValue) {
  /* ... */
});
flatMap(function (currentValue, index) {
  /* ... */
});
flatMap(function (currentValue, index, array) {
  /* ... */
});
flatMap(function (currentValue, index, array) {
  /* ... */
}, thisArg);

// Example of map() and flatMap()
let arr1 = [1, 2, 3, 4];

arr1.map((x) => [x * 2]);
// [[2], [4], [6], [8]]

arr1.flatMap((x) => [x * 2]);
// [2, 4, 6, 8]

// only one level is flattened
arr1.flatMap((x) => [[x * 2]]);
// [[2], [4], [6], [8]]


/ Let's say we want to remove all the negative numbers
// and split the odd numbers into an even number and a 1
let a = [5, 4, -3, 20, 17, -33, -4, 18]
//       |\  \  x   |  | \   x   x   |
//      [4,1, 4,   20, 16, 1,       18]

a.flatMap( (n) =>
  (n < 0) ?      [] :
  (n % 2 == 0) ? [n] :
                 [n-1, 1]
)

// expected output: [4, 1, 4, 20, 16, 1, 18]