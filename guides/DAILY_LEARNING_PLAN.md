# Daily Learning Plan - Week 1: JavaScript Fundamentals

## Day 1: Variables and Data Types

### **Morning (1 hour)**
**Watch:** JavaScript for Beginners - Variables and Data Types (YouTube)
**Link:** https://www.youtube.com/watch?v=PkZNo7MFNFg (freeCodeCamp)

### **Afternoon (1 hour)**
**Practice:** Create a file called `day1-variables.js`

```javascript
// TODO: Create variables for your profile
let myName = "Your Name";
let myAge = 20;
let myCity = "Hyderabad";
let myCourse = "Computer Science";
let isLearning = true;

// TODO: Print all variables
console.log("Name:", myName);
console.log("Age:", myAge);
console.log("City:", myCity);
console.log("Course:", myCourse);
console.log("Is Learning:", isLearning);

// TODO: Try changing the values and run again
```

**Run it:** `node day1-variables.js`

### **Evening (30 minutes)**
**Review:** What did you learn today?
- Variables store data
- Different data types: string, number, boolean
- console.log prints to screen

---

## Day 2: Functions

### **Morning (1 hour)**
**Watch:** JavaScript Functions Tutorial (YouTube)
**Link:** https://www.youtube.com/watch?v=PkZNo7MFNFg (continue from Day 1)

### **Afternoon (1 hour)**
**Practice:** Create a file called `day2-functions.js`

```javascript
// TODO: Create a function that says hello
function sayHello(name) {
  console.log("Hello, " + name + "!");
}

// TODO: Call the function
sayHello("Nikhil");
sayHello("Friend");

// TODO: Create a function that adds two numbers
function addNumbers(a, b) {
  return a + b;
}

// TODO: Use the function
let result = addNumbers(5, 10);
console.log("5 + 10 =", result);

// TODO: Create your own function
// Example: A function that calculates area of a rectangle
function calculateArea(length, width) {
  return length * width;
}

console.log("Area of 5x3 rectangle:", calculateArea(5, 3));
```

**Run it:** `node day2-functions.js`

### **Evening (30 minutes)**
**Review:** What did you learn?
- Functions are reusable code blocks
- Functions can take parameters
- Functions can return values
- You call functions to use them

---

## Day 3: Arrays

### **Morning (1 hour)**
**Watch:** JavaScript Arrays Tutorial (YouTube)
**Link:** https://www.youtube.com/watch?v=7T3h0aMfG58 (Traversy Media)

### **Afternoon (1 hour)**
**Practice:** Create a file called `day3-arrays.js`

```javascript
// TODO: Create an array of your favorite foods
let foods = ["biryani", "curry", "rice", "samosa"];

// TODO: Print the entire array
console.log("My favorite foods:", foods);

// TODO: Print each food one by one
console.log("\nFood list:");
for (let i = 0; i < foods.length; i++) {
  console.log((i + 1) + ".", foods[i]);
}

// TODO: Add a new food to the array
foods.push("chicken");
console.log("\nAfter adding chicken:", foods);

// TODO: Remove the last food
foods.pop();
console.log("After removing last:", foods);

// TODO: Find the length of the array
console.log("Total foods:", foods.length);

// TODO: Access specific items
console.log("First food:", foods[0]);
console.log("Last food:", foods[foods.length - 1]);
```

**Run it:** `node day3-arrays.js`

### **Evening (30 minutes)**
**Review:** What did you learn?
- Arrays store lists of data
- Arrays are indexed starting from 0
- You can add/remove items
- You can access items by index

---

## Day 4: Objects

### **Morning (1 hour)**
**Watch:** JavaScript Objects Tutorial (YouTube)
**Link:** https://www.youtube.com/watch?v=hiRlU80a3Ew (Traversy Media)

### **Afternoon (1 hour)**
**Practice:** Create a file called `day4-objects.js`

```javascript
// TODO: Create an object representing a student
let student = {
  name: "Nikhil",
  age: 20,
  course: "Computer Science",
  year: 3,
  isPassing: true
};

// TODO: Print the entire object
console.log("Student:", student);

// TODO: Access individual properties
console.log("\nStudent Details:");
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Course:", student.course);
console.log("Year:", student.year);
console.log("Is Passing:", student.isPassing);

// TODO: Add a new property
student.college = "NNRG";
console.log("\nAfter adding college:", student);

// TODO: Update a property
student.age = 21;
console.log("After updating age:", student.age);

// TODO: Create another object for a friend
let friend = {
  name: "Rahul",
  age: 20,
  course: "Computer Science"
};

console.log("\nFriend:", friend);
```

**Run it:** `node day4-objects.js`

### **Evening (30 minutes)**
**Review:** What did you learn?
- Objects store key-value pairs
- You access values using keys
- You can add/update properties
- Objects are like dictionaries

---

## Day 5: If/Else Statements

### **Morning (1 hour)**
**Watch:** JavaScript If/Else Tutorial (YouTube)
**Link:** https://www.youtube.com/watch?v=IsX546kDmkQ (Programming with Mosh)

### **Afternoon (1 hour)**
**Practice:** Create a file called `day5-ifelse.js`

```javascript
// TODO: Check if a number is positive or negative
let number = -5;

if (number > 0) {
  console.log(number + " is positive");
} else if (number < 0) {
  console.log(number + " is negative");
} else {
  console.log(number + " is zero");
}

// TODO: Grade calculator
let score = 85;

console.log("\n--- Grade Calculator ---");
if (score >= 90) {
  console.log("Score:", score, "- Grade: A (Excellent!)");
} else if (score >= 80) {
  console.log("Score:", score, "- Grade: B (Good!)");
} else if (score >= 70) {
  console.log("Score:", score, "- Grade: C (Average)");
} else if (score >= 60) {
  console.log("Score:", score, "- Grade: D (Pass)");
} else {
  console.log("Score:", score, "- Grade: F (Fail)");
}

// TODO: Check if you can vote
let age = 20;

console.log("\n--- Voting Check ---");
if (age >= 18) {
  console.log("Age:", age, "- You can vote!");
} else {
  console.log("Age:", age, "- You cannot vote yet");
}

// TODO: Try with different values
// Change the number, score, and age above and run again
```

**Run it:** `node day5-ifelse.js`

### **Evening (30 minutes)**
**Review:** What did you learn?
- If/else makes decisions in code
- You can have multiple conditions with else if
- Code runs only when condition is true
- You can nest if/else statements

---

## Day 6: Loops

### **Morning (1 hour)**
**Watch:** JavaScript Loops Tutorial (YouTube)
**Link:** https://www.youtube.com/watch?v=tJYBm4jJ5kM (Traversy Media)

### **Afternoon (1 hour)**
**Practice:** Create a file called `day6-loops.js`

```javascript
// TODO: For loop - count from 1 to 10
console.log("--- Counting 1 to 10 ---");
for (let i = 1; i <= 10; i++) {
  console.log("Number:", i);
}

// TODO: For loop - count backwards
console.log("\n--- Counting 10 to 1 ---");
for (let i = 10; i >= 1; i--) {
  console.log("Number:", i);
}

// TODO: While loop
console.log("\n--- While Loop ---");
let count = 1;
while (count <= 5) {
  console.log("Count:", count);
  count++;
}

// TODO: Loop through an array
let fruits = ["apple", "banana", "mango", "orange"];
console.log("\n--- Fruits ---");
for (let i = 0; i < fruits.length; i++) {
  console.log((i + 1) + ".", fruits[i]);
}

// TODO: Calculate sum of numbers 1 to 100
console.log("\n--- Sum of 1 to 100 ---");
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum = sum + i;
}
console.log("Sum:", sum);
```

**Run it:** `node day6-loops.js`

### **Evening (30 minutes)**
**Review:** What did you learn?
- Loops repeat code multiple times
- For loop when you know how many times
- While loop when you don't know
- You can loop through arrays

---

## Day 7: Practice Project - To-Do List

### **Morning (1 hour)**
**Review:** Review all concepts from the week

### **Afternoon (2 hours)**
**Practice:** Create a file called `day7-todo.js`

```javascript
// TODO: Create a simple to-do list manager

// Array to store tasks
let tasks = [];

// Function to add a task
function addTask(task) {
  tasks.push(task);
  console.log("Added:", task);
}

// Function to show all tasks
function showTasks() {
  console.log("\n--- Your Tasks ---");
  if (tasks.length === 0) {
    console.log("No tasks yet!");
  } else {
    for (let i = 0; i < tasks.length; i++) {
      console.log((i + 1) + ".", tasks[i]);
    }
  }
}

// Function to remove a task
function removeTask(index) {
  if (index >= 0 && index < tasks.length) {
    let removed = tasks.splice(index, 1);
    console.log("Removed:", removed[0]);
  } else {
    console.log("Invalid task number");
  }
}

// TODO: Test your to-do list
console.log("=== To-Do List Manager ===\n");

// Add some tasks
addTask("Learn JavaScript");
addTask("Build React Native app");
addTask("Prepare for interview");

// Show all tasks
showTasks();

// Remove a task (remove task 2)
console.log("\nRemoving task 2...");
removeTask(1);

// Show tasks again
showTasks();

// Add more tasks
addTask("Practice coding");
addTask("Build portfolio");

// Show final list
showTasks();

// TODO: Try adding and removing your own tasks
```

**Run it:** `node day7-todo.js`

### **Evening (30 minutes)**
**Review:** What did you learn this week?
- Variables store data
- Functions reuse code
- Arrays store lists
- Objects store key-value pairs
- If/else makes decisions
- Loops repeat code
- You built a real project!

---

## Week 1 Complete! 🎉

### **What You Accomplished:**
- ✅ Learned JavaScript fundamentals
- ✅ Wrote your first programs
- ✅ Built a to-do list project
- ✅ Practiced every day

### **Next Week:**
- Learn more JavaScript features
- Start learning React basics
- Build more projects

### **Keep Practicing:**
- Try modifying the to-do list
- Add new features (mark as complete, edit tasks)
- Create your own small projects

---

## Tips for Success

1. **Don't skip days** - Consistency is key
2. **Run your code often** - See what happens
3. **Get stuck?** Google the error message
4. **Ask for help** - Don't struggle alone
5. **Have fun!** Coding is creative

---

## Need Help?

If you get stuck on any day:
1. Read the error message carefully
2. Copy and paste into Google
3. Check YouTube for tutorials
4. Ask in forums (Stack Overflow, Reddit)

---

**You're doing great! Keep going!** 💪
