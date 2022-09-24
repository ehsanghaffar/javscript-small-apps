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
