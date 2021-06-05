const { User } = require('../models')
module.exports = {
    getAllUsers() {
        return User.findAll()
    },

    // méthodes à implémenter
    async getUsers(offset = 0, limit = 10) {
        return await User.findAll({ offset: offset, limit: limit });
    },

    async getAdmins() {
        return await User.findAll({
            where: {
                role: 'admin'
            }
        });
    },

    async getAuthors() {
        return await User.findAll({
            where: {
                role: 'author'
            }
        });
    },

    async getGuests() {
        return await User.findAll({
            where: {
                role: 'guest'
            }
        });
    },

    async getUser(id) {
        return await User.findOne({
            where: {
                id: id
            }
        });
    },

    async getUserByEmail(email) {
        return await User.findOne({
            where: {
                email: email
            }
        });
    },

    async addUser(user) {
        return await User.findOrCreate({
            where: {
                [Op.or]: [
                    { username: user.username },
                    { email: user.email }
                ]
            },
            defaults: {
                password: user.password,
                role: user.role,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt
            }
        });
    },

    async updateUser(data) {
        return await User.update(data, {
            where: {
                id: data.id
            }
        });
    },

    async deleteUser(id) {
        return await User.destroy({
            where: {
                id: id
            }
        })
    },
    // D'autres méthodes jugées utiles
}