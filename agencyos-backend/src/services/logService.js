import ActivityLog from "../models/ActivityLog.js";

export const createLog = async ({
    actionType,
    entityType,
    entityId,
    userId,
    clientId,
}) => {
    try {
        await ActivityLog.create({
            actionType,
            entityType,
            entityId,
            performedBy: userId,
            clientId,
        });
    } catch(err) {
        console.error("Log failed:", err.message);
    }
};