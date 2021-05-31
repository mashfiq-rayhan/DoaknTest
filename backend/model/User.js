const mongoose = require("mongoose");

const bcrypt = require("bcrypt");
const { isEmail } = require("validator");
//const { status } = require("../config/config");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    require: [true, "Please Enter an Email"],
    unique: true,
    validate: [isEmail, "Please Enter a Valid Email"],
  },
  password: {
    type: String,
    required: [true, "Please Enter a Password"],
    minlength: [6, "Minimum Password Length is 6 Characters"],
  },
  aultid: {
    type: Number,
    required: [true, "Provide a Phone Number"],
    minlength: [10, "Provide Contact"],
    maxlength: [14, "Provide Contact"],
  },
  status: Number,
  personid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Person",
  },
});
//Hooks
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model("user", userSchema);
module.exports = User;
