const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  tasks: {
    type: []
  },
  userData: {
    type: Object,
    darkMode: {
      type: Boolean
    }
  }
});

module.exports = mongoose.model("User", UserSchema);
