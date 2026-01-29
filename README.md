# FSD-2-3: UI Components Lab

A React-based Single Page Application demonstrating modern web development concepts including Bootstrap UI components and React Router navigation.

## Project Overview

This project showcases practical implementations of:
- **EXP-2**: Bootstrap UI Design and Components
- **EXP-3**: React Router and Client-Side Routing

## Features

### EXP-2: Bootstrap UI Components

#### 1. Designing UI Using Bootstrap Component
- Responsive navigation bar with Bootstrap classes
- Card-based layouts for displaying experiments
- Bootstrap buttons, forms, and utility classes
- Responsive grid system (row/col structure)

#### 2. Card-Based Layout Using Bootstrap
- Interactive card components on the home page
- User profile cards with dynamic content
- Styled cards with headers, bodies, and actions
- Grid-based card arrangement

#### 3. Responsive Navigation Bar Using Component
- Bootstrap navbar with primary theme
- Navigation links using React Router's Link component
- Brand logo and navigation menu
- Fully responsive design

### EXP-3: React Router Implementation

#### 1. Basic Client-Side Routing Using React Router
- **Route**: `/exp1`
- **Implementation**: BrowserRouter, Routes, and Route components
- **Features**:
  - Client-side navigation without page reloads
  - State preservation during routing
  - Interactive counter demo to showcase state persistence

#### 2. Navigation Using Link Component
- **Route**: `/exp2`
- **Implementation**: Link component for SPA navigation
- **Features**:
  - Smooth transitions without page refresh
  - Dynamic user selection with state management
  - Comparison between `<a>` tag and `<Link>` component

#### 3. Multi-Page SPA Using Routing
- **Route**: `/exp3` and `/user/:userId`
- **Implementation**: Dynamic route parameters
- **Features**:
  - URL parameters using `useParams` hook
  - Dynamic user detail pages
  - Parameter-based content rendering

#### 4. Default and Fallback Route
- **Route**: `/exp4` and `*` (catch-all)
- **Implementation**: Fallback route for 404 errors
- **Features**:
  - Custom 404 Not Found page
  - Route mapping table
  - Programmatic navigation using `useNavigate` hook
  - Error handling for undefined routes

## Technology Stack

- **React** (v19.2.4) - Frontend library
- **React Router DOM** (v7.13.0) - Client-side routing
- **Bootstrap** (v5.3.8) - UI component framework
- **Create React App** - Project setup and build tool

## Installation

1. Clone the repository:
```bash
git clone https://github.com/prazadcraftz/FSD-2-3.git
cd FSD-2-3
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Available Scripts

### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder. The build is optimized for best performance.

## Application Structure

```
src/
├── App.js              # Main application with all components and routing
├── App.css             # Application styles
├── index.js            # Entry point
└── index.css           # Global styles
```

## Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Landing page with experiment cards |
| `/exp1` | Experiment1 | Basic client-side routing demo |
| `/exp2` | Experiment2 | Link component navigation |
| `/exp3` | Experiment3 | Route parameters overview |
| `/user/:userId` | UserDetail | Dynamic user detail page |
| `/exp4` | Experiment4 | Fallback route demonstration |
| `*` | NotFound | 404 error page (catch-all) |

## Key Concepts Demonstrated

### Bootstrap Integration
- Navbar with responsive design
- Card components for content organization
- Grid system for layout
- Button styles and variants
- Table components
- Utility classes for spacing and alignment

### React Router Concepts
- BrowserRouter for HTML5 history API
- Routes and Route for route definitions
- Link component for declarative navigation
- useParams hook for accessing URL parameters
- useNavigate hook for programmatic navigation
- Fallback routes with wildcard `*`
- Nested routing capabilities

## Learn More

- [React Documentation](https://reactjs.org/)
- [React Router Documentation](https://reactrouter.com/)
- [Bootstrap Documentation](https://getbootstrap.com/)
- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
