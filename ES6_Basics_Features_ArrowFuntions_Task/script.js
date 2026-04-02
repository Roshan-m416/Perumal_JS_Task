// ES6_1
let name = "Perumal";
const age = 22;

let message = `My name is ${name} and I am ${age} years old`;

function greet(user = "Guest") {
    return `Hello, ${user}`;
}

// ES6_2
let numbers = [10, 20, 30];
let [a, b, c] = numbers;

let person = { city: "Chennai", country: "India" };
let { city, country } = person;

let newNumbers = [...numbers];

function sumAll(...nums) {
    return nums.reduce((total, num) => total + num, 0);
}

// ES6_3
let add = (x, y) => x + y;

class Student {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        return `Hi, I am ${this.name}`;
    }
}

let student1 = new Student("Kumar");

let result = `
Message: ${message} <br>
Greet: ${greet()} <br><br>

Destructured Array: ${a}, ${b}, ${c} <br>
Destructured Object: ${city}, ${country} <br>
Copied Array: ${newNumbers} <br>
Sum (Rest): ${sumAll(1,2,3,4)} <br><br>

Arrow Function Add: ${add(5,3)} <br>
Class Output: ${student1.sayHello()}
`;

document.getElementById("output").innerHTML = result;