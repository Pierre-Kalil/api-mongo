import ErrorHandler from "../Errors/errors";
import { UserModel } from "../models/user.model";
import { v4 as uuidv4 } from "uuid";

export const createUserService = async (data: any) => {
  if (await UserModel.findOne({ email: data.email })) {
    throw new ErrorHandler("User already registered!", 409);
  }
  data.id = uuidv4();
  const user = await UserModel.create(data);
  return user;
};

export const getUserService = async (id: any) => {
  const user = await UserModel.findOne({ id: id.id });
  return user;
};
