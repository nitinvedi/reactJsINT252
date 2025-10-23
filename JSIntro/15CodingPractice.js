const a = [1, 2, 3];
const b = [4, 5, 6];

const combined = [...a, ...b];

const newArray = [...a, 12, 13];


console.log(combined);
console.log(newArray);

const obj1 = {
    name: "Nitin",
    age: 25
}
const obj2 = {
    name: "Ayush",
    age: 13
}

const obj3  = {...obj2, ...obj1};

console.log(obj3);


const str = "hello";
const array = [...str];
console.log(array);

let sg;
const n = [...sg];
console.log(sg);
console.log(n);