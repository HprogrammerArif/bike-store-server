import { model, Schema } from "mongoose";
import { IProduct } from "./product.interface";

const productSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: [true, "Please provide a bike name!"],
    minlength: [3, "Bike name must be at least 3 characters long!"],
    maxlength: [30, "Bike name cannot exceed 30 characters!"],
  },
  brand: {
    type: String,
    required: [true, "Please provide a brand name!"],
    minlength: [3, "Brand name must be at least 3 characters long!"],
    maxlength: [30, "Brand name cannot exceed 30 characters!"],
  },
  price: {
    type: Number,
    required: [true, "Please enter a price!"],
    min: [0, "Price cannot be negative!"],
  },
  category: {
    type: String,
    required: [true, "Please select a category!"],
    enum: {
      values: ["Mountain", "Road", "Hybrid", "Electric"],
      message: "Category must be one of Mountain, Road, Hybrid, or Electric!",
    },
  },
  description: {
    type: String,
    required: [true, "Please provide a description!"],
    minlength: [10, "Description must be at least 10 characters long!"],
    maxlength: [200, "Description cannot exceed 200 characters!"],
  },
  quantity: {
    type: Number,
    required: [true, "Please provide a quantity!"],
    min: [0, "Quantity cannot be negative!"],
    validate: {
      validator: Number.isInteger,
      message: "Quantity must be an integer!",
    },
  },
  inStock: {
    type: Boolean,
    enum: {
      values:["true", "false"],
      message: "{VALUE} is not valid. Please provide a valid"
    },
    required: [true, "Please specify whether the product is in stock!"],
    default: true
  },
},
{ timestamps: true });

const Product = model<IProduct>("product", productSchema);
export default Product;
