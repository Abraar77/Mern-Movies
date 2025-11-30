import User from "../models/user.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import bcrypt from "bcryptjs"
const createUser= asyncHandler(async(req,res)=>{

    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        throw new Error("Please fill all the inputs.");
      }    
      const userExist= await User.findOne({email})
      if(userExist){
          res.json("user already exists")
      }
      const salt= await bcrypt.genSalt(10)
      const hashedPassword= await bcrypt.hash(password,salt);
      const newUser= new User({username,email,hashedPassword})
    try {
        await 
    } catch (error) {
        
    }
})
