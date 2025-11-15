# React Calendar Component

> Technical Assessment  - Front End Engineer Position

A reusable React calendar component built with TypeScript, showcasing clean code architecture, comprehensive testing, and modern development practices.

## 🎯 Features

- ✅ Reusable `<Calendar date={Date} />` component
- ✅ TypeScript for type safety
- ✅ Comprehensive test coverage with Vitest
- ✅ Accessible with ARIA labels
- ✅ Responsive design
- ✅ Clean separation of concerns
- ✅ Functional programming approach

## 🚀 Getting Started

### Installation

\`\`\`bash
npm install
\`\`\`

### Development

\`\`\`bash
npm run dev
\`\`\`

Visit: http://localhost:5173

### Testing

\`\`\`bash
# Run tests
npm test

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
\`\`\`

### Build

\`\`\`bash
npm run build
\`\`\`

## 📋 Requirements Checklist

- [x] Reusable calendar component with `date` prop
- [x] First row displays month and year
- [x] Second row displays days of the week
- [x] Following rows display dates aligned with day headings
- [x] Appropriate date cell highlighted based on `date` prop
- [x] Component tests with react-testing-library
- [x] Good code and component separation of concerns
- [x] Careful consideration of types (TypeScript)
- [x] Functional programming techniques
- [x] Clear and easy to understand code

## 🏗️ Architecture

### Component Structure

\`\`\`
Calendar/
├── Calendar.tsx           # Main component logic
├── Calendar.module.css    # Scoped styles
├── Calendar.test.tsx      # Comprehensive tests
├── Calendar.types.ts      # TypeScript interfaces
└── index.ts              # Public exports
\`\`\`

### Key Design Decisions

1. **TypeScript**: Strong typing for props and internal data structures
2. **CSS Modules**: Scoped styling to prevent conflicts
3. **Functional Programming**: Pure functions for calendar logic
4. **Accessibility**: ARIA labels and semantic HTML
5. **Separation of Concerns**: Types, logic, styles, and tests in separate files
6. **Vitest**: Modern, fast testing framework

## 🧪 Test Coverage

The component includes 20+ test cases covering:

- Month and year rendering
- Day names display
- Date alignment with weekdays
- Date highlighting
- Leap years
- Different month lengths
- Edge cases (first/last day)
- Accessibility attributes
- Error handling

## 💻 Usage

\`\`\`tsx
import Calendar from './components/Calendar';

function App() {
  return <Calendar date={new Date(2022, 9, 3)} />;
}
\`\`\`

## 📦 Submission

This solution includes:

- Complete source code
- Comprehensive test suite
- Type definitions
- Documentation
- Clean git history

## 🎨 Visual Design

The calendar features:

- Clean, modern UI
- Responsive layout
- Hover effects
- Visual feedback for highlighted dates
- Professional color scheme

## 🔧 Technologies

- **React 18**: Latest React features
- **TypeScript**: Type safety and better DX
- **Vite**: Fast build tool
- **Vitest**: Modern testing framework
- **CSS Modules**: Scoped styling

## 📝 Development Time

Completed in approximately 2 hours as per requirement.

## 👤 Author

**Shanti**  
Senior Software Engineer  
Technical Assessment for IT Firm

---

*Built with attention to detail, clean code principles, and modern React best practices.*
\`\`\`

## 🎯 Final Checklist

Before submitting:

- [ ] All tests passing
- [ ] TypeScript compiles without errors
- [ ] Code is well-documented
- [ ] Follows functional programming principles
- [ ] Good separation of concerns
- [ ] README is complete
- [ ] No console errors/warnings

## 🚀 Commands Reference

\`\`\`bash
# Setup
npm create vite@latest react-calendar -- --template react-ts
cd react-calendar
npm install
npm install -D @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom vitest @vitest/ui

# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build

# Testing
npm test             # Run tests in watch mode
npm run test:ui      # Run tests with UI
npm run test:coverage # Run with coverage report
\`\`\`

## 📄 Submission Format

**Option 1: GitHub**
\`\`\`bash
git init
git add .
git commit -m "feat: Complete Calendar component with tests"
git remote add origin <your-repo-url>
git push -u origin main
\`\`\`

**Option 2: Zip File**
\`\`\`bash
# Exclude node_modules and build files
zip -r react-calendar.zip react-calendar/ -x "*/node_modules/*" "*/dist/*" "*/.git/*"
\`\`\`