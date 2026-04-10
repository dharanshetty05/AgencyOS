import express from "express";
import { create, updateStatus, getByProject } from "../controllers/taskController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { roleMiddleware } from "../middlewares/roleMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, roleMiddleware("admin"), create);
router.put("/:id", authMiddleware, roleMiddleware("admin"), updateStatus);
router.get("/", authMiddleware, roleMiddleware("admin"), getByProject);

export default router;