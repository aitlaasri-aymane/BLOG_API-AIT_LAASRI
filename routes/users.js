var express = require('express');
var router = express.Router();
var usersRepo = require('../repositories/users')
const moment = require('moment')

/* GET users listing. */
router.get('/', async function (req, res, next) {
  res.send(await usersRepo.getAllUsers())
});

router.get('/searchbyid/:id', async function (req, res) {
  res.send(await usersRepo.getUser(req.params.id))
})

router.get('/searchbyemail/:email', async function (req, res) {
  res.send(await usersRepo.getUserByEmail(req.params.email))
})

router.delete('/deletebyid/:id', async function (req, res, next) {
  try { res.status(await usersRepo.deleteUser(req.params.id)) }
  catch (err) { next(err); }
})

router.put('/', async function (req, res) {
  let user = {}
  user.id = req.body.id
  user.username = req.body.username
  user.email = req.body.email
  user.password = req.body.password
  user.role = req.body.role
  user.updatedAt = moment().format('YYYY/MM/DD hh:mm:ss')
  res.send(await usersRepo.updateUser(user))
})

module.exports = router;
