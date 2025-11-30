import Movie from "../models/movie.js";
import asyncHandler from "../middlewares/asyncHandler.js";

const createMovie = asyncHandler(async(req,res)=>{
  try {
      const newMovie= new Movie(req.body)
      const savedMovie= newMovie.save()
      res.status(200).json()
  } catch (error) {
    
  }


})

export {createMovie}