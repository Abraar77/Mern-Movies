import express from "express"
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

import { createGenre,
    deleteGenre,
    updateGenre,
    readGenre
} from "../controllers/genreController.js";

const router= express.Router();

router.route("/").post(authenticate,authorizeAdmin, createGenre)
router.route("/:id").delete(authenticate,authorizeAdmin, deleteGenre).put(authenticate,authorizeAdmin,updateGenre)
router.route("/:id").get(readGenre)
router.route("/genres").get(authenticate,authorizeAdmin,)


export default router