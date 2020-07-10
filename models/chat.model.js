const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  users: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
    }]
  },
  name: {
    type: String,
    default: 'Приватный чат'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Chat = mongoose.model('chat', chatSchema);

module.exports = Chat;