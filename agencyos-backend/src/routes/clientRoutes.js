import express from "express";
import { create, getAll, getOne, remove, update } from "../controllers/clientController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { roleMiddleware } from "../middlewares/roleMiddleware.js";
import { validate } from "../middlewares/validate.js";
import { clientSchema } from "../validators/clientValidator.js";
import { validateObjectId } from "../middlewares/validateObjectId.js";

const router = express.Router();

router.post("/", authMiddleware, roleMiddleware("admin"), validate(clientSchema), create);
router.get("/", authMiddleware, roleMiddleware("admin"), getAll);
router.get("/:id", authMiddleware, roleMiddleware("admin"), getOne);
router.put("/:id", authMiddleware, roleMiddleware("admin"), validateObjectId("id"), validate(clientSchema), update);
router.delete("/:id", authMiddleware, roleMiddleware("admin"), validateObjectId("id"), remove);

export default router;