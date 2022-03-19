import { ProductModel } from "../models/product.model";
import { v4 as uuidv4 } from "uuid";
import ErrorHandler from "../Errors/errors";

interface Data {
  id: string;
  name: string;
  description: string;
  price: number;
  inventory: number;
  category: {};
  brand: {};
}

interface ID {
  id?: { id: string };
}

export const createProductService = async (data: Data) => {
  data["id"] = uuidv4();
  const product = await ProductModel.create(data);
  return product;
};

export const listAllProductsService = async () => {
  const products = await ProductModel.find()
    .populate("category")
    .populate("brand");
  return products;
};

export const getOneProductService = async (data: any) => {
  if (Object.keys(data).join(" ") == "name") {
    const product: any = await ProductModel.find({
      name: data.name,
    })
      .populate("category")
      .populate("brand");
    if (product.length < 1) {
      throw new ErrorHandler("Product not found!", 409);
    }
    return product;
  }
  const product: any = await ProductModel.find({
    description: data.description,
  })
    .populate("category")
    .populate("brand");
  if (product.length < 1) {
    throw new ErrorHandler("Product not found!", 409);
  }
  return product;
};

export const deleteProduct = async (id: ID) => {
  if (!(await ProductModel.findOne({ id: id.id }))) {
    throw new ErrorHandler("Product not found!", 409);
  }
  await ProductModel.findOneAndDelete({ id: id.id });
};
