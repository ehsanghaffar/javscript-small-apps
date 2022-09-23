const numbers = [10, 20, 30, 40, 50];

const numbersTimes10 = numbers.map((v) => v * 10);
numbersTimes10;

const numbersTimes10Obj = numbers.map((v) => ({ value: v * 10 }));
numbersTimes10Obj;

const numbersWithNegatives = [-10, 20, 30, -40, -50];
const positveBy10 = numbersWithNegatives
  .filter((v) => v > 0)
  .map((v) => v * 10);
positveBy10;

const people = [
  { first: "Jane", last: "Smith", address: { city: "Oakland" } },
  { first: "Sally", last: "Joe", address: { city: "Foster City" } },
];

const cheapClone = (obj) => JSON.parse(JSON.stringify(obj));

const fullNames = people.map((p) =>
  cheapClone({
    ...p,
    fullName: `${p.first} ${p.last}`,
  })
);
fullNames;
fullNames[0].first = "Penny";
fullNames[0].address.city = "San Jose";
fullNames;
people;
