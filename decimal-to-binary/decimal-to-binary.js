// Example 1
// program to convert decimal to binary
function convertToBinary(x) {
  let bin = 0;
  let rem,
    i = 1,
    step = 1;
  while (x != 0) {
    rem = x % 2;
    console.log(
      `Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient = ${parseInt(
        x / 2
      )}`
    );
    x = parseInt(x / 2);
    bin = bin + rem * i;
    i = i * 10;
  }
  console.log(`Binary: ${bin}`);
}

// take input
// let number = prompt("Enter a decimal number: ");
// convertToBinary(number);

// Example 2
// program to convert decimal to binary

// take input
const number = parseInt(prompt("Enter a decimal number: "));

// convert to binary
const result = number.toString(2);

console.log("Binary:" + " " + result);
// Output
// Enter a decimal number: 9
// Binary: 1001
