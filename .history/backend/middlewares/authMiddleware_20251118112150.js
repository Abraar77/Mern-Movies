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
            req.user= await User.findById(decode.userId).select("-password")
            next();
        } catch (error) {
            res.status(401);
            throw new Error("Not authorized, token failed")
        }
    } else {
        
    }
})