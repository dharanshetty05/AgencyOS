import Project from "../models/Project.js";
import Client from "../models/Client.js";

export const createProject = async (data, userId) => {
    // Validating client ownership
    const client = await Client.findOne({
        _id: data.clientId,
        createdBy: userId,
    });

    if (!client) {
        throw new Error("Invalid client or unauthorized");
    }

    // Create Project
    return await Project.create({
        ...data,
        createdBy: userId,
    });
};

export const getProjectsByClient = async (clientId, userId) => {
    // Validating client ownership
    const client = await Client.findOne({
        _id: clientId,
        createdBy: userId,
    });

    if (!client) {
        throw new Error("Invalid client or unauthorized");
    }

    return await Project.find({
        clientId,
        createdBy: userId,
    });
};