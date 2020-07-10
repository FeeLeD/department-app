const express = require('express');
const { requireSignIn } = require('../controllers/auth.controller');
const { createChat, getChats, postMessage, messagesByChatId, getMessages } = require('../controllers/chat.controller');

const router = express.Router();

router.route('/')
  .get(requireSignIn, getChats)
  .post(requireSignIn, createChat);

router.route('/message')
  .post(requireSignIn, postMessage);

router.route('/message/:chatId')
  .get(requireSignIn, getMessages);

router.param('chatId', messagesByChatId);

module.exports = router;