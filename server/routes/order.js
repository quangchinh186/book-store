const express = require("express");
const route = express.Router();
const OrderService = require("../services/OrderService");

route.post("/addOrder", OrderService.createOrder);

route.get("/getOrder", OrderService.getOrder);

route.put("/editOrder/:id", OrderService.updateOrder);

route.delete("/cancel/:id", OrderService.cancelOrder);

route.get("/get_list_order/:user_id", OrderService.getListOfOrdersByUser);

route.get("/get_list_order", OrderService.getListOfOrders);

module.exports = route;