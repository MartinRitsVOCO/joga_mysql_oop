import express from "express";
const router = express.Router();

import ViewsController from "../controllers/views";
const viewsController = new ViewsController();

router.get('/', viewsController.displayAllArticles);
router.get('/article/:slug', viewsController.displayArticleBySlug);

export default router;