// src/restaurant/restaurant.controller.ts

import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';

@Controller('restaurants')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Post()
  async create(@Body() createRestaurantDto: any) {
    return this.restaurantService.create(createRestaurantDto);
  }

  @Get()
  async findAll() {
    return this.restaurantService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.restaurantService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateRestaurantDto: any) {
    return this.restaurantService.update(id, updateRestaurantDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.restaurantService.delete(id);
  }
}
