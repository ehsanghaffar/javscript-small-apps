// The input string containing a series of words
const str = "Whiskey Hotel Four Tango Dash Alpha Romeo Three Dash Yankee Oscar Uniform Dash Sierra One November Kilo India November Golf Dash Four Bravo Zero Uniform Seven";

// Split the string into an array of words using a space as the separator
const words = str.split(' ');

// Define a dictionary (object) for special word replacements
const specials = {
  One: 1,
  Two: 2,
  Three: 3,
  Four: 4,
  Five: 5,
  Six: 6,
  Seven: 7,
  Eight: 8,
  Nine: 9,
  Zero: 0,
  Dash: '-',
};

// Loop through each word in the array
for (const word of words) {
  // Check if the word exists in the dictionary, if yes, use its value as replacement
  // Otherwise, use the first character of the word as a default replacement
  const replacement = specials[word] !== undefined ? specials[word] : word[0];

  // Print the result to the browser console or developer tools console
  console.log(replacement);
}
