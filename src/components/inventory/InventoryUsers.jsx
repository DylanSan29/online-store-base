import React, { useState } from "react";
import "../../styles/components/inventory/InventoryUsers.css";

const InventoryUsers = () => {
  // Sample user data
  const initialUsers = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "User", active: true },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin", active: true },
    { id: 3, name: "Alice Brown", email: "alice@example.com", role: "User", active: false },
    { id: 4, name: "Bob Johnson", email: "bob@example.com", role: "User", active: true },
  ];

  // State for users and search filter
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");

  // Handle search
  const handleSearchChange = (e) => setSearch(e.target.value.toLowerCase());

  // Toggle user activation status
  const toggleUserStatus = (id) => {
    setUsers(users.map(user => user.id === id ? { ...user, active: !user.active } : user));
  };

  // Update user role
  const updateUserRole = (id, newRole) => {
    setUsers(users.map(user => user.id === id ? { ...user, role: newRole } : user));
  };

  // Delete user
  const deleteUser = (id) => setUsers(users.filter(user => user.id !== id));

  return (
    <div className="inventory-users">
      <h1>👥 Manage Users</h1>
      <p>View, edit, and manage user accounts.</p>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="🔍 Search by name or email..."
        value={search}
        onChange={handleSearchChange}
        className="search-bar"
      />

      {/* Users Table */}
      <table className="users-table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter(user => user.name.toLowerCase().includes(search) || user.email.toLowerCase().includes(search))
            .map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <select
                    value={user.role}
                    onChange={(e) => updateUserRole(user.id, e.target.value)}
                    className="role-dropdown"
                  >
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                  </select>
                </td>
                <td>
                  <button 
                    className={`status-btn ${user.active ? "active" : "inactive"}`} 
                    onClick={() => toggleUserStatus(user.id)}
                  >
                    {user.active ? "Active ✅" : "Inactive ❌"}
                  </button>
                </td>
                <td>
                  <button className="delete-btn" onClick={() => deleteUser(user.id)}>
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

export default InventoryUsers;
