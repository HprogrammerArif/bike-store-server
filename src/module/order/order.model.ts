import { model, Schema } from "mongoose";
import { IOrder } from "./order.interface";

const orderSchema = new Schema<IOrder>({
  email: {
    type: String,
    required: true,
    trim: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    unique:true,
  },
  // email: {
  //   type: String,
  //   required: [true, 'Email is required!'],
  //   unique: true,
  //   trim: true,
  //   validate: {
  //     validator: (value: string) => validator.isEmail(value),
  //     message: '{VALUE} is not a valid email type!!',
  //   },
  // },
  product: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Product', // Reference to the Product model
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  totalPrice: {
    type: Number,
    required: true,
    min: 0,
  },
}, { timestamps: true });

const Order = model<IOrder>("order", orderSchema);

export default Order;
