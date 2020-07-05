const express = require('express');
const { signIn } = require('../controllers/auth.controller');

const router = express.Router();

router.route('/')
  .post(signIn); // sign in user (get token)

module.exports = router;