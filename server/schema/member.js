const mongoose = require('mongoose');

const ShoppingCartSchema = new mongoose.Schema({
  books: {
    type: [{
      id: mongoose.Schema.Types.ObjectId,
      quantity: Number,
    }],
  }
})

const RentalPlanSchema = new mongoose.Schema({
  planPrice: {
    type: Number,
  },
  planStartDate: {
    type: Date,
  },
  planEndDate: {
    type: Date,
  },
  planType: {
    type: String,
  },
  planStatus: {
    type: String,
  },
  planDescription: {
    type: String,
  },
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
  },
})

const LoyaltyCardSchema = new mongoose.Schema({
  activePoint: {
    type: Number,
  },
  pointExpiredDate: {
    type: Date,
  },
  usedPoint: {
    type: Number,
  },
  expiredPoint: {
    type: Number,
  },
  redeemOrder: {
    type: Number,
  },
  redeemDate: {
    type: Date,
  },
  rank: {
    type: String,
  },
  createdDate: {
    type: Date,
  }
})

const memberSchema = new mongoose.Schema({
  fullname: {
    default: 'nameless',
    type: String,
  },
  password: {
    type: String,
  },
  address: {
    default: 'addressless',
    type: String,
  },
  bankAccount: {
    default: 'bankless',
    type: String,
  },
  phoneNumber: {
    default: 'phoneless',
    type: String,
  },
  email: {
    default: 'emailless',
    type: String,
  },
  age: {
    default: 0,
    type: String,
  },
  gender: {
    default: 'genderless',
    type: String,
  },
  rentalPlan: [{
    type: RentalPlanSchema,
  }],
  loyaltyCard: {
    type: LoyaltyCardSchema,
  },
  personalCart: {
    type: ShoppingCartSchema,
  },
})

const MemberProfile = mongoose.model("user", memberSchema);
module.exports = MemberProfile;