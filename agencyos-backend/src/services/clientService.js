import Client from "../models/Client.js";

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