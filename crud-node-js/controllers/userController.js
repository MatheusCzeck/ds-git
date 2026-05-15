import { UserService } from '../services/UserService.js';

export class UserController {
    constructor() {
        this.service = new UserService()
    }

    createUser = async (req,res) => {
        try {
            const user = await this.service.createUser(req.body);
            return res.status(201).json(user);
        } catch (error) {
            return res.status(404).json({ message: error.message });
        }
    }
    getUsers = async (req, res) => {
        try {
            const users = await this.service.getUsers();
            return res.status(200).json(users);
        } catch (error) {
            return res.status(404).json({ message: error.message });
        } 
    }
    getUser = async (req, res) => {
        try {
            const user = await this.service.getUser(req.params.id);
            return res.status(200).json(user);
        } catch (error) {
            return res.status(404).json({ message: error.message });
        }
    }
    updateUser = async (req, res) => {
        try {
            const user = await this.service.updateUser(req.params.id,req.body);
            return res.status(200).json(user);
        } catch (error) {
            return res.status(404).json({ message: error.message });
        }
    }
    deleteUser = async (req, res) => {
        try {
            const user = await this.service.deleteUser(req.params.id);
            return res.status(200).json({ message: 'User deleted successfully' });
        } catch (error) {
            return res.status(404).json({ message: error.message });
        }
    }

}
