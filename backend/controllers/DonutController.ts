import { Request, Response } from "express";
import { DonutModel } from "../models/donutSchema";

const getDonut = async (req: Request, res: Response) => {
	res.send("Hello from the user controller!");
};

const createDonut = async (req: Request, res: Response) => {
	try {
		const { flavour, size, price } = req.body;
		const user = new DonutModel({ flavour, size, price });
		await user.save();
		res.status(201).send("Donut created!");
	} catch (error: any) {
		console.error("Error:", error);
		res.status(500).send("Internal server error");
	}
};

export { getDonut, createDonut };
