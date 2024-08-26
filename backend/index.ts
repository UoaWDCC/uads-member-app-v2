import express, { json } from 'express';
import cors from 'cors';
import router from './routes/routes';
import { config } from 'dotenv';
import mongoose from 'mongoose';
config();

const PORT = process.env.PORT ?? 4000;

// Create your express server here
const app = express();

// Configure your express server here
app.use(json());
app.use(cors());
app.use(express.static('public'));

// Initialise your routes here
app.use('/', router);

// Start your express server here
// Connect to the database here
mongoose.connect(process.env.MONGO_URL ?? "").then(() => {
    console.log('Connected to the database');
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
});

// Dont forget to create your Models/Schemas in another folder

