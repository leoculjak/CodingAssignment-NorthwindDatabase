import React, { useState, useEffect } from "react";

export interface OrderProps {}

export interface Order {
  orderId: number;
  customerId: string;
  orderDate: string;
  shipCountry: string;
  productName: string;
  unitPrice: number;
  supplierId: number;
  companyName: string;
  city: string;
  categoryId: number;
  categoryName: string;
}

const Order: React.FC<OrderProps> = (props) => {
  const [orders, setOrders] = useState<Order[]>([]);

  const getOrders = async () => {
    let p = await fetch("https://localhost:5001/api/order");
    let data = await p.json();
    setOrders(data);
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div>
      <div className="table">
        <thead>
          <tr>
            <th>orderId</th>
            <th>customerId</th>
            <th>orderDate</th>
            <th>shipCountry</th>
            <th>productName</th>
            <th>unitPrice</th>
            <th>supplierId</th>
            <th>companyName</th>
            <th>city</th>
            <th>categoryId</th>
            <th>categoryName</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr>
              <td>{order.orderId}</td>
              <td>{order.customerId}</td>
              <td>{order.orderDate}</td>
              <td>{order.shipCountry}</td>
              <td>{order.productName}</td>
              <td>{order.unitPrice}</td>
              <td>{order.supplierId}</td>
              <td>{order.companyName}</td>
              <td>{order.city}</td>
              <td>{order.categoryId}</td>
              <td>{order.categoryName}</td>
            </tr>
          ))}
        </tbody>
      </div>
    </div>
  );
};

export default Order;
