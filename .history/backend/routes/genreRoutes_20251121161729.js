import express from "express"
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware";

const router= express.Router();


export default router