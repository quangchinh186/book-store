import OrderCard from "./OrderCard";
import axios from "axios";
import { useState } from "react";

const Orders = ({}) => {
  const [orders, setOrders] = useState([]);

  const onFetchOrders = async () => {
    const user_id = sessionStorage.getItem("user_id");
    const response = await axios.get(
      `http://localhost:3001/order/get_list_order/${user_id}`
    );
    const orders = response.data;
    setOrders(orders);
  };

  useState(() => {
    onFetchOrders();
  }, []);

  return (
    <div className="order-management">
      <div className="order-container">
        {orders.map((order) => (
          <OrderCard order={order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
