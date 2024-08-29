import { Router } from "express";
import { createUser, getUser, updateUser, deleteUser, getAllUsers } from "../controllers/UserController";

const userRoutes = Router();

userRoutes.post("/", createUser);

userRoutes.get("/:id", getUser);

userRoutes.get("/", getAllUsers);

userRoutes.put("/:id", updateUser);

userRoutes.delete("/:id", deleteUser);

export default userRoutes;