const original = [1, 2, 3, 4, 5];

const originalRef = original;
originalRef === original;

original;
original.pop();
original;
original.push(5);
original;

originalRef === original;

let aNumber = 5;
const stateManagerCopy = aNumber;
stateManagerCopy === aNumber;
aNumber = 6;
stateManagerCopy === aNumber;

const unchanging = [1, 2, 3, 4, 5];
// pop
const popped = unchanging.slice(-1)[0];
const rest = unchanging.slice(0, -1);
// push
const aNewArray = [...unchanging, 6];
