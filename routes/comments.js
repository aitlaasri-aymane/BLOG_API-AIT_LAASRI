var express = require('express');
var router = express.Router();
const commentsRepo = require('../repositories/comments')
const moment = require('moment')

/* GET users listing. */
router.get('/', async function (req, res, next) {
    res.send(await commentsRepo.getAllComments())
});

router.get('/:id', async function (req, res, next) {
    res.send(await commentsRepo.getComment(req.params.id));
});

router.get('/article/:id', async function (req, res, next) {
    res.send(await commentsRepo.getArticleComments(req.params.id));
});

router.post('/', async function (req, res) {
    let comment = {};
    comment.content = req.body.content
    comment.ArticleId = req.body.ArticleId
    comment.UserId = req.body.UserId
    comment.createdAt = moment().format('YYYY/MM/DD hh:mm:ss')
    comment.updatedAt = comment.createdAt
    res.send(await commentsRepo.addComment(tag));
});

router.put('/', async function (req, res) {
    let comment = {};
    comment.content = req.body.content
    comment.updatedAt = moment().format('YYYY/MM/DD hh:mm:ss')
    res.send(await commentsRepo.updateComment(tag));
});

router.delete('/deletecommentbyid/:id', async function (req, res, next) {
    try { res.status(await commentsRepo.deleteComment(req.params.id)) }
    catch (err) { next(err); }
});

module.exports = router;