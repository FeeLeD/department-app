const express = require('express');
const { 
  createUser,
  userById, 
  getUser, 
  getUsers,
  findUser } = require('../controllers/user.controller');
const { requireSignIn } = require('../controllers/auth.controller');

const router = express.Router();

router.route('/')
  .get(requireSignIn, getUser)
  .post(createUser); // create a user

router.route('/:id')
  .get(getUser); // get user data

router.route('/find/all')
  .get(getUsers); // get all users data

router.route('/find')
  .post(findUser);

router.param('id', userById);

module.exports = router;