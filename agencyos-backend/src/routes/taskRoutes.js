import express from "express";
import { create, updateStatus, getByProject, remove } from "../controllers/taskController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { roleMiddleware } from "../middlewares/roleMiddleware.js";
import { validateObjectId } from "../middlewares/validateObjectId.js";

const router = express.Router();

router.post("/", authMiddleware, roleMiddleware("admin"), create);
router.put("/:id", authMiddleware, roleMiddleware("admin"), updateStatus);
router.get("/", authMiddleware, roleMiddleware("admin"), getByProject);
router.delete("/:id", authMiddleware, roleMiddleware("admin"), validateObjectId("id"), remove);

export default router;