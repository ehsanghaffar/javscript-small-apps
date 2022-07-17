/**
 * Capitalise a string
 */

const capitalizeString = (str) => {
  let capStr = str.replace(/\w\S*/g, (txt) =>
    txt.replace(/^\w/, (chr) => chr.toUpperCase())
  );
  return capStr;
};

console.log(capitalizeString("hello world"));
