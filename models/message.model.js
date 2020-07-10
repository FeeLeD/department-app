const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  chat: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'chat'
  },
  user: {
    id: { type: String },
    firstName: { type: String },
    middleName: { type: String },
    secondName: { type: String }
  },
  content: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Message = mongoose.model('message', messageSchema);

module.exports = Message;