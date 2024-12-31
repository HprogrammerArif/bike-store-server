import { Request, Response } from "express";
import { productService } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  try {
    const payload = req.body;

    const result = await productService.createProduct(payload);
    res.send({
      success: true,
      message: "Bike created successfully!!",
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: "Something went wrong!!",
      error,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await productService.getAllProducts();
    res.send({
      status: true,
      message: "Bikes retrieved successfully!",
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: "Something went wrong!!",
      error,
    });
  }
};

const getSpecificBike = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await productService.getSpecificBike(productId);
    res.send({
      status: true,
      message: "Bike retrieved successfully!",
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: "Something went wrong!!",
      error,
    });
  }
};

const updateBike = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const data = req.body;
    const result = await productService.updateBike(productId, data);
    res.send({
      status: true,
      message: "Bike updated successfully!",
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: "Something went wrong!!",
      error,
    });
  }
};

const deleteBike = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    
    const result = await productService.deleteBike(productId);
    res.send({
      status: true,
      message: "Bike deleted successfully!",
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: "Something went wrong!!",
      error,
    });
  }
};

export const productController = {
  createProduct,
  getAllProducts,
  getSpecificBike,
  updateBike,
  deleteBike
};
