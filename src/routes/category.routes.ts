import { Router } from "express";
import {
  createCategoryController,
  deleteCategoryController,
  getOneCategoryController,
  listAllCategoryController,
  updateCategoryController,
} from "../controllers/category.controller";
import authenticated from "../middlewares/authenticate.middlaware";

const categoryRoutes = Router();

categoryRoutes.post("", authenticated, createCategoryController);
categoryRoutes.get("", listAllCategoryController);
categoryRoutes.patch("/:id", authenticated, updateCategoryController);
categoryRoutes.get("/search", getOneCategoryController);
categoryRoutes.delete("/:id", authenticated, deleteCategoryController);

export default categoryRoutes;
