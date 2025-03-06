import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/components/sidebar.css"; // Estilos

const Sidebar = () => {
  // Estado para controlar si el sidebar está abierto o cerrado
  const [isOpen, setIsOpen] = useState(true);

  // Función para alternar la visibilidad del sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <button className="menu-toggle" onClick={toggleSidebar}>
        {isOpen ? "☰" : "☰"}
      </button>
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
