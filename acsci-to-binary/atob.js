// ASCII to Binary converter
var asci =
  "eJyt0k1ugzAQBeCrIHcbAgTMT3YNKZeoqmpiBrAKDLIdpVGVu5dUXVgyS3vjkRfv0zz5/YfJlh2DeBcwKWheRzYYs+hjFLVgQCi407wXNEVygh7132sodXhBuBrZXceoRf1laAkvim4alY7IDOu1X+aerbGCRlLP3H7NYo9d8E8mPkkxKJrQIV+yQ8mbzFIPPtWJNEjhqlVS8tfKUlOfaicVdvTtsgXP0rfUYjOf7IxGC1g2Sk55UZV2ydyni22PnyP2IO4uHcfn5JxYdO71Iy+owEXrOo4TGy187+uaOa+znFtm6dOUG2LTnKq0sMTKp6ihAyW3un0e9vj4BfcriOY=";

var toBinaryMethod = atob(asci);

var toBinary = toBinaryMethod.split("").map((x) => {
  return x.charCodeAt(0);
});

console.log(toBinary);

// result
// [
//   120, 156, 173, 210,  77, 110, 131,  48,  16,   5, 224, 171,
//    32, 119,  27,   2,   4, 204,  79, 118,  13,  41, 151, 168,
//   170, 106,  98,   6, 176,  10,  12, 178,  29, 165,  81, 149,
//   187, 151,  84,  93,  88,  50,  75, 123, 227, 145,  23, 239,
//   211,  60, 249, 253, 135, 201, 150,  29, 131, 120,  23,  48,
//    41, 104,  94,  71,  54,  24, 179, 232,  99,  20, 181,  96,
//    64,  40, 184, 211, 188,  23,  52,  69, 114, 130,  30, 245,
//   223, 107,  40, 117, 120,  65, 184,  26, 217,  93, 199, 168,
//    69, 253, 101, 104,
//   ... 157 more items
// ]
