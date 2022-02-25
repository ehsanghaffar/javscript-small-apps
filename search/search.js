/**
 *  Search for an item in an array of objects
 * @param {array} ItemsList - array of objects
 * @param {string} search - search term
 * @returns {array} - array of objects
 * @example
 * findItem([{name: 'toy', price: '$10'}, {name: 'toy', price: '$10'}], 'toy');
 * // [{name: 'toy', price: '$10'}, {name: 'toy', price: '$10'}]
 * @author Ehsan Ghaffar
 * @since 2022-02-26
 */

const items = [
  { id: "1", title: "planes", tags: ["Airbus", "Bouing", "F15"] },
  { id: "2", title: "cars", tags: ["Toyota", "Ford", "Nissan"] },
];

const findItem = (ItemsList = [], search = "") => {
  let list = [];
  function createList() {
    items.forEach(function (word) {
      let i;
      list[word] = i;
    });
  }
  function searchWord(term) {
    if (term in list) {
      console.log(term + " is found at " + list[term]);
    }
  }
  createList();
  searchWord("toy");
};

findItem(items, "Toyota");
console.log(items);
