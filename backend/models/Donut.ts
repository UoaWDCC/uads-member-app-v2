import e from 'express';
import {Schema, model} from 'mongoose';

const donutSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    flavour: {
        type: String,
        required: true,
    },
    price: {
        type:Number,
        required: true,
    },
});

const donutModel = model('Donut', donutSchema);

export default donutModel;