import express, { Request, Response } from "express";
import productRouter from "./module/products/product.router";
import orderRouter from "./module/order/order.router";

const app = express();

//middleware
app.use(express.json());

app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);

app.get("/", (req: Request, res: Response) => {
  res.send({
    status: true,
    message: "Server live ⚡",
  });
});

export default app;
