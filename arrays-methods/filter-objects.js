const people = [{ name: "John" }, { name: "Ann" }];

const jPeople = people.filter(({ name }) => name.startsWith("J"));
jPeople;
jPeople[0].name = "Jack";
jPeople;
people;
