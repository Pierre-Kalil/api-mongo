import { Request, Response } from "express";
import {
  createBrandService,
  deleteBrandService,
  getOneBrandService,
  listAllBrandsService,
  updateBrandService,
} from "../services/brand.service";

export const createBrandController = async (req: Request, res: Response) => {
  try {
    const brand = await createBrandService(req.body);
    return res.status(201).send({
      id: brand.id,
      name: brand.name,
    });
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
};

export const listAllBrandsController = async (req: Request, res: Response) => {
  console.log(process.env.DATABASE);
  const brands = await listAllBrandsService();
  let serializer: any = {};
  let brandsSerializer = [];
  for (let i in brands) {
    serializer = {
      _id: brands[i]._id,
      id: brands[i].id,
      name: brands[i].name,
    };
    brandsSerializer.push(serializer);
  }
  return res.status(200).send(brandsSerializer);
};

export const updateBrandController = async (req: Request, res: Response) => {
  try {
    const brandUpdate = await updateBrandService(req.params, req.body);
    return res.status(201).send({
      id: brandUpdate.id,
      name: brandUpdate.name,
    });
  } catch (error) {
    return res.status(400).json({ message: "Brando not found" });
  }
};

export const getOneBrandController = async (req: Request, res: Response) => {
  try {
    const brand: any = await getOneBrandService(req.body);
    return res.status(200).send({
      id: brand[0].id,
      name: brand[0].name,
    });
  } catch (err) {
    return res.status(400).send({ message: "Brand not found" });
  }
};

export const deleteBrandController = async (req: Request, res: Response) => {
  try {
    await deleteBrandService(req.params);
    return res.status(200).send({ message: "Brand excluded" });
  } catch (err) {
    return res.status(400).send({ message: "Brand not found" });
  }
};
