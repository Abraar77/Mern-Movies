import Movie from "../models/movie.js";
import asyncHandler from "../middlewares/asyncHandler.js";

const createMovie = asyncHandler(async(req,res)=>{
  try {
      const newMovie= new Movie(req.body)
      const savedMovie= await newMovie.save()
      res.status(200).json(savedMovie)
  } catch (error) {
    res.status(500).json({ error: error.message });
   
  }


})

const getAllMovies= asyncHandler(async(req,res)=>{

     const allMovies= await Movie.find({})
     if(allMovies.length>0){
     try {
       res.status(200).json(allMovies)
     } catch (error) {
      res.status(500).json({ error: error.message });
     }}

     else{
         res.status(400)
         throw new Error("no movie available")
     }
})

const getSpecificMovie= asyncHandler(async(req,res)=>{
  const specificMovie= await Movie.findById(req.params.id)
  if(specificMovie){
    try {
       res.status(200).json(specificMovie)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  }else{
    res.status(400)
    throw new Error("movie not found")
  }
})

const getNewMovies= asyncHandler(async(req,res)=>{
  const newMovies= await Movie.find({}).sort({ year: -1 }).limit(6)

  res.json(newMovies)
})

export {createMovie,
   getAllMovies,
   getSpecificMovie,
   getNewMovies
}