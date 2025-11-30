import express from 'express'
import { authenticate, authorizeAdmin,router.get("/all-movies", getAllMovies); } from '../middlewares/authMiddleware.js'
import checkId from '../middlewares/checkId.js'

import { createMovie } from '../controllers/movieController.js'
const router = express.Router()

//public route

router.get("/all-movies", getAllMovies);

//admin
router.route("/create-movie").post(authenticate,authorizeAdmin,createMovie)

export default router