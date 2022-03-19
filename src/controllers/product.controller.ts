import { Request, Response } from "express";
import {
  createProductService,
  deleteProduct,
  getOneProductService,
  listAllProductsService,
} from "../services/product.service";

export const createProductController = async (req: Request, res: Response) => {
  try {
    const product = await createProductService(req.body);
    return res.status(201).send(product);
  } catch (err: any) {
    return res.status(400).send({ message: err.message });
  }
};

export const listAllProductsController = async (
  req: Request,
  res: Response
) => {
  const products = await listAllProductsService();
  return res.status(200).send(products);
};

export const getOneProductController = async (req: Request, res: Response) => {
  try {
    const product: any = await getOneProductService(req.body);
    return res.status(200).send(product);
  } catch (err) {
    return res.status(400).send({ message: "Product not found" });
  }
};

export const deleteProductController = async (req: Request, res: Response) => {
  try {
    await deleteProduct(req.params);
    return res.status(200).send({ message: "Product excluded" });
  } catch (err: any) {
    return res.status(400).send({ message: err.message });
  }
};
