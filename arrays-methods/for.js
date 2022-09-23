// good
const arrayOfNumbers = [];
for (let value = 10; value <= 50; value += 10) {
  arrayOfNumbers.push(value);
}

// bad
for (let index = 0; index < arrayOfNumbers.length; index++) {
  console.log(arrayOfNumbers[index]);
}
