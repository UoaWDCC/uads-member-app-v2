import { Request, Response, Router } from "express";
import User from "../db/User";

const getUsers = async (req: Request, res: Response) => {
    res.json({msg: "Implement GET endpoint"});
}

const createUser = async (req: Request, res: Response) => {
    res.json({msg: "Implement POST endpoint"});
}

const deleteUser = async (req: Request, res: Response) => {
    res.json({msg: "Implement DELETE endpoint"});
}

const updateUser = async (req: Request, res: Response) => {
    res.json({msg: "Implement PATCH endpoint"});
}

export {getUsers, createUser, deleteUser, updateUser};