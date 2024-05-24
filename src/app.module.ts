// src/app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { RestaurantModule } from './restaurants/restaurant.model';
import { User, UserSchema } from './auth/user.model';
import { Restaurant, RestaurantSchema } from './restaurants/schemas/restaurant.schema';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Restaurant.name, schema: RestaurantSchema },
    ]),
    AuthModule,
    RestaurantModule,
  ],
})
export class AppModule {}
