const mongoose = require("mongoose");
const Dokan = require("./Dokan").schema;

const personSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please Enter Your Name"],
  },
  lastName: {
    type: String,
    required: false,
  },
  dob: {
    type: Date,
    required: [false, "Enter Your Date of Birth"],
  },
  gender: {
    type: String,
    required: [true, "Select Your Gender"],
  },
  contact: {
    type: Number,
    required: [true, "Enter Your Contact Number"],
    unique: true,
  },
  dokan: {
    type: [Dokan],
    required: false,
    default: [],
  },
  address: {
    type: String,
    required: [true, "Please Enter a Address"],
  },
  nidNumber: {
    type: Number,
    required: [true, "Enter Your NID Number"],
  },

  //Photo

  //Location
});

//hooks

const Person = mongoose.model("person", personSchema);
module.exports = Person;
