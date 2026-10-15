// ========================================
// VARIABLES - WITH OUTPUTS
// ========================================
// Run this with: node 01-variables-with-output.js

console.log("=== VARIABLES EXAMPLES ===\n");

// ========== 1. STRING VARIABLES ==========
console.log("--- 1. Strings (Text) ---");
let name = "Nikhil";
let city = "Hyderabad";
let message = "Hello, World!";

console.log("name =", name);           // Output: name = Nikhil
console.log("city =", city);           // Output: city = Hyderabad
console.log("message =", message);     // Output: message = Hello, World!

// ========== 2. NUMBER VARIABLES ==========
console.log("\n--- 2. Numbers ---");
let age = 20;
let price = 99.99;
let score = 85;
let negative = -10;

console.log("age =", age);             // Output: age = 20
console.log("price =", price);         // Output: price = 99.99
console.log("score =", score);         // Output: score = 85
console.log("negative =", negative);   // Output: negative = -10

// ========== 3. BOOLEAN VARIABLES ==========
console.log("\n--- 3. Booleans (True/False) ---");
let isStudent = true;
let isWorking = false;
let hasLicense = true;

console.log("isStudent =", isStudent);     // Output: isStudent = true
console.log("isWorking =", isWorking);     // Output: isWorking = false
console.log("hasLicense =", hasLicense);   // Output: hasLicense = true

// ========== 4. ARRAY VARIABLES ==========
console.log("\n--- 4. Arrays (Lists) ---");
let fruits = ["apple", "banana", "mango"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["text", 123, true];

console.log("fruits =", fruits);           // Output: fruits = [ 'apple', 'banana', 'mango' ]
console.log("numbers =", numbers);         // Output: numbers = [ 1, 2, 3, 4, 5 ]
console.log("mixed =", mixed);             // Output: mixed = [ 'text', 123, true ]

// ========== 5. OBJECT VARIABLES ==========
console.log("\n--- 5. Objects (Key-Value Pairs) ---");
let person = {
  name: "Nikhil",
  age: 20,
  city: "Hyderabad"
};

console.log("person =", person);           // Output: person = { name: 'Nikhil', age: 20, city: 'Hyderabad' }
console.log("person.name =", person.name); // Output: person.name = Nikhil
console.log("person.age =", person.age);   // Output: person.age = 20

// ========== 6. CHANGING VARIABLE VALUES ==========
console.log("\n--- 6. Changing Values ---");
let counter = 0;
console.log("Initial counter =", counter);  // Output: Initial counter = 0

counter = 1;
console.log("After change =", counter);     // Output: After change = 1

counter = counter + 1;
console.log("After adding 1 =", counter);   // Output: After adding 1 = 2

// ========== 7. CONST (Cannot Change) ==========
console.log("\n--- 7. Const (Cannot Change) ---");
const PI = 3.14159;
console.log("PI =", PI);                    // Output: PI = 3.14159

// PI = 3.14;  // This would cause an ERROR!
// console.log("This line won't run because of error above");

// ========== 8. TEMPLATE LITERALS (Modern String Formatting) ==========
console.log("\n--- 8. Template Literals ---");
let firstName = "Nikhil";
let lastName = "Goud";
let ageNum = 20;

// Old way (concatenation)
console.log("Old way: " + firstName + " " + lastName + " is " + ageNum + " years old");
// Output: Old way: Nikhil Goud is 20 years old

// New way (template literals)
console.log(`New way: ${firstName} ${lastName} is ${ageNum} years old`);
// Output: New way: Nikhil Goud is 20 years old

// ========== 9. UNDEFINED AND NULL ==========
console.log("\n--- 9. Undefined and Null ---");
let empty1;              // No value assigned
let empty2 = null;       // Explicitly set to empty

console.log("empty1 =", empty1);  // Output: empty1 = undefined
console.log("empty2 =", empty2);  // Output: empty2 = null

console.log("\n=== END OF VARIABLES EXAMPLES ===");
