import { getLogs } from "../services/logQueryService.js";

export const getAllLogs = async (req, res) => {
    try {
        const logs = await getLogs(req.user.userId);
        res.json(logs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};