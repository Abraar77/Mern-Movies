import express from "express";
import cookieParser from "cookie-parser"; 
// \4.1k (gzipped:1.7k)

import dotenv from "dotenv"; 
// 6.8k (gzipped: 2.9k)

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

app