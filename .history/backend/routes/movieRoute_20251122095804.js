import express from 'express'
import { authenticate, authorizeAdmin } from '../middlewares/authMiddleware.js'

const router = express.Router()



export default router