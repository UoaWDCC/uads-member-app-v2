import { Request, Response } from "express";
import Donut from "../models/donutModel";

const createDonut = async (req: Request, res: Response) => {

    try {
        const { name, flavour, price, seasonal } = req.body;
        const newDonut = new Donut({ name, flavour, price, seasonal});
        await newDonut.save();
        res.status(201).json(newDonut);
    } catch (err) {
        res.status(500).json({ error: "An unexpected error occured" });
    }
}

const getAllDonuts = async (req: Request, res: Response) => {

    try {
        const donuts = await Donut.find();
        res.json(donuts);
    } catch (err) {
        res.status(500).json({ error: "An unexpected error occured" });
    }
}

const getDonut = async (req: Request, res: Response) => {

    try {
        const donut = await Donut.findById(req.params.id);
        if (!donut) {
            return res.status(404).json({ message: "Donut not found" });
        }
        res.json(donut);
    } catch (err) {
        res.status(500).json({ error: "An unexpected error occured" });
    }
}


const updateDonut = async (req: Request, res: Response) => {
    
    try {
        const updatedDonut = await Donut.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedDonut) {
            return res.status(404).json({ message: "Donut not found" });
        }
        res.json(updatedDonut);
    } catch (err) {
        res.status(500).json({ error: "An unexpected error occured" });
    }
}

const deleteDonut = async (req: Request, res: Response) => {
    try {
        const deletedDonut = await Donut.findByIdAndDelete(
            req.params.id
        );

        if (!deletedDonut) {
            return res.status(404).json({ message: "Donut not found" });
        }
        res.json({ message: "Donut deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: "An unexpected error occured" });
    }
}


export { createDonut, getAllDonuts, getDonut, updateDonut, deleteDonut };