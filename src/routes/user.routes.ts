import { Router } from "express";
import {
  registerUserController,
  getAllUsersController,
} from "../controllers/user.controller";
import authenticated from "../middlewares/authenticate.middlaware";

const userRoutes = Router();

userRoutes.post("", registerUserController);
userRoutes.get("/:id", getAllUsersController);

export default userRoutes;
