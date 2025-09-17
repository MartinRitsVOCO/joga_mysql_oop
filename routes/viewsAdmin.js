import express from "express";
const router = express.Router();

import ViewsAdminController from "../controllers/viewsAdmin.js";
const viewsAdminController = new ViewsAdminController();

router.get('/', viewsAdminController.displayAllArticles);
router.get('/edit/:slug', viewsAdminController.displayArticleBySlug);
router.get('/create', viewsAdminController.createArticle);

router.post('/edit/:slug', viewsAdminController.updateArticle);
router.post('/create', viewsAdminController.createArticle);

export default router;