import { Router } from "express";
import { getSocials } from "../controllers/SocialController";

const socialRoutes = Router();

socialRoutes.get("/", getSocials);

export default socialRoutes;
