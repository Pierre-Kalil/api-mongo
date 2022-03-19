import { Request, Response } from "express";
import {
  createCategoryService,
  deleteCategory,
  getOneCategory,
  listAllCategoriesService,
  updateCategoryService,
} from "../services/category.service";

export const createCategoryController = async (req: Request, res: Response) => {
  try {
    const category = await createCategoryService(req.body);
    return res.status(201).send({
      id: category.id,
      name: category.name,
      description: category.description,
    });
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
};

export const listAllCategoryController = async (
  req: Request,
  res: Response
) => {
  const categories: any = await listAllCategoriesService();
  let serializer: any = {};
  let categoriesSerializer = [];
  for (let i in categories) {
    serializer = {
      _id: categories[i]._id,
      id: categories[i].id,
      name: categories[i].name,
      description: categories[i].description,
    };
    categoriesSerializer.push(serializer);
  }
  return res.status(200).send(categoriesSerializer);
};

export const updateCategoryController = async (req: Request, res: Response) => {
  try {
    const categoryUpdate = await updateCategoryService(req.params, req.body);
    return res.status(201).send({
      _id: categoryUpdate._id,
      id: categoryUpdate.id,
      name: categoryUpdate.name,
      description: categoryUpdate.description,
    });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

export const getOneCategoryController = async (req: Request, res: Response) => {
  try {
    const category: any = await getOneCategory(req.body);
    return res.status(200).send({
      id: category[0].id,
      name: category[0].name,
      description: category[0].description,
    });
  } catch (err) {
    return res.status(400).send({ message: "Category not found" });
  }
};

export const deleteCategoryController = async (req: Request, res: Response) => {
  try {
    await deleteCategory(req.params);
    return res.status(200).send({ message: "Catogory excluded" });
  } catch (err: any) {
    return res.status(400).send({ message: err.message });
  }
};
