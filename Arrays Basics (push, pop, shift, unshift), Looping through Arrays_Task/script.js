let input = document.getElementById("inputBox");
let output = document.getElementById("output");

input.addEventListener("input", function () {
  output.textContent = input.value;
});

let button = document.getElementById("clickBtn");

button.addEventListener("click", function () {
  alert("Button Clicked!");
});

let form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Form Submitted!");
});

console.log("Start");

console.log("This is synchronous");

setTimeout(function () {
  console.log("This is asynchronous (after 2 seconds)");
}, 2000);

console.log("End");

setTimeout(function () {
  console.log("Hello after 2 seconds");
}, 2000);

let count = 1;
setInterval(function () {
  console.log("Counter:", count);
  count++;
}, 1000);

let arr = [10, 20, 30];

console.log("Original Array:", arr);

arr.push(40);
console.log("After push:", arr);

arr.pop();
console.log("After pop:", arr);

arr.unshift(5);
console.log("After unshift:", arr);

arr.shift();
console.log("After shift:", arr);

console.log("Array elements using for loop:");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
