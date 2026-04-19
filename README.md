# 📋 DevBoard

Task management app built with **Next.js (App Router)** and **React**.

---

## 🚀 Run

```bash
npm install
npm run dev
```

http://localhost:3000

---

## 📁 Structure

```
src/
├── app/          # Routes (App Router)
├── features/     # taskManagement logic
├── context/      # theme & notifications
└── shared/ui/    # reusable components
```

---

## ⚙️ Features

* Add, delete tasks
* Change task status
* Task counters (total, completed, pending)
* Theme toggle
* Notifications

---

## 🧠 Implemented

* App Router (`layout`, `page`, routes)
* Client / Server Components
* Custom hooks (`useTaskManager`, `useForm`, `useAsync`)
* useReducer (state management)
* Context API (theme, notifications)
* Async data + loading + error
* `loading.tsx` with skeleton UI
* Cleanup with `AbortController`

---

## 📦 Stack

Next.js • React • TypeScript

---