import express from "express"
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware";

const router= express.Router();

router.route("/").post


export default router