const { Comment } = require('../models')

module.exports = {
    getAllComments() {
        return Comment.findAll()
    },

    // méthodes à implémenter
    async getComments(offset = 0, limit = 10) {
        return await Comment.findAll({ offset: offset, limit: limit });
    },

    async getArticleComments(id_article) {
        return await Comment.findAndCountAll({
            where: {
                ArticleId: id_article
            }
        });
    },

    async getComment(id) {
        return await Comment.findOne({
            where: {
                id: id
            }
        });
    },

    async addComment(com_data) {
        return await Comment.create({
            content: com_data.name,
            ArticleId: com_data.ArticleId,
            createdAt: com_data.createdAt,
            updatedAt: com_data.updatedAt
        });
    },

    async updateComment(data) {
        return await Comment.update(data, {
            where: {
                id: data.id
            }
        });
    },

    async deleteComment(id) {
        return await Comment.destroy({
            where: {
                id: id
            }
        })
    },
    // D'autres méthodes jugées utiles
}