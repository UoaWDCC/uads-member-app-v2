import { Router } from "express";
import { getDonut, createDonut } from "../controllers/DonutController";

const donutRoutes = Router();

donutRoutes.get("/", getDonut);

donutRoutes.post("/", createDonut);

export default donutRoutes;
