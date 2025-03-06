import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/AdminNavbar.css";
import { useTranslation } from "react-i18next";

const AdminNavbar = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  
  return (
    <nav className="admin-navbar">
      <Link to="/">🏠 Return to Home</Link>
      <div className="language-switcher">
        <button onClick={() => changeLanguage("en")}>🇬🇧</button>
        <button onClick={() => changeLanguage("es")}>🇪🇸</button>
      </div>
    </nav>
  );
};

export default AdminNavbar;
