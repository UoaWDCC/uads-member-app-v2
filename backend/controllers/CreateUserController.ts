import { Request, Response } from 'express';
import userModel from '../models/User';


const getUsers = async (req: Request, res: Response) => {
    res.status(200).json("Hello");
}

const createUser = async (req: Request, res: Response) => {
  if(!req.body.username || !req.body.password){
    return res.status(400).json({message: "Username and password required!"});
  }

  try{
    const { email, password } = req.body;
    const user = new userModel({ email, password });
    await user.save();
    return res.status(201).json(user);
  }catch(err: any){
    if (err.code === 11000) {
      return res.status(409).json({ message: "Email already exists!" });
    }  
    return res.status(500).json(err);
  }
}

export { getUsers };
export { createUser };