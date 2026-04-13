import express from "express";
import { getAllLogs } from "../controllers/logController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, getAllLogs);

export default router;