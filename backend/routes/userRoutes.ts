import { Router } from "express";
import { createUser, getUsers, getUser, updateUserName, deleteUser } from "../controllers/UserController";

const userRoutes = Router();

userRoutes.post("/", createUser);

userRoutes.get("/", getUsers);

userRoutes.get("/:id", getUser);

userRoutes.patch("/:id", updateUserName);

userRoutes.delete("/:id", deleteUser);

export default userRoutes;