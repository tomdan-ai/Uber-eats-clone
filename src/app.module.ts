// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { ConfigModule } from '@nestjs/config'; // Import ConfigModule
// import { AuthModule } from './auth/auth.module';

// @Module({
//   imports: [
//     ConfigModule.forRoot(), // Import ConfigModule to access environment variables
//     AuthModule
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}


import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // Import ConfigModule to access environment variables
    AuthModule,
  ],
  controllers: [AppController], // Include AppController
  providers: [AppService], // Include AppService
})
export class AppModule {}
