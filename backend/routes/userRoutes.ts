import { Router } from "express";
import { getUsers } from "../controllers/CreateUserController";
import { createUser } from "../controllers/CreateUserController";
import { deleteUser } from "../controllers/DeleteUserController";

const userRoutes = Router();

// Get all Sponsors
userRoutes.get("/", getUsers);
userRoutes.post("/", createUser);
userRoutes.delete("/", deleteUser)
// userRoutes.patch("/", updateUser)

export default userRoutes;