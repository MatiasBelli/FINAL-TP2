import { Router } from "express";
import votarRoutes from "./votarRoutes.js";
const router = Router();

router.use("/votar", votarRoutes)

export default router;
