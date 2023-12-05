const Book = require('../schema/Book');
const Member = require('../schema/Member');

class RentalService {
  static async rentBook(req, res) {
    try {
      const book = await Book.findById(req.params.book_id);
      const member = await Member.findById(req.params.user_id);
      if (!book) {
        return res.status(404).send('Book not found');
      }
      if (!member) {
        return res.status(404).send('Member not found');
      }
      book.quantity -= 1;
      const rental = {
        planPrice: 0,
        planStartDate: Date.now(),
        planEndDate: Date.now() + Math.floor(Math.random() * 1000000000),
        planType: 'rental',
        planStatus: 'active',
        planDescription: 'rental book',
        bookId: book._id,
      }
      member.rentalPlan.push(rental);
      await member.save();
      await book.save();
      res.json(rental);
    } catch (error) {
      res.json(error);
    }
  }

  static async checkRentalPlan(req, res) {
    try {
      const id = req.params.user_id;
      const member = await Member.findById(id);
      if (!member) {
        return res.status(404).send('Member not found');
      }
      res.json(member.rentalPlan);
    } catch (error) {
      res.json(error);
    }
  }
}

module.exports = RentalService;