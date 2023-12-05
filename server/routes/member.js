const express = require('express');
const MemberService = require('../services/Member');
const UserModel = require('../schema/Member');
const route = express.Router();

route.post('/login', (req, res) => {
  UserModel.find({"email": req.body.email, "password": req.body.password})
  .then(users => {
    if (users.length === 0) {
      res.json('Email is not found!!!')
    } else {
      res.json(users[0])
    }
  })
  .catch(err => res.json(err))
})

route.post('/createUser', MemberService.createMember)

route.get('/getMemberInfomation/:id', MemberService.getMemberInfomation)

route.put('/editUser/:email', MemberService.changeProfile)

route.get('/getRentalPlan/:id', MemberService.getRentalPlan)

module.exports = route;