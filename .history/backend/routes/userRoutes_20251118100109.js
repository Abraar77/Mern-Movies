import express from 'express';
//controllers
import cre
//middlewares

const router= express.Router();

router.route("/").post(createUser)