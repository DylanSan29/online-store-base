import React, { useState } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "../../styles/components/inventory/InventoryAnalytics.css";

const InventoryAnalytics = () => {
  // Mock Sales Data
  const [salesData] = useState({
    totalSales: 10500,
    totalRevenue: 75000,
    totalOrders: 250,
  });

  // Mock Best-Selling Products
  const bestSellers = [
    { id: 1, name: "Wireless Headphones", sales: 150 },
    { id: 2, name: "Smartphone X", sales: 120 },
    { id: 3, name: "Laptop Pro", sales: 90 },
  ];

  // Mock Recent Orders
  const recentOrders = [
    { id: 1, customer: "John Doe", total: "$250", date: "2025-02-24" },
    { id: 2, customer: "Alice Brown", total: "$120", date: "2025-02-23" },
    { id: 3, customer: "Bob Johnson", total: "$90", date: "2025-02-22" },
  ];

  // Mock Sales Chart Data (Revenue per Month)
  const salesChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Revenue ($)",
        data: [5000, 7000, 6500, 8000, 9000, 10000, 11000, 9500, 8700, 9800, 10200, 11000],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="inventory-analytics">
      <h1>📊 Sales & Analytics</h1>
      <p>View sales reports and business analytics.</p>

      {/* Sales Overview */}
      <div className="sales-overview">
        <div className="sales-card">💰 Total Revenue: <strong>${salesData.totalRevenue}</strong></div>
        <div className="sales-card">📦 Total Sales: <strong>{salesData.totalSales}</strong></div>
        <div className="sales-card">🛒 Total Orders: <strong>{salesData.totalOrders}</strong></div>
      </div>

      {/* Best-Selling Products */}
      <h2>🔥 Best-Selling Products</h2>
      <ul className="best-sellers">
        {bestSellers.map((product) => (
          <li key={product.id}>{product.name} - <strong>{product.sales} sales</strong></li>
        ))}
      </ul>

      {/* Recent Orders */}
      <h2>📌 Recent Orders</h2>
      <table className="recent-orders">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Total</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {recentOrders.map((order) => (
            <tr key={order.id}>
              <td>{order.customer}</td>
              <td>{order.total}</td>
              <td>{order.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Sales Chart */}
      <h2>📈 Sales Growth</h2>
      <div className="chart-container">
        <Line data={salesChartData} />
      </div>
    </div>
  );
};

export default InventoryAnalytics;
