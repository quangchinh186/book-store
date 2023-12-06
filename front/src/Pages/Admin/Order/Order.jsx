import OrderCard from "./OrderCard";
import axios from "axios";
import { useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const onCancel = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/order/cancel/${id}`);
      onFetchOrders();
    } catch (err) {
      console.log(err);
    }
  };

  const onFetchOrders = async () => {
    const response = await axios.get(
      "http://localhost:3001/order/get_list_order"
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
          <OrderCard order={order} onCancel={onCancel.bind(null, order._id)} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
