import { createProject, getProjectsByClient } from "../services/projectService.js";

export const create = async (req, res) => {
    try {
        const project = await createProject(req.body, req.user.userId);
        res.status(201).json(project);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const getByClient = async (req, res) => {
    try {
        const projects = await getProjectsByClient(
            req.query.clientId,
            req.user.userId
        );
        res.json(projects);
    } catch (err) {
        res.status(403).json({ message: err.message });
    }
};