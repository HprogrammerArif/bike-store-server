import { Request, Response } from "express";
import { orderService } from "./order.service";

const orderBike = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const result = await orderService.orderBike(payload);
    res.send({
      success: true,
      message: "Order created successfully!!",
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

const calculateRevenue = async (req: Request, res: Response) => {
  try {
    //const payload = req.body;
    const result = await orderService.calculateRevenue();
    res.send({
      success: true,
      message: "Revenue calculated successfully!!",
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

export const orderController = {
  orderBike,
  calculateRevenue
};
