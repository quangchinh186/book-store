const express = require('express');
const BookSchema = require('../schema/book');
const route = express.Router();

route.post('/addBook', async (req, res) => {
  try {
    await BookSchema.create(req.body)
  } catch (err) {
    res.json(err)
  }
})

route.get('/getBook', (req, res) => {
  BookSchema.find({}).then(result => res.json(result)).catch(err => res.json(err))
})

route.put('/editBook/:id', async (req, res) => {
  BookSchema.findByIdAndUpdate(req.params.id, req.body)
})

route.delete('/deleteBook/:id', async (req, res) => {
  await BookSchema.findByIdAndDelete(req.params.id)
})

module.exports = route;