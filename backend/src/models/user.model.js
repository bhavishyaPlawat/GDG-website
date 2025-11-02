const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: string,
    require: true,
  },
  role: {
    enum: ["user", "admin"],
    default: "user",
  },
});

const userModel = mongoose.model("user", UserSchema);

module.exports = userModel;
