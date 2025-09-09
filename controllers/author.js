import AuthorModel from "../models/author.js";
import ArticleModel from "../models/article.js";

const authorModel = new AuthorModel();
const articleModel = new ArticleModel();

class AuthorController {
    constructor() {
        const authors = [];
    }

    async getAuthorById(req, res) {
        try {
            const id = req.params.id;
            const author = await authorModel.findById(id);
            const articles = await articleModel.findByAuthorId(id);
            author['articles'] = articles;
            res.status(201).json({author: author});
        } catch (error) {
            res.status(500).json({message: 'Error retrieving author by ID', error: error.message});
        }
    }

}

export default AuthorController;