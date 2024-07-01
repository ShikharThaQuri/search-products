const mongoose = require("mongoose");

const connectDB = () => {
  return mongoose.connect(process.env.DB_String);
};

module.exports = connectDB;
