/**
 * Examples of using reduce method
 * @param {Array} arr
 * @author @ehsanghaffarii
 * @since 2022-04-20
 * @prototype arr.reduce(callback, initialValue)
 * @callback function (accumulator, currentValue, index, array) {}
 */

/**
 * reduce method has two arguments
 * 1.callback function
 * 2.initial value
 */

/**
 * reduce method used for summing all the elements of an array
 * @param {Array} arr - array of number - [1, 2, 3, 4, 5];
 * @returns {Number} // 15
 * @since 2022-04-20
 */
const sum = (arr) => {
  const result = arr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  return result;
};

/**
 * reduce method used for multiplying all the elements of an array
 * @param {Array} arr - array of number - [1, 2, 3, 4, 5];
 * @returns {Number} // 120
 * @since 2022-04-20
 */
const multiply = (arr) => {
  const result = arr.reduce((acc, curr) => {
    return acc * curr;
  }, 1);
  return result;
};

/**
 *  reduce method used for finding the longest string in an array
 * @param {Array} arr - array of string - ["Ali", "Hassan", "Ehsan", "Hafiz", "Mohammad"];
 * @returns {String} - "Mohammad"
 * @since 2022-04-20
 */
const longestString = (arr) => {
  const result = arr.reduce((acc, curr) => {
    if (acc.length > curr.length) {
      return acc;
    }
    return curr;
  }, "");
  return result;
};

/**
 * reduce method used for flattening an array
 * @param {Array} arr - array of array - [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
 * @returns {Array} - [1, 2, 3, 4, 5, 6, 7, 8, 9]
 * @since 2022-04-20
 */
const flatten = (arr) => {
  const result = arr.reduce((acc, curr) => {
    return acc.concat(curr);
  }, []);
  return result;
};

/**
 * reduce method used for calculate the array length
 * @param {Array} arr - [1, 2, 3, 4, 5] || ["Ali", "Hassan", "Ehsan", "Hafiz", "Mohammad"] || ...
 *  @returns {Any} -
 * @since 2022-04-20
 */
var len = arr.reduce((total, curr) => {
  return total + curr.length;
}, 0);


/**
 * reduce method used for finding how meny times a word is repeated in a string
 * @param {String} str - "Ali Hassan Ehsan Hafiz Mohammad"
 * @returns {Object} - {Ali: 1, Hassan: 1, Ehsan: 1, Hafiz: 1, Mohammad: 1}
 * @since 2022-04-20
 */
var repeat = char.reduce((total, curr) => {
  if (!item in total) {
    total[item] = 1;
  }
  total[item]++;

  return total;
}

/**
 * reduce method used for duble the elements of an array
 * @param {Array} arr - [1, 2, 3, 4, 5]
 * @returns {Array} - [2, 4, 6, 8, 10]
 * @since 2022-04-20
 * NOTE: for duble the elements of an array, we can use map method
 */
var doubled = arr.reduce((output, item, index) => {
  output[index] = item * 2;
  return output;
},[])

