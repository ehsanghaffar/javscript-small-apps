// You can create a date object using the new Date() constructor
const timeNow = new Date();
console.log(timeNow); // shows current date and time


// new Date(milliseconds) creates a new date object by adding the milliseconds to the zero time
const time1 = new Date(0);

// epoch time
console.log(time1); // Thu Jan 01 1970 05:30:00

// 100000000000 milliseconds after the epoch time
const time2 = new Date(100000000000)
console.log(time2); // Sat Mar 03 1973 15:16:40

// You can create a date object by passing ISO date formats.
const date = new Date("2020-07-01"); // ISO Date(International Standard)

// the result date will be according to UTC
console.log(date); // Wed Jul 01 2020 05:45:00 GMT+0545

// You can also pass only the year and month or only the year.
const date = new Date("2020-07");
console.log(date); // Wed Jul 01 2020 05:45:00 GMT+0545

const date1 = new Date("2020");
console.log(date1); // Wed Jul 01 2020 05:45:00 GMT+0545

// You can also pass specific time to ISO dates.
const date = new Date("2020-07-01T12:00:00Z");
console.log(date); // Wed Jul 01 2020 17:45:00 GMT+0545




// 
new Date().toDateString(); // e.g. "Fri Nov 11 2016"

new Date().toISOString(); // e.g. "2016-11-21T08:00:00.000Z"

new Date().toJSON(); // e.g. "2016-11-21T08:00:00.000Z"

new Date().toLocaleDateString(); // e.g. "21/11/2016"

new Date().toLocaleString(); // e.g. "21/11/2016, 08:00:00 AM"

new Date().toLocaleTimeString(); // e.g. "08:00:00 AM"

new Date().toString(); // e.g. "Fri Nov 21 2016 08:00:00 GMT+0100 (W. Europe Standard Time)"

new Date().toISOString().slice(0,10); //return YYYY-MM-DD

// Specifying the locale for standard functions:

toLocaleDateString([locales[, options]])
toLocaleTimeString([locales[, options]])
toLocaleString([locales[, options]])
//e.g. toLocaleDateString('ko-KR');
// toLocaleString('en-GB', { month: 'short' })
// toLocaleString('en-GB', { month: 'long' })
// toLocaleString('en-GB', { hour12: true }));
