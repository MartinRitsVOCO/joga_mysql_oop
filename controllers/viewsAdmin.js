class ViewsAdminController {
    async displayAllArticles(_req, res) {
        const { articles } = await fetch('http://localhost:3025/api/article').then(res => res.json());
        articles.forEach(article => {
            article.published = new Date(article.published).toLocaleDateString('et-et');
        });
        res.render('admin/view', { articles: articles });
    }

   async displayArticleBySlug(req, res) {
        const { article } = await fetch(`http://localhost:3025/api/article/slug/${req.params.slug}`).then(res => res.json());
        article.published = new Date(article.published).toLocaleDateString('et-et');
        res.render('admin/edit', { article: article });
    }

    async updateArticle(req, res) {
        const { name, slug, image, body, action } = req.body;
        const { article } = await fetch(`http://localhost:3025/api/article/slug/${req.params.slug}`).then(res => res.json());
        if (action === 'delete') {
            fetch(`http://localhost:3025/api/article/delete/${article.id}`, {
                method: "delete",
            })
            .then( () => {
                res.redirect('/admin');
            });
        } else {
            fetch(`http://localhost:3025/api/article/update/${article.id}`, {
                method: "put",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: article.id,
                    name: name,
                    slug: slug,
                    image: image,
                    body: body,
                    author_id: article.author_id,
                })
            })
            .then( () => {
                res.redirect('/admin');
            });
        }
    }

    async createArticle(req, res){
        if (req.method === 'GET') {
            res.render('admin/create');
        } else if (req.method === 'POST') {
            const { name, slug, image, body } = req.body;
            fetch('http://localhost:3025/api/article/create', {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    slug: slug,
                    image: image,
                    body: body,
                    author_id: 1
                })
            })
            .then( () => {
                res.redirect('/admin');
            });
        }   
    }
}

export default ViewsAdminController;