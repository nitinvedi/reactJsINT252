class Person {
    name = 'Nitin'


    greet() {
        console.log(`Hello my name is ${this.name}`)
    }

    arrow = () => {
        console.log(this.name);
    }
}

const p1 = new Person();

p1.greet();
p1.arrow();

// const outside = () => {
//     const inside = () => {
//         name = "Nitin";
//         return name;
//     }

//     const a = inside();

//     console.log(a);
// }

// outside();