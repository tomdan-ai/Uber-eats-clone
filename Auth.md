Sure! Here's a basic documentation of the authentication setup and how to test it with Postman:

---

## Authentication Documentation

### Overview

This documentation provides information on the authentication setup in the Uber Eats Clone application. Authentication is implemented using JWT (JSON Web Tokens) and Passport.js in a NestJS framework.

### Endpoints

#### Sign Up

- **URL:** `POST http://localhost:3000/auth/signup`
- **Description:** Creates a new user account.
- **Request Body:**
  ```json
  {
    "email": "test@example.com",
    "username": "user",
    "password": "password123"
  }
  ```
- **Response:** User data if signup is successful, or an error message if there's an issue.

#### Sign In

- **URL:** `POST http://localhost:3000/auth/signin`
- **Description:** Authenticates a user and returns a JWT token.
- **Request Body:**
  ```json
  {
    "email": "test@example.com",
    "password": "password123"
  }
  ```
- **Response:** User data and a JWT token if sign-in is successful, or an error message if there's an issue.

#### Sign Out

- **URL:** `POST http://localhost:3000/auth/signout`
- **Description:** Logs out the user (placeholder, no actual functionality).

### Protected Routes

- **Route:** `GET http://localhost:3000/profile`
- **Description:** Example protected route that requires authentication.
- **Headers:** Authorization: Bearer `<JWT token>`
- **Response:** User profile data if the token is valid, or "Unauthorized" with status code 401 if the token is missing, invalid, or expired.

### Testing with Postman

1. **Sign Up**: Send a POST request to `/auth/signup` with the user's email, username, and password in the request body.

2. **Sign In**: Send a POST request to `/auth/signin` with the user's email and password in the request body. Obtain the JWT token from the response.

3. **Use the Token**: Access protected routes by including the JWT token in the Authorization header of the request. For example, send a GET request to `/profile` with the Authorization header set to `Bearer <JWT token>`.

### Environment Variables

Ensure that the following environment variables are set:

- `PORT`: Port number where the server is running (e.g., `3000`).
- `JWT_SECRET`: Secret key used for JWT token generation and verification.

### Note

- Replace `localhost:3000` with your actual server address and port.
- Replace `<JWT token>` with the actual JWT token obtained from the sign-in response.

---

This documentation should provide a clear overview of the authentication setup and how to test it using Postman.