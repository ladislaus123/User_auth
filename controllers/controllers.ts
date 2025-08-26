import { Request, Response } from "express";
import { getAllUsers } from "../services/services";

export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch users", error });
  }
};
