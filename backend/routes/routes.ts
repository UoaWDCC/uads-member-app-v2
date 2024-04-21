import express from "express";
import userRoutes from "./userRoutes";
import eventRoutes from "./eventRoutes";

const router = express.Router();

// All user routes
router.use("/api/user", userRoutes);

// All event routes
router.use("/api/events", eventRoutes);

export default router;