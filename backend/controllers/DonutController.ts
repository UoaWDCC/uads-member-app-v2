import { Request, Response } from "express";
import { DonutModel } from "../models/donutSchema";

const getDonuts = async (req: Request, res: Response) => {
	try {
		const donuts = await DonutModel.find({});

		if (donuts.length === 0) {
			return res.status(404).send("No donuts found!");
		}
		res.status(200).json(donuts);
	} catch (error: any) {
		console.error("Error:", error);
		res.status(500).send("Internal server error");
	}
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

const putDonut = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const { flavour, size, price } = req.body;
		await DonutModel.findByIdAndUpdate(id, { flavour, size, price });
		res.status(200).send("Donut updated!");
	} catch (error: any) {
		console.error("Error:", error);
		res.status(500).send("Internal server error");
	}
};

const deleteDonut = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		await DonutModel.findByIdAndDelete(id);
		res.status(200).send("Donut deleted!");
	} catch (error: any) {
		console.error("Error:", error);
		res.status(500).send("Internal server error");
	}
};

export { getDonuts, createDonut, putDonut, deleteDonut };
