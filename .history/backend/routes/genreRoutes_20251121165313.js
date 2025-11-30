import express from "express"
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

import { createGenre } from "../controllers/genreController.js";

const router= express.Router();

router.route("/").post(authenticate,authorizeAdmin, createGenre)
router.route("/:id").post(authenticate,authorizeAdmin, del)


export default router