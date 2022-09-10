/**
 * Reverse a string
 */

// Method 1
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello"));

// Method 2
function reverse(s) {
  var o = "";
  for (var i = s.length - 1; i >= 0; i--) o += s[i];
  return o;
}

console.log(reverse("Hello"));
