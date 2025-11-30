import express from 'express';
//controllers
import { createUser,loginUser, logoutUser,getAllUsers,getCurrentUserProfile } from '../controllers/userController.js';
import { authenticate, authorizeAdmin  } from '../middlewares/authMiddleware.js';
//middlewares

const router= express.Router();

router.route("/").post(createUser).get(authenticate, authorizeAdmin, getAllUsers)
router.route("/login").post(loginUser)
router.route("/logout").post(logoutUser)
router.route("/profile").get(authenticate, getCurrentUserProfile).put(authenticate, updateCurrentUserProfile);


export default router;