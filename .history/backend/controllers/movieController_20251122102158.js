import Movie from "../models/movie.js";
import asyncHandler from "../middlewares/asyncHandler.js";

const createMovie = asyncHandler(async(req,res)=>{
  try {
      const newMovie= new Movie(req.body),
      const savedMovie= newMovie.save()
    
  } catch (error) {
    
  }


})

export {createMovie}