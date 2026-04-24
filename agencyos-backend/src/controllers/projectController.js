import { createProject, deleteProject, getProjectsByClient, updateProject } from "../services/projectService.js";
import asyncHandler from 'express-async-handler';

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

export const update =  asyncHandler(async (req, res) => {
    const project = await updateProject(
        req.params.id,
        req.body,
        req.user.userId
    );

    res.json(project);
});

export const remove = asyncHandler(async (req, res) => {
    const result = await deleteProject(
        req.params.id,
        req.user.userId
    );

    res.json(result);
});