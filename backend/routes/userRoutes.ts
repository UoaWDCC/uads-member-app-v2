import { Router } from "express";
import {
  createUser,
  getUsers,
  getUser,
  updateUserName,
  deleteUser,
  getUserByName,
  getUserByEmail,
} from "../controllers/UserController";

const userRoutes = Router();

userRoutes.post("/", createUser);

userRoutes.get("/", getUsers);

userRoutes.get("/:id", getUser);

userRoutes.get("/name/:name", getUserByName);

userRoutes.get("/email/:email", getUserByEmail);

userRoutes.patch("/:id", updateUserName);

userRoutes.delete("/:id", deleteUser);

export default userRoutes;
