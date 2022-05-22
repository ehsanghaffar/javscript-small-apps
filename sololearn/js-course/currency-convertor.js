// You are making a currency converter app.
// Create a function called convert, which takes two parameters: the amount to convert, and the rate, and returns the resulting amount.
// The code to take the parameters as input and call the function is already present in the Playground.
// Create the function to make the code work.

// function main() {
//   var amount = 100;
//   var rate = 1.1;

//   function convert(am, ra) {
//     let result = am * ra;
//     return parseInt(result);
//   }

//   console.log(convert(amount, rate));
// }

// main();

function contact(name, number) {
  this.name = name;
  this.number = number;

  this.print = function () {
    console.log(`${this.name} ${this.number}`);
  };
}

var a = new contact("David", 12345);
var b = new contact("Amy", 987654321);
// a.print();
// b.print();

function main() {
  var increase = 9;
  var prices = [98.99, 15.2, 20, 1026];
  //your code goes here
  let res = [];
  prices.forEach((i) => {
    i = i + increase;
    res.push(i);
  });

  console.log(res);
}

// main();

class Add {
  constructor(...words) {
    this.words = words;
  }
  //your code goes here
  print() {
    let res = "";
    this.words.forEach((i) => {
      res += "$" + i;
    });
    console.log(res + "$");
  }
}

var x = new Add("hehe", "hoho", "haha", "hihi", "huhu");
var y = new Add("this", "is", "awesome");
var z = new Add(
  "lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
  "consectetur",
  "adipiscing",
  "elit"
);
x.print();
y.print();
z.print();
