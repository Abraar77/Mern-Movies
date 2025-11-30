import express from 'express'
import { authenticate, authorizeAdmin } from '../middlewares/authMiddleware.js'
import checkId from '../middlewares/checkId.js'

import { createMovie,
        getAllMovies,
        getSpecificMovie,
        getNewMovies,
        getTopMovies,
        deleteMovie,
        deleteComment
} from "../controllers/movieController.js"
const router = express.Router()

//public route

router.get("/all-movies", getAllMovies);
router.get("/specific-movie/:id", getSpecificMovie);
router.get("/new-movies", getNewMovies);
router.get("/top-movies", getTopMovies);

//restricted 
router.post("/:id/reviews", authenticate, checkId, movieReview);

//admin
router.route("/create-movie").post(authenticate,authorizeAdmin,createMovie)
router.delete("/delete-movie/:id", authenticate, authorizeAdmin, deleteMovie);
router.delete("/delete-comment", authenticate, authorizeAdmin, deleteComment);
export default router