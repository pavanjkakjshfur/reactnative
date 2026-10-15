// Welcome to your first JavaScript program!
// Run this with: node first-program.js

console.log("Hello, World!");
console.log("Welcome to JavaScript, Nikhil!");

// ========== VARIABLES ==========
// Variables are like containers that hold data

let name = "Nikhil";          // text (string)
let age = 20;                 // number
let isStudent = true;        // boolean (true/false)
let hobbies = ["coding", "gaming", "reading"];  // array (list)

console.log("\n--- Variables ---");
console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Hobbies:", hobbies);

// ========== FUNCTIONS ==========
// Functions are reusable blocks of code

function greet(personName) {
  console.log("Hello, " + personName + "!");
}

console.log("\n--- Functions ---");
greet("Nikhil");
greet("Friend");

// ========== IF/ELSE STATEMENTS ==========
// Making decisions in code

let score = 85;

console.log("\n--- If/Else ---");
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// ========== LOOPS ==========
// Repeating actions

console.log("\n--- Loops ---");
console.log("Counting from 1 to 5:");

for (let i = 1; i <= 5; i++) {
  console.log("Number:", i);
}

// ========== ARRAYS ==========
// Lists of data

console.log("\n--- Arrays ---");
console.log("My hobbies:");
for (let i = 0; i < hobbies.length; i++) {
  console.log((i + 1) + ".", hobbies[i]);
}

// ========== OBJECTS ==========
// Key-value pairs (like a dictionary)

let person = {
  name: "Nikhil",
  age: 20,
  city: "Hyderabad",
  course: "Computer Science"
};

console.log("\n--- Objects ---");
console.log("Person details:");
console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("City:", person.city);
console.log("Course:", person.course);

// ========== ES6+ FEATURES ==========
// Modern JavaScript features

// Arrow functions (shorter way to write functions)
const add = (a, b) => a + b;

console.log("\n--- ES6+ Features ---");
console.log("5 + 3 =", add(5, 3));

// Template literals (easier string formatting)
console.log(`My name is ${name} and I'm ${age} years old`);

// Destructuring (extracting values from arrays/objects)
const [firstHobby, secondHobby] = hobbies;
console.log("First two hobbies:", firstHobby, "and", secondHobby);

// Spread operator (copy arrays/objects)
let moreHobbies = [...hobbies, "swimming", "cooking"];
console.log("All hobbies:", moreHobbies);

console.log("\n=== Congratulations! You wrote your first JavaScript program! ===");
