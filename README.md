Technical Write-Up: Financial Dashboard — Design & Implementation
Design & Architecture Decisions
The project follows a feature-first folder structure combined with principles inspired by Atomic Design. This modular approach allowed for reusability, better testability, and clean separation of concerns. Each feature (e.g., transactions, filters) owns its UI and state logic, while shared UI primitives like FilterSelect and Pagination were abstracted for global reuse.

For state management, I used Zustand, which provides a lightweight, scalable store with minimal boilerplate—ideal for local UI state like filters. Components are written as client components ('use client') since interactivity is required (e.g., filter dropdowns, paginated lists).

Tools & Libraries Used
React + TypeScript — Core tech stack

Zustand — For localized, performant state management

TailwindCSS — For fast, consistent, and accessible styling

Jest + React Testing Library — For writing isolated and user-focused tests

Next.js (app router) — Framework used to enable file-based routing and optimizations

These choices helped speed up development while keeping the project maintainable and well-structured.

 Performance, Accessibility, and Maintainability
Performance:

Used useEffect and memoization patterns to avoid unnecessary re-renders.

Pagination limits DOM nodes on screen at any time.

Tailwind utility classes avoid CSS bloat.

Accessibility:

Every form element is paired with a <label> using htmlFor.

Keyboard navigation is supported natively via semantic HTML elements.

Button roles and contrast ratios follow WCAG guidelines.

Maintainability:

Created reusable components (FilterSelect, Pagination) with isolated tests.

Followed a clear folder structure and consistent naming.

Used TypeScript to enforce prop correctness and catch logic issues early.

Use of AI Tools
I used AI (ChatGPT-4o) as a collaborative pair programmer throughout the project. It helped with:

Refactoring ideas and best practices

Test scaffolding (unit and integration)

Zustand mocking strategies

Clarifying accessibility and performance tradeoffs

While I made all the architectural decisions myself, AI significantly boosted my speed by offloading boilerplate and verifying logic quickly.

Improvements with More Time
Given more time, I would:

Add filter persistence via query params or localStorage

Implement debounced search or range filters

Add loading and error states for a more robust UI

Write end-to-end tests using Playwright or Cypress

Integrate with a backend (or mock API) to simulate real transaction data