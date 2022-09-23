const numbers = [9, 10, 11, 13, 14, 15];

const hasNext = numbers.filter((v, _, a) => a.includes(v + 1));
hasNext;
