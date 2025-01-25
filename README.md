
# Backend Application

This is the backend part of the application, built with **NestJS**, a progressive Node.js framework. The backend supports authentication, API documentation, and MongoDB for database operations.

## **Technologies Used**

### **Core Framework**
- [NestJS](https://nestjs.com/) - Progressive Node.js framework for building efficient and scalable server-side applications.
- [Express](https://expressjs.com/) - Web framework integrated with NestJS.
- [RxJS](https://rxjs.dev/) - Reactive programming library.

### **Database**
- [MongoDB](https://www.mongodb.com/) - NoSQL database.
- [Mongoose](https://mongoosejs.com/) - Object Data Modeling (ODM) library for MongoDB.

### **Authentication and Security**
- [Passport.js](https://www.passportjs.org/) - Authentication middleware for Node.js.
- [JWT (jsonwebtoken)](https://github.com/auth0/node-jsonwebtoken) - JSON Web Token implementation.
- [Passport Google OAuth2.0](https://www.passportjs.org/packages/passport-google-oauth20/) - Google OAuth2.0 strategy.

### **API Documentation**
- [Swagger](https://swagger.io/) - API documentation through [@nestjs/swagger](https://docs.nestjs.com/openapi/introduction).
- [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express) - Swagger documentation UI.

### **Development Tools**
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript.
- [ESLint](https://eslint.org/) - JavaScript/TypeScript linter.
- [Prettier](https://prettier.io/) - Code formatter.
- [Jest](https://jestjs.io/) - Testing framework.
- [Supertest](https://github.com/visionmedia/supertest) - HTTP assertions for testing APIs.

## **Setup and Installation**

1. Clone the repository:

```bash
git clone https://github.com/your-repo/back.git
cd back
```

2. Install dependencies:

```bash

npm install
```

3. Run the development server:

```bash

npm run start:dev
```
4. Build for production:

```bash

npm run build
```

