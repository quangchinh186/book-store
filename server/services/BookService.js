const Book = require('../schema/Book');

class BookService {
  static async getBookDetails(req, res) {
    try {
      const id = req.params.id;
      const books = await Book.findById(id);
      if (!books) {
        return res.status(404).send('Book not found');
      }
      res.json(books);
    } catch (error) {
      res.json(error);
    }
  }

  static async createBook(req, res) {
    try {
      console.log(req.body);
      const price = parseFloat(req.body.price);
      const quantity = parseInt(req.body.quantity);
      await Book.create({ ...req.body, price, quantity });
    } catch (error) {
      console.log(error);
    }
  }

  static async deleteBook(req, res) {
    try {
      await Book.findByIdAndDelete(req.params.id);
      res.json({ message: "Book deleted" });
    } catch (error) {
      console.log(error);
    }
  }

  static async updateBook(req, res) {
    try {
      await Book.findByIdAndUpdate(req.params.id, { ...req.body });
      res.json({ message: "Book updated" });
    } catch (error) {
      console.log(error);
    }
  }

  static async getBookList(req, res) {
    try {
      const books = await Book.find();
      res.json(books);
    } catch (error) {
      res.json(error);
    }
  }

  static async createMockData(req, res) {
    const booksArray = [
      {
        title: "The Catcher in the Rye",
        description: "A novel by J.D. Salinger",
        price: 12.99,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        quantity: 20,
        author: "J.D. Salinger",
        publisher: "Little, Brown and Company"
      },
      {
        title: "1984",
        description: "A dystopian novel by George Orwell",
        price: 14.99,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        quantity: 25,
        author: "George Orwell",
        publisher: "Secker & Warburg"
      },
      {
        title: "Pride and Prejudice",
        description: "A classic novel by Jane Austen",
        price: 10.99,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        quantity: 30,
        author: "Jane Austen",
        publisher: "T. Egerton, Whitehall"
      },
      {
        title: "The Hobbit",
        description: "A fantasy novel by J.R.R. Tolkien",
        price: 18.99,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        quantity: 15,
        author: "J.R.R. Tolkien",
        publisher: "Allen & Unwin"
      },
      {
        title: "The Da Vinci Code",
        description: "A mystery thriller by Dan Brown",
        price: 16.99,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        quantity: 22,
        author: "Dan Brown",
        publisher: "Doubleday"
      },
      {
        title: "The Shining",
        description: "A horror novel by Stephen King",
        price: 20.99,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        quantity: 18,
        author: "Stephen King",
        publisher: "Doubleday"
      },
      {
        title: "The Alchemist",
        description: "A novel by Paulo Coelho",
        price: 13.99,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        quantity: 28,
        author: "Paulo Coelho",
        publisher: "HarperCollins"
      },
      {
        title: "Moby-Dick",
        description: "A novel by Herman Melville",
        price: 22.99,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        quantity: 12,
        author: "Herman Melville",
        publisher: "Richard Bentley"
      },
      {
        title: "The Lord of the Rings",
        description: "A fantasy novel by J.R.R. Tolkien",
        price: 24.99,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        quantity: 10,
        author: "J.R.R. Tolkien",
        publisher: "Allen & Unwin"
      },
      {
        title: "The Road",
        description: "A novel by Cormac McCarthy",
        price: 17.99,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        quantity: 24,
        author: "Cormac McCarthy",
        publisher: "Alfred A. Knopf"
      }
    ];
    try {
      booksArray.forEach(async (book) =>{
        await Book.create(book);
      })
    } catch (err) {
      res.json(err);
    }
    res.json({message: "Mock data created"})
  }
}

module.exports = BookService;
