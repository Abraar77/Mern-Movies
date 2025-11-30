import jwt from "jsonwebtoken";

const generateToken= (res,userId)=>{
    const token = jwt.sign({userId}, PROCES.ENV.JWT_SECRET)
}