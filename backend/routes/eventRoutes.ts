import { Router } from "express"
import { getEvents, createEvent, deleteEvent, updateEvent } from "../controllers/EventController";

const eventRoutes = Router();

// GET all users
eventRoutes.get('/', getEvents);

// CREATE new user
eventRoutes.post('/', createEvent);

// DELETE a user 
eventRoutes.delete('/:id', deleteEvent);

// Update a user 
eventRoutes.patch('/:id', updateEvent);

export default eventRoutes;