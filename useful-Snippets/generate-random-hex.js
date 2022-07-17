/**
 * Gernerate a random hex color
 */

const hexColor = () =>
  "#" +
  Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, "0");

console.log(hexColor());
