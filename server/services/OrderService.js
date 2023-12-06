const OrderModel = require("../schema/Order");
const Member = require("../schema/Member");
const Book = require("../schema/Book");

class OrderService {
  static async createOrder(req, res) {
    try {
      console.log(req.body);
      await OrderModel.create(req.body);
      const member = await Member.findById(req.body.user_id);
      const newCart = member.personalCart.books.filter(
        (book) => book.id != req.body.book.id
      );
      await Book.updateOne(
        { _id: req.body.book.id },
        { $inc: { quantity: -req.body.book.quantity } }
      );
      await member.updateOne({ personalCart: { books: newCart } });
      res.json("Order created");
    } catch (err) {
      console.log(err);
    }
  }

  static async getOrder(req, res) {
    try {
      const id = req.params.id;
      const orders = await OrderModel.findById(id);
      const user = await Member.findById(orders.user_id);
      if (!orders) {
        return res.status(404).send("Order not found");
      }
      if (!user) {
        return res.status(404).send("User not found");
      }
      const result = { ...orders, orderer: user.fullname };
      console.log(result);
      res.json(result);
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
      const members = await Member.find({
        "_id": { $in: orders.map(order => order.user_id) }
      })
      const memberNameHash = {};
      members.forEach(member => {
        memberNameHash[member._id] = member.fullname;
      })
      const result = [];
      for (let i = 0; i < orders.length; i++) {
        result.push({
          ...orders[i]._doc,
          orderer: memberNameHash[orders[i].user_id]
        })
      }
      res.json(result);
    } catch (err) {
      console.log(err);
    }
  }

  static async getListOfOrdersByUser(req, res) {
    try {
      const orders = await OrderModel.find({ user_id: req.params.user_id });
      const members = await Member.findById(req.params.user_id);
      const result = [];
      for (let i = 0; i < orders.length; i++) {
        result.push({
          ...orders[i]._doc,
          orderer: members.fullname
        })
      }
      res.json(result);
    } catch (err) {
      console.log(err);
    }
  }

  static async cancelOrder(req, res) {
    try {
      const order = await OrderModel.findById(req.params.id);
      if (!order) {
        return res.status(404).send("Order not found");
      }
      const bookId = order.book.id;
      const bookQuantity = order.book.quantity;
      await Book.updateOne(
        { _id: bookId },
        { $inc: { quantity: bookQuantity } }
      );
      await OrderModel.deleteOne({ _id: req.params.id });
      res.json(order);
    } catch (err) {
      console.log(err);
    }
  } 
}

module.exports = OrderService;