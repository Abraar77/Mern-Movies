import { Jwt } from "jsonwebtoken";
import User from "../models/user.js";
import asyncHandler from "./asyncHandler.js";

const authenticate= asyncHandler(async(req,res)=>{
    let token;
 // Read JWT from the 'jwt' cookie
  token = req.cookies.jwt;
    if(token){
        try {
            const decode= jwt.verify(token, process.env.JWT_SECRET)
            req.user= await
        } catch (error) {
            res.status(500).json("Not authorised")
        }
    }
})