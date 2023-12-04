const express = require('express');
const UserModel = require('../schema/member');
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

route.post('/createUser', (req, res) => {
    UserModel.find({"email": req.body.email})
    .then(users => {
      if (users.length !== 0) {
        res.json('Email is taken!!!')
      } else {
        const newUser = new UserModel(req.body);
        newUser.save();
        res.json(newUser._id);
      }
    })
    .catch(err => res.json(err))
})

route.get('/', (req, res) => {
  UserModel.find({}).then(result => res.json(result)).catch(err => res.json(err))
})

route.put('/editUser/:email', async (req, res) => {
  try {
    const userData = req.body
    await UserModel.findOneAndUpdate({email: req.params.email}, userData)
  } catch (err) {
    res.json(err)
  }
})

route.delete('/deleteUser/:email', async (req, res) => {
  try {
    await UserModel.delete({email: req.params.email})
  } catch (err) {
    res.json(err)
  }
})

module.exports = route;