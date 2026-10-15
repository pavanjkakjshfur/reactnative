# Practical Learning Guide - From Zero to Job Ready

## Overview
This guide will help you actually learn and build everything in your resume, step by step. We'll start from the basics and work our way up to building real projects.

---

## 🎯 Your Goal
Learn enough to:
1. Understand what's in your resume
2. Build the 3 projects listed
3. Pass the Axiss Group interview

---

## 📚 What You Need to Learn (In Order)

### **Phase 1: JavaScript Fundamentals (Week 1-2)**
**What it is:** The programming language used in React Native
**Why you need it:** Everything in React Native is written in JavaScript

**What to learn:**
1. Variables and data types
2. Functions
3. Arrays and objects
4. If/else statements
5. Loops
6. ES6+ features (modern JavaScript)

**How to learn:**
- Watch: "JavaScript for Beginners" on YouTube (freeCodeCamp)
- Practice: https://javascript.info (interactive tutorials)
- Daily: 1-2 hours of coding practice

**Practice exercises:**
- Create a calculator
- Build a to-do list in JavaScript
- Make a simple guessing game

---

### **Phase 2: React Basics (Week 3-4)**
**What it is:** A JavaScript library for building user interfaces
**Why you need it:** React Native is built on React

**What to learn:**
1. What is React?
2. Components (building blocks)
3. JSX (writing HTML-like code in JavaScript)
4. Props (passing data between components)
5. State (managing data that changes)
6. Hooks (useState, useEffect)

**How to learn:**
- Watch: "React Tutorial for Beginners" (YouTube - Programming with Mosh)
- Read: https://react.dev (official React documentation)
- Practice: Build small React components

**Practice exercises:**
- Build a counter component
- Create a form component
- Make a list that displays items

---

### **Phase 3: React Native Basics (Week 5-6)**
**What it is:** A framework for building mobile apps using JavaScript
**Why you need it:** This is what the job requires!

**What to learn:**
1. What is React Native?
2. Core components (View, Text, Image, Button)
3. Styling (like CSS but for mobile)
4. Flexbox (layout system)
5. Navigation (moving between screens)

**How to learn:**
- Watch: "React Native Tutorial" (YouTube - Programming with Mosh)
- Read: https://reactnative.dev (official documentation)
- Practice: Build simple mobile screens

**Practice exercises:**
- Build a "Hello World" app
- Create a screen with text and buttons
- Make a list of items
- Add navigation between screens

---

### **Phase 4: Building Your First Real Project (Week 7-8)**
**Project: Simple Todo App**

**What you'll build:**
- A mobile app where users can add, view, and delete tasks
- Save tasks so they don't disappear when you close the app

**Skills you'll use:**
- React Native components
- State management
- Local storage (AsyncStorage)
- Styling

**Step-by-step:**
1. Set up React Native environment
2. Create a new project
3. Build the UI (input field, add button, list)
4. Add functionality (add task, delete task)
5. Save data to local storage
6. Test on your phone

---

### **Phase 5: API Integration (Week 9-10)**
**What it is:** Getting data from the internet into your app
**Why you need it:** Most apps need to fetch data from servers

**What to learn:**
1. What is an API?
2. How to make API calls (fetch or axios)
3. Handling loading states
4. Handling errors
5. Displaying API data

**How to learn:**
- Watch: "REST API Tutorial" (YouTube)
- Practice: Use free public APIs (JSONPlaceholder, PokeAPI)

**Practice exercises:**
- Fetch and display a list of users
- Show weather data from an API
- Display images from an API

---

### **Phase 6: Build Project 2 - Expo REST App (Week 11-12)**
**This is the project for Round 1 of the interview!**

**What you'll build:**
- A screen that fetches data from a public API
- Displays it in a list
- Has loading, error, and empty states
- Saves data for offline use

**Skills you'll use:**
- React Native
- Expo (easier setup)
- TypeScript (optional but good)
- API integration
- AsyncStorage (offline)
- Navigation

**Step-by-step:**
1. Set up Expo
2. Create a new Expo project
3. Choose a public API (like JSONPlaceholder)
4. Build the screen with FlatList
5. Add pull-to-refresh
6. Add loading indicator
7. Add error handling
8. Add offline caching with AsyncStorage
9. Test on emulator and real device

---

### **Phase 7: TypeScript Basics (Week 13)**
**What it is:** JavaScript with types (helps catch errors)
**Why you need it:** Many companies use it, it's in the job description

**What to learn:**
1. What is TypeScript?
2. Basic types (string, number, boolean)
3. Interfaces
4. Type annotations

**How to learn:**
- Watch: "TypeScript Tutorial for Beginners" (YouTube)
- Practice: Add types to your existing JavaScript code

---

### **Phase 8: Build Project 3 - NNRG Tech Fest Website (Week 14-16)**
**This will be a web version, easier than mobile initially**

**What you'll build:**
- A website for college events
- Registration system
- Event listings
- Schedule display

**Skills you'll use:**
- React (web version)
- Node.js (backend)
- Database (Supabase or Firebase)
- API integration

**Step-by-step:**
1. Learn basic Node.js
2. Set up a database (Supabase is free and easy)
3. Build the frontend with React
4. Create API endpoints with Node.js
5. Connect frontend to backend
6. Add user authentication
7. Deploy the website

---

### **Phase 9: Git and GitHub (Week 17)**
**What it is:** Version control - saves your code history
**Why you need it:** Every company uses it

**What to learn:**
1. What is Git?
2. Basic commands (init, add, commit, push)
3. Creating GitHub repositories
4. Branching and merging

**How to learn:**
- Watch: "Git and GitHub Tutorial" (YouTube)
- Practice: Put all your projects on GitHub

---

### **Phase 10: Interview Preparation (Week 18-20)**
**What to prepare:**
1. Practice MCQs on JavaScript and React
2. Practice coding problems
3. Prepare to explain your projects
4. Practice talking about your experience

**Daily routine:**
- 1 hour: MCQ practice
- 1 hour: Coding practice
- 30 minutes: Review projects

---

## 🛠️ Setting Up Your Environment

### **Step 1: Install Required Software**

**For Windows:**
1. Install Node.js from https://nodejs.org
2. Install VS Code from https://code.visualstudio.com
3. Install Git from https://git-scm.com

**For Mac:**
1. Install Homebrew (if not already installed)
2. Install Node.js: `brew install node`
3. Install VS Code from https://code.visualstudio.com
4. Git is usually pre-installed

### **Step 2: Set Up React Native**

**Option 1: Expo (Easier - Recommended for beginners)**
```bash
npx create-expo-app my-first-app
cd my-first-app
npx expo start
```

**Option 2: React Native CLI (More complex)**
Follow official guide: https://reactnative.dev/docs/environment-setup

### **Step 3: Install VS Code Extensions**
- ES7+ React/Redux/React-Native snippets
- Prettier (code formatting)
- ESLint (code quality)
- GitLens (Git integration)

---

## 📖 Learning Resources (Free)

### **JavaScript**
- https://javascript.info (excellent interactive tutorial)
- https://www.freecodecamp.org (free courses)
- YouTube: "JavaScript for Beginners" (freeCodeCamp)

### **React**
- https://react.dev (official documentation)
- YouTube: "React Tutorial for Beginners" (Programming with Mosh)
- YouTube: "React Crash Course" (Traversy Media)

### **React Native**
- https://reactnative.dev (official documentation)
- YouTube: "React Native Tutorial" (Programming with Mosh)
- YouTube: "React Native for Beginners" (freeCodeCamp)

### **TypeScript**
- https://www.typescriptlang.org/docs
- YouTube: "TypeScript Tutorial for Beginners" (Programming with Mosh)

### **Git/GitHub**
- https://git-scm.com/doc
- YouTube: "Git and GitHub Tutorial" (freeCodeCamp)

---

## 🎯 Daily Study Schedule

### **Week 1-2: JavaScript**
- **Morning (1 hour):** Watch tutorial video
- **Afternoon (1 hour):** Practice coding exercises
- **Evening (30 minutes):** Review what you learned

### **Week 3-4: React**
- **Morning (1 hour):** Watch tutorial video
- **Afternoon (1 hour):** Build small components
- **Evening (30 minutes):** Read documentation

### **Week 5-6: React Native**
- **Morning (1 hour):** Watch tutorial video
- **Afternoon (1 hour):** Build mobile screens
- **Evening (30 minutes):** Test on your phone

### **Week 7+: Project Building**
- **Morning (2 hours):** Work on project
- **Afternoon (2 hours):** Continue project
- **Evening (30 minutes):** Debug and fix issues

---

## 💡 Tips for Success

1. **Don't rush** - Take your time to understand each concept
2. **Practice every day** - Even 30 minutes is better than nothing
3. **Build things** - Don't just watch, actually code
4. **Get stuck?** That's normal! Use Google, Stack Overflow, or ask in communities
5. **Save your code** - Put everything on GitHub
6. **Take breaks** - Your brain needs rest to learn

---

## 🆘 When You Get Stuck

### **Where to get help:**
1. **Google** - Search your error message
2. **Stack Overflow** - Many answers there
3. **Reddit** - r/learnjavascript, r/reactnative
4. **Discord** - React Native Discord server
5. **YouTube** - Search for specific problems

### **What to do:**
1. Read the error message carefully
2. Copy and paste into Google
3. Try to understand the solution
4. Apply it to your code
5. If still stuck, ask for help with your code

---

## 📊 Progress Tracker

### **JavaScript Fundamentals**
- [ ] Variables and data types
- [ ] Functions
- [ ] Arrays and objects
- [ ] If/else statements
- [ ] Loops
- [ ] ES6+ features

### **React Basics**
- [ ] Components
- [ ] JSX
- [ ] Props
- [ ] State
- [ ] Hooks (useState, useEffect)

### **React Native Basics**
- [ ] Core components
- [ ] Styling
- [ ] Flexbox
- [ ] Navigation

### **Projects**
- [ ] Todo App
- [ ] Expo REST App
- [ ] Tech Fest Website

### **Additional Skills**
- [ ] TypeScript basics
- [ ] Git/GitHub
- [ ] API integration
- [ ] Database basics

---

## 🎓 Recommended Learning Path (20 Weeks)

**Week 1-2:** JavaScript fundamentals
**Week 3-4:** React basics
**Week 5-6:** React Native basics
**Week 7-8:** Build Todo App
**Week 9-10:** API integration
**Week 11-12:** Build Expo REST App
**Week 13:** TypeScript basics
**Week 14-16:** Build Tech Fest Website
**Week 17:** Git/GitHub
**Week 18-20:** Interview preparation

---

## ⚠️ Important Notes

1. **This will take time** - 20 weeks is about 5 months of consistent learning
2. **You don't need to know everything** - Focus on fundamentals first
3. **Build as you learn** - Don't just watch videos, actually code
4. **It's okay to feel overwhelmed** - Take it one step at a time
5. **Ask for help** - Don't struggle alone for too long

---

## 🚀 Getting Started RIGHT NOW

### **Today's Tasks:**
1. Install Node.js (if not already installed)
2. Install VS Code (if not already installed)
3. Install Git (if not already installed)
4. Watch first JavaScript tutorial (30 minutes)
5. Write your first JavaScript program (30 minutes)

### **Your First JavaScript Program:**
```javascript
// Open VS Code, create a file called hello.js
console.log("Hello, World!");

// Variables
let name = "Nikhil";
let age = 20;

console.log("My name is " + name);
console.log("I am " + age + " years old");

// Function
function sayHello() {
  console.log("Hello from function!");
}

sayHello();
```

### **How to run it:**
1. Open terminal/command prompt
2. Navigate to your file location
3. Type: `node hello.js`
4. Press Enter

---

## 📞 Next Steps

**After you complete this guide:**
1. You'll understand everything in your resume
2. You'll have 3 real projects
3. You'll be ready for the interview
4. You'll actually know how to code!

**Need help getting started?**
I can help you:
1. Set up your development environment
2. Write your first JavaScript program
3. Create your first React Native app
4. Build your first project

Just let me know what you want to start with!

---

**Remember: Every expert was once a beginner. You can do this!** 💪
