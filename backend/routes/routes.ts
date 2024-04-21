import express from "express";
import userRoutes from "./userRoutes";
import eventRoutes from "./eventRoutes";
import sponsorRoutes from "./sponsorRoutes";

const router = express.Router();

// All user routes
router.use("/api/user", userRoutes);

// All event routes
router.use("/api/events", eventRoutes);

// All sponsor routes
router.use("/api/sponsors", sponsorRoutes);

export default router;