import express, { json } from "express";
import cors from "cors";
import router from "./routes/routes";
import { config } from "dotenv";
config();

// Sets our port to the PORT .env value or 3000 by default if .env is not configured
const PORT = process.env.PORT ?? 3000;

// Creates the express server
const app = express();

// Express middleware
app.use(json());
app.use(cors());
app.use(express.static("public"));

// Routes
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
