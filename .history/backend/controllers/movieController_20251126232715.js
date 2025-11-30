import Movie from "../models/movie.js";
import asyncHandler from "../middlewares/asyncHandler.js";

const createMovie = asyncHandler(async (req, res) => {
  try {
    const newMovie = new Movie(req.body)
    const savedMovie = await newMovie.save()
    res.status(200).json(savedMovie)
  } catch (error) {
    res.status(500).json({ error: error.message });

  }


})

const getAllMovies = asyncHandler(async (req, res) => {

  const allMovies = await Movie.find({})
  if (allMovies.length > 0) {
    try {
      res.status(200).json(allMovies)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  else {
    res.status(400)
    throw new Error("no movie available")
  }
})

const getSpecificMovie = asyncHandler(async (req, res) => {
  const specificMovie = await Movie.findById(req.params.id)
  if (specificMovie) {
    try {
      res.status(200).json(specificMovie)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(400)
    throw new Error("movie not found")
  }
})

const getNewMovies = asyncHandler(async (req, res) => {
  const newMovies = await Movie.find({}).sort({ createdAt: -1 }).limit(10)
  res.json(newMovies)
})


const getTopMovies = async (req, res) => {
  try {
    const topRatedMovies = await Movie.find()
      .sort({ numReviews: -1 })
      .limit(10);
    res.json(topRatedMovies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteMovie = asyncHandler(async (req, res) => {
  const movie = await Movie.findById(req.params.id)
  if (movie) {
    try {
      await movie.deleteOne()
      res.status(200).json('movie deleted')
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(400)
    throw new Error("movie not found")
  }

})
const deleteComment = asyncHandler(async (req, res) => {
 try {
  const {movieId, reviewId}= req.body
  const movie = await Movie.findById(movieId)
  if(!movie){
    res.status(400)
    throw new Error("Movie not found")
  }
  const reviewIndex= movie.reviews.findIndex(
    (r)=> r._id.toString()=== reviewId
  )
  
  if (reviewIndex === -1) {
    return res.status(404).json({ message: "Comment not found" });
  }

  movie.reviews.splice(reviewIndex,1)
  movie.numReviews= movie.reviews.length

  movie.rating=movie.reviews.length>0 ? movie.reviews.reduce((acc,item)=> item.rating +acc)/movie.reviews.length:0
  await movie.save()
  res.status(200).json("comment deleted")


 } catch (error) {
  res.status(500).json({ error: error.message });
 }
})

const movieReview = asyncHandler(async (req, res) => {
  try {


    const { rating, comment } = req.body
    const movie = await Movie.findById(req.params.id)
    if (movie) {
      const alreadyExist =  movie.reviews.find((r) => 
        r.user.toString() === req.user._id.toString()
      )

      if (alreadyExist) {
        res.status(400)
        throw new Error("Review already added")
      }

      const review = {
        name: req.user.username,
        rating: Number(rating),
        comment,
        user: req.user._id
      }

       movie.reviews.push(review)
      movie.numReviews= movie.reviews.length;
      movie.rating= movie.reviews.reduce((acc,item)=> item.rating +acc)/movie.reviews.length
      await movie.save();
      res.status(201).json({ message: "Review Added" });
    } else{
      res.status(400)

      throw new Error("movie not found")
    }
  } catch (error) {
    res.status(500)
    throw new Error(error: error.message });
  }
})

const getRandomMovies = async (req, res) => {
  try {
    const randomMovies = await Movie.aggregate([{ $sample: { size: 10 } }]);
    res.json(randomMovies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateMovie = async (req, res) => {
  try {
    const  id  = req.params.id;
    const updatedMovie = await Movie.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedMovie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.json(updatedMovie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export {
  createMovie,
  getAllMovies,
  getSpecificMovie,
  getNewMovies,
  getTopMovies,
  deleteMovie,
  deleteComment,
  movieReview,
  getRandomMovies,
  updateMovie
}