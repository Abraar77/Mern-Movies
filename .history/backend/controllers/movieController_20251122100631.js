import Movie from "../models/movie.js";
import asyncHandler from "../middlewares/asyncHandler.js";

const createMovie = asyncHandler(async(req,res)=>{
    res.json("hellomovies")
})

export {createMovie}