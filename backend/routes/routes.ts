import express from "express";
import eventRoutes from "./eventRoutes";
import sponsorRoutes from "./sponsorRoutes";

const router = express.Router();

// All event routes
router.use("/api/events", eventRoutes);

// All sponsor routes
router.use("/api/sponsors", sponsorRoutes);

export default router;
