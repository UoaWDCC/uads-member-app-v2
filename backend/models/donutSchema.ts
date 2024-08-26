import { Schema, model } from "mongoose";

const DonutSchema: Schema = new Schema(
	{
		flavour: { type: String, required: true },
		size: { type: String, required: true },
		price: { type: Number, required: true },
	},
	{ timestamps: {} }
);

const DonutModel = model("Donut", DonutSchema);

export { DonutModel };
