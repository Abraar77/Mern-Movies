import User from "../models/user.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import bcrypt from "bcryptjs"
const createUser= asyncHandler(async(req,res)=>{

    const username= req.body
    const  email= req.email
    const has
})
