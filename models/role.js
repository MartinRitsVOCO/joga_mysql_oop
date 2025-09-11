import BaseSQLModel from "./base.js";

class RoleModel extends BaseSQLModel {
    constructor() {
        super('role');
    }

    async findAll() {
        const results = await super.findAll();
        return results;
    }

    async findById(id) {
        const results = await super.findById(id);
        return results;
    }

    async findByRoleName(roleName) {
        return super.findOne('role_name', roleName);
    }
}
export default RoleModel;