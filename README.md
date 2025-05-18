## Express Book-Review Management

Developed project: a RESTful web application backend for managing books and user reviews, built with Node.js, Express, and MySQL.
This API allows users to perform full CRUD operations on books and their associated reviews. It supports structured data persistence, relational constraints, and dynamic content handling (e.g., book covers). CORS is enabled to allow front-end access across origins. Middleware handles 404 errors and JSON request parsing.

---
### Key features include:
- Modular route and controller structure
- MySQL with foreign key relationships (e.g., book → review)
- Auto-managed timestamps and validation-ready logic
- Static serving of book cover images
- Environment variable support via .env for flexible deployment

---
### Run project
1. Clone this repository
2. Install dependencies and start the server

```bash
npm install
npm start
```