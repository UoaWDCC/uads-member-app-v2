import { Request, Response } from "express";
import Event from "../models/Event";

const getEvents = async (req: Request, res: Response) => {
    res.json({msg: "Implement GET endpoint"});
}

const createEvent = async (req: Request, res: Response) => {
    res.json({msg: "Implement POST endpoint"});
}

const deleteEvent = async (req: Request, res: Response) => {
    res.json({msg: "Implement DELETE endpoint"});
}

const updateEvent = async (req: Request, res: Response) => {
    res.json({msg: "Implement PATCH endpoint"});
}

export {getEvents, createEvent, deleteEvent, updateEvent};