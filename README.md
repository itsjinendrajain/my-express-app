# My Express TypeScript Project Template

This repository serves as a template for building robust and scalable backend applications using **Express**, **TypeScript**, **Mongoose**, **dotenv**, and **Winston Logger**. It includes a pre-configured structure, essential dependencies, and boilerplate code to kickstart development.

## Features

- **Express**: Lightweight and flexible Node.js web application framework.
- **TypeScript**: Static typing for better code maintainability and scalability.
- **Mongoose**: MongoDB object modeling for elegant schema definitions and database interaction.
- **dotenv**: Environment variable management.
- **Winston**: Logging framework for structured and detailed application logs.
- Pre-configured **TypeScript** compiler options and folder structure.
- Ready-to-use **Yarn** package manager setup.
- Example MongoDB connection and sample API route.

## Prerequisites

- Node.js (v16 or later)
- Yarn
- MongoDB (Local or Cloud)
- Git

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/itsjinendrajain/my-express-app.git
cd my-express-app
```
### 2. Install Dependencies
```bash 
yarn install 
```
### 3. Set Up Environment Variables
Create a .env file in the root directory:

```bash
PORT=5000
MONGO_URI=mongodb://localhost:27017/mydb
```

Visit http://localhost:5000


# **Dependencies**
- express
- mongoose
- dotenv
- winston

# **Dev Dependencies**
- typescript
- ts-node-dev
- @types/express
- @types/node

# **Future Enhancements**
- Add more sample routes and controllers.
- Include error handling middleware.
- Configure testing with Jest or Mocha.
- Add Docker support for containerization.
