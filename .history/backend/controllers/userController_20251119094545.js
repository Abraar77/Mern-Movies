import User from "../models/user.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import bcrypt from "bcryptjs"
// import { authenticate,authorizeAdmin } from "../middlewares/authMiddleware.js";
import createToken from '../utils/createToken.js';

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
      const newUser= new User({username,email,password:hashedPassword})
    try {
        await newUser.save();
        createToken(res, newUser._id);
        res.status(201).json({
            _id: newUser._id,
            username: newUser.username,
            email: newUser.email,
            isAdmin: newUser.isAdmin,
          });
    } catch (error) {
        res.status(400);
        throw new Error("Invalid user data");
    }
})

const loginUser= asyncHandler(async(req,res)=>{
    const {email, password}= req.body;
   try {
    
       const existingUser= await User.findOne({email})
       if(existingUser){
           const isPasswordValid = await bcrypt.compare(
               password,
               existingUser.password
             );
          if(isPasswordValid){
           createToken(res, existingUser._id);
   
           res.status(201).json({
               _id: existingUser._id,
               username: existingUser.username,
               email: existingUser.email,
               isAdmin: existingUser.isAdmin,
             });
             return;
          } else{
           res.json("invalid password")
          }
       } else{
           res.status(404).json("user not found")
       }
   } 
    catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
});

const logoutUser =asyncHandler(async(req,res)=>{
    res.cookie("jwt", "", {
        httyOnly: true,
        expires: new Date(0),
      });
    
      res.status(200).json({ message: "Logged out successfully" });
});

const getAllUsers= asyncHandler(async(req,res)=>{
    const users= await User.find({}).select("-password")
    if(users.length>0){
    try {
    res.status(200).json(users)
}
   catch (error) {
    res.status(400);
    throw new Error(error.message);
}
    }

    else{
        res.json("no user found")
    }
})

export {createUser, loginUser,logoutUser,getAllUsers,
    getCurrentUserProfile 
}
