import "./cart.css";
import axios from "axios";
import { useEffect, useState } from "react";
import CartItem from "./CartItem";

const Cart = () => {
  const [cart, setCart] = useState([]);

  const onFetch = async () => {
    try {
      const user_id = sessionStorage.getItem("user_id");
      console.log(user_id);
      const res = await axios.get(`http://localhost:3001/cart/view/${user_id}`);
      console.log(res.data);
      setCart(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const onRemove = async (id) => {
    try {
      const user_id = sessionStorage.getItem("user_id");
      await axios.delete(`http://localhost:3001/cart/delete/${user_id}/${id}`);
      onFetch();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    onFetch();
  }, []);

  return (
    <div className="cart_page">
      <div className="cart_container">
        {cart.map((item) => (
          <CartItem
            item={item}
            onRemove={onRemove.bind(null, item.bookdata._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
