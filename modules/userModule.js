const mongoose = require("./connection.js")


const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    imageUrl: String,
  });

const User = mongoose.model('User', UserSchema);

module.exports=User;
