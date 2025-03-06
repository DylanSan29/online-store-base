import React from "react";
import { Link } from "react-router-dom";
import "../../styles/components/inventory/InventoryHome.css"; 

const InventoryHome = () => {
  return (
    <div className="inventory-home">
      <header className="inventory-header">
        <h1>📦 Inventory Dashboard</h1>
        <p>Manage your store efficiently with real-time insights.</p>
      </header>

      <section className="inventory-stats">
        <div className="stat-card">
          <h3>🛒 Total Products</h3>
          <p>320</p>
          <Link to="/inventory/products">View Products</Link>
        </div>
        <div className="stat-card">
          <h3>📋 Pending Orders</h3>
          <p>15</p>
          <Link to="/inventory/orders">Manage Orders</Link>
        </div>
        <div className="stat-card">
          <h3>👥 Active Users</h3>
          <p>1,204</p>
          <Link to="/inventory/users">View Users</Link>
        </div>
        <div className="stat-card">
          <h3>📊 Monthly Revenue</h3>
          <p>$12,750</p>
          <Link to="/inventory/analytics">View Reports</Link>
        </div>
      </section>

      <section className="recent-orders">
        <h2>📋 Recent Orders</h2>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Status</th>
                <th>Amount</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#10234</td>
                <td>John Doe</td>
                <td>✅ Completed</td>
                <td>$120.00</td>
                <td><Link to="/inventory/orders">View</Link></td>
              </tr>
              <tr>
                <td>#10235</td>
                <td>Jane Smith</td>
                <td>⏳ Pending</td>
                <td>$85.00</td>
                <td><Link to="/inventory/orders">View</Link></td>
              </tr>
              <tr>
                <td>#10236</td>
                <td>Michael Lee</td>
                <td>🚚 Shipped</td>
                <td>$150.00</td>
                <td><Link to="/inventory/orders">View</Link></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="quick-links">
        <h2>🔗 Quick Actions</h2>
        <div className="action-buttons">
          <Link to="/inventory/products" className="btn">🛒 Manage Products</Link>
          <Link to="/inventory/orders" className="btn">📋 Manage Orders</Link>
          <Link to="/inventory/users" className="btn">👥 Manage Users</Link>
          <Link to="/inventory/analytics" className="btn">📊 View Reports</Link>
        </div>
      </section>
    </div>
  );
};

export default InventoryHome;
