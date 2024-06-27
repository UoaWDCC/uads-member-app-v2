import express from "express";
import eventRoutes from "./eventRoutes";
import sponsorRoutes from "./sponsorRoutes";
import execRoutes from "./execRoutes";
import socialRoutes from "./socialRoutes";

const router = express.Router();

// All event routes
router.use("/api/events", eventRoutes);

// All sponsor routes
router.use("/api/sponsors", sponsorRoutes);

// All exec routes
router.use("/api/execs", execRoutes);

// All exec routes
router.use("/api/socials", socialRoutes);

export default router;
