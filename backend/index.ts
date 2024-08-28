import express, { json } from "express";
import cors from "cors";
import router from "./routes/routes";
import { config } from "dotenv";
import mongoose from "mongoose";
config();

// Sets our port to the PORT .env value or 4000 by default if .env is not configured
const PORT = process.env.PORT ?? 4000;

// Creates the express server
const app = express();

// Express middleware
app.use(json());
app.use(cors());
app.use(express.static("public"));

// Routes
app.use("/", router);

mongoose.connect(process.env.MONGO_URI ?? "").then(() => {
	console.log("Connected to Database");
	app.listen(PORT, () => {
		console.log(`Listening on port ${PORT}`);
	});
});

