import express from 'express'
import { authenticate, authorizeAdmin } from '../middlewares/authMiddleware.js'
import checkId from '../middlewares/checkId.js'

import { createMovie } from '../controllers/movieController.js'
const router = express.Router()

//public route



//admin
router.route("/create-movie").post(authenticate,authorizeAdmin,createMovie)

export default router