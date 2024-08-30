import { Request, Response } from 'express';
import userModel from '../models/User';

const deleteUser= async (req: Request, res: Response) => {

  const { email } = req.body;

  if(!email){
    return res.status(403).json({ message: "Email doesn't exist" });
  }

  // find the user that has this email 
   const userEmail = await userModel.find(email);

  // check if this user is in the database
  if(!userEmail){
    return res.status(403).json({ message: "Email doesn't exist" });
  }


  // delete the user 
  await userModel.deleteOne(email);

  // return repsonse 
  return res.status(200).json({ message: "User deleted" });

}

export {deleteUser};