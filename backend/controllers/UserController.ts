import { Request, Response } from "express";
import userModel from "../models/User";

const createUser = async (req: Request, res: Response) => {
  try {
    const { username, password, email } = req.body;

    // Error handling to do

    const user = new userModel({ username, password, email });

    await user.save();

    return res.status(200).json({ message: "User created successfully" });

  } catch (error) {

    return res.status(500).json({ message: "Internal Server Error" });

  }
};

// add more controllers here

export { createUser };
