import Genre from "../models/Genre.js";
import asyncHandler from "../middlewares/asyncHandler.js";

const createGenre = asyncHandler(async(req,res)=>{
    const {genreName} = req.body
    const alreadyExist= await 
})

export{createGenre}