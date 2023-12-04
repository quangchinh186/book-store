const express = require("express");
const route = express.Router();
const OrderModel = require("../schema/order");

route.post("/addOrder", async (req, res) => {
  try {
    await OrderModel.create(req.body);
  } catch (err) {
    res.json(err);
  }
});

route.get("/getOrder", (req, res) => {
  OrderModel.find({}).then(result => res.json(result)).catch(err => res.json(err));
});

route.put("/editOrder/:id", async (req, res) => {
  OrderModel.findByIdAndUpdate(req.params.id, req.body);
});

route.delete("/deleteOrder/:id", async (req, res) => {
  await OrderModel.findByIdAndDelete(req.params.id);
});

module.exports = route;