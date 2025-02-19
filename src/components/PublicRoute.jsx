// src/components/PublicRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("authToken"); // Cambia según tu lógica de autenticación

  return isAuthenticated ? <Navigate to="/" /> : children;
};

export default PublicRoute;
