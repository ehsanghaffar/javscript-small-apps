const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

console.log(names.indexOf("Alice"));
console.log(names.indexOf("Alice", 1));
console.log(names.indexOf("Sally"));

console.log(names.lastIndexOf("Alice"));

console.log(names.findIndex((name) => name === "Bruce"));
