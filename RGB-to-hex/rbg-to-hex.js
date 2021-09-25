
// function for convert RGB to Hex code 
const rgbToHex = (r, g, b) => 
"#" + ((1 << 24) + (r << 16) + (g << 8) + b)
  .toString(16).slice(1);


// example
const example =  rgbToHex(255, 0, 0)

// test
// console.log(example)
