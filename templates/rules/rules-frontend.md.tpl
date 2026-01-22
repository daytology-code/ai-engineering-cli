# Frontend Rules

## 1. Architecture Principles

- Component-based architecture
- Separation of concerns
- Predictable state management
- Accessibility first

---

## 2. Folder Structure

/src
  /components
    /common
    /features
  /hooks
  /services
  /utils
  /styles
  /types
  /tests

---

## 3. Component Rules

- Single Responsibility Principle
- Props interface clearly defined
- Avoid deep nesting (max 3 levels)
- Keep components under 200 lines

### Component Types

- **Presentational**: UI only, no business logic
- **Container**: Data fetching and state management
- **Layout**: Page structure and composition

---

## 4. State Management

- Local state for UI-only concerns
- Global state for shared data
- Avoid prop drilling (use context or state management)
- Immutable state updates

---

## 5. Data Fetching

- Separate data fetching from presentation
- Handle loading states
- Handle error states
- Implement proper caching strategy

---

## 6. Styling

- Follow existing design system
- Use CSS modules or styled-components
- Avoid inline styles (except dynamic values)
- Mobile-first responsive design

---

## 7. Accessibility

- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance

---

## 8. Performance

- Lazy load routes and heavy components
- Optimize images and assets
- Avoid premature optimization
- Monitor bundle size

---

## 9. Testing

- Unit tests for utility functions
- Component tests for UI logic
- Integration tests for user flows
- Accessibility tests

---

## 10. Prohibited Patterns

- Business logic in components
- Direct API calls in components
- Mutating state directly
- Ignoring TypeScript errors
