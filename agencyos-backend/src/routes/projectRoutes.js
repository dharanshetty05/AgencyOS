import express from "express";
import { create, getByClient, remove } from "../controllers/projectController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { roleMiddleware } from "../middlewares/roleMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, roleMiddleware("admin"), create);
router.get("/", authMiddleware, roleMiddleware("admin"), getByClient);
router.put("/:id", authMiddleware, roleMiddleware("admin"), validateObjectId("id"), update);
router.delete("/:id", authMiddleware, roleMiddleware("admin"), validateObjectId("id"), remove);

export default router;