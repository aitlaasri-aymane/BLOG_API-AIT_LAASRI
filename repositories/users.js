const { User } = require('../models')
const { Op } = require("sequelize");

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

    async addUser(user_data) {
        return await User.findOrCreate({
            where: {
                [Op.or]: [
                    { username: user_data.username },
                    { email: user_data.email }
                ]
            },
            defaults: {
                username: user_data.username,
                email: user_data.email,
                password: user_data.password,
                role: user_data.role,
                createdAt: user_data.createdAt,
                updatedAt: user_data.updatedAt
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