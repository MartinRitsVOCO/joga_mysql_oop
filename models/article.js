import BaseSQLModel from './base,js';

class ArticleModel extends BaseSQLModel {
  constructor() {
    super('article');
  }

  async findAll() {
    const results = await super.findAll();
    return results;
  }

  async findOne(slug) {
    const results = await super.findOne('slug', slug);
    return results;
  }

  async findByAuthorId(author) {
    const results = await super.findMany('author_id', author);
    return results;
  }

  async create(article) {
    const insertId = await super.create(article);
    return insertId;
  }
}
export default ArticleModel;