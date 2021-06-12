const { Article } = require('../models')

module.exports = {
    getAllArticles() {
        return Article.findAll()
    },

    // méthodes à implémenter
    async getArticles(offset = 0, limit = 10) {
        return await Article.findAll({ offset: offset, limit: limit });
    },

    async countArticles() {
        return await Article.count();
    },

    async getArticle(id) {
        return await Article.findOne({
            where: {
                id: id
            }
        });
    },

    async addArticle(art_data) {
        return await Article.create({
            title: art_data.title,
            content: art_data.content,
            UserId: art_data.UserId,
            published: 1,
            createdAt: art_data.createdAt,
            updatedAt: art_data.updatedAt
        });
    },

    async updateArticle(data) {
        return await Article.update(data, {
            where: {
                id: data.id
            }
        });
    },

    async deleteArticle(id) {
        return await Article.destroy({
            where: {
                id: id
            }
        })
    },
    // D'autres méthodes jugées utiles
}