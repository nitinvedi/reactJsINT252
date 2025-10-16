// const arr1 = [1, 2, 3]
// const arr2 = [4, 5]
// const combined = [...arr1, ...arr2]

// console.log(combined)


// const obj1 = {a: 1, b: 2}
// const obj2 = {c: 3}

// const merged = {...obj1, ...obj2}
// console.log(merged)


function sum(...nums) {
    return nums.reduce((total, n) => total + n);
}

console.log(sum(1, 2, 3));


// rest operator
const {p, ...rest} = {p:1, q:2, r:3};
console.log(p);
console.log(rest);



const numbers = [10, 20 ,30, 40, 50]
const [a, b] = numbers;

console.log(a, b);

const [x, ,y, z=100] = [1, 2, 3]

console.log(x, y, z);