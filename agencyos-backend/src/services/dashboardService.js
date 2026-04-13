import Client from "../models/Client.js";
import Project from "../models/Project.js";
import Task from "../models/Task.js";

export const getDashboardStats = async (userId) => {
    const totalClients = await Client.countDocuments({
        createdBy: userId,
    });

    const totalProjects = await Project.countDocuments({
        createdBy: userId,
    });

    const tasks = await Task.find({ createdBy: userId });

    const statusCount = {
        todo: 0,
        in_progress: 0,
        done: 0,
    };

    tasks.forEach((task) => {
        statusCount[task.status]++;
    });

    return {
        totalClients,
        totalProjects,
        taskStats: statusCount,
    };
};