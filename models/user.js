import BaseSQLModel from "./base.js";
import RoleModel from "./role.js";
const roleModel = new RoleModel();

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
        if(!Number.isInteger(Number(user.role)) || isNaN(user.role)) {
            const user_role = user.role || 'user';
            const roleData = await roleModel.findByRoleName(user_role);
            if(!roleData) {
                throw new Error('Role does not exist');
            }
            user.role = roleData.id;
        }
        const insertId = await super.create(user);
        return insertId;
    }

    async update(id, user) {
        if(!Number.isInteger(Number(user.role)) || isNaN(user.role)) {
            const user_role = user.role || 'user';
            const roleData = await roleModel.findByRoleName(user_role);
            if(!roleData) {
                throw new Error('Role does not exist');
            }
            user.role = roleData.id;
        }
        const affectedRows = await super.update(id, user);
        return affectedRows;
    }

    async delete(id) {
        const affectedRows = await super.delete(id);
        return affectedRows;
    }
}
export default UserModel;