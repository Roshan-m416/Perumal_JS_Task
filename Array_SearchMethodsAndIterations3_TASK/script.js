let arr = [2, 5, 8, 11, 14];

let doubled = arr.map((num) => num * 2);

let evenNumbers = arr.filter((num) => num % 2 === 0);

let sum = arr.reduce((total, num) => total + num, 0);

let firstGreaterThan10 = arr.find((num) => num > 10);

let hasValue = arr.includes(8);

let result = `
Doubled: ${doubled} <br>
Even Numbers: ${evenNumbers} <br>
Sum: ${sum} <br>
First > 10: ${firstGreaterThan10} <br>
Includes 8: ${hasValue}
`;

document.getElementById("output").innerHTML = result;
