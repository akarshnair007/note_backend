const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    required: true,
    type: String,
  },
  email: {
    require: true,
    type: String,
  },
  password: {
    require: true,
    type: String,
  },
});

const userData = mongoose.model("users", userSchema);
module.exports = userData;
