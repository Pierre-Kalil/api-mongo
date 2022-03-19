import { Router } from "express";
import {
  createBrandController,
  deleteBrandController,
  getOneBrandController,
  listAllBrandsController,
  updateBrandController,
} from "../controllers/brand.controller";
import authenticated from "../middlewares/authenticate.middlaware";

const brandRoutes = Router();

brandRoutes.post("", authenticated, createBrandController);
brandRoutes.get("", listAllBrandsController);
brandRoutes.patch("/:id", authenticated, updateBrandController);
brandRoutes.get("/search", getOneBrandController);
brandRoutes.delete("/:id", authenticated, deleteBrandController);

export default brandRoutes;
