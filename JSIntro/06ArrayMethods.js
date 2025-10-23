const a = [1, 2];
const b = [3, 4];
const c = [...a, ...b];
const merged = a.concat(b);
console.log(c);
console.log(merged);

const num1 = [2, 4, 6];
console.log(num1.every((n) => n % 2 === 0));

const num2 = [1, 2, 3, 4, 5];
const even = num2.filter((n) => n % 2 === 0);
console.log(even);

const num = [10, 20, 30];
const found = num.find(n => n>15);
console.log(found);


console.log('for each use');
const arr = [1, 2, 3, 4, 5, 6];
arr.forEach((n)=>{
    console.log(n * 2);
})

const str = 'Hello';
console.log(Array.from(str));

const fruits = ['apple', 'mango', 'banana'];
console.log(fruits.indexOf('banana'));
console.log(fruits.indexOf('papaya'));

console.log('mapping use');
const doubled = [1, 2, 3].map(n => n * 2);
console.log(doubled);

const numbers = [1,2,3,4];
const sum = numbers.reduce((accumulator, currentvalue) => {
    return accumulator + currentvalue;
}, 0)

console.log(sum);


const arre = [1, 2, 3, 4];
arre.reverse();
console.log(arre);