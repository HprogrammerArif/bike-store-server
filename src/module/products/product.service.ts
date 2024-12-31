import { IProduct } from "./product.interface";
import Product from "./product.model";

const createProduct = async (payload: IProduct): Promise<IProduct> => {
  const result = await Product.create(payload);
  return result;
};

const getAllProducts = async () => {
  const result = await Product.find();
  return result;
};

const getSpecificBike = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const updateBike = async (id: string, data: IProduct) => {
  const result = await Product.findByIdAndUpdate(id, data, {new:true});
  return result;
};

const deleteBike = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

export const productService = {
  createProduct,
  getAllProducts,
  getSpecificBike,
  updateBike,
  deleteBike
};
