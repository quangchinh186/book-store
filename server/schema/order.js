const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  orderDate: {
    type: Date,
    required: true
  },
  shippingStatus: {
    type: String,
    required: true
  },
  shipDate: {
    type: Number,
    required: true
  },
  product: [{
    id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  }],
  address: {
    type: String,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  },
  paymentAmount: {
    type: Number,
    required: true
  },
  paymentMethod: {
    type: String,
    required: true
  },
  paymentStatus: {
    type: String,
    required: true
  },
  deliveryMethod: {
    type: String,
    required: true
  },
  discount: {
    type: Number,
    required: true
  }
})

const OrderModel = mongoose.model('order', OrderSchema);
module.exports = OrderModel;