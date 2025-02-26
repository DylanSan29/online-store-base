import React, { useState } from "react";
import "../../styles/components/inventory/InventoryOrders.css";

const InventoryOrders = () => {
  // Sample order data
  const initialOrders = [
    { id: 101, customer: "John Doe", total: 250, status: "Processing", date: "2024-02-01" },
    { id: 102, customer: "Jane Smith", total: 450, status: "Shipped", date: "2024-02-02" },
    { id: 103, customer: "Alice Brown", total: 120, status: "Delivered", date: "2024-02-03" },
    { id: 104, customer: "Bob Johnson", total: 320, status: "Cancelled", date: "2024-02-04" },
  ];

  // State for orders and search filter
  const [orders, setOrders] = useState(initialOrders);
  const [search, setSearch] = useState("");

  // Order status options
  const statusOptions = ["Processing", "Shipped", "Delivered", "Cancelled"];

  // Handle search
  const handleSearchChange = (e) => setSearch(e.target.value.toLowerCase());

  // Update order status
  const updateOrderStatus = (id, newStatus) => {
    setOrders(orders.map(order => (order.id === id ? { ...order, status: newStatus } : order)));
  };

  // Delete order
  const deleteOrder = (id) => setOrders(orders.filter(order => order.id !== id));

  return (
    <div className="inventory-orders">
      <h1>📋 Manage Orders</h1>
      <p>View and process customer orders.</p>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="🔍 Search by customer name..."
        value={search}
        onChange={handleSearchChange}
        className="search-bar"
      />

      {/* Orders Table */}
      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Total ($)</th>
            <th>Status</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders
            .filter(order => order.customer.toLowerCase().includes(search))
            .map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>${order.total}</td>
                <td>
                  <select
                    value={order.status}
                    onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                    className={`status-dropdown ${order.status.toLowerCase()}`}
                  >
                    {statusOptions.map(status => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                </td>
                <td>{order.date}</td>
                <td>
                  <button className="delete-btn" onClick={() => deleteOrder(order.id)}>
                    🗑 Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryOrders;
