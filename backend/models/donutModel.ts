import mongoose, { Schema } from "mongoose";

const donutSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    flavour: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    seasonal: {
        type: Boolean,
        required: true
    }
});

const Donut = mongoose.model("Donut", donutSchema);


export default Donut;