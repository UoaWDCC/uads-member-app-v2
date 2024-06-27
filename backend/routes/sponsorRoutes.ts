import { Router } from "express";
import { getSponsors } from "../controllers/SponsorController";

const sponsorRoutes = Router();

// Get all Sponsors
sponsorRoutes.get("/", getSponsors);

export default sponsorRoutes;
