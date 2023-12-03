const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const UserModel = require('./schema/user')

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://quangchinh1122:chinh2003@uetinder.bmmhsoe.mongodb.net/?retryWrites=true&w=majority")

app.listen(3001, () => {
    console.log('server running on 3001');
})

app.post('/createUser', (req, res) => {
    UserModel.find({"username": req.body.username})
    .then(users => {
      if (users.length !== 0) {
        res.json('Username is taken!!!')
      } else {
        const newUser = new UserModel({
            username: req.body.username,
            password: req.body.password
        });
        newUser.save();
        res.json(newUser._id);
      }
    })
    .catch(err => res.json(err))
})

app.get('/', (req, res) => {
    UserModel.find({}).then(result => res.json(result)).catch(err => res.json(err))
})

app.put('/editUser', (req, res) => {

})

app.delete('/deleteUser', (req, res) => {

})