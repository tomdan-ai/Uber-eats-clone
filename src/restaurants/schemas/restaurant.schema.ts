// src/restaurant/schemas/restaurant.schema.ts

import { Schema, Document, model } from 'mongoose';

interface IMenuItem {
  name: string;
  description: string;
  price: number;
}

interface IOpeningHour {
  day: string;
  open: string;
  close: string;
}

interface IDeliveryArea {
  type: string;
  coordinates: number[][];
}

export interface IRestaurant extends Document {
  name: string;
  address: string;
  phone: string;
  email: string;
  menu: IMenuItem[];
  openingHours: IOpeningHour[];
  deliveryAreas: IDeliveryArea[];
  owner: string; // To link with user model for authentication/authorization
}

const MenuItemSchema = new Schema<IMenuItem>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

const OpeningHourSchema = new Schema<IOpeningHour>({
  day: { type: String, required: true },
  open: { type: String, required: true },
  close: { type: String, required: true },
});

const DeliveryAreaSchema = new Schema<IDeliveryArea>({
  type: { type: String, required: true },
  coordinates: { type: [[Number]], required: true },
});

export const RestaurantSchema = new Schema<IRestaurant>({
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  menu: { type: [MenuItemSchema], required: true },
  openingHours: { type: [OpeningHourSchema], required: true },
  deliveryAreas: { type: [DeliveryAreaSchema], required: true },
  owner: { type: String, required: true },
});

export const Restaurant = model<IRestaurant>('Restaurant', RestaurantSchema);
