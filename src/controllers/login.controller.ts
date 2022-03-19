import { Request, Response } from "express";
import { UserModel } from "../models/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (!user) {
    return res.status(400).send({ message: "User not found" });
  }
  if (!(await bcrypt.compare(password, user.password))) {
    return res.status(400).send({ message: "Invalid password" });
  }
  const token = jwt.sign(
    { id: user.id, email: user.email, name: user.name },
    process.env.SECRET as string,
    {
      expiresIn: "1d",
    }
  );
  res.send({ token });
};
