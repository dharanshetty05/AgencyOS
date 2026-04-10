import Task from "../models/Task.js";
import Project from "../models/Project.js";
import Client from "../models/Client.js";
import { createLog } from "./logService.js";

export const createTask = async (data, userId) => {
    // Validating project ownership
    const project = await Project.findOne({
        _id: data.projectId,
        createdBy: userId,
    });

    if (!project) {
        throw new Error("Invalid project or unauthorized");
    }

    const client = await Client.findById(project.clientId);

    const task = await Task.create({
        ...data,
        createdBy: userId,
    });

    await createLog({
        actionType: "TASK_CREATED",
        entityType: "TASK",
        entityId: task._id,
        userId,
        clientId: client._id,
    });

    return task;
};

export const updateTaskStatus = async (taskId, status, userId) => {
    const task = await Task.findOne({
        _id: taskId,
        createdBy: userId,
    });

    if (!task) {
        throw new Error("Task not found or unauthorized");
    }

    task.status = status;
    await task.save();

    const project = await Project.findById(task.projectId);
    const client = await Client.findById(project.clientId);

    await createLog({
        actionType: "TASK_UPDATED",
        entityType: "TASK",
        entityId: task._id,
        userId,
        clientId: client._id,
    });

    return task;
};

export const getTasksByProject = async (projectId, userId) => {
    const project = await Project.findOne({
        _id: projectId,
        createdBy: userId,
    });

    if (!project) {
        throw new Error("Unauthorized");
    }

    return await Task.find({
        projectId,
        createdBy: userId,
    });
};