const User = require('../models/user.model');
const Chat = require('../models/chat.model');
const Message = require('../models/message.model');

const createChat = async (req, res) => {
  const { users, name } = req.body;

  try {
    const chat = await new Chat({
      users,
      name
    });

    await chat.save();

    return res
      .status(200)
      .json({
        id: chat._id
      });
  } catch (err) {

    return res
      .status(400)
      .json({ errors: [{ err, msg: 'Ошибка создания чата...' }] });
  }

}

const getChats = async (req, res) => {
  const userId = req.myId

  try {
    let chat = await Chat.find({ users: userId });

    if (!chat) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'Переписок не найдено' }] });
    }

    res.json(chat);
  } catch (err) {
    return res
      .status(400)
      .json({ errors: [{ err, msg: 'Ошибка загрузки' }] });
  }
}

const postMessage = async (req, res) => {
  const {
    chatId,
    userId,
    firstName,
    middleName,
    secondName,
    content
  } = req.body;

  const user = {
    id: userId,
    firstName,
    middleName,
    secondName
  }

  try {
    const message = await new Message({
      chat: chatId,
      user,
      content
    });

    await message.save();

    return res
      .status(200)
      .json({
        message: 'Сообщение добавлено в базу'
      });

  } catch (err) {

    return res
      .status(400)
      .json({ errors: [{ err, msg: 'Ошибка при добавлении сообщения...' }] });
  }
}

const messagesByChatId = async (req, res, next, chatId) => {
  try {
    const messages = await Message.find({ chat: chatId });
    req.messages = messages;
    next();
  } catch (err) {

    return res
      .status(400)
      .json({ errors: [{ err, msg: 'Ошибка поиска сообщений...' }] });
  }
}

const getMessages = async (req, res) => {
  res.json(req.messages);
}

module.exports = { createChat, getChats, postMessage, messagesByChatId, getMessages };