import express from 'express';
//controllers
import { createUser,loginUser, logoutUser } from '../controllers/userController.js';
//middlewares

const router= express.Router();

router.route("/").post(createUser)
router.route("/login").post(loginUser)
router.route("/logout").post(logoutUser)

export default router;