import { Router } from "express";
import { login } from "../controllers/login.controller";

const loginRoutes = Router();

loginRoutes.post("", login);

export default loginRoutes;
