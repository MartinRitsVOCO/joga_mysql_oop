import bcrypt from 'bcrypt';
import UserModel from '../models/user.js';
const userModel = new UserModel();

class UserController {

    async registerUser(req, res) {
        const cryptPassword = await bcrypt.hash(req.body.password, 10);
        try {
            const registeredId = await userModel.create({
                username: req.body.username,
                email: req.body.email,
                password: cryptPassword
            });
            if(registeredId) {
                const userData = await userModel.findById(registeredId);
                req.session.user = {user_id: userData.id, username: userData.username};
                res.status(201).json({
                    message: 'User registered',
                    user_session: req.session.user
                });
            } else {
                throw new Error('User could not be added to database');
            }
        } catch (error) {
            res.status(500).json({message: 'Error registering user', error: error.message});
        }
    }
}

export default UserController;