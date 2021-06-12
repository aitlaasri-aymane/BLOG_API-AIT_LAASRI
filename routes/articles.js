var express = require('express');
var router = express.Router();
const articleRepo = require('../repositories/articles')
const commentsRepo = require('../repositories/comments')
const moment = require('moment')

/* GET users listing. */
router.get('/', async function (req, res, next) {
    res.send(await articleRepo.getAllArticles())
});

router.get('/count', async function (req, res, next) {
    res.sendStatus(await articleRepo.countArticles());
});

router.get('/:id', async function (req, res, next) {
    res.send(await articleRepo.getArticle(req.params.id));
});

router.get('/:id/comments', async function (req, res, next) {
    res.send(await commentsRepo.getArticleComments(req.params.id));
});

router.post('/', async function (req, res) {
    let article = {};
    article.title = req.body.title
    article.content = req.body.content
    article.UserId = req.body.UserId
    article.published = 1
    article.createdAt = moment().format('YYYY/MM/DD hh:mm:ss')
    article.updatedAt = article.createdAt
    res.send(await articleRepo.addArticle(article));
});

router.put('/', async function (req, res) {
    let article = {};
    article.title = req.body.title
    article.content = req.body.content
    article.published = req.body.published
    article.updatedAt = moment().format('YYYY/MM/DD hh:mm:ss')
    res.send(await articleRepo.updateArticle(article));
});

router.delete('/deletearticlebyid/:id', async function (req, res, next) {
    try { res.status(await articleRepo.deleteArticle(req.params.id)) }
    catch (err) { next(err); }
});

module.exports = router;