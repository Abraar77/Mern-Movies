import jwt from "jsonwebtoken";

const generateToken= (res,userId)=>{
    const token = jwt.sign({userId}, process.env.JWT_SECRET,{
        expiresIn: "30d",
    });

    //set JWT as an HTTP-ONLY Cookie

    
  
}