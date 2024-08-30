import { Router } from "express";
import { getUsers, createUser, updateUserPassword, updateUserName, deleteUser} from "../controllers/UserController";

const userRoutes = Router();

// Get all Users
userRoutes.get("/", getUsers);
userRoutes.post("/", createUser);
userRoutes.patch("/:id", updateUserPassword);
userRoutes.patch("/:id", updateUserName);
userRoutes.delete("/:id", deleteUser);


export default userRoutes;
