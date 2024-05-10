// auth.controller.ts
import { Controller, Post, Body, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signup(@Body() body: { email: string; username: string; password: string }) {
    // Call the authService to create a new user
    return this.authService.signup(body.email, body.username, body.password);
  }

  @UseGuards(LocalAuthGuard)
  @Post('signin')
  async signin(@Req() req) {
    // Once LocalAuthGuard passes, return the user and JWT token
    return req.user;
  }

  @Post('signout')
  async signout() {
    // Placeholder for signout logic
    return 'User signed out successfully';
  }
}
