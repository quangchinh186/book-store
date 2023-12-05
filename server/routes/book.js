const express = require('express');
const BookService = require('../services/BookService');
const route = express.Router();

route.post('/add_book', BookService.createBook)

route.get('/get_book_list', BookService.getBookList)

route.get('/get_book_details/:id', BookService.getBookDetails)

route.patch('/update_book/:id', BookService.updateBook)

route.delete('/delete_book/:id', BookService.deleteBook)

route.get('/create_mock_data', BookService.createMockData)

module.exports = route;