# User Management Web Application

This project is a web application built using JavaScript/TypeScript, React, Node.js, Express, and MongoDB. It allows users to register, authenticate, and manage users. Unauthorized users have access only to the registration and authentication forms. Authenticated users can view a table of registered users, perform actions like blocking, unblocking, and deleting users, and also have the ability to manage their own account.

## Features

- User Registration: Users can register with any password, even one with a single character.
- User Authentication: Registered users can log in with their credentials.
- User Management: Authenticated users have access to a user table with the following columns:
  - Identifier
  - Name
  - Email
  - Registration Date
  - Last Login Date
  - Status
- Multiple Selection: The table provides checkboxes in the leftmost column for multiple selection of users.
- Toolbar Actions: A toolbar above the table allows users to perform the following actions:
  - Block: Block selected users.
  - Unblock: Unblock selected users.
  - Delete: Delete selected users.
- Immediate Actions: If a user blocks or deletes their own account, they will be immediately logged out. If another user performs these actions on a different account, the affected user will be redirected to the login page upon their next request.
- CSS Framework: The project utilizes a CSS framework (recommended: Bootstrap) for styling.

## Setup

1. Clone the repository: `git clone https://github.com/zhengis-alinur/fullstack-app`
2. Navigate to the project directory: `cd fullstack-app`
3. Install dependencies(both in front/back-end):

```bash
npm install
```
1. Set up your MongoDB database connection by editing the configuration in .env file.

2. Start the server and client by

```bash
npm start
```

You may create .env file in /backend
```bash
MONGO_URL="URL to your MongoDB server"
PORT=4000
TOKEN_KEY="something"
```

You can start server at http://localhost:4000, and the client will be accessible at http://localhost:3000.
just change url's in ./backend/src/index.js(cors) and BASE_URL in ./frontend/src/app/api.ts.

# Project Structure
* frontend: Contains the React front-end code.
* backend/src: Contains the Node.js and Express back-end code.
* backend/src/models: Defines the data models for MongoDB.
* backend/src/routes: Defines the API routes for user management.
* backend/src/controllers: Implements the logic for user actions.
* backend/src/middlewares: Contains middleware functions for authentication and authorization.

# Technologies Used

* JavaScript/TypeScript
* React
* Node.js
* Express
* MongoDB
* React-Bootstrap