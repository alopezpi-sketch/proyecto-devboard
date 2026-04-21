# 📋 DevBoard

Task management app built with **Next.js (App Router)** and **React**, applying modern development practices, testing, linting, and performance optimization.

---

## 🚀 Run

```
npm install
npm run dev
```

Open: http://localhost:3000

---

## 🧪 Scripts

```
npm run test    # Run tests (Vitest)
npm run lint    # Run ESLint
npm run build   # Production build
```

---

## 📁 Structure

```
src/
├── app/              # App Router (routes, layout, pages)
├── features/         # Task management logic
├── context/          # Theme & notification providers
└── shared/ui/        # Reusable UI components
```

---

## ⚙️ Features

* Add and delete tasks
* Update task status
* Task counters (total, completed, pending)
* Theme toggle (light/dark)
* Notifications system

---

## 🧠 Implemented

* Next.js App Router (`layout`, `page`, routing)
* Client & Server Components separation
* Custom hooks:

  * useTaskManager
  * useForm
  * useAsync
* State management using useReducer
* Context API (Theme & Notifications)
* Async data handling (loading & error states)
* loading.tsx with skeleton UI
* Cleanup using AbortController

---

## 🧪 Testing

Testing implemented with **Vitest**:

* Component testing
* Hook testing
* Integration testing

Run tests:

```
npm run test
```

---

## 🔍 Linting

ESLint configured to ensure code quality:

* React Hooks rules
* Best practices
* TypeScript compatibility

Run lint:

```
npm run lint
```

✔ Result:

* 0 errors
* 0 warnings

---

## ⚡ Performance & Optimization

Performance analyzed using **React DevTools Profiler**.

### 📊 Results

* Average render time: ~7ms
* No critical performance bottlenecks detected
* Stable rendering behavior

### 🔧 Optimizations applied

* Avoid unnecessary re-renders
* Optimized useEffect usage
* Improved custom hook (useAsync)
* State initialization optimization (ThemeContext)
* Cleanup of async operations using AbortController

Full documentation:
See OPTIMIZATIONS.md

---

## 📸 Evidence

Profiler screenshot included showing:

* Render duration
* Component tree
* Render trigger source

---

## 📦 Stack

* Next.js (App Router)
* React
* TypeScript
* Vitest
* ESLint

