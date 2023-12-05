const OrderModel = require("../schema/Order");
const Book = require("../schema/Book");

class OrderService {
  static async createOrder(req, res) {
    try {
      await OrderModel.create(req.body);
    } catch (err) {
      res.json(err);
    }
  }

  static async getOrder(req, res) {
    try {
      const id = req.params.id;
      const orders = await OrderModel.findById(id);
      if (!orders) {
        return res.status(404).send("Order not found");
      }
      res.json(orders);
    } catch (err) {
      res.json(err);
    }
  }

  static async updateOrder(req, res) {
    try {
      await OrderModel.updateOne({ _id: req.params.id }, req.body);
    } catch (err) {
      res.json(err);
    }
  }

  static async getListOfOrders(req, res) {
    try {
      const orders = await OrderModel.find();
      res.json(orders);
    } catch (err) {
      res.json(err);
    }
  }

  static async cancelOrder(req, res) {
    try {
      const order = await OrderModel.findById(req.params.id);
      if (!order) {
        return res.status(404).send("Order not found");
      }
      await order.books.forEach(async (book) => {
        const bookId = book.id;
        const bookQuantity = book.quantity;
        const bookdata = await Book.findById(bookId);
        bookdata.quantity += bookQuantity;
        await bookdata.save();
      });
      await OrderModel.deleteOne({ _id: req.params.id });
      res.json(order);
    } catch (err) {
      res.json(err);
    }
  } 
}

module.exports = OrderService;