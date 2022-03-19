import { Request, Response } from "express";
import { createUserService, getUserService } from "../services/user.service";

export const registerUserController = async (req: Request, res: Response) => {
  try {
    const user = await createUserService(req.body);
    return res.status(201).send({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
    });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

export const getAllUsersController = async (req: Request, res: Response) => {
  const user = await getUserService(req.params);

  return res.status(201).send({
    id: user.id,
    name: user.name,
    email: user.email,
    password: user.password,
  });
};
