import express from "express"
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

import { createGenre,
    deleteGenre,
    updateGenre,
    readGenre,
    listGenres
} from "../controllers/genreController.js";

const router= express.Router();

router.route("/").post(authenticate,authorizeAdmin, createGenre)
router.route("/genres").get(listGenres)
router.route("/:id").delete(authenticate,authorizeAdmin, deleteGenre).put(authenticate,authorizeAdmin,updateGenre)
router.route("/:id").get(readGenre)


export default router