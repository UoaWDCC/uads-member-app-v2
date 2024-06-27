import { Router } from "express";
import { getSocials } from "../controllers/SocialController";

const socialRoutes = Router();

// Get all Socials
socialRoutes.get("/", getSocials);

export default socialRoutes;
