let num1 = 5;
const num2 = 10;
var num3 = 15;

//Re-assigning values
num1 = 20;  // No error, changes the value of num1

num2 = 25;  // Error: Assignment to constant variable.

num3 = 30;  // No error, changes the value of num3

console.log("num1:", num1); // Outputs: num1: 20
console.log("num2:", num2); // Outputs: num2: 10
console.log("num3:", num3); // Outputs: num3: 30
