// auth/auth.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userModel.findOne({ email }).exec();
    if (!user || user.password !== password) {
      return null;
    }
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
    const newUser = new this.userModel({ email, username, password });
    return newUser.save();

    return newUser;
  }
}
