// const nums = [1, 2, 3, 4, 5, 6];

// // filter map reduce 
// // sum of squares of all even numbers

// const evens = nums.filter((a) => a % 2 === 0);

// const squareArray = evens.map((n) => n * n);

// const sum = squareArray.reduce((acc, n) => acc + n, 0);
// console.log(sum);

// const num1 = [10, 25, 45, 60, -70];
// const searchValue = 45;

// // poistion of 60
// const index = num1.findIndex((n) => n==60);
// console.log(index);

// const posit = num1.every((n) => n > 0);
// console.log(posit);

// const value = num1.find((n) => n>25);

// console.log(value);



const students = [
    {name: "X", mark: 95},
    {name: "Y", mark: 75},
    {name: "Z", mark: 55},
    {name: "m", mark: 45},
]

const fail = students.filter((obj)=> obj.mark < 45);
console.log(fail);

const sums = students.reduce((acc, obj) => acc + obj.mark, 0)
console.log(sums / students.length);

const pass = students.every((obj) => obj.mark >= 50);
console.log(pass);
