import { Router } from "express";
import {
	getDonuts,
	createDonut,
	putDonut,
	deleteDonut
} from "../controllers/DonutController";

const donutRoutes = Router();

donutRoutes.get("/", getDonuts);

donutRoutes.post("/", createDonut);

donutRoutes.put("/", putDonut);

donutRoutes.delete("/", deleteDonut);

export default donutRoutes;
