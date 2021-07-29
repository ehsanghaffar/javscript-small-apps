var a = 1;
var one = 1;

var promise = new Promise((resolve, reject) => {
  if (a === one) {
    resolve();
  } else {
    reject();
  }
})
  .then(() => {
    console.log("Thats right");
  })
  .catch((err) => {
    console.log(err + "Not right");
  });
