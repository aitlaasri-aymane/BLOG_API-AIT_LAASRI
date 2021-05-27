const { User } = require('../models')
module.exports = {
    getAllUsers() {
        return User.findAll()
    },

    // méthodes à implémenter
    getUsers(offset = 0, limit = 10) {
        return User.findAll({ offset: offset, limit: limit });
    },

    getAdmins() {
        return User.findAll({
            where: {
                role: 'admin'
            }
        });
    },

    getAuthors() {
        return User.findAll({
            where: {
                role: 'author'
            }
        });
    },

    getGuests() {
        return User.findAll({
            where: {
                role: 'guest'
            }
        });
    },

    getUser(id) {
        return User.findOne({
            where: {
                id: id
            }
        });
    },

    getUserByEmail(email) {
        return User.findOne({
            where: {
                email: email
            }
        });
    },

    addUser(user) {
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

    updateUser(id, data) {
        return await User.update(data, {
            where: {
                id: id
            }
        });
    },

    deleteUser(id) {
        return await User.destroy({
            where: {
                id: id
            }
        })
    },
    // D'autres méthodes jugées utiles
}