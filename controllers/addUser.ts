import { Request, Response } from "express";
import { addUser } from "../services/signup";

export const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body; // JSON input from client
    const user = await addUser(userData);
    res.status(201).json(user); // return the created user
  } catch (error) {
    res.status(500).json({ message: "Failed to add user", error });
  }
};
