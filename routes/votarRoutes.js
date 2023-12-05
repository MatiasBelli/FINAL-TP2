import { Router } from "express";
import Controller from "../controllers/Controller.js";
const routes = Router();
const controller = new Controller();

routes.post("/", controller.cargarVoto);
routes.get("/", controller.getVotosGenerales)
// routes.put("/:id")
// routes.delete("/:id")

export default routes;
