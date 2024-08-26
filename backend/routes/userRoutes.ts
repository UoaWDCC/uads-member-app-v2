import { Router } from "express";
import { getUsers } from "../controllers/CreateUserController";
import { createUser } from "../controllers/CreateUserController";

const userRoutes = Router();

// Get all Sponsors
userRoutes.get("/", getUsers);
userRoutes.post("/", createUser);

export default userRoutes;