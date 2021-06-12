var express = require('express');
var router = express.Router();
const tagsRepo = require('../repositories/tags')
const moment = require('moment')

/* GET users listing. */
router.get('/', async function (req, res, next) {
    res.send(await tagsRepo.getAllTags())
});

router.get('/:id', async function (req, res, next) {
    res.send(await tagsRepo.getTag(req.params.id));
});

router.post('/', async function (req, res) {
    let tag = {};
    tag.name = req.body.name
    tag.createdAt = moment().format('YYYY/MM/DD hh:mm:ss')
    tag.updatedAt = tag.createdAt
    res.send(await tagsRepo.addTag(tag));
});

router.put('/', async function (req, res) {
    let tag = {};
    tag.name = req.body.name
    tag.updatedAt = moment().format('YYYY/MM/DD hh:mm:ss')
    res.send(await tagsRepo.updateTag(tag));
});

router.delete('/deletetagbyid/:id', async function (req, res, next) {
    try { res.status(await tagsRepo.deleteTag(req.params.id)) }
    catch (err) { next(err); }
});

module.exports = router;