import User from "../models/user.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import bcrypt from "bcryptjs"
const createUser= asyncHandler(async(req,res)=>{

    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        throw new Error("Please fill all the inputs.");
      }    
    try {
        const userExist= await User.find({email})
        if(userExist){
            res.json("user already exists")
        }
        else{

        }
    } catch (error) {
        
    }
})
