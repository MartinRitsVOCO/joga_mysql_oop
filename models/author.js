import BaseSQLModel from './base,js';

class AuthorModel extends BaseSQLModel {
  constructor() {
    super('author');
  }

  async findById(id) {
    const results = await super.findById(id);
    return results;
  }
}
export default AuthorModel;