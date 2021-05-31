const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  reviewer: mongoose.Schema.Types.ObjectId,
  rating: Number,
  review: String,
  time: Date,
});

const Review = mongoose.model("review", reviewSchema);
module.exports = Review;
