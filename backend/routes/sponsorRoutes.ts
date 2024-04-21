import { Router } from "express"
import { getSponsors, createSponsor, deleteSponsor, updateSponsor } from "../controllers/SponsorController";

const sponsorRoutes = Router();

// GET all users
sponsorRoutes.get('/', getSponsors);

// CREATE new user
sponsorRoutes.post('/', createSponsor);

// DELETE a user 
sponsorRoutes.delete('/:id', deleteSponsor);

// Update a user 
sponsorRoutes.patch('/:id', updateSponsor);

export default sponsorRoutes;