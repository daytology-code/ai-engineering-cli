# Backend Rules

## 1. Architecture Principles

- Clean separation of concerns
- Domain-driven design
- API-first approach

---

## 2. Folder Structure

/src
  /api
    /routes
    /controllers
    /middleware
  /services
  /models
  /utils
  /config
  /tests

---

## 3. API Design

- RESTful conventions
- Consistent error responses
- Proper HTTP status codes
- Request/Response validation

### Standard Response Format

```json
{
  "success": true,
  "data": {},
  "error": null
}
```

---

## 4. Error Handling

- Centralized error handling middleware
- Typed error classes
- Meaningful error messages
- Never expose internal errors to client

---

## 5. Data Validation

- Validate all inputs at API boundary
- Use schema validation (e.g., Zod, Joi)
- Sanitize user inputs
- Type safety throughout

---

## 6. Database Rules

- Use migrations for schema changes
- Never modify production DB directly
- Implement proper indexing
- Use transactions for multi-step operations

---

## 7. Security

- Authentication on all protected routes
- Authorization checks before operations
- Rate limiting on public endpoints
- Input sanitization

---

## 8. Testing

- Unit tests for business logic
- Integration tests for API endpoints
- Mock external dependencies
- Test error cases

---

## 9. Prohibited Patterns

- Business logic in controllers
- Direct database queries in routes
- Hardcoded credentials
- Unhandled promise rejections
