const express = require('express');
const route = express.Router();
const RentalService = require('../services/RentalService');

route.get('rent_book/:book_id&:user_id', RentalService.rentBook)

route.get('/check_rental_plan/:user_id', RentalService.checkRentalPlan)

module.exports = route; 