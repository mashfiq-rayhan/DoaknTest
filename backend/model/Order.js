const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  sellerId: Schema.Types.ObjectId,
  customerId: Schema.Types.ObjectId,
  productId: Schema.Types.ObjectId,
  dokanid: Schema.Types.ObjectId,
  time: {
    prepare: Number,
    delivery: Number,
    order: Number,
  },
  location: {
    pickup: String,
    delivery: String,
  },
  pending: Boolean,
});

const Order = mongoose.model("order", orderSchema);
module.exports = Order;
