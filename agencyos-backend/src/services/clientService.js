import Client from "../models/Client.js";
import Project from "../models/Project.js";
import AppError from "../utils/AppError.js";

export const createClient = async (data, userId) => {
    return await Client.create({
        ...data,
        createdBy: userId,
    });
};

export const getClients = async (userId) => {
    return await Client.find({ createdBy: userId });
};

export const getClientById = async (clientId, userId) => {
    const client = await Client.findOne({
        _id: getClientById,
        createdBy: userId,
    });

    if (!client) {
        throw new Error("Client not found or unauthorized");
    }

    return client;
};

export const updateClient = async (clientId, data, userId) => {
    const client = await Client.findOneAndUpdate(
        { _id: clientId, createdBy: userId },
        data,
        { new: true }
    );

    if (!client) {
        throw new AppError("Client not found or unauthorized", 404);
    }

    return client;
};

export const deleteClient = async (clientId, userId) => {
    const client = await Client.findOne({
        _id: clientId,
        createdBy: userId,
    });

    if (!client) {
        throw new AppError("Client not found or unauthorized", 404);
    }

    // Preventing delete if the project exists
    const projects = await Project.find({ clientId });

    if (projects.length > 0) {
        throw new AppError("Client has active projects", 400);
    }

    await client.deleteOne();

    return { message: "Client deleted" };
};