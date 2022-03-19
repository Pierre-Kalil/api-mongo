import { Router } from "express";
import {
  createProductController,
  deleteProductController,
  getOneProductController,
  listAllProductsController,
} from "../controllers/product.controller";
import authenticated from "../middlewares/authenticate.middlaware";

const productsRoutes = Router();

productsRoutes.post("", authenticated, createProductController);
productsRoutes.get("", listAllProductsController);
productsRoutes.delete("/:id", authenticated, deleteProductController);
productsRoutes.get("/search", getOneProductController);

export default productsRoutes;
