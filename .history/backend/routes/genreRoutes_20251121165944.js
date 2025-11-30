import express from "express"
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

import { createGenre,
    deleteGenre
} from "../controllers/genreController.js";

const router= express.Router();

router.route("/").post(authenticate,authorizeAdmin, createGenre)
router.route("/:id").post(authenticate,authorizeAdmin, deleteGenre).put()


export default router