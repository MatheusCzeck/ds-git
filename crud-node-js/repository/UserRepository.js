import {User} from "../models/User.js"

export class UserRepository {
    async createUser(data) {
        return await User.createUser(data)
    }

    async getUsers() {
        return await User.findAll()
    }

    async getUser(id) {
        return await User.findByPk(id)
    }

    async updateUser(user, data) {
        return await user.update(data)
    }

    async deleteUser(user) {
        return await user.destroy(id)
    }

}