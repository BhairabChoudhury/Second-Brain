import express from "express" 
import mongoose from "mongoose" 
import connectDB from "./Config/db";
import authroutes from "./routes/authroutes" ; 
import contentroutes from "./routes/contentroutes" ; 
import searchRoute from "./routes/searchRoute" ; 
const app = express() ; 

app.use(express.json()) ;
connectDB() ; 
console.log("App is running") ; 
app.use("/api/auth/",authroutes) ; 
app.use("/api/content/",contentroutes) ; 
app.use("/api/search/",searchRoute) ; 

const PORT = process.env.PORT || 8000 ; 
app.listen(PORT,()=>{
     console.log(`Server is running on port ${PORT}`) ; 
})





