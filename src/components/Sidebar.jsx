import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/sidebar.css"; // Create this file for styling

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/inventory/">🏠 Inventory Home</Link></li>
        <li><Link to="/inventory/products">📦 Products</Link></li>
        <li><Link to="/inventory/orders">📋 Orders</Link></li>
        <li><Link to="/inventory/users">👥 Users</Link></li>
        <li><Link to="/inventory/analytics">📊 Analytics</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
