import express from "express";
const router = express.Router();

import UserController from '../controllers/user.js';
const userController = new UserController();

router.post('/register', (req, res) => userController.registerUser(req, res));
router.post('/login', (req, res) => userController.loginUser(req, res));

export default router;