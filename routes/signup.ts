import { Router } from "express";
import { createUser} from "../controllers/addUser";


const sign_up_router = Router();

// GET /api/users
sign_up_router.post("/", createUser);

export default sign_up_router;
