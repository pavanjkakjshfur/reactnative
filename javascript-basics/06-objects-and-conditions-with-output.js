// ========================================
// OBJECTS AND CONDITIONS - WITH OUTPUTS
// ========================================
// Run this with: node 06-objects-and-conditions-with-output.js

console.log("=== OBJECTS AND CONDITIONS EXAMPLES ===\n");

// ========================================
// PART 1: OBJECTS
// ========================================

// ========== 1. CREATING OBJECTS ==========
console.log("--- 1. Creating Objects ---");

let person = {
  name: "Nikhil",
  age: 20,
  city: "Hyderabad",
  isStudent: true
};

console.log("person =", person);
// Output: { name: 'Nikhil', age: 20, city: 'Hyderabad', isStudent: true }

// ========== 2. ACCESSING OBJECT PROPERTIES ==========
console.log("\n--- 2. Accessing Properties ---");

console.log("person.name =", person.name);           // Output: Nikhil
console.log("person.age =", person.age);             // Output: 20
console.log("person.city =", person.city);           // Output: Hyderabad
console.log("person.isStudent =", person.isStudent); // Output: true

// ========== 3. ADDING PROPERTIES ==========
console.log("\n--- 3. Adding Properties ---");

person.course = "Computer Science";
person.year = 3;

console.log("After adding properties:", person);
// Output: { name: 'Nikhil', age: 20, city: 'Hyderabad', isStudent: true, course: 'Computer Science', year: 3 }

// ========== 4. UPDATING PROPERTIES ==========
console.log("\n--- 4. Updating Properties ---");

console.log("Before update - age:", person.age);  // Output: 20
person.age = 21;
console.log("After update - age:", person.age);  // Output: 21

// ========== 5. DELETING PROPERTIES ==========
console.log("\n--- 5. Deleting Properties ---");

delete person.year;
console.log("After deleting year:", person);
// Output: { name: 'Nikhil', age: 21, city: 'Hyderabad', isStudent: true, course: 'Computer Science' }

// ========== 6. NESTED OBJECTS ==========
console.log("\n--- 6. Nested Objects ---");

let student = {
  name: "Nikhil",
  address: {
    city: "Hyderabad",
    state: "Telangana",
    pincode: "500081"
  },
  marks: {
    math: 85,
    science: 90,
    english: 80
  }
};

console.log("student =", student);
console.log("student.address.city =", student.address.city);      // Output: Hyderabad
console.log("student.marks.math =", student.marks.math);          // Output: 85

// ========== 7. ARRAY OF OBJECTS ==========
console.log("\n--- 7. Array of Objects ---");

let employees = [
  { id: 1, name: "Nikhil", department: "IT" },
  { id: 2, name: "Rahul", department: "HR" },
  { id: 3, name: "Priya", department: "Finance" }
];

console.log("employees =", employees);

console.log("\nEmployee details:");
for (let i = 0; i < employees.length; i++) {
  console.log("  ID:", employees[i].id, "| Name:", employees[i].name, "| Dept:", employees[i].department);
}
// Output:
//   ID: 1 | Name: Nikhil | Dept: IT
//   ID: 2 | Name: Rahul | Dept: HR
//   ID: 3 | Name: Priya | Dept: Finance

// ========== 8. OBJECT METHODS ==========
console.log("\n--- 8. Object Methods ---");

let calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
  multiply: function(a, b) {
    return a * b;
  }
};

console.log("calculator.add(5, 3) =", calculator.add(5, 3));       // Output: 8
console.log("calculator.subtract(10, 4) =", calculator.subtract(10, 4)); // Output: 6
console.log("calculator.multiply(6, 7) =", calculator.multiply(6, 7));   // Output: 42

// ========================================
// PART 2: CONDITIONS (IF/ELSE)
// ========================================

// ========== 9. SIMPLE IF/ELSE ==========
console.log("\n--- 9. Simple If/Else ---");

let age = 20;

if (age >= 18) {
  console.log("You can vote");  // Output: You can vote
} else {
  console.log("You cannot vote");
}

// ========== 10. IF/ELSE IF/ELSE ==========
console.log("\n--- 10. If/Else If/Else ---");

let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");      // Output: Grade: B
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// ========== 11. MULTIPLE CONDITIONS (AND/OR) ==========
console.log("\n--- 11. Multiple Conditions ---");

let personAge = 25;
let hasLicense = true;

// AND condition (both must be true)
if (personAge >= 18 && hasLicense) {
  console.log("Can drive car");  // Output: Can drive car
} else {
  console.log("Cannot drive car");
}

// OR condition (at least one must be true)
let isWeekend = true;
let isHoliday = false;

if (isWeekend || isHoliday) {
  console.log("No work today");  // Output: No work today
} else {
  console.log("Go to work");
}

// ========== 12. NESTED IF/ELSE ==========
console.log("\n--- 12. Nested If/Else ---");

let temperature = 30;
let isRaining = false;

if (temperature > 25) {
  if (isRaining) {
    console.log("Hot and rainy");
  } else {
    console.log("Hot and sunny");  // Output: Hot and sunny
  }
} else {
  if (isRaining) {
    console.log("Cool and rainy");
  } else {
    console.log("Cool and sunny");
  }
}

// ========== 13. TERNARY OPERATOR (Short If/Else) ==========
console.log("\n--- 13. Ternary Operator ---");

let num = 10;
let result = num > 0 ? "Positive" : "Negative";

console.log("num =", num, "| result =", result);  // Output: num = 10 | result = Positive

// ========== 14. SWITCH STATEMENT ==========
console.log("\n--- 14. Switch Statement ---");

let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week");  // Output: Start of the week
    break;
  case "Friday":
    console.log("End of the week");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend");
    break;
  default:
    console.log("Middle of the week");
}

// ========== 15. CHECKING OBJECT PROPERTIES ==========
console.log("\n--- 15. Checking Object Properties ---");

let user = {
  name: "Nikhil",
  email: "nikhil@example.com"
};

// Check if property exists
if (user.name) {
  console.log("User has a name:", user.name);  // Output: User has a name: Nikhil
}

if (user.phone) {
  console.log("User has a phone");
} else {
  console.log("User has no phone");  // Output: User has no phone
}

// ========== 16. COMPARING VALUES ==========
console.log("\n--- 16. Comparing Values ---");

// == (loose equality - converts types)
console.log("5 == '5':", 5 == "5");      // Output: true

// === (strict equality - no type conversion)
console.log("5 === '5':", 5 === "5");    // Output: false
console.log("5 === 5:", 5 === 5);        // Output: true

// != (not equal - loose)
console.log("5 != '5':", 5 != "5");      // Output: false

// !== (not equal - strict)
console.log("5 !== '5':", 5 !== "5");    // Output: true

// ========== 17. LOGICAL NOT (!) ==========
console.log("\n--- 17. Logical Not ---");

let isOnline = false;

if (!isOnline) {
  console.log("User is offline");  // Output: User is offline
}

let isEmpty = [];
if (!isEmpty.length) {
  console.log("Array is empty");  // Output: Array is empty
}

// ========== 18. SHORT-CIRCUIT EVALUATION ==========
console.log("\n--- 18. Short-Circuit Evaluation ---");

let username = "Nikhil";
let displayName = username || "Guest";

console.log("displayName =", displayName);  // Output: Nikhil

let username2 = null;
let displayName2 = username2 || "Guest";

console.log("displayName2 =", displayName2);  // Output: Guest

console.log("\n=== END OF OBJECTS AND CONDITIONS EXAMPLES ===");
