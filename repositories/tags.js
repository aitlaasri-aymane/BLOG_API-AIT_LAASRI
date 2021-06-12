const { Tag } = require('../models')

module.exports = {
    getAllTags() {
        return Tag.findAll()
    },

    // méthodes à implémenter
    async getTags(offset = 0, limit = 10) {
        return await Tag.findAll({ offset: offset, limit: limit });
    },

    async getTag(id) {
        return await Tag.findOne({
            where: {
                id: id
            }
        });
    },

    async addTag(tag_data) {
        return await Tag.create({
            name: tag_data.name,
            createdAt: tag_data.createdAt,
            updatedAt: tag_data.updatedAt
        });
    },

    async updateTag(data) {
        return await Tag.update(data, {
            where: {
                id: data.id
            }
        });
    },

    async deleteTag(id) {
        return await Tag.destroy({
            where: {
                id: id
            }
        })
    },
    // D'autres méthodes jugées utiles
}