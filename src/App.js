import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Inventory from "./pages/Inventory";
import ForgotPassword from "./pages/ForgotPassword";
import Layout from "./Layout";
import AdminLayout from "./AdminLayout"; 
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import InventoryProducts from "./components/inventory/InventoryProducts";
import InventoryOrders from "./components/inventory/InventoryOrders";
import InventoryUsers from "./components/inventory/InventoryUsers";
import InventoryAnalytics from "./components/inventory/InventoryAnalytics";
import "./i18n";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default Layout for Regular Users */}
        <Route path="/" element={<Layout />}>
          {/* Public Routes */}
          <Route path="login" element={<PublicRoute><Login /></PublicRoute>} />
          <Route path="register" element={<PublicRoute><Register /></PublicRoute>} />
          <Route path="forgot-password" element={<PublicRoute><ForgotPassword /></PublicRoute>} />

          {/* Private Routes */}
          <Route index element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="products" element={<PrivateRoute><Products /></PrivateRoute>} />
          <Route path="cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
          <Route path="checkout" element={<PrivateRoute><Checkout /></PrivateRoute>} />
          <Route path="product/:id" element={<PrivateRoute><ProductDetails /></PrivateRoute>} />
          <Route path="about" element={<PrivateRoute><AboutUs /></PrivateRoute>} />
          <Route path="contact" element={<PrivateRoute><Contact /></PrivateRoute>} />
        </Route>

        {/* Admin Layout for Inventory Section */}
        <Route path="/inventory" element={<PrivateRoute><AdminLayout /></PrivateRoute>}>
          <Route index element={<PrivateRoute><Inventory /></PrivateRoute>} />
          <Route path="products" element={<InventoryProducts />} />
          <Route path="orders" element={<InventoryOrders />} />
          <Route path="users" element={<InventoryUsers />} />
          <Route path="analytics" element={<InventoryAnalytics />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
