const mongoose = require("mongoose");

const Review = require("./Review").schema;
const Comment = require("./Comment").schema;

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  dimension: { weight: Number, height: Number, Width: Number },
  price: Number,
  photo: [String],
  review: { type: [Review], default: [] },
  comment: { type: [Comment], default: [] },
});

const Product = mongoose.model("product", productSchema);
module.exports = Product;
