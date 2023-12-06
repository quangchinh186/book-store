import React from "react";
import { useState } from "react";
import "./cart_item.css";

const CartItem = ({ item, onRemove }) => {
  const [quantity, setQuantity] = useState(item.quantity);

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
        <button>Order</button>
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  );
};

export default CartItem;
