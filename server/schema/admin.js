const mongoose = require('mongoose');

const AdminModel = mongoose.model("admin", {
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

module.exports = AdminModel;