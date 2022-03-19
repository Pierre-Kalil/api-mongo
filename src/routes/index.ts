import { Router } from "express";
import brandRoutes from "./brand.routes";
import loginRoutes from "./login.routes";
import categoryRoutes from "./category.routes";
import userRoutes from "./user.routes";
import productsRoutes from "./product.routes";

const router = Router();

router.use("/user", userRoutes);
router.use("/login", loginRoutes);
router.use("/category", categoryRoutes);
router.use("/brand", brandRoutes);
router.use("/product", productsRoutes);

export default router;
