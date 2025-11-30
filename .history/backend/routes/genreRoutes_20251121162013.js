import express from "express"
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

const router= express.Router();

router.route("/").post(authenticate,authorizeAdmin, createGenre)


export default router