const mongoose = require('mongoose');

const ShoppingCartSchema = new mongoose.Schema({
    product: {
        type: [{
            id: mongoose.Schema.Types.ObjectId,
            quantity: Number,
        }],
    },
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
    }
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

const userSchema = new mongoose.Schema({
    fullname: {
        default: 'nameless',
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
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
        required: true
    },
    age: {
        default: 0,
        type: String,
    },
    gender: {
        default: 'genderless',
        type: String,
    },
    rentalPlan: {
        type: RentalPlanSchema,
    },
    loyaltyCard: {
        type: LoyaltyCardSchema,
    },
    personalCart: {
        type: ShoppingCartSchema,
    },
})

const UserModel = mongoose.model("user", userSchema);
module.exports = UserModel