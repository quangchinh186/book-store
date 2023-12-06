const Member = require('../schema/Member');
const Book = require('../schema/Book');

class ShopingCart {
  static async getShopingCart(req, res) {
    try {
      const member = await Member.findById(req.params.user_id);
      if (!member) {
        console.log('Member not found');
        return res.status(404).send('Member not found');
      }
      const carts = []
      const booksdata = await Book.find({
        "_id": { $in: member.personalCart?.books.map(book => book.id)}
      })
      for (let i = 0; i < booksdata.length; i++) {
        carts.push({
          bookdata: booksdata[i],
          quantity: member.personalCart?.books[i].quantity
        })
      }
      console.log(carts)
      res.json(carts)
    } catch (error) {
      console.log(error)
    }
  }

  static async addBookToShopingCart(req, res) {
    try {
      const { user_id, book_id, quantity } = req.body;
      const member = await Member.findById(user_id);
      if (!member) {
        return res.status(404).send('Member not found');
      }
      let personalCart = member.personalCart;
      if (!personalCart) {
        personalCart = {
          books: [{id: book_id, quantity: quantity}],
        }
      } else {
        personalCart.books.push({id: book_id, quantity});
      }
      await member.updateOne({ personalCart });
      res.json(member.personalCart);
    } catch (error) {
      console.log(error)
    }
  }

  static async deleteItem(req, res) { 
    try {
      const user_id = req.params.user_id;
      const book_id = req.params.book_id;
      const member = await Member.findById(user_id);
      if (!member) {
        return res.status(404).send('Member not found');
      }
      console.log({user_id, book_id})
      const bookdata = member.personalCart.books.filter(book => book.id != book_id);
      console.log(bookdata)
      await member.updateOne({ personalCart: { books: bookdata } });
      res.json("success")
    } catch (error) {
      console.log(error)
    }
  }
} 

module.exports = ShopingCart;