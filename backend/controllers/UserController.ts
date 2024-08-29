import { Request, Response } from "express";
import userModel from "../models/User";

const createUser = async (req: Request, res: Response) => {
  try {
    const { username, password, email } = req.body;

    // Check if all fields are filled
    if (!username || !password || !email) {
      return res.status(400).json({ message: "All fields are required" });
    }
    
    // Check if user with this email already exists
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: "User with this email already exists" });
    }

    const user = new userModel({ username, password, email });

    await user.save();

    return res.status(201).json({ message: "User created successfully", user });

  } catch (error) {

    return res.status(500).json({ message: "Internal Server Error" });

  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    // Get email
    const { id } = req.params;

    // Find the user by email
    const user = await userModel.findById(id);    

    // If user not found
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "User obtained successfully", user });

  } catch (error) {

    return res.status(500).json({ message: "Internal Server Error" });

  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    // Get email, username, password from body
    const { id } = req.params;
    const { newName } = req.body;

    // Check if no data is provided for update
    if (!newName) {
      return res.status(400).json({ message: "No data provided for update" });
    }

    // Find the user by email and update
    const user = await userModel.findByIdAndUpdate(id, {username: newName}, { new: true });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "User updated successfully", user });

  } catch (error) {

    return res.status(500).json({ message: "Internal Server Error" });

  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Find the user by email and delete
    const user = await userModel.findByIdAndDelete(id);

    // If user not found
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "User deleted successfully" });

  } catch (error) {

    return res.status(500).json({ message: "Internal Server Error" });

  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    // Find all users
    const users = await userModel.find();

    return res.status(200).json({ message: "Users obtained successfully", users });

  } catch (error) {

    return res.status(500).json({ message: "Internal Server Error" });

  }
}

export { createUser, getUser, updateUser, deleteUser, getAllUsers }; 
