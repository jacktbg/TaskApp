🧩 TaskApp

A modern, responsive task management web application built with React 19, Apollo Client, GraphQL, Zustand, and React Hook Form. Designed for efficiency, usability, and extendability, it supports drag-and-drop task organization, dynamic filtering, and inline editing—all backed by a robust and modular architecture.
📸 Demo

    For best experience, clone and run the app locally following the instructions below.

🚀 Setup & Running Instructions
Prerequisites

    Node.js >=18.x

    pnpm (recommended for package consistency):
    Install via npm: npm install -g pnpm

🔧 Installation

git clone https://github.com/yourusername/taskapp.git
cd taskapp
pnpm install

▶️ Running Locally

pnpm dev

This starts the app at http://localhost:5173
🔨 Build for Production

pnpm build

🧪 Run Tests (if applicable)

pnpm vitest

🧠 Project Rationale
Tech Stack Decisions

    React 19 + React DOM: Chosen for its modern capabilities and strong ecosystem.

    Vite: Fast bundling and dev server—ideal for modern TypeScript projects.

    TypeScript: Enforces static typing and improves development quality.

    Apollo Client + GraphQL: For efficient, declarative data fetching with excellent caching and devtools.

    Zustand: Lightweight and scalable state management—perfect for global UI state like modals or user preferences.

    React Hook Form + Zod: Elegant form handling with schema validation.

    Radix UI: Provides accessible, low-level UI primitives.

    DND-Kit: Enables smooth drag-and-drop UX for task boards.

    Vitest: Fast Testing

Project Structure

The app follows a modular folder structure:

src/
├── components/ # Reusable UI components
├── pages/ # Route-based views
├── services/ # Apollo/HTTP queries
├── models/ # Types and interfaces
├── tests/ # Unit Testing with Vitest

This allows high cohesion within modules and low coupling between them, which helps with scalability and testing.
🛠️ Technologies & Libraries Used
Name Purpose
React 19 UI Framework
Vite Build Tool / Dev Server
TypeScript Static Typing
Apollo Client GraphQL Client
GraphQL Data querying language
Zustand Global state management
react-hook-form Form state management
zod Schema validation
Radix UI Unstyled accessible components
@dnd-kit Drag-and-drop task cards
date-fns Date manipulation
React Router v7 Routing
Vitest Unit testing
Sass Styling
eslint + typescript-eslint Linting
📂 Noteworthy Features

    ✅ Drag-and-drop Task Board (powered by DND-Kit)

    ✅ Form Validation with Zod and React-Hook-Form

    ✅ Fetch an updates with Apollo Client

    ✅ 404 Error Handling

    ✅ GraphQL schema interactions

    ✅ Radix UI Components for accessibility

    ✅ Custom Tags for Assignee, Estimate, Due Date

    ✅ Testing using Vitest

🤝 Contributing

Pull requests and stars are always welcome! Feel free to open an issue for suggestions or bugs.
