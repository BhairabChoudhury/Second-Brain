import express, { Router } from "express" ; 
import { createContent, getAllContent, deleteContent } from "../controllers/contentcontrollers" ; 
import  { upload } from "../Middleware/uploadMiddleware" ; 
import { UserMiddleware } from "../Middleware/AuthMiddleware" ; 
const router = express.Router() ; 

router.post("/create" , UserMiddleware, upload.single("file") , createContent ) ; 
router.get("/get", UserMiddleware, getAllContent ) ;
router.delete("/delete/:id", UserMiddleware, deleteContent ) ;
export default router ;  