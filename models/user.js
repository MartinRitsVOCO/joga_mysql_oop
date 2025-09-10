import BaseSQLModel from "./base.js";

class UserModel extends BaseSQLModel {
    constructor() {
        super('user');
    }

    async findAll() {
        const results = await super.findAll();
        return results;
    }

    async findOne(username) {
        const results = await super.findOne('username', username);
        return results;
    }

    async findById(id) {
        const results = await super.findById(id);
        return results;
    }

    async create(user) {
        const insertId = await super.create(user);
        return insertId;
    }

    async update(id, user) {
        const affectedRows = await super.update(id, user);
        return affectedRows;
    }

    async delete(id) {
        const affectedRows = await super.delete(id);
        return affectedRows;
    }
}
export default UserModel;