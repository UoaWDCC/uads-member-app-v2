import { Router } from 'express';
import { createDonut, getAllDonuts, getDonut, updateDonut, deleteDonut } from "../controllers/DonutController";

const donutRoutes = Router();

donutRoutes.post("/", createDonut);
donutRoutes.get("/", getAllDonuts);
donutRoutes.get("/:id", getDonut);
donutRoutes.put("/:id", updateDonut);
donutRoutes.delete("/:id", deleteDonut);


export default donutRoutes;