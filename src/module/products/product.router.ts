import { Router } from "express";
import { productController } from "./product.controller";

const productRouter = Router();

productRouter.post("/", productController.createProduct);
productRouter.get("/", productController.getAllProducts);
productRouter.get("/:productId", productController.getSpecificBike);
productRouter.put("/:productId", productController.updateBike);
productRouter.delete("/:productId", productController.deleteBike);

export default productRouter;
