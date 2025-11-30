import express from "express";

import cookieParser from "cookie-parser"; 
// \4.1k (gzipped:1.7k)

import dotenv from "dotenv"; 
// 6.8k (gzipped: 2.9k)

import path from "path";

//files

import connectDB from "./config/db.js";

import userRoutes from "./routes/userRoutes.js";

import genreRoutes from "./routes/genreRoutes.js"
import movieRoute from "./routes/movieRoute.js"
import uploadRoutes from "./routes/uploadRoutes.js"

//configuration
dotenv.config()
connectDB()

const app= express()

//middlewares

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use(cookieParser())

const PORT =process.env.PORT || 3000

//routes
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/genre", genreRoutes )
app.use("/api/v1/movies", movieRoute);
app.use("/api/v1/upload", uploadRoutes);

const 
app.listen(PORT, ()=> console.log(`server is running on port ${PORT}`));