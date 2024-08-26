import { Schema } from "mongoose";
import mongoose from "mongoose";

const userSchema = new Schema({

    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const userModel = mongoose.model('User', userSchema);



export default userModel;