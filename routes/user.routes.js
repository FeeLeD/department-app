const express = require('express');
const { 
  createUser,
  userById, 
  getUser, 
  getUsers } = require('../controllers/user.controller');
const { requireSignIn } = require('../controllers/auth.controller');

const router = express.Router();

router.route('/')
  .get(requireSignIn, getUser)
  .post(createUser); // create a user

router.route('/:id')
  .get(getUser); // get user data

router.route('/find/all')
  .get(getUsers); // get all users data

router.param('id', userById);

module.exports = router;