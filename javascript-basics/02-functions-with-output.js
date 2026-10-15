// ========================================
// FUNCTIONS - WITH OUTPUTS
// ========================================
// Run this with: node 02-functions-with-output.js

console.log("=== FUNCTIONS EXAMPLES ===\n");

// ========== 1. SIMPLE FUNCTION ==========
console.log("--- 1. Simple Function ---");

function sayHello() {
  console.log("Hello, World!");
}

sayHello();  // Output: Hello, World!
sayHello();  // Output: Hello, World!

// ========== 2. FUNCTION WITH PARAMETERS ==========
console.log("\n--- 2. Function with Parameters ---");

function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Nikhil");    // Output: Hello, Nikhil!
greet("Rahul");     // Output: Hello, Rahul!
greet("Friend");    // Output: Hello, Friend!

// ========== 3. FUNCTION WITH MULTIPLE PARAMETERS ==========
console.log("\n--- 3. Multiple Parameters ---");

function introduce(name, age, city) {
  console.log(`My name is ${name}, I'm ${age} years old, and I live in ${city}`);
}

introduce("Nikhil", 20, "Hyderabad");
// Output: My name is Nikhil, I'm 20 years old, and I live in Hyderabad

introduce("Rahul", 21, "Mumbai");
// Output: My name is Rahul, I'm 21 years old, and I live in Mumbai

// ========== 4. FUNCTION THAT RETURNS A VALUE ==========
console.log("\n--- 4. Function with Return Value ---");

function add(a, b) {
  return a + b;
}

let result1 = add(5, 3);
console.log("5 + 3 =", result1);  // Output: 5 + 3 = 8

let result2 = add(10, 20);
console.log("10 + 20 =", result2);  // Output: 10 + 20 = 30

// ========== 5. MULTIPLE RETURN VALUES ==========
console.log("\n--- 5. Multiple Return Values ---");

function calculate(a, b) {
  let sum = a + b;
  let difference = a - b;
  let product = a * b;
  return { sum, difference, product };
}

let calcResult = calculate(10, 5);
console.log("calcResult =", calcResult);
// Output: calcResult = { sum: 15, difference: 5, product: 50 }

console.log("Sum:", calcResult.sum);           // Output: Sum: 15
console.log("Difference:", calcResult.difference);  // Output: Difference: 5
console.log("Product:", calcResult.product);   // Output: Product: 50

// ========== 6. ARROW FUNCTIONS (Modern Way) ==========
console.log("\n--- 6. Arrow Functions ---");

// Regular function
function multiplyRegular(a, b) {
  return a * b;
}

// Arrow function (shorter)
const multiplyArrow = (a, b) => a * b;

console.log("Regular: 5 * 3 =", multiplyRegular(5, 3));  // Output: Regular: 5 * 3 = 15
console.log("Arrow: 5 * 3 =", multiplyArrow(5, 3));      // Output: Arrow: 5 * 3 = 15

// ========== 7. FUNCTION WITH DEFAULT PARAMETERS ==========
console.log("\n--- 7. Default Parameters ---");

function greetWithDefault(name = "Guest") {
  console.log("Hello, " + name + "!");
}

greetWithDefault("Nikhil");  // Output: Hello, Nikhil!
greetWithDefault();          // Output: Hello, Guest! (uses default)

// ========== 8. FUNCTION THAT CHECKS CONDITIONS ==========
console.log("\n--- 8. Function with Conditions ---");

function checkAge(age) {
  if (age >= 18) {
    return "You can vote";
  } else {
    return "You cannot vote yet";
  }
}

console.log("Age 20:", checkAge(20));  // Output: Age 20: You can vote
console.log("Age 15:", checkAge(15));  // Output: Age 15: You cannot vote yet

// ========== 9. FUNCTION WITH ARRAY ==========
console.log("\n--- 9. Function with Array ---");

function sumArray(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
  return total;
}

let numbers = [1, 2, 3, 4, 5];
console.log("Sum of [1,2,3,4,5] =", sumArray(numbers));
// Output: Sum of [1,2,3,4,5] = 15

// ========== 10. NESTED FUNCTIONS ==========
console.log("\n--- 10. Nested Functions ---");

function outerFunction() {
  console.log("Outer function started");

  function innerFunction() {
    console.log("Inner function called");
  }

  innerFunction();
  console.log("Outer function ended");
}

outerFunction();
// Output:
// Outer function started
// Inner function called
// Outer function ended

console.log("\n=== END OF FUNCTIONS EXAMPLES ===");
