import ActivityLog from "../models/ActivityLog.js";

export const getLogs = async (userId) => {
    return await ActivityLog.find({ performedBy: userId })
        .sort({ createdAt: -1 })
        .limit(50);
};