import express from "express";
const router = express.Router();

import ArticleController from '../controllers/article.js';
const articleController = new ArticleController();

router.get('/', (req, res) => articleController.getAllArticles(req, res));
router.get('/slug/:slug', (req, res) => articleController.getArticleBySlug(req, res));
router.post('/create', (req, res) => articleController.createArticle(req, res));
router.put('/update/:id', (req, res) => articleController.updateArticle(req, res));
router.delete('/delete/:id', (req, res) => articleController.deleteArticle(req, res));

export default router;