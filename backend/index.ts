import express, { json } from "express";
import cors from "cors";
import { config } from "dotenv";
import routes from "./routes/routes";
import mongoose from "mongoose";
config();

const PORT = process.env.PORT ?? 4000;

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

mongoose.connect(process.env.MONGO_URL ?? "").then(() => {
	app.listen(PORT, () => {
		console.log(`Listening on port ${PORT}`);
	});
});

// Dont forget to create your Models/Schemas in another folder
