import OrderCard from "./OrderCard";

const Orders = ({}) => {
  const orders = [
    {
      id: 21021467,
      quantity: 727,
      orderDate: "2023-12-06",
      address: "123 Main St, Cityville",
      shipDate: "2023-12-08",
      shippingStatus: "Shipped",
      deliverMethod: "Express",
      price: 29.99,
      discount: 5.0,
      paymentMethod: "Credit Card",
      paymentStatus: "Paid",
    },
    {
      id: 21021468,
      quantity: 500,
      orderDate: "2023-12-07",
      address: "456 Oak St, Townsville",
      shipDate: "2023-12-10",
      shippingStatus: "In Transit",
      deliverMethod: "Standard",
      price: 19.99,
      discount: 2.5,
      paymentMethod: "PayPal",
      paymentStatus: "Pending",
    },
    {
      id: 21021469,
      quantity: 300,
      orderDate: "2023-12-08",
      address: "789 Pine St, Villageland",
      shipDate: "2023-12-12",
      shippingStatus: "Delivered",
      deliverMethod: "Priority",
      price: 39.99,
      discount: 7.5,
      paymentMethod: "Debit Card",
      paymentStatus: "Paid",
    },
    {
      id: 21021470,
      quantity: 1000,
      orderDate: "2023-12-09",
      address: "101 Cedar St, Hamletville",
      shipDate: "2023-12-14",
      shippingStatus: "Shipped",
      deliverMethod: "Express",
      price: 49.99,
      discount: 10.0,
      paymentMethod: "Credit Card",
      paymentStatus: "Paid",
    },
    {
      id: 21021471,
      quantity: 150,
      orderDate: "2023-12-10",
      address: "202 Birch St, Countryside",
      shipDate: "2023-12-16",
      shippingStatus: "In Transit",
      deliverMethod: "Standard",
      price: 24.99,
      discount: 3.0,
      paymentMethod: "PayPal",
      paymentStatus: "Pending",
    },
    {
      id: 21021472,
      quantity: 600,
      orderDate: "2023-12-11",
      address: "303 Maple St, Riverside",
      shipDate: "2023-12-18",
      shippingStatus: "Delivered",
      deliverMethod: "Priority",
      price: 34.99,
      discount: 6.0,
      paymentMethod: "Debit Card",
      paymentStatus: "Paid",
    },
  ];
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
