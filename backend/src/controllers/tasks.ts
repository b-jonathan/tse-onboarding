import { RequestHandler } from "express";
import TaskModel from "src/models/task";

export const getAllTasks: RequestHandler = async (req, res, next) => {
  try {
    // your code here
    const task = await TaskModel.find().sort("dateCreated");
    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};
