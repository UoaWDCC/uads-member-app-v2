import { Request, Response } from 'express';
import userModel from '../models/User';

const getUsers = async (req: Request, res: Response) => {
	try {
		const users = await userModel.find();

		return res.status(200).json(users);

	} catch (error) {
		return res.status(500).json({ message: "Internal Server error" });
	}
}

const createUser = async (req: Request, res: Response) => {
	try {
		const { username, password } = req.body;

		// Check if the request body is missing the username or password
		if (!username || !password) {
			return res.status(400).json({ error: "missing username or password" });
		}

		const userExists = await userModel.findOne({ username });

		if (userExists) {
			return res.status(409).json({ error: "Username already exists." });
		}

		if (password.length < 5) {
			return res.status(400).json({ error: "Password needs to be more than 5 letters" });
		}

		const user = new userModel({ username, password })

		await user.save();

		return res.status(201).json({ message: "User created successfuly", user });
	} catch (error) {
		res.status(500).json({ error: "Internal Server error" });
	}
}

const updateUserPassword = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const { newPassword } = req.body;

		const user = await userModel.findByIdAndUpdate(id, { password: newPassword }, { new: true });

		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		return res.status(200).json({ message: "User password updated successfuly", user });
	} catch (error) {
		res.status(500).json({ error: "Internal Server error" });
	}
}

const updateUserName = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const { newName } = req.body;

		const user = await userModel.findByIdAndUpdate(id, { username: newName }, { new: true });

		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		return res.status(200).json({ message: "User username updated successfuly", user });
	} catch (error) {
		res.status(500).json({ error: "Internal Server error" });
	}
}

const deleteUser = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;

		const user = await userModel.findByIdAndDelete(id);

		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		return res.status(200).json({ message: "User deleted successfuly", user });
	} catch (error) {
		res.status(500).json({ error: "Internal Server error" });
	}
}

export { getUsers, createUser, updateUserPassword, updateUserName, deleteUser };