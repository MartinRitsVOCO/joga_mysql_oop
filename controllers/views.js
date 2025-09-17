class ViewsController {
    async displayAllArticles(_req, res) {
        const { articles } = await fetch('http://localhost:3025/api/article').then(res => res.json());
        res.render('index', { articles: articles });
    }

   async displayArticleBySlug(req, res) {
        const { article } = await fetch(`http://localhost:3025/api/article/slug/${req.params.slug}`).then(res => res.json());
        article.published = new Date(article.published).toLocaleDateString('et-et');
        console.log(article);
        res.render('article', { article: article });
    }
}

export default ViewsController;