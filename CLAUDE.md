# CodeViz Research Context

> **Note**: This file contains research context from CodeViz. Most recent contexts are at the bottom.

---

## Research Query

the architecture of the project

*Session: 52c042922b6cf51c914a30cac49d8a0c | Generated: 7/3/2025, 6:13:50 PM*

### Analysis Summary

# Project Architecture Report

This project is a React application built with Vite and TypeScript, designed as a task management system. It follows a component-based architecture, organizing code into logical directories for pages, reusable components, services, state management, and utilities.

## High-Level Architecture

The application's core structure revolves around a single-page application (SPA) model, where [main.tsx](src/main.tsx) serves as the entry point, rendering the root [App.tsx](src/App.tsx) component. Navigation and primary layout are managed within [App.tsx](src/App.tsx), which then renders different "pages" based on the application's routes.

*   **Entry Point**: [main.tsx](src/main.tsx) initializes the React application and sets up global providers (e.g., React Query for data fetching).
*   **Root Component**: [App.tsx](src/App.tsx) defines the main application layout and routing.
*   **Pages**: The [src/pages/](src/pages/) directory contains top-level views, each representing a distinct section or feature of the application (e.g., [Home](src/pages/home/Home.tsx), [Error](src/pages/error/Error.tsx), [NotFound](src/pages/notFound/NotFound.tsx)).
*   **Components**: The [src/components/](src/components/) directory houses reusable UI components used across different pages.
*   **Services**: The [src/services/](src/services/) directory manages API interactions and data fetching logic.
*   **State Management**: The [src/store/](src/store/useStore.ts) directory likely contains global state management.

## Directory Structure and Core Modules

The project's source code is primarily located in the [src/](src/) directory, which is organized into several key modules:

### `src/adapters/`
This directory is currently empty but is likely intended for data transformation or adaptation layers, converting data from one format to another, especially when interacting with external APIs or different data models.

### `src/assets/`
Contains static assets such as images used throughout the application.
*   [logo.png](src/assets/logo.png)
*   [myProfile.png](src/assets/myProfile.png)
*   [notFound.png](src/assets/notFound.png)
*   [profile.png](src/assets/profile.png)

### `src/components/`
This module contains generic, reusable UI components that are not specific to any single page or feature.
*   **Purpose**: Provides building blocks for the user interface, promoting reusability and consistency.
*   **Internal Parts**: Includes components like [AssigneeTag.tsx](src/components/AssigneeTag.tsx), [DueDateTag.tsx](src/components/DueDateTag.tsx), [EstimateTag.tsx](src/components/EstimateTag.tsx), [LabelTag.tsx](src/components/LabelTag.tsx), [LoadingScreen.tsx](src/components/LoadingScreen.tsx), [PlusButton.tsx](src/components/PlusButton.tsx), [TaskForm.tsx](src/components/TaskForm.tsx), and [Toast.tsx](src/components/Toast.tsx). Each component typically has associated options components (e.g., [AssigneeTagOptions.tsx](src/components/AssigneeTagOptions.tsx)).
*   **External Relationships**: These components are imported and used by various pages and other components.

### `src/hooks/`
This directory is currently empty but is likely intended for custom React hooks to encapsulate reusable stateful logic.

### `src/interceptors/`
This directory is currently empty but is likely intended for HTTP request/response interceptors, often used for authentication, logging, or error handling in API calls.

### `src/models/`
This directory is currently empty but is likely intended for TypeScript interfaces or types defining data structures used across the application.

### `src/pages/`
This module contains the main views or screens of the application. Each subdirectory within `pages` represents a distinct page.

#### `src/pages/error/`
*   **Purpose**: Displays an error page to the user.
*   **Internal Parts**: [Error.tsx](src/pages/error/Error.tsx) for the component logic and [error.module.scss](src/pages/error/styles/error.module.scss) for its styling.
*   **External Relationships**: Rendered by [App.tsx](src/App.tsx) based on routing.

#### `src/pages/home/`
This is the central part of the application, likely the main dashboard or task list view.
*   **Purpose**: Provides the primary user interface for task management, including dashboard, task lists, and user profile.
*   **Internal Parts**: [Home.tsx](src/pages/home/Home.tsx) orchestrates the various sub-components. It contains a `components` subdirectory for its internal, page-specific components, `icons` for shared icons, `models` for data structures, `styles` for styling, and `utilities` for helper functions.
*   **External Relationships**: Interacts heavily with `src/services/` for data, `src/store/` for state, and utilizes components from `src/components/`.

##### `src/pages/home/components/`
This module contains major sections of the home page.
*   **`bodyContainer/`**: [BodyContainer.tsx](src/pages/home/components/bodyContainer/BodyContainer.tsx) likely acts as a layout wrapper for the main content.
*   **`dashboard/`**: [Dashboard.tsx](src/pages/home/components/dashboard/Dashboard.tsx) displays the main task dashboard, potentially with columns for different task statuses. It includes sub-components like [ColumnBody.tsx](src/pages/home/components/dashboard/components/ColumnBody.tsx) and [TaskCard.tsx](src/pages/home/components/dashboard/components/taskCard/TaskCard.tsx).
*   **`myProfile/`**: [MyProfile.tsx](src/pages/home/components/myProfile/MyProfile.tsx) displays user profile information.
*   **`myTask/`**: [MyTask.tsx](src/pages/home/components/myTask/MyTask.tsx) likely presents a detailed view of user-specific tasks, possibly using an accordion structure ([MyTaskAccordion.tsx](src/pages/home/components/myTask/components/myTaskAccordion/MyTaskAccordion.tsx)).
*   **`searchbar/`**: [Searchbar.tsx](src/pages/home/components/searchbar/Searchbar.tsx) provides search and filtering capabilities, including an [AdvancedSearch.tsx](src/pages/home/components/searchbar/components/AdvancedSearch.tsx) component.
*   **`sidebar/`**: [Sidebar.tsx](src/pages/home/components/sidebar/Sidebar.tsx) provides navigation within the application, containing [SidebarTab.tsx](src/pages/home/components/sidebar/components/SidebarTab.tsx) and [SidebarTabList.tsx](src/pages/home/components/sidebar/components/SidebarTabList.tsx).
*   **`topbar/`**: [Topbar.tsx](src/pages/home/components/topbar/Topbar.tsx) represents the top navigation or header bar.
*   **`ui/`**: Contains smaller, reusable UI elements specific to the home page, such as [ProfileImage.tsx](src/pages/home/components/ui/ProfileImage.tsx) and [Tag.tsx](src/pages/home/components/ui/Tag.tsx).

#### `src/pages/notFound/`
*   **Purpose**: Displays a 404 Not Found page.
*   **Internal Parts**: [NotFound.tsx](src/pages/notFound/NotFound.tsx) for the component logic and [notFound.module.scss](src/pages/notFound/styles/notFound.module.scss) for its styling.
*   **External Relationships**: Rendered by [App.tsx](src/App.tsx) for unmatched routes.

### `src/services/`
This module is responsible for all interactions with the backend API.
*   **Purpose**: Centralizes data fetching, mutations, and API client configuration.
*   **Internal Parts**:
    *   [client.ts](src/services/client.ts): Configures the HTTP client (e.g., Axios instance) for API requests.
    *   [mutations.ts](src/services/mutations.ts): Defines functions for data modification operations (POST, PUT, DELETE).
    *   [queries.ts](src/services/queries.ts): Defines functions for data retrieval operations (GET).
*   **External Relationships**: Used by components and pages to fetch and update data. Likely uses a library like React Query for managing asynchronous data.

### `src/store/`
*   **Purpose**: Manages the global application state.
*   **Internal Parts**: [useStore.ts](src/store/useStore.ts) suggests the use of a state management library like Zustand, where `useStore` is a custom hook providing access to the global state.
*   **External Relationships**: State is consumed and updated by various components and pages throughout the application.

### `src/styles/`
Contains global styles and component-specific SCSS modules.
*   **Purpose**: Defines the visual appearance of the application.
*   **Internal Parts**: Includes [index.css](src/styles/index.css) for global styles and numerous `.module.scss` files for component-scoped styling (e.g., [assigneeTag.module.scss](src/styles/assigneeTag.module.scss), [calendar.module.scss](src/styles/calendar.module.scss)).
*   **External Relationships**: Imported by components and pages to apply styling.

### `src/utilities/`
Contains various helper functions and utility modules.
*   **Purpose**: Provides common functionalities that are not directly related to UI or data fetching.
*   **Internal Parts**: Includes [errorHandler.ts](src/utilities/errorHandler.ts) for centralized error handling, [getDueDateStatus.ts](src/utilities/getDueDateStatus.ts) for date-related logic, [getMonthDays.ts](src/utilities/getMonthDays.ts), and [useDebounce.ts](src/utilities/useDebounce.ts) (a custom hook for debouncing).
*   **External Relationships**: These utilities are imported and used by components, pages, and services as needed.

## Data Flow and State Management

The application likely uses a combination of React Query (implied by `src/services/queries.ts` and `src/services/mutations.ts`) for server-state management and a global state management library (like Zustand, implied by [src/store/useStore.ts](src/store/useStore.ts)) for client-side state.

*   **Data Fetching**: Components trigger queries defined in [src/services/queries.ts](src/services/queries.ts) to fetch data from the API.
*   **Data Mutation**: Components trigger mutations defined in [src/services/mutations.ts](src/services/mutations.ts) to send data to the API.
*   **Global State**: Shared application state (e.g., user preferences, theme) is managed via the store defined in [src/store/useStore.ts](src/store/useStore.ts).
*   **Component State**: Local component state is managed using React's `useState` and `useReducer` hooks.

