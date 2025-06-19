# 💹 Verde Dashboard

A modern financial dashboard built with React, Next.js (App Router), Zustand, TailwindCSS, and tested with Jest + React Testing Library.

> ✅ Lighthouse Score: **100 / 100 / 100 / 100**  
> Performance, Accessibility, Best Practices, SEO — all fully passed

---

## 🧠 Design & Architecture Decisions

This project uses a **feature-first folder structure** combined with ideas from **Atomic Design** to enable modularity, reusability, and testability. Each feature (e.g., transactions, filters) owns its logic and UI components. Reusable primitives like `FilterSelect` and `Pagination` are shared across features.

For state management, I chose **Zustand** — a minimal and scalable store that’s well-suited for local UI state (like filters) without unnecessary boilerplate. All interactive components are client-rendered (`'use client'`) to support dynamic state changes like filtering and pagination.

---

## ⚙️ Tools & Libraries Used

- **React + TypeScript** – Core tech stack for type-safe UI development
- **Next.js (App Router)** – For file-based routing and optimization
- **Zustand** – Lightweight state management
- **TailwindCSS** – Fast, consistent, and accessible utility-first styling
- **Jest + React Testing Library** – For unit and integration testing

These tools helped speed up development, ensured maintainability, and aligned well with modern front-end best practices.

---

## 🚀 Performance, Accessibility & Maintainability

### 📈 Performance
- `useEffect` and controlled state updates to prevent extra re-renders
- Pagination limits DOM elements on-screen at any time
- Tailwind ensures no CSS bloat due to unused classes

### ♿ Accessibility
- Proper label associations (`<label htmlFor="">`)
- Keyboard-friendly navigation via semantic HTML
- High contrast ratios and roles follow **WCAG guidelines**

### 🧼 Maintainability
- Isolated reusable components like `FilterSelect` and `Pagination`
- Consistent file structure and naming conventions
- Strong typing with TypeScript for safety and self-documentation

---

## 🤖 Use of AI Tools

I used **ChatGPT-4o** as a collaborative pair programmer to:
- Refactor architecture and improve code clarity
- Scaffold unit and integration tests quickly
- Mock Zustand stores efficiently
- Double-check accessibility and performance trade-offs

> All implementation and decisions were my own — AI helped accelerate the process by handling boilerplate and confirming patterns.

---

## 🔧 Improvements with More Time

If given more time, I would:

- Persist filters via URL query params or localStorage
- Add debounced text/range filters
- Introduce loading and error UI states
- Write E2E tests using Playwright or Cypress
- Connect to a backend or mock API for real transaction simulation

---

## 🧪 Local Setup

```bash
npm install
npm run dev
