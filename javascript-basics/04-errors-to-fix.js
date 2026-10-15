// ========================================
// PRACTICE: FIX THESE ERRORS
// ========================================
// This file has intentional errors for you to fix
// Uncomment each section and fix the error
// Run with: node 04-errors-to-fix.js

console.log("=== FIX THESE ERRORS ===\n");

// ========================================
// ERROR 1: Syntax Error - Missing quote
// ========================================
console.log("--- ERROR 1: Fix the syntax error ---");

// ❌ WRONG (uncomment to see error)
// console.log("Hello World);

// ✅ YOUR FIX HERE:
console.log("Hello World");  // Add the missing quote

// ========================================
// ERROR 2: Reference Error - Undefined variable
// ========================================
console.log("\n--- ERROR 2: Fix the reference error ---");

// ❌ WRONG (uncomment to see error)
// console.log(myAge);

// ✅ YOUR FIX HERE:
let myAge = 20;
console.log("myAge =", myAge);  // Declare the variable first

// ========================================
// ERROR 3: Type Error - Wrong operation
// ========================================
console.log("\n--- ERROR 3: Fix the type error ---");

// ❌ WRONG (uncomment to see error)
// let text = "hello";
// console.log(text.toFixed(2));

// ✅ YOUR FIX HERE:
let number = 3.14159;
console.log("number.toFixed(2) =", number.toFixed(2));  // Use a number, not text

// ========================================
// ERROR 4: Missing bracket
// ========================================
console.log("\n--- ERROR 4: Fix the missing bracket ---");

// ❌ WRONG (uncomment to see error)
// function add(a, b {
//   return a + b;
// }

// ✅ YOUR FIX HERE:
function add(a, b) {
  return a + b;
}
console.log("add(5, 3) =", add(5, 3));  // Add the closing bracket

// ========================================
// ERROR 5: Case sensitivity
// ========================================
console.log("\n--- ERROR 5: Fix the case sensitivity error ---");

let UserName = "Nikhil";

// ❌ WRONG (uncomment to see error)
// console.log(username);  // Different case!

// ✅ YOUR FIX HERE:
console.log("UserName =", UserName);  // Use the exact same case

// ========================================
// ERROR 6: Missing semicolon (might work but bad practice)
// ========================================
console.log("\n--- ERROR 6: Add semicolons ---");

// ❌ NOT IDEAL
// let x = 5
// let y = 10

// ✅ YOUR FIX HERE:
let x = 5;
let y = 10;
console.log("x + y =", x + y);  // Add semicolons

// ========================================
// ERROR 7: Using const to change value
// ========================================
console.log("\n--- ERROR 7: Fix the const error ---");

// ❌ WRONG (uncomment to see error)
// const PI = 3.14;
// PI = 3.14159;

// ✅ YOUR FIX HERE:
let PI = 3.14;
PI = 3.14159;
console.log("PI =", PI);  // Use let instead of const

// ========================================
// ERROR 8: Array index out of bounds
// ========================================
console.log("\n--- ERROR 8: Fix the array index error ---");

let fruits = ["apple", "banana", "mango"];

// ❌ WRONG (uncomment to see error)
// console.log(fruits[10]);  // Index 10 doesn't exist!

// ✅ YOUR FIX HERE:
console.log("fruits[0] =", fruits[0]);  // Use a valid index (0, 1, or 2)

// ========================================
// ERROR 9: Function called before definition
// ========================================
console.log("\n--- ERROR 9: Fix the function order ---");

// ❌ WRONG (uncomment to see error with function expressions)
// const greet = function(name) {
//   console.log("Hello " + name);
// };
// greet("Nikhil");  // This works, but let's use regular function

// ✅ YOUR FIX HERE:
function greet(name) {
  console.log("Hello " + name);
}
greet("Nikhil");

// ========================================
// ERROR 10: Object property typo
// ========================================
console.log("\n--- ERROR 10: Fix the property typo ---");

let person = {
  name: "Nikhil",
  age: 20
};

// ❌ WRONG (uncomment to see error)
// console.log(person.nmae);  // Typo in property name!

// ✅ YOUR FIX HERE:
console.log("person.name =", person.name);  // Fix the typo

console.log("\n=== ALL ERRORS FIXED! ===");
console.log("Great job! You fixed all the errors.");
