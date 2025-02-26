import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/navbar.css";
import { useTranslation } from "react-i18next";

const AdminNavbar = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  
  return (
    <nav className="admin-navbar">
      <button onClick={() => changeLanguage("en")}>🇬🇧 English</button>
      <button onClick={() => changeLanguage("es")}>🇪🇸 Español</button>
      <Link to="/">🏠 Return to Home</Link>
    </nav>
  );
};

export default AdminNavbar;
