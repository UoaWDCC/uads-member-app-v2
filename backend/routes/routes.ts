import express from "express";
import eventRoutes from "./eventRoutes";
import sponsorRoutes from "./sponsorRoutes";
import execRoutes from "./execRoutes";
import socialRoutes from "./socialRoutes";
import donutRoutes from "./donutRoutes";

const router = express.Router();

// All event routes
router.use("/api/events", eventRoutes);

// All sponsor routes
router.use("/api/sponsors", sponsorRoutes);

// All exec routes
router.use("/api/execs", execRoutes);

// All social routes
router.use("/api/socials", socialRoutes);

router.use("/api/donuts", donutRoutes)

// Define user routes here

export default router;
