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

    return res.status(201).json({ message: "User created successfully" });

  } catch (error) {

    return res.status(500).json({ message: "Internal Server Error" });

  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    // Get email
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email not provided" });
    }

    // Find the user by email
    const user = await userModel.findOne({ email });

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
    const { username, email, password } = req.body;

    // Check if email is provided
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    // Check if no data is provided for update
    if (!username && !password) {
      return res.status(400).json({ message: "No data provided for update" });
    }

    // Prepare the update data
    const updateData: any = {};
    if (username) updateData.username = username;
    if (password) updateData.password = password;

    // Find the user by email and update
    const user = await userModel.findOneAndUpdate({ email }, updateData, { new: true });

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
    const { username, email, password } = req.body;

    // Check if email is provided
    if (!username || !email || !password) {
      return res.status(400).json({ message: "Information is required" });
    }

    // Find the user by email and delete
    const user = await userModel.findOneAndDelete({ email, username, password });

    // If user not found
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(204).json({ message: "User deleted successfully" });

  } catch (error) {

    return res.status(500).json({ message: "Internal Server Error" });

  }
};

export { createUser, getUser, updateUser, deleteUser }; 
