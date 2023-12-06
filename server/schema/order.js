const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  orderDate: {
    type: Date,
  },
  shippingStatus: {
    type: String,
  },
  shipDate: {
    type: Number,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  book: {
    type: {
      id: mongoose.Schema.Types.ObjectId,
      quantity: Number,
    },
  },
  address: {
    type: String,
  },
  totalPrice: {
    type: Number,
  },
  paymentAmount: {
    type: Number,
  },
  paymentMethod: {
    type: String,
  },
  paymentStatus: {
    type: String,
  },
  deliveryMethod: {
    type: String,
  },
  discount: {
    type: Number,
  }
})

const OrderModel = mongoose.model('order', OrderSchema);
module.exports = OrderModel;