import { Router } from "express";
import { orderController } from "./order.controller";

const orderRouter = Router()

orderRouter.post("/", orderController.orderBike)

export default orderRouter