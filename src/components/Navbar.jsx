import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutSuccess } from "../redux/authSlice";
import "../styles/components/navbar.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const isAdmin = user?.role === "admin";
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logoutSuccess());
    navigate("/login");
  };

  const { i18n, t } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav>
      <div className="container">
        {/* Left Section */}
        <div className="left-section">
          {/* Contenedor para agrupar el botón y los elementos en la vista responsiva */}
          <div className="left-content">
            {/* Hamburger Menu Button - Now on the Left */}
            <button
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>

            {isAuthenticated && (
              <>
                <h1>
                  <Link to="/">{t("navBar.home")}</Link>
                </h1>
                <span className="welcome-message">
                  {t("navBar.welcome", { username: user?.username })}
                </span>
              </>
            )}
          </div>
        </div>

        {/* Right Section - Navigation Links */}
        <div className={`right-section ${menuOpen ? "active" : ""}`}>
          {isAuthenticated ? (
            <>
              <Link to="/products">{t("navBar.products")}</Link>
              <Link to="/about">{t("navBar.about")}</Link>
              <Link to="/contact">{t("navBar.contact")}</Link>

              <div className="cart-link">
                <Link to="/cart">
                  {t("navBar.cart")}
                  {cartItems.length > 0 && (
                    <div className="cart-count">{cartItems.length}</div>
                  )}
                </Link>
              </div>

              {isAdmin && <Link to="/inventory">{t("navBar.inventory")}</Link>}

              <button onClick={handleLogout} className="logout-button">
                {t("navBar.logout")}
              </button>
            </>
          ) : (
            <div className="auth-links">
              <Link to="/login">{t("navBar.login")}</Link>
              <Link to="/register">{t("navBar.signUp")}</Link>
            </div>
          )}
          <select
            onChange={(e) => changeLanguage(e.target.value)}
            className="language-select"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
