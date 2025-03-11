import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/authSlice";
import "../styles/pages/login.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    let userRole = null;

    if (email === "admin" && password === "123") {
      userRole = "admin";
    } else if (email === "client" && password === "123") {
      userRole = "client";
    } else {
      setError("The user or password are wrong");
      return;
    }

    console.log("Login successful");
    setError("");

    // Dispatch user data to Redux
    dispatch(loginSuccess({ username: email, role: userRole }));

    // Store authentication data in localStorage
    localStorage.setItem("authToken", "dummyAuthToken");
    localStorage.setItem("userRole", userRole);

    // Redirect based on role
    navigate("/");
  };

  return (
    <div className="auth-form">
      <h1>{t("loginScreen.login")}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={t("loginScreen.email")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder={t("loginScreen.password")}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{t("loginScreen.enter")}</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      <div className="forgot-password">
        <Link to="/forgot-password">{t("loginScreen.forgotPassword")}</Link>
      </div>
    </div>
  );
};

export default Login;
