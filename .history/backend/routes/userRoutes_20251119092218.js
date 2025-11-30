import express from 'express';
//controllers
import { createUser,loginUser, logoutUser } from '../controllers/userController.js';
import { authenticate } from '../middlewares/authMiddleware.js';
//middlewares

const router= express.Router();

router.route("/").post(createUser).get(authenticate)
router.route("/login").post(loginUser)
router.route("/logout").post(logoutUser)

export default router;