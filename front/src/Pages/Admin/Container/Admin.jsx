import { useState, useEffect } from "react";
import AdminHome from "../Home/AdminHome";
import CreateNewBook from "../CNB/CreateNewBook";
import "./admin.css";

const Admin = () => {
  const [tab, setTab] = useState("home");
  return (
    <div className="admin_page content">
      <div className="admin_header">
        <h1>Admin</h1>
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
            id="cnb"
            onClick={(e) => {
              setTab("cnb");
              e.target.classList.add("active");
              document.querySelector("#" + tab).classList.remove("active");
            }}
          >
            Create New Book
          </li>
          <li
            id="order"
            onClick={(e) => {
              setTab("order");
              e.target.classList.add("active");
              document.querySelector("#" + tab).classList.remove("active");
            }}
          >
            Orders Management
          </li>
          <li>Logout</li>
        </ul>
      </div>
      {tab == "home" && <AdminHome />}
      {tab == "cnb" && <CreateNewBook />}
      {tab == "order" && <h1>Orders Management</h1>}
    </div>
  );
};

export default Admin;
