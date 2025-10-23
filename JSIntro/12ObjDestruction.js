const person = {name: "nitin", age: 25, country: "Uttar Pradesh"}
const {name, age} = person

console.log(name);
console.log(age);

// renaming while destructuring
const {name: n, country: c} = person
console.log(n, c);

