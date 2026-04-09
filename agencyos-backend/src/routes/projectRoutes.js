import express from "express";
import { create, getByClient } from "../controllers/projectController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { roleMiddleware } from "../middlewares/roleMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, roleMiddleware("admin"), create);
router.get("/", authMiddleware, roleMiddleware("admin"), getByClient);

export default router;