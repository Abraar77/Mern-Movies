import Genre from "../models/Genre.js";
import asyncHandler from "../middlewares/asyncHandler.js";

const createGenre = asyncHandler(async(req,res)=>{
    const {genreName} = req.body
    const alreadyExist= await Genre.find({genreName})
    if(alreadyExist)
})

export{createGenre}