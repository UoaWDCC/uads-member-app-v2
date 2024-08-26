import { Router } from "express";
import { getUsers, createUser } from "../controllers/UserController";

const userRoutes = Router();

// Get all Users
userRoutes.get("/", getUsers);
userRoutes.post("/", createUser);

export default userRoutes;
