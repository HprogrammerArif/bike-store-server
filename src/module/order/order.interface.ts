import { Types } from "mongoose";


export interface IOrder {
  email: string;
  product: Types.ObjectId; // Reference to the product ID (bike)
  quantity: number;
  totalPrice: number;
}
