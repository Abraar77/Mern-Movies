import { Jwt } from "jsonwebtoken";
import User from "../models/user.js";
import asyncHandler from "./asyncHandler.js";

const authenticate= asyncHandler(async(req,res)=>{
    let token;

    if(token){
        try {
            const decode=
        } catch (error) {
            res.status(500).json("Not authorised")
        }
    }
})