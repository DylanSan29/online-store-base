import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import InventoryHome from "../components/inventory/InventoryHome";
import InventoryProducts from "../components/inventory/InventoryProducts";
import InventoryOrders from "../components/inventory/InventoryOrders";
import InventoryUsers from "../components/inventory/InventoryUsers";
import InventoryAnalytics from "../components/inventory/InventoryAnalytics";

const Inventory = () => {
  return (
    <Routes>
      {/* Default Inventory Page */}
      <Route index element={<InventoryHome />} />

      {/* Subsections */}
      <Route path="products" element={<InventoryProducts />} />
      <Route path="orders" element={<InventoryOrders />} />
      <Route path="users" element={<InventoryUsers />} />
      <Route path="analytics" element={<InventoryAnalytics />} />

      {/* Redirect unknown routes to Inventory Home */}
      <Route path="*" element={<Navigate to="/inventory" />} />
    </Routes>
  );
};

export default Inventory;
