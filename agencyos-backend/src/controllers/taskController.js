import { createTask, updateTaskStatus, getTasksByProject } from "../services/taskService.js";

export const create = async (req, res) => {
    try {
        const task = await createTask(req.body, req.user.userId);
        res.status(201).json(task); 
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const updateStatus = async (req, res) => {
    try {
        const task = await updateTaskStatus(
            req.params.id,
            req.body.status,
            req.user.userId,
        );
        res.json(task);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const getByProject = async (req, res) => {
    try {
        const tasks = await getTasksByProject(
            req.query.projectId,
            req.user.userId
        );
        res.json(tasks);
    } catch (err) {
        res.status(403).json({ message: err.message });
    }
};