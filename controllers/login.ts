import { Request, Response } from "express";
import { loginUser } from "../services/userauth";

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await loginUser(email, password);
    res.status(200).json({ message: "Login successful", user });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
