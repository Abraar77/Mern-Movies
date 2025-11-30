import express from 'express'
import { authenticate, authorizeAdmin } from '../middlewares/authMiddleware.js'
import checkId from '../middlewares/checkId.js'
const router = express.Router()

//admin

router.route("")

export default router