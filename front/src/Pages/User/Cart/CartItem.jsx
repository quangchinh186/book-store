import React from "react";
import { useState } from "react";
import "./cart_item.css";
import axios from "axios";

const CartItem = ({ item, onRemove, onFetch }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const onOrder = async (id) => {
    try {
      const user_id = sessionStorage.getItem("user_id");
      await axios.post(`http://localhost:3001/order/addOrder`, {
        user_id: user_id,
        orderDate: Date.now(),
        shippingStatus: "Pending",
        shipDate: Date.now() + 100000000,
        book: {
          id: id,
          quantity: quantity,
        },
        address: "addressless",
        totalPrice: Math.round(item.bookdata.price * quantity * 100) / 100,
        paymentAmount: Math.round(item.bookdata.price * quantity * 100) / 100,
        paymentMethod: "COD",
        paymentStatus: "Pending",
        deliveryMethod: "Standard",
        discount: 0,
      });
      onFetch();
    } catch (err) {
      console.log(err);
    }
  };

  const onIncrease = () => {
    if (quantity < item.bookdata.quantity) {
      setQuantity(quantity + 1);
    }
  };

  const onDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="cart_item">
      <h1>{item.bookdata.title}</h1>
      <p>{item.bookdata.description}</p>
      <div className="row">
        <p>Price: {Math.round(item.bookdata.price * quantity * 100) / 100}</p>
        <p>Quantity: {quantity}</p>
      </div>
      <div className="cart_item_btn">
        <button onClick={onRemove}>Remove</button>
        <button onClick={onOrder.bind(null, item.bookdata._id)}>Order</button>
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  );
};

export default CartItem;
