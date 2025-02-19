import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("authToken"); // Cambia según cómo manejes la autenticación

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
