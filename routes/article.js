import express from "express";
const router = express.Router();

import ArticleController from '../controllers/article.js';
const articleController = new ArticleController();

router.get('/', (req, res) => articleController.getAllArticles(req, res));

export default router;