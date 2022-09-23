const numbers = [10, 20, 30, 40, 50];

for (const index in numbers) {
  console.log(index);
  console.log(numbers[index]);
}

for (const value of numbers) {
  if (value > 20) {
    break;
  }
  console.log(value);
}
