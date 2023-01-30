const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Why no Name?"],
    trim: true,
    minLenght: 3,
  },
  age: {
    type: Number,
    required: [true, "Please insert your Age"],
    min: [10, "Age must be above 10"],
    max: [100, "Age must be bellow 100"],
  },
});

const UsersModel = mongoose.model("Users", UserSchema);

module.exports = UsersModel;
