// Protected Test Route
import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { roleMiddleware } from "../middlewares/roleMiddleware.js";

const router = express.Router();

// For any logged-in user
router.get("/protected", authMiddleware, (req, res) => {
    res.json({ message: "You are authenticated", user: req.user });
});

// For admin only
router.get("/admin", authMiddleware, roleMiddleware("admin"), (req, res) => {
    res.json({ message: "Admin access granted" });
});

export default router;