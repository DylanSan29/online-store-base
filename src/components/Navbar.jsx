import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutSuccess } from "../redux/authSlice"; // Import logout action
import "../styles/components/navbar.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  // const totalItems = cartItems.reduce(
  //   (total, item) => total + item.quantity,
  //   0
  // );

  const handleLogout = () => {
    dispatch(logoutSuccess());
    navigate("/login");
  };

  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const { t } = useTranslation();

  return (
    <nav>
      <button onClick={() => changeLanguage("en")}>🇬🇧 English</button>
      <button onClick={() => changeLanguage("es")}>🇪🇸 Español</button>
      <div className="container">
        <div className="left-section">
          <h1>
            <Link to="/">{t("navBar.home")}</Link>
          </h1>
          {isAuthenticated && (
            <span className="welcome-message">
              {t("navBar.welcome", { username: user?.username })}
            </span>
          )}
        </div>
        <div className="right-section">
          {isAuthenticated ? (
            <>
              <Link to="/products" className="hover:underline">
                {t("navBar.products")}
              </Link>
              <Link to="/checkout" className="hover:underline">
                {t("navBar.checkout")}
              </Link>
              <Link to="/about" className="hover:underline">
                {t("navBar.about")}
              </Link>
              <Link to="/contact" className="hover:underline">
                {t("navBar.contact")}
              </Link>
              <div className="cart-link">
                <Link to="/cart" className="cart-link">
                  {t("navBar.cart")}
                  {cartItems.length > 0 && (
                    <div className="cart-count">{cartItems.length}</div>
                  )}
                </Link>
              </div>
              <button onClick={handleLogout} className="logout-button">
                {t("navBar.logout")}
              </button>
            </>
          ) : (
            <div className="auth-links">
              <Link to="/login" className="hover:underline">
                {t("navBar.login")}
              </Link>
              <Link to="/register" className="hover:underline">
                {t("navBar.signUp")}
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
