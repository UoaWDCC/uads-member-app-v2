import { Request, Response } from 'express';
import userModel from '../models/User';


const getUsers = async (req: Request, res: Response) => {
    res.status(200).json("status");
}

const createUser = async (req: Request, res: Response) => {
	
	// Check if the request body is missing the username or password
	if (!req.body.username || !req.body.password) {
		res.status(400).json({ error: "missing username or password" });
		return;
	}

	try {
    const { username, password } = req.body;
    const user = new userModel({ username, password });
    await user.save();
    res.status(201).json(user);
	} catch (error) {
		res.status(500).json({ error: "username taken" });
	}
}

export { getUsers, createUser };