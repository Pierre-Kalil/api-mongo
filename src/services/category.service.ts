import { CategoryModel } from "../models/category.model";
import { v4 as uuidv4 } from "uuid";
import ErrorHandler from "../Errors/errors";

export const createCategoryService = async (data: any) => {
  if (await CategoryModel.findOne({ name: data.name })) {
    throw new ErrorHandler("Category already registered!", 409);
  }
  data.id = uuidv4().toString();
  const category = await CategoryModel.create(data);
  return category;
};

export const listAllCategoriesService = async () => {
  const categories = await CategoryModel.find();
  return categories;
};

export const updateCategoryService = async (id: any, data: any) => {
  const categoryUpdate = await CategoryModel.findOneAndUpdate(
    { id: id.id },
    { name: data?.name, description: data?.description },
    { new: true }
  );
  return categoryUpdate;
};

export const getOneCategory = async (data: any) => {
  const category: any = await CategoryModel.find({ name: data.name });
  return category;
};

export const deleteCategory = async (id: any) => {
  if (!(await CategoryModel.findOne({ id: id.id }))) {
    throw new ErrorHandler("Category not found!", 409);
  }
  await CategoryModel.findOneAndDelete({ id: id.id });
};
