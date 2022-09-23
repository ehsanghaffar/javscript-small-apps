const numbers = [10, -20, 30, -40, 50];

const allPositive = numbers.filter((v) => v > 0);
allPositive;
const allNegatives = numbers.filter((v) => v < 0);
allNegatives;

const positiveUnder50 = numbers.filter((v) => v > 0).filter((v) => v < 50);
positiveUnder50;
