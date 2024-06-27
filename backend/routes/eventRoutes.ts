import { Router } from "express";
import { getEvents } from "../controllers/EventController";

const eventRoutes = Router();

// Get all Events
eventRoutes.get("/", getEvents);

export default eventRoutes;
