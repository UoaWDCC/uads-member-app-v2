import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcrypt";

const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    // Validate input
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(409).json({ message: "User already exists." });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new User object
    const user = new User({ name, email, password: hashedPassword });

    // Save the user to the database
    await user.save();

    // Send a response back to the client
    res.status(201).json({ message: "User created successfuly", user });
  } catch (err) {
    res.status(500).json({ message: "Internal Server error" });
  }
};

const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();

    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ message: "Internal Server error" });
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ message: "Internal Server error" });
  }
};

const getUserByName = async (req: Request, res: Response) => {
  try {
    const { name } = req.params;

    const user = await User.findOne({ name: name });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ message: "Internal Server error" });
  }
};

const getUserByEmail = async (req: Request, res: Response) => {
  try {
    const { email } = req.params;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ message: "Internal Server error" });
  }
};

const updateUserName = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { newName } = req.body;

    const user = await User.findByIdAndUpdate(id, { name: newName }, { new: true });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "User name updated successfully", user });
  } catch (err) {
    return res.status(500).json({ message: "Internal Server error" });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "User deleted successfully", user });
  } catch (err) {
    return res.status(500).json({ message: "Internal Server error" });
  }
};

export { createUser, getUsers, getUser, getUserByName, getUserByEmail, updateUserName, deleteUser };
