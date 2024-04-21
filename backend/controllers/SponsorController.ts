import { Request, Response } from "express";
import Sponsor from "../models/Sponsor";

const getSponsors = async (req: Request, res: Response) => {
    res.json({msg: "Implement GET endpoint"});
}

const createSponsor = async (req: Request, res: Response) => {
    res.json({msg: "Implement POST endpoint"});
}

const deleteSponsor = async (req: Request, res: Response) => {
    res.json({msg: "Implement DELETE endpoint"});
}

const updateSponsor = async (req: Request, res: Response) => {
    res.json({msg: "Implement PATCH endpoint"});
}

export {getSponsors, createSponsor, deleteSponsor, updateSponsor};