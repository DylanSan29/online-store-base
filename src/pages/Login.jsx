import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/authSlice"; // Import loginSuccess action
import "../styles/pages/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // For showing error messages
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Initialize dispatch for Redux actions

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin" && password === "123") {
      console.log("Login successful");
      setError("");
      dispatch(loginSuccess({ username: email }));
      localStorage.setItem("authToken", "dummyAuthToken"); // Guarda un token de ejemplo
      navigate("/");
    }
     else {
      setError("The user or password are wrong");
    }
  };

  return (
    <div>
      <div className="auth-form">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text" // Simulating username/email input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        {error && <p className="error-message">{error}</p>} {/* Show error */}
        <div className="forgot-password">
          <a href="/forgot-password">Forgot your password?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
