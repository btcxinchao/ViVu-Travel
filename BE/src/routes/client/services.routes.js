import express from "express";
import { ServicesDetail,createService,DeleteService,GetAllServices,UpdateService } from "../../controllers/client/services.controller.js";

const router = express.Router();

router.post("/createService", createService);
router.put("/updateService/:id", UpdateService);
router.delete("/deleteService", DeleteService);
router.get("/servicesDetail/:id", ServicesDetail);
router.get("/listServices", GetAllServices); //get ALL 

export default router;