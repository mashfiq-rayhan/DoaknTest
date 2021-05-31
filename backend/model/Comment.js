const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  Comment: String,
  time: Date,
});

const Comment = mongoose.model("comment", commentSchema);
module.exports = Comment;
