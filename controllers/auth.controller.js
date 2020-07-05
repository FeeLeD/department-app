const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'Неверный логин или пароль' }] });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'Неверный логин или пароль' }] });
    }

    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      (process.env.jwtSecret || config.jwtSecret),
      { expiresIn: 3600 },
      (err, token) => {
        if (err) {
          return res
            .status(400)
            .json({ errors: [{ err, msg: 'Ошибка авторизации' }] });
        }

        res.json({ token });
      }
    );

  } catch (err) {
    console.error(err.message);
    return res
      .status(400)
      .json({ errors: [{ err, msg: 'Ошибка сервера' }] });
  }
};

const requireSignIn = async (req, res, next) => {
  const token = req.header('x-auth-token');

  // token verification
  try {
    const decoded = jwt.verify(token, config.jwtSecret);

    req.myId = decoded.user.id;
    next();
  } catch (err) {
    res
      .status(401)
      .json({ errors: [{ msg: 'Время действия токена истекло' }] });
  }
};

module.exports = { signIn, requireSignIn };