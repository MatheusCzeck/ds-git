# Project Guidelines

## Code Style
- Use ES modules (`import/export`) instead of CommonJS
- Follow MVC pattern: config → models → controllers → routers → app.js
- Reference key files: [config/database.js](crud-nodejs/config/database.js), [models/User.js](crud-nodejs/models/User.js), [controllers/userController.js](crud-nodejs/controllers/userController.js)

## Architecture
- Express.js 5 + Sequelize 6 with MySQL for database operations
- Standard CRUD endpoints: GET / (list), GET /:id (show), POST / (create), PUT /:id (update), DELETE /:id (delete)
- Error handling: try/catch with 200/201 success or 500 error responses

## Build and Test
- Install dependencies: `npm install`
- Development server: `npm run dev` (uses nodemon)
- Production start: `npm start`
- No automated tests configured yet

## Conventions
- Model names and table names: User → "users", Soldado → "soldado" (note inconsistency in pluralization)
- Controller methods: index, show, store, update, destroy
- Router prefixes: /users, /soldados
- No input validation currently implemented—add before production use
- Environment variables needed: DB_NAME, DB_USER, DB_PASS, DB_HOST (create .env file)
- CORS is open—restrict origins for security