# Jr React Native Engineer - Axiss Group - Prep Guide

Target: `AIAXISS_Job_Descriptions_Updated.pdf Page 4` - Jr React Native Engineer
Model: 6-month internship (12-15k/month) -> Full-time 3.6-5.5 LPA, Hyderabad
Cut-off: 8.0 CGPA - You have 8.57 - eligible
Apply: hr@aiaxiss.com, Subject: `Jr React Native Engineer`

Background: C + Java + some Python, no React Native yet.

## 1. What to Learn (in order)

### 1.1 JavaScript ES6+ (3 days) - 70% of Round 1 MCQ
- let/const, arrow functions, template literals
- array map/filter/find, object destructuring, spread/rest
- modules import/export
- promises, async/await, fetch + JSON
- truthy/falsy, optional chaining `?.`, nullish `??`

### 1.2 TypeScript Basics (1 day)
- string, number, boolean, arrays, interface, type
- function types, Promise<T>, reading type errors
- Just need to read types, not master generics

### 1.3 React (2 days)
- component, props vs state
- useState, useEffect, useRef, custom hooks
- conditional rendering, list rendering with key
- props drilling basics

### 1.4 React Native + Expo (4 days)
- Core: View, Text, TextInput, Pressable, ScrollView, FlatList, ActivityIndicator
- StyleSheet + Flexbox: flex:1, flexDirection, justifyContent, alignItems
- Expo Router, React Navigation stack/tabs, passing params
- AsyncStorage for offline cache
- Run on Android Studio emulator + real device

### 1.5 APIs + Tools (2 days)
- REST: GET with fetch/axios, JSON, headers, JWT/auth basics
- States: loading / error / empty / offline / refresh + pagination
- Postman test API, Git/GitHub push + code review, Jira/Trello basics
- Read Figma design -> Flexbox code
- ChatGPT/Claude for debugging, Copilot/Cursor as assistant

### 1.6 Good to have for Round 2
- Zustand / Redux basics, async patterns
- Firebase auth/firestore, Expo EAS Build/Submit
- Animations, accessibility basics

> Skip Flutter/Dart for now. Exam is React Native only. Flutter experience is transferable for release discipline only.

## 2. Round 1 Exam Pattern

From JD:
> MCQs on JavaScript/TypeScript, React and hooks; build a small screen from a given design that loads and shows data from a public REST API.

### Practice Task (do this exact)
Build 1 screen List-Detail from `https://jsonplaceholder.typicode.com/posts`:
1. fetch in useEffect with loading spinner
2. try/catch error UI + retry button
3. FlatList + pull-to-refresh + pagination
4. Tap item -> Detail screen via Navigation
5. Cache last data in AsyncStorage for offline
6. TypeScript interfaces for Post { id, title, body }
7. Pixel-close to Figma using Flexbox

This mirrors your resume claim `Expo REST App - Figma to API List-Detail` - now actually build it.

## 3. Round 2 Interview Q&A

### Technical - learn to explain
1. **useState vs useEffect?**
   State holds UI data and re-renders. Effect runs after render for API, timer, subscription.
2. **props vs state?**
   Props from parent, read-only. State inside component, mutable via setter.
3. **How fetch API with loading/error/offline?**
   useEffect + fetch, loading flag, catch error, AsyncStorage fallback, FlatList empty component.
4. **Flexbox in RN?**
   flex:1 fills, flexDirection row/column, justifyContent main-axis, alignItems cross-axis. No web CSS.
5. **Navigation?**
   Stack push/pop, tabs, pass params route.params, goBack.
6. **Git + Release?**
   branch, commit, push, PR review. EAS Build -> APK/AAB -> Play Store. Use NNRG Campus App story: 24-hr ship, real-device test, versioning.

### Project walk-through (use your resume)
- NNRG Tech Fest: 29 events, 1000+ registrations, zero downtime, React components/hooks + REST + Supabase/PostgreSQL, 40% faster via indexing.
- NNRG Campus App live on Indus Appstore: ERP dashboard, attendance 5min -> 2-6sec, notifications, signing/release notes.
- Be ready: role, problem, solution, code pattern, what broke and fix.

### Behavioral
- How worked with BA/PM/Data roles?
- How handled bug/crash after release?
- How learned fast + took review feedback?

## 4. Round 3 HR
Culture fit, Hyderabad location, 6-month internship terms, package based on internship performance.

## 5. Projects Checklist for GitHub
- [ ] Expo REST App with README, demo video/APK, EAS dev build
- [ ] Tech Fest link + blog on kasabunikhilgoud.online/blog
- [ ] Campus App Indus link indusapp.store/hpl8219g

Need 1-2 solid, not 5 half-done.

## 6. 12-Day Plan
- Day 1-3: JS ES6+ + 50 MCQs/day
- Day 4: TS basics
- Day 5-6: React web practice
- Day 7-10: RN + Expo + FlatList + Navigation + AsyncStorage
- Day 11-12: Build exam task + push GitHub + record demo on phone

Apply only after app runs on phone. Show phone demo in interview.
