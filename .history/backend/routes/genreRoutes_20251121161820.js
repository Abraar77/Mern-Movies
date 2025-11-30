import express from "express"
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware";

const router= express.Router();

router.route("/").post(authenticate,authorizeAdmin, crea)


export default router