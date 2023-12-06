import Books from "../Books/Books";
import "./user.css";
import { useState } from "react";
import Cart from "../Cart/Cart";
import Order from "../Order/Order";

const User = () => {
  const [tab, setTab] = useState("home");
  return (
    <div className="admin_page content">
      <div className="admin_header">
        <h1>User</h1>
        <ul className="admin_nav">
          <li
            id="home"
            className="active"
            onClick={(e) => {
              setTab("home");
              e.target.classList.add("active");
              document.querySelector("#" + tab).classList.remove("active");
            }}
          >
            Home
          </li>
          <li
            id="cart"
            onClick={(e) => {
              setTab("cart");
              e.target.classList.add("active");
              document.querySelector("#" + tab).classList.remove("active");
            }}
          >
            Cart
          </li>
          <li
            id="order"
            onClick={(e) => {
              setTab("order");
              e.target.classList.add("active");
              document.querySelector("#" + tab).classList.remove("active");
            }}
          >
            Orders
          </li>
          <li>Logout</li>
        </ul>
      </div>
      {tab === "home" ? <Books /> : null}
      {tab === "cart" ? <Cart /> : null}
      {tab === "order" ? <Order /> : null}
    </div>
  );
};

export default User;
