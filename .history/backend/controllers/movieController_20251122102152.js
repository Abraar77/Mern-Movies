import Movie from "../models/movie.js";
import asyncHandler from "../middlewares/asyncHandler.js";

const createMovie = asyncHandler(async(req,res)=>{
  try {
    
  } catch (error) {
    
  }
    const newMovie= new Movie(req.body),
    const savedMovie= newMovie.save()


})

export {createMovie}