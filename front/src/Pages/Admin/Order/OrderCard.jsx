import React from "react";
import "./ordercard.css";

function OrderCard({order}) {
  return (
    <div className="Order">
      <div className="book-information">
        <div className="bookInfo">
          <span>ID: {order.id}</span>
          <span>Quantity: {order.quantity}</span>
        </div>
        <div className="bookInfo">
          <span>Order Date: {order.orderDate}</span>
        </div>
        <div className="bookInfo">
          <span>Address: {order.address}</span>
          <span>ShipDate: {order.shipDate}</span>
          <span>ShippingStatus: {order.shippingStatus}</span>
          <span>Deliver Method: {order.deliverMethod}</span>
        </div>
        <div className="bookInfo">
          <span>Price: {order.price}</span>
          <span>Discount: {order.discount}</span>
          <span>Payment Method: {order.paymentMethod}</span>
          <span>Payment Status: {order.paymentStatus}</span>
        </div>
        <div className="bookInfo">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
