const mongoose = require("mongoose");
const Product = require("./Product").schema;

const dokanSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter Your Dokan Name"],
  },
  products: {
    type: [Product],
    require: false,
    default: [],
  },
  //Photo
});

const Dokan = mongoose.model("dokan", dokanSchema);
module.exports = Dokan;
