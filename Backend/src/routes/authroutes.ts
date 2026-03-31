import express from "express" 
import { UserMiddleware } from "../Middleware/AuthMiddleware"; 
const router = express.Router() ; 

router.post("/signup")
router.post("/signin")

export default router ;  