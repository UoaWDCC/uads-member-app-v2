import { Request, Response } from 'express';
import userModel from '../models/User';

const updateUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if(!email || !password){
    return res.status(400).json({message: "Email and password required!"});
  }

  try{
    const user = await userModel
      .findOneAndUpdate({ email }, {
        password
      }, { new: true });
      
    if(!user){
      return res.status(404).json({ message: "User not found!" });
    }

    return res.status(200).json(user);
  }
  catch(err: any){
    return res.status(500).json(err);
  }
}

export { updateUser };