import { createClient, getClients, getClientById, updateClient } from "../services/clientService.js";

export const create = async (req, res) => {
        const client = await createClient(req.body, req.user.userId);
        res.status(201).json(client);
};

export const getAll = async (req, res) => {
    try {
        const clients = await getClients(req.user.userId);
        res.json(clients);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const getOne = async (req, res) => {
    try {
        const client = await getClientById(
            req.params.id,
            req.user.userId
        );
        res.json(client);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

export const update = asyncHandler(async (req, res) => {
    const client = await updateClient(
        req.params.id,
        req.body,
        req.user.userId
    );
    res.json(client);
});

export const remove = asyncHandler(async (req, res) => {
    const result = await deleteClient(
        req.params.id,
        req.user.userId
    );
    res.json(result);
});