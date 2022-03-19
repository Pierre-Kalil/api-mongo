import { BrandModel } from "../models/brand.model";
import { v4 as uuidv4 } from "uuid";
import ErrorHandler from "../Errors/errors";

export const createBrandService = async (data: any) => {
  if (await BrandModel.findOne({ name: data.name })) {
    throw new ErrorHandler("Brand already registered!", 409);
  }
  data.id = uuidv4().toString();
  const brand = await BrandModel.create(data);
  return brand;
};

export const listAllBrandsService = async () => {
  const brands = await BrandModel.find();
  return brands;
};

export const updateBrandService = async (id: any, data: any) => {
  const brandUpdate = await BrandModel.findOneAndUpdate(
    { id: id.id },
    { name: data.name },
    { new: true }
  );
  return brandUpdate;
};

export const getOneBrandService = async (name: any) => {
  const brand: any = await BrandModel.find({ name: name.name });
  if (!brand) {
    throw new ErrorHandler("Brand not found", 409);
  }
  return brand;
};

export const deleteBrandService = async (id: any) => {
  if (!(await BrandModel.findOne({ id: id.id }))) {
    throw new ErrorHandler("Brand not found", 409);
  }
  await BrandModel.findOneAndDelete({ id: id.id });
};
