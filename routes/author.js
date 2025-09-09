import express from "express";
const router = express.Router();

import AuthorController from '../controllers/author.js';
const authorController = new AuthorController();

router.get('/id/:id', (req, res) => authorController.getAuthorById(req, res));

export default router;