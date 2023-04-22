
// program to validate the phone number with regex pattern

function validatePhone(num) {
  // regex pattern for phone number
  const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g;
  // check if the phone number is valid
  let result = num.match(re);
  if (result) {
    console.log(`The number is valid:  ${num}`);
  }
  else {
      let num = prompt('Enter number in XXX-XXX-XXXX format:');
      validatePhone(num);
  }
}

// take input
let number = prompt('Enter a number XXX-XXX-XXXX');

validatePhone(number);