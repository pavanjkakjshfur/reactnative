// EXERCISE: Simple Calculator
// Your task: Complete the functions below to make the calculator work

// ========== TODO: Complete these functions ==========

// 1. Add two numbers
function add(a, b) {
  // Your code here
  return a + b;
}

// 2. Subtract two numbers
function subtract(a, b) {
  // Your code here
  return a - b;
}

// 3. Multiply two numbers
function multiply(a, b) {
  // Your code here
  return a * b;
}

// 4. Divide two numbers
function divide(a, b) {
  // Your code here
  return a / b;
}

// ========== Testing your functions ==========

console.log("=== Calculator Test ===");
console.log("5 + 3 =", add(5, 3));
console.log("10 - 4 =", subtract(10, 4));
console.log("6 * 7 =", multiply(6, 7));
console.log("20 / 4 =", divide(20, 4));

// ========== BONUS: Try with your own numbers ==========
let num1 = 15;
let num2 = 3;

console.log("\n=== Custom Numbers ===");
console.log(num1 + " + " + num2 + " =", add(num1, num2));
console.log(num1 + " - " + num2 + " =", subtract(num1, num2));
console.log(num1 + " * " + num2 + " =", multiply(num1, num2));
console.log(num1 + " / " + num2 + " =", divide(num1, num2));
