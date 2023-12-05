const mongoose = require('mongoose');

const adminSchema = mongoose.Schema("admin", {
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }, 
  phoneNumber: {
    type: String,
    required: true
  },
})

module.exports = mongoose.model("admin", adminSchema);
