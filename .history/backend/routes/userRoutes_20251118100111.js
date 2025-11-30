import express from 'express';
//controllers
import { createUser } from '../controllers/userController';
//middlewares

const router= express.Router();

router.route("/").post(createUser)