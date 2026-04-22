import { Router } from "express";
import * as clientController from "./src/controllers/cliente-controllers";

const router = Router();


router.get("/client", clientController.getClient);


router.post("/client", clientController.createClient);


router.put("/client/:id", clientController.updateClient);


router.delete("/client/:id", clientController.deleteClient);

export default router;