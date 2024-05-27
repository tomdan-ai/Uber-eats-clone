// src/restaurant/restaurant.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Restaurant, IRestaurant } from './schemas/restaurant.schema';

@Injectable()
export class RestaurantService {
  constructor(@InjectModel(Restaurant.name) private restaurantModel: Model<IRestaurant>) {}

  async create(createRestaurantDto: any): Promise<IRestaurant> {
    const createdRestaurant = new this.restaurantModel(createRestaurantDto);
    return createdRestaurant.save();
  }

  async findAll(): Promise<IRestaurant[]> {
    return this.restaurantModel.find().exec();
  }

  async findOne(id: string): Promise<IRestaurant> {
    return this.restaurantModel.findById(id).exec();
  }

  async update(id: string, updateRestaurantDto: any): Promise<IRestaurant> {
    return this.restaurantModel.findByIdAndUpdate(id, updateRestaurantDto, { new: true }).exec();
  }

  async delete(id: string): Promise<any> {
    return this.restaurantModel.findByIdAndDelete(id).exec();
  }
}
