import express from "express";
import { authClient } from "../controllers/userController.js";
import { protectedRoute } from "../middlewares/authMiddleware.js";
import { authorizeRoles } from "../middlewares/roleMiddleware.js";

const router = express.Router();

router.get(
  "/client",
  protectedRoute,
  authorizeRoles(["client", "admin"]),
  authClient,
);

export default router;
