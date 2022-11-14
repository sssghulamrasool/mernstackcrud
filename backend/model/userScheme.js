const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  useremail: {
    type: String,
    required: true,
  },
  userphoneno: {
    type: Number,
    required: true,
  },
  useraddress: {
    type: String,
    required: true,
  },
  usercity: {
    type: String,
    required: true,
  },
});
const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel;
