import express from "express"
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

import { createGenre,
    deleteGenre,
    updateGenre
} from "../controllers/genreController.js";

const router= express.Router();

router.route("/").post(authenticate,authorizeAdmin, createGenre)
router.route("/:id").delete(authenticate,authorizeAdmin, deleteGenre).put(authenticate,authorizeAdmin,updateGenre).get(read)


export default router