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
}
export default ArticleModel;