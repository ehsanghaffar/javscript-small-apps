
console.log(makeBread(2)) // Call still works here

// function Declarations
function makeBread(qty) {
  return '🍞'.repeat(qty)
}


// function expressions
const makeBeer = function (qty) {
  return '🍺'.repeat(qty);
}

const a = makeBeer(2)
console.log(a)


// Arrow function
const makeWine = (qty) => '🍷'.repeat(qty);

/*
 * Structure parameters in a function:
 * Positional
 * Named
 * Rest params
*/

// Positional
function makeBreakfast(main, side, drink) {
  console.log(arguments)
  return `Breakfast is ${main}, ${side}, and ${drink}.`;
}

// Named
function makeLunch(opts) {
  const { main, side, drink } = opts;
  console.log(opts)
  return `Lunch is ${main}, ${side}, and ${drink}.`;
}

// Rest params
function makeDinner(main, ...args) {
  console.log(main, args)
  return `Dinner includes ${main} and ${args.join('')}.`;
}


makeBreakfast('🥞', '🥓', '🥛', '\n');

makeLunch({ main: '🥙', side: '🍟', drink: '🥤' });

makeDinner('🍜', '🥘', '🍙', '🥠', '🍑');



// Impure & Pure functions

// Impure
let global = 0;
const impure = () => {
  global++;
  return global ** 2;
}

// Pure
const pure = (x) => x ** 2;


/* High Order Function
 * A higher order function is created by combining (or composing) multiple 
 * functions together by passing (1) functions as arguments or (2) returning functions. 
 * There are many built-in JS functions that use HOF, for example setTimeout and Array.map.
*/

// Anonymous
setTimeout(() => console.log('hello!'), 2000);

// Named
const log = () => console.log('hello');
setTimeout(log, 2000);


// Array Map
[1, 2, 3, 4].map(v => v ** 2);


// Recursive Function
const fs = require('fs');
const { join } = require('path');

const traverse = (dir) => {

  const subfolders = fs.statSync(dir).isDirectory()
    && fs.readdirSync(dir);

  if (subfolders) {

    console.log('👟👟👟 Traversing ', dir);

    subfolders.forEach(path => {
      const fullPath = join(dir, path);

      traverse(fullPath);


    });
  }

}

traverse(process.cwd());