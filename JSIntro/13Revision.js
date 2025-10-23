const colors = ["red", "green", "blue"];

const [a, b, ...rest] = colors;
console.log(a);
console.log(b);


const person = {name: "Alice", age: 25, city: "Delhi"};

person.age = 40;
console.log(person.age);


const nums = [10, 20, 30];

const [c, ,d] = nums;
console.log(c);
console.log(d);

// rename and assign a default value
const car = {brand: "tesla"};
const {brand: carBrand, model = "Model S"} = car;
console.log(carBrand);
console.log(model);

// nested destructuring
const user = {id: 1, info: {firstName: "John", lastName: "Doe"}};
const { id, info } = user;
const { firstName, lastName } = info;
console.log(id);
console.log(info);
console.log(firstName);
console.log(lastName);


