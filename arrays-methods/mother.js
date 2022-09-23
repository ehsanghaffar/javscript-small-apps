const numbers = [1, 2, 3, 4, 5];

// Includes
numbers.reduce((includes, value) => (includes ? includes : value === 3), false);
numbers.reduce(
  (includes, value) => (includes ? includes : value === 10),
  false
);

// Slice
numbers.reduce(
  (arr, value, index) => (index > 0 && index < 4 ? [...arr, value] : arr),
  []
);

// Map
numbers.reduce((arr, value) => [...arr, value * 100], []);
