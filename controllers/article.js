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
            res.status(500).json({message: 'Error retrieving all articles', error: error.message});
        }
    }

    async getArticleBySlug(req, res) {
        try {
            const slug = req.params.slug;
            const article = await articleModel.findOne(slug);
            res.status(201).json({article: article});
        } catch (error) {
            res.status(500).json({message: 'Error retrieving article by slug', error: error.message});
        }
    }

    async createArticle(req, res) {
        try {
            const articleData = {
                name: req.body.name,
                slug: req.body.slug,
                image: req.body.image,
                body: req.body.body,
                author_id: req.body.author_id,
                published: new Date().toISOString().slice(0, 19).replace('T', ' ')
            }
            const insertId = await articleModel.create(articleData);
            res.status(201).json({
                message: 'Article created',
                articleId: insertId,
                article: {id: insertId, ...articleData}
            });
        } catch (error) {
            res.status(500).json({message: 'Error creating article', error: error.message});
        }
    }
}

export default ArticleController;