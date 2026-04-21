import mongoose from "mongoose";

export const validateObjectId = (paramName) => (req, res, next) => {
    const id = req.params[paramName] || req.query[paramName];

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
    }

    next();
}