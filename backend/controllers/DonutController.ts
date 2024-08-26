import { Request, Response } from "express";
import donutModel from "../models/Donut";

const createDonut = async (req: Request, res: Response) => {
    try{
    const{name, flavour, price} = req.body

    if(!name || !flavour || !price){
        return res.status(400).json({error: "Please fill all fields"});

    }
    const existingDonut = await donutModel.findOne({name});

    console.log(existingDonut);

    console.log(name, flavour, price)

    const donut = new donutModel({
        name,
        flavour,
        price
    });

    await donut.save();

    return res.status(200).json({message: "Donut created"});  
} catch (error) {
    return res.status(500).json({error: "Internal server error"});
};
}

export { createDonut }