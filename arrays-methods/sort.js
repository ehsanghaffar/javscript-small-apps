const numbers = [2, 6, 3, 4, 1, 5];
numbers.sort();

const names = ["Jack", "Jill", "Jane", "John", "Jim"];
names.sort();

const people = [
  { id: 6, name: "Jack" },
  { id: 1, name: "Sam" },
  { id: 3, name: "Sally" },
];
people.sort((a, b) => a.id - b.id);
people;

const unchanging = [2, 6, 3, 4, 1, 5];
const newNumbers = [...unchanging].sort();
unchanging;

numbers;
numbers.reverse();
numbers;

unchanging;
[...unchanging].sort().reverse();
unchanging;
