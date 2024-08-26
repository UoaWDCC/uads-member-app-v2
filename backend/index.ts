import express from "express";
import mongoose from "mongoose";
import router from "./routes/routes";
import { config } from "dotenv";

config();
// Create your express server here
const app = express();

// Configure your express server here

const PORT = process.env.PORT ?? 4000;

// Start your express server here
app.use(express.json())

// Connect to the database here

app.use("/", router);


mongoose.connect(process.env.MONGO_URL ?? "")
    .then(() => {
        console.log("Connected to MongoDB");
        console.log('MongoDB URI:', process.env.MONGO_URI);

        app.listen(PORT, () => console.log(`Server is running on htpp://localhost:${PORT}`)
    )})
    .catch(err => console.error("Could not connected to MongoDB", err));

// Initialise your routes here
// Dont forget to create your Models/Schemas in another folder