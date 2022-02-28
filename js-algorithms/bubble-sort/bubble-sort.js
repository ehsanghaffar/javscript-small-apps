/**
 * JavaScript implementation of bubble sort algorithm
 * @param {Array} arr - array of numbers
 * @returns {Array} - sorted array
 * @author: Ehsan Ghaffar
 */
const bubbleSort = (originalArray) => {
  let swapped = false;

  const a = [...originalArray];

  for (let i = 1; i < a.length - 1; i++) {
    swapped = false;

    for (let j = 0; j < a.length - i; j++) {
      if (a[j + 1] < a[j]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        swapped = true;
      }
    }

    if (!swapped) {
      return a;
    }
  }

  return a;
};

console.log(bubbleSort([2, 1, 6]));
