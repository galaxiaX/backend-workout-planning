import { Router } from "express";
import checkRoutes from "./checkRoutes";
import authRoutes from "./authRoutes";
import planRoutes from "./planRoutes";
import { errorHandler } from "../middleware/errorHandler";

const router = Router();

router.use("/api/check", checkRoutes);
router.use("/api/auth", authRoutes);
router.use("/api/plans", planRoutes);

router.use(errorHandler);

export default router;
