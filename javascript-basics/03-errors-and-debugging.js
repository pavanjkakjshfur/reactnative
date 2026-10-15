// ========================================
// COMMON ERRORS AND HOW TO DEBUG THEM
// ========================================
// This file shows common errors and how to fix them
// Run this with: node 03-errors-and-debugging.js

console.log("=== ERROR EXAMPLES AND DEBUGGING ===\n");

// ========================================
// ERROR 1: SYNTAX ERROR
// ========================================
console.log("--- ERROR 1: Syntax Error ---");
console.log("Problem: Missing quote or bracket");

// ❌ WRONG (This will cause an error)
// console.log("Hello World);  // Missing closing quote

// ✅ CORRECT
console.log("Hello World");  // Output: Hello World

console.log("\n💡 How to fix Syntax Errors:");
console.log("1. Check for matching quotes: ' or \"");
console.log("2. Check for matching brackets: ( ), { }, [ ]");
console.log("3. Check for semicolons at end of lines");
console.log("4. Read the error message - it tells you the line number\n");

// ========================================
// ERROR 2: REFERENCE ERROR
// ========================================
console.log("--- ERROR 2: Reference Error ---");
console.log("Problem: Using a variable that doesn't exist");

// ❌ WRONG (This will cause an error)
// console.log(myName);  // myName is not defined

// ✅ CORRECT
let myName = "Nikhil";
console.log("myName =", myName);  // Output: myName = Nikhil

console.log("\n💡 How to fix Reference Errors:");
console.log("1. Check if you declared the variable with let or const");
console.log("2. Check spelling - JavaScript is case sensitive");
console.log("3. Check if variable is defined before use");
console.log("4. Check scope - is variable accessible here?\n");

// ========================================
// ERROR 3: TYPE ERROR
// ========================================
console.log("--- ERROR 3: Type Error ---");
console.log("Problem: Using wrong data type");

// ❌ WRONG (This will cause an error)
// let number = "hello";
// console.log(number.toFixed(2));  // toFixed only works on numbers

// ✅ CORRECT
let number = 3.14159;
console.log("number.toFixed(2) =", number.toFixed(2));  // Output: 3.14

console.log("\n💡 How to fix Type Errors:");
console.log("1. Check what type of data the variable holds");
console.log("2. Use typeof to check: console.log(typeof variable)");
console.log("3. Convert types if needed: Number(), String(), Boolean()\n");

// ========================================
// ERROR 4: LOGIC ERROR
// ========================================
console.log("--- ERROR 4: Logic Error ---");
console.log("Problem: Code runs but gives wrong result");

// ❌ WRONG (Logic error - adds instead of multiplies)
function calculateAreaWrong(length, width) {
  return length + width;  // This is wrong for area!
}

// ✅ CORRECT
function calculateAreaCorrect(length, width) {
  return length * width;  // This is correct for area!
}

console.log("Wrong calculation (5 x 3):", calculateAreaWrong(5, 3));   // Output: 8 (wrong!)
console.log("Correct calculation (5 x 3):", calculateAreaCorrect(5, 3)); // Output: 15 (correct!)

console.log("\n💡 How to fix Logic Errors:");
console.log("1. Add console.log to see values at each step");
console.log("2. Test with simple values you know the answer to");
console.log("3. Break down complex logic into smaller steps");
console.log("4. Use a debugger (VS Code has built-in debugger)\n");

// ========================================
// ERROR 5: UNDEFINED ERROR
// ========================================
console.log("--- ERROR 5: Undefined Error ---");
console.log("Problem: Accessing property of undefined");

// ❌ WRONG (This will cause an error)
// let person;
// console.log(person.name);  // person is undefined

// ✅ CORRECT
let person = { name: "Nikhil" };
console.log("person.name =", person.name);  // Output: Nikhil

// ✅ CORRECT with check
let person2;
if (person2) {
  console.log(person2.name);
} else {
  console.log("person2 is undefined");  // Output: person2 is undefined
}

console.log("\n💡 How to fix Undefined Errors:");
console.log("1. Check if object exists before accessing properties");
console.log("2. Use optional chaining: person?.name");
console.log("3. Provide default values: person = person || {}\n");

// ========================================
// DEBUGGING TECHNIQUES
// ========================================
console.log("=== DEBUGGING TECHNIQUES ===\n");

console.log("--- Technique 1: Console.log ---");
console.log("Print values to see what's happening");

let x = 5;
let y = 10;
console.log("x =", x);  // Check value of x
console.log("y =", y);  // Check value of y
console.log("x + y =", x + y);  // Check result

console.log("\n--- Technique 2: Typeof ---");
console.log("Check the type of a variable");

let text = "hello";
let num = 123;
let bool = true;

console.log("typeof text =", typeof text);  // Output: string
console.log("typeof num =", typeof num);    // Output: number
console.log("typeof bool =", typeof bool);  // Output: boolean

console.log("\n--- Technique 3: Comment Out Code ---");
console.log("Disable parts of code to isolate the problem");

// Comment out suspected problematic code
// console.log(someFunctionThatMightError);

console.log("\n--- Technique 4: Test with Simple Values ---");
console.log("Use simple values to verify logic works");

// Test with 0, 1, simple strings
console.log("Test: 0 + 1 =", 0 + 1);  // Should be 1
console.log("Test: 1 * 2 =", 1 * 2);  // Should be 2

console.log("\n--- Technique 5: Break Down Complex Code ---");
console.log("Split complex operations into smaller steps");

// Complex
// let result = (a + b) * (c - d) / e;

// Simple (easier to debug)
let a = 5, b = 3, c = 10, d = 2, e = 4;
let step1 = a + b;
let step2 = c - d;
let step3 = step1 * step2;
let result = step3 / e;
console.log("Step by step result =", result);  // Output: 15

console.log("\n=== HOW TO READ ERROR MESSAGES ===\n");

console.log("Error messages tell you:");
console.log("1. TYPE of error (SyntaxError, ReferenceError, TypeError)");
console.log("2. MESSAGE - what went wrong");
console.log("3. LINE NUMBER - where the error is");
console.log("4. FILE NAME - which file has the error");

console.log("\nExample error message:");
console.log("ReferenceError: myVariable is not defined");
console.log("    at file.js:10:5");
console.log("This means: myVariable doesn't exist, at line 10, character 5");

console.log("\n=== COMMON DEBUGGING WORKFLOW ===\n");

console.log("Step 1: Read the error message carefully");
console.log("Step 2: Go to the line number mentioned");
console.log("Step 3: Check the code at that line");
console.log("Step 4: Check lines before (error might be from above)");
console.log("Step 5: Add console.log to see values");
console.log("Step 6: Fix the issue");
console.log("Step 7: Run the code again");

console.log("\n=== END OF ERROR EXAMPLES ===");
