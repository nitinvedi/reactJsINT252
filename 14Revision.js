const sum = (...nums) => {
    return nums.reduce((acc, n) => acc + n, 0)
};
console.log(sum(1, 2, 3,  5, 43));

const fruits = ["apple", "mango", "cherry", "date"];
const [a, m, ...other] = fruits;
console.log(a);
console.log(m);
console.log(other);

const student = {name: "Manjot", age: 32, course:"CSE", city: "Ludhiana"};

const {name, ...rest} = student;
console.log(name);
console.log(rest);


1