import express from "express";
import { create, getAll, getOne } from "../controllers/clientController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { roleMiddleware } from "../middlewares/roleMiddleware.js";
import { validate } from "../middlewares/validate.js";
import { clientSchema } from "../validators/clientValidator.js";

const router = express.Router();

router.post("/", authMiddleware, roleMiddleware("admin"), validate(clientSchema), create);
router.get("/", authMiddleware, roleMiddleware("admin"), getAll);
router.get("/:id", authMiddleware, roleMiddleware("admin"), getOne);

export default router;