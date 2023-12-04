const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  createdDate: {
    type: Date,
    required: true
  },
  lastedUpdateDate: {
    type: Date,
    required: true
  },
  isClosed: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model("post", PostSchema);