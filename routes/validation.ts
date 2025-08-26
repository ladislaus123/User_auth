import { Router } from "express";
import { getUsers } from "../controllers/controllers";


const router = Router();

// GET /api/users
router.get("/", getUsers);

export default router;
