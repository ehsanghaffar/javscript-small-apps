const numbers = [10, 20, 30, 40, 50];
numbers;
const copyOfNumbers = [...numbers];
copyOfNumbers;
copyOfNumbers[0] = 100;
copyOfNumbers;
numbers;

const people = [{ name: "John" }, { name: "Jane" }];
people;
const copyOfPeople = [...people];
copyOfPeople;
copyOfPeople[0].name = "Jack";
copyOfPeople;
people;
