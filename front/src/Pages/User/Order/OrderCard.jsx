import React from "react";
import "./ordercard.css";

function OrderCard({ order }) {
  return (
    <div className="Order">
      <div className="book-information">
        <div className="bookInfo">
          <span>Customer ID: {order.user_id}</span>
          <span>Customer Name: {order.orderer}</span>
        </div>
        <div className="bookInfo">
          <span>ID: {order.book.id}</span>
          <span>Quantity: {order.book.quantity}</span>
        </div>
        <div className="bookInfo">
          <span>Order Date: {order.orderDate}</span>
        </div>
        <div className="bookInfo">
          <span>Address: {order.address}</span>
          <span>ShipDate: {Date(order.shipDate)}</span>
          <span>ShippingStatus: {order.shippingStatus}</span>
          <span>Deliver Method: {order.deliveryMethod}</span>
        </div>
        <div className="bookInfo">
          <span>Price: {order.totalPrice}</span>
          <span>Discount: {order.discount}</span>
          <span>Payment Method: {order.paymentMethod}</span>
          <span>Payment Status: {order.paymentStatus}</span>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
