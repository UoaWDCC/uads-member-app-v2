import { Router } from "express"
import { getUsers, createUser, deleteUser, updateUser } from "../controllers/UserController";

const userRoutes = Router();

// GET all users
userRoutes.get('/', getUsers);

// CREATE new user
userRoutes.post('/', createUser);

// DELETE a user 
userRoutes.delete('/:id', deleteUser);

// Update a user 
userRoutes.patch('/:id', updateUser);

export default userRoutes;