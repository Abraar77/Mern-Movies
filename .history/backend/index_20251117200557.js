import express from "express";

import cookieParser from "cookie-parser"; 


import dotenv from "dotenv"; 


import path from "path";

//files

import connectDB from "./config/db.js";

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

app.listen(PORT, ()=> console.log(`server is running on port ${PORT}`));