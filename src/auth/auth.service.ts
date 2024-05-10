// auth.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  // Dummy user data for testing
  private readonly users = [
    { id: 1, email: 'test@example.com', username: 'user', password: 'password' },
  ];

  async validateUser(email: string, password: string): Promise<any> {
    // Find user by email
    const user = this.users.find(user => user.email === email);
    
    // If user not found or password doesn't match, return null
    if (!user || user.password !== password) {
      return null;
    }

    // If user found and password matches, return user
    return user;
  }

  async signup(email: string, username: string, password: string): Promise<any> {
    // Validate email format
    if (!email.includes('@')) {
      throw new Error('Invalid email format');
    }

    // Validate password length
    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters');
    }

    // Validate username format
    if (!/^[a-z]+$/.test(username)) {
      throw new Error('Username must be all lowercase letters');
    }

    // Placeholder for user creation logic
    const newUser = { id: this.users.length + 1, email, username, password };
    this.users.push(newUser);

    return newUser;
  }
}
