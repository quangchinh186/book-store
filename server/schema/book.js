const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  content: {
    type: String,
  },
  quantity: {
    type: Number
  },
  author: {
    type: String,
  },
  publisher: {  
    type: String,
  },
})

module.exports = mongoose.model("book", BookSchema);