import express from "express";
import userRoutes from "./userRoutes";

const router = express.Router();

// All user routes
router.use("/api/user", userRoutes);

export default router;