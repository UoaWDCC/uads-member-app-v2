import { Router } from "express";
import sponsorRoutes from "./sponsorRoutes";

const router = Router();

router.use("/cms/sponsors", sponsorRoutes);

export default router;
