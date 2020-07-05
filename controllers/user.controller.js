const User = require('../models/user.model');
const bcrypt = require('bcryptjs');

const createUser = async (req, res) => {
  const {
    email,
    firstName,
    middleName,
    secondName,
    password,
    rank,
    phone,
    address
  } = req.body;
  try {
    let user = await User.findOne({ email });

    if (user) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'Пользователь с данным e-mail уже существует!' }] });
    }

    const contacts = {
      email,
      phone,
      address
    }

    user = new User({
      email,
      firstName,
      middleName,
      secondName,
      rank,
      contacts
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    res
      .status(200)
      .json({ msg: `Пользователь ${firstName} ${middleName} успешно зарегистрирован!` });

  } catch (err) {
    return res
      .status(400)
      .json({ errors: [{ err, msg: 'Пользователь с данным e-mail уже существует!' }] });
  }
}

const userById = async (req, res, next, id) => {
  try {
    const user = await User.findById(id).select('-password');
    req.user = user;
    next();
  } catch (err) {
    console.log(err);
  }
}

const getUser = async (req, res) => {
  let user;
  if (req.user) {
    user = req.user;
    res.json({ user });
  }
  else if (req.myId) {
    user = await User.findById(req.myId).select('-password');
    res.json({ user });
  }
  else
    res
      .status(400)
      .json({ errors: [{ msg: 'Не удалось загрузить пользователя' }] });
}

const getUsers = async (req, res) => {

}

module.exports = { createUser, userById, getUser, getUsers };