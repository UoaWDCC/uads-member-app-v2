import express, { json } from "express";
import cors from "cors";
import { config } from "dotenv";
import routes from "./routes/routes";
import mongoose from "mongoose";


const PORT = process.env.PORT ?? 5000;

// Create your express server here

const app = express();

// Configure your express server here

app.use(cors());
app.use(express.json());

// Start your express server here
mongoose.connect(process.env.MONGO_URL ?? "").then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
});
// Initialise your routes here
app.use(routes);

// Dont forget to create your Models/Schemas in another folder
