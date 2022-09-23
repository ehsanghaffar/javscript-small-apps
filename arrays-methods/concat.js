const first = [10, 20];
const second = [30, 40, 50];

first.concat(second);

first.concat(second).map((v) => v * 10);

[...first, ...second].map((v) => v * 10);
