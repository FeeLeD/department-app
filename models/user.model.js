const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  middleName: {
    type: String,
    required: true
  },
  secondName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  rank: {
    type: String
  },
  contacts: {
    email: {
      type: String
    },
    phone: {
      type: String
    },
    address: {
      type: String
    },
    auditory: {
      type: String
    }
  },
  updateDate: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("user", userSchema);

module.exports = User;