const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  hash: {
    type: String,
    require: true,
  },
  salt: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.models.user || mongoose.model("user", userSchema);
