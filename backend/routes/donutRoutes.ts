import { Router } from "express";
import {
	getDonuts,
	createDonut,
	putDonut,
} from "../controllers/DonutController";

const donutRoutes = Router();

donutRoutes.get("/", getDonuts);

donutRoutes.post("/", createDonut);

donutRoutes.put("/", putDonut);

export default donutRoutes;
