import Project from "../models/Project.js";
import Client from "../models/Client.js";
import AppError from "../utils/AppError.js";

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

export const updateProject = async (projectId, data, userId) => {
    const project = await Project.findOneAndUpdate(
        { _id: projectId, createdBy: userId },
        data,
        { new: true }
    );

    if (!project) {
        throw new AppError("Project not found or unauthorized", 404);
    }

    return project;
};

export const deleteProject = async (projectId, userId) => {
    const project = await Project.findOne({
        _id: projectId,
        createdBy: userId,
    });

    if (!project) {
        throw new AppError("Project not found or unauthorized", 404);
    }

    const tasks = await Task.find({ projectId });

    if (tasks.length > 0) {
        throw new AppError("Project has tasks", 400);
    }

    await project.deleteOne();

    return { message: "Project deleted" };
};