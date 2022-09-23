const original = [1, 2, 3, 4, 5];

original;
original.shift();
original;
original.unshift(1);
original;

const unchanging = [1, 2, 3, 4, 5];
// shift
const [value, ...rest] = unchanging;
value;
rest;
// unshift
const newArray = [0, ...unchanging];
newArray;
unchanging;
