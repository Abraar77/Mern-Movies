import express from 'express';
//controllers
import { createUser } from '../controllers/userController.js';
//middlewares

const router= express.Router();

router.route("/").post(createUser)
router.route("/login").post(logi)

export default router;