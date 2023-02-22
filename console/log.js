let foo = 2,
  bar = 4,
  loggedIn = false;

console.log({ foo, bar });

// condition
// verbose 💩
if (loggedIn) {
  console.error("user is logged in assertion failed");
}

// much better 😍
console.assert(loggedIn, "user is logged in");

// Timer in console
console.time();
// do stuff
console.timeLog("did stuff");
// do more stuff
console.timeLog("did more stuff");
console.timeEnd();

// add custom style to console
console.log("%c YOUR_MESSAGE", "YOUR_CSS");