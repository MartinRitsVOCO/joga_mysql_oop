import e from 'express';
import ArticleModel from '../models/article.js';
const articleModel = new ArticleModel();

class ArticleController {
    constructor() {
        const articles = [];
    }

    async getAllArticles(req, res) {
        try {
            const articles = await articleModel.findAll();
            res.status(201).json({articles: articles});
        } catch (error) {
            res.status(500).json({message: 'Error retrieving articles', error: error.message});
        }
    }
}

export default ArticleController;