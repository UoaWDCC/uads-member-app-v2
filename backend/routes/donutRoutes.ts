import { Router } from "express";
import { createDonut } from "../controllers/DonutController";

const donutRoutes = Router();

donutRoutes.post("/", createDonut);

donutRoutes.get("/", (req, res) => {
    res.send("Donuts route");
});

donutRoutes.put("/", (req, res) => {
    res.send("Donuts route");
}
);

donutRoutes.delete("/", (req, res) => {
    res.send("Donuts route");
}
);




export default donutRoutes;
