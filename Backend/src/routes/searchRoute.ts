import express from "express";
import { searchContent } from "../controllers/searchCon";
import { UserMiddleware } from "../Middleware/AuthMiddleware";

const router = express.Router();

router.post("/search", UserMiddleware , searchContent);

export default router;