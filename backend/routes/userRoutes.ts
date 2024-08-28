import { Router } from "express";
import { createUser, getUser, updateUser, deleteUser } from "../controllers/UserController";

const userRoutes = Router();

userRoutes.post("/", createUser);

userRoutes.get("/", getUser);

userRoutes.put("/", updateUser);

userRoutes.delete("/", deleteUser);

export default userRoutes;