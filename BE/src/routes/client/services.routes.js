import express from "express";
import { ServicesDetail,createService,DeleteService,ListServices,UpdateService } from "../../controllers/client/services.controller.js";

const router = express.Router();

router.get("/servicesDetail", ServicesDetail);
router.post("/createService", createService);
router.put("/updateService", UpdateService);
router.delete("/deleteService", DeleteService);
router.get("/listServices", ListServices);

export default router;