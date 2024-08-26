import express, { json } from "express";
import cors from "cors";
import router from "./routes/routes";
import { config } from "dotenv";
import mongoose from "mongoose";

config();

// Create your express server here
const app = express();

// Configure your express server here
const PORT = process.env.PORT ?? 4000;

// Start your express server here
app.use(cors());
app.use(json());
app.use(express.static("public"));

// Connect to the database here
app.use("/", router);

// Initialise your routes here
mongoose.connect(process.env.MONGO_URL ?? "").then(() => {
	app.listen(PORT, () => {
			console.log(`Listening on port ${PORT}`);
	});
});

// Dont forget to create your Models/Schemas in another folder