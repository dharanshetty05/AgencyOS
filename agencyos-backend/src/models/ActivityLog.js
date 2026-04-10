import mongoose, { mongo } from "mongoose";

const activityLogSchema = new mongoose.Schema(
    {
        actionType: String,
        entityType: String,
        entityId: mongoose.Schema.Types.ObjectId,
        performedBy: mongoose.Schema.Types.ObjectId,
        clientId: mongoose.Schema.Types.ObjectId,
    },
    { timestamps: true }
);

export default mongoose.model("ActivityLog", activityLogSchema);