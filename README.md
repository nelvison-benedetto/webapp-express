## Express Book-Review Management w Multer

🔗 𝐅𝐫𝐨𝐧𝐭-𝐞𝐧𝐝: https://github.com/nelvison-benedetto/webapp-react

Project developed using a modern web stack—Node.js (Express) for server-side logic, MySQL for relational data storage, and Multer for handling multipart form data, including book cover image uploads. The backend exposes a RESTful API that supports full CRUD operations on books and their reviews, enforces relational constraints, and includes CORS configuration for cross-origin access. Middleware is implemented for JSON parsing and graceful 404 error handling.

---
### Key features
- Modular route and controller structure
- MySQL with foreign key relationships (e.g., book → review)
- Auto-managed timestamps and validation-ready logic
- Static serving of book cover images
- Environment variable support via .env for flexible deployment

---
### Environment Variables
You can define these in an .env file or export them:
```env
DB_HOST=localhost
DB_PORT=your_database_port
DB_USER=your_database_user
DB_PSW=your_database_password
DB_NAMEDB=your_database_name

HOST=http://localhost
PORT=3001
```

---
### Run project
1. Clone this repository
2. Install dependencies and start the server

```bash
npm install
npm start
```