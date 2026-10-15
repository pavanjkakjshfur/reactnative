// ========================================
// ARRAYS - WITH OUTPUTS
// ========================================
// Run this with: node 05-arrays-with-output.js

console.log("=== ARRAYS EXAMPLES ===\n");

// ========== 1. CREATING ARRAYS ==========
console.log("--- 1. Creating Arrays ---");

let fruits = ["apple", "banana", "mango"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["text", 123, true, null];
let empty = [];

console.log("fruits =", fruits);           // Output: [ 'apple', 'banana', 'mango' ]
console.log("numbers =", numbers);         // Output: [ 1, 2, 3, 4, 5 ]
console.log("mixed =", mixed);             // Output: [ 'text', 123, true, null ]
console.log("empty =", empty);             // Output: []

// ========== 2. ACCESSING ARRAY ELEMENTS ==========
console.log("\n--- 2. Accessing Elements ---");

let colors = ["red", "green", "blue"];

console.log("colors[0] =", colors[0]);     // Output: red (first element)
console.log("colors[1] =", colors[1]);     // Output: green (second element)
console.log("colors[2] =", colors[2]);     // Output: blue (third element)
console.log("colors.length =", colors.length);  // Output: 3 (total elements)

// ========== 3. ADDING ELEMENTS ==========
console.log("\n--- 3. Adding Elements ---");

let pets = ["dog", "cat"];
console.log("Original:", pets);           // Output: [ 'dog', 'cat' ]

// Add to end
pets.push("bird");
console.log("After push:", pets);         // Output: [ 'dog', 'cat', 'bird' ]

// Add to beginning
pets.unshift("fish");
console.log("After unshift:", pets);      // Output: [ 'fish', 'dog', 'cat', 'bird' ]

// ========== 4. REMOVING ELEMENTS ==========
console.log("\n--- 4. Removing Elements ---");

let items = ["a", "b", "c", "d"];
console.log("Original:", items);           // Output: [ 'a', 'b', 'c', 'd' ]

// Remove from end
let removedEnd = items.pop();
console.log("After pop:", items);         // Output: [ 'a', 'b', 'c' ]
console.log("Removed:", removedEnd);       // Output: d

// Remove from beginning
let removedStart = items.shift();
console.log("After shift:", items);        // Output: [ 'b', 'c' ]
console.log("Removed:", removedStart);     // Output: a

// ========== 5. LOOPING THROUGH ARRAYS ==========
console.log("\n--- 5. Looping Through Arrays ---");

let names = ["Nikhil", "Rahul", "Priya"];

console.log("Using for loop:");
for (let i = 0; i < names.length; i++) {
  console.log("  " + (i + 1) + ".", names[i]);
}
// Output:
//   1. Nikhil
//   2. Rahul
//   3. Priya

console.log("\nUsing forEach:");
names.forEach(function(name, index) {
  console.log("  " + (index + 1) + ".", name);
});
// Output:
//   1. Nikhil
//   2. Rahul
//   3. Priya

// ========== 6. ARRAY METHODS ==========
console.log("\n--- 6. Array Methods ---");

let nums = [5, 2, 8, 1, 9];

console.log("Original array:", nums);     // Output: [ 5, 2, 8, 1, 9 ]

// Sort
console.log("Sorted:", nums.sort());      // Output: [ 1, 2, 5, 8, 9 ]

// Reverse
console.log("Reversed:", nums.reverse());  // Output: [ 9, 8, 5, 2, 1 ]

// Join into string
let joined = nums.join("-");
console.log("Joined:", joined);           // Output: 9-8-5-2-1

// ========== 7. FINDING ELEMENTS ==========
console.log("\n--- 7. Finding Elements ---");

let scores = [85, 90, 75, 95, 80];

console.log("scores =", scores);           // Output: [ 85, 90, 75, 95, 80 ]

// Find index of element
let index = scores.indexOf(90);
console.log("Index of 90:", index);        // Output: 1

// Check if element exists
let has75 = scores.includes(75);
console.log("Has 75?", has75);             // Output: true

let has100 = scores.includes(100);
console.log("Has 100?", has100);           // Output: false

// ========== 8. ARRAY OF OBJECTS ==========
console.log("\n--- 8. Array of Objects ---");

let students = [
  { name: "Nikhil", age: 20, grade: "A" },
  { name: "Rahul", age: 21, grade: "B" },
  { name: "Priya", age: 19, grade: "A" }
];

console.log("students =", students);

console.log("\nStudent details:");
for (let i = 0; i < students.length; i++) {
  console.log("  " + students[i].name + " - Age: " + students[i].age + ", Grade: " + students[i].grade);
}
// Output:
//   Nikhil - Age: 20, Grade: A
//   Rahul - Age: 21, Grade: B
//   Priya - Age: 19, Grade: A

// ========== 9. SLICING ARRAYS ==========
console.log("\n--- 9. Slicing Arrays ---");

let letters = ["a", "b", "c", "d", "e"];

console.log("Original:", letters);        // Output: [ 'a', 'b', 'c', 'd', 'e' ]

// Get elements from index 1 to 3 (not including 3)
let sliced = letters.slice(1, 3);
console.log("slice(1, 3):", sliced);      // Output: [ 'b', 'c' ]

// Get elements from index 2 to end
let sliced2 = letters.slice(2);
console.log("slice(2):", sliced2);        // Output: [ 'c', 'd', 'e' ]

// ========== 10. MAP METHOD (Transform Array) ==========
console.log("\n--- 10. Map Method ---");

let numbers2 = [1, 2, 3, 4, 5];

// Double each number
let doubled = numbers2.map(function(num) {
  return num * 2;
});

console.log("Original:", numbers2);       // Output: [ 1, 2, 3, 4, 5 ]
console.log("Doubled:", doubled);         // Output: [ 2, 4, 6, 8, 10 ]

// ========== 11. FILTER METHOD (Filter Array) ==========
console.log("\n--- 11. Filter Method ---");

let ages = [15, 20, 25, 30, 35];

// Keep only ages >= 18
let adults = ages.filter(function(age) {
  return age >= 18;
});

console.log("All ages:", ages);            // Output: [ 15, 20, 25, 30, 35 ]
console.log("Adults (>=18):", adults);    // Output: [ 20, 25, 30, 35 ]

// ========== 12. REDUCE METHOD (Combine Array) ==========
console.log("\n--- 12. Reduce Method ---");

let prices = [10, 20, 30, 40];

// Sum all prices
let total = prices.reduce(function(sum, price) {
  return sum + price;
}, 0);

console.log("Prices:", prices);            // Output: [ 10, 20, 30, 40 ]
console.log("Total:", total);             // Output: 100

console.log("\n=== END OF ARRAYS EXAMPLES ===");
