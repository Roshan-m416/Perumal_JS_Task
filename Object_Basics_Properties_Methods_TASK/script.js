let person = {
  name: "Perumal",
  age: 22,
  sayHello: function () {
    return "Hello, my name is " + this.name;
  },
};

let originalName = person.name;

person.age = 23;
person.city = "Chennai";

let greeting = person.sayHello();

let result = `
Original Name: ${originalName} <br>
Updated Age: ${person.age} <br>
Added City: ${person.city} <br>
Method Output: ${greeting}
`;

document.getElementById("output").innerHTML = result;
