import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutSuccess } from "../redux/authSlice"; // Import logout action
import "../styles/components/navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleLogout = () => {
    dispatch(logoutSuccess());
    navigate("/login");
  };

  return (
    <nav>
      <div className="container">
        <div className="left-section">
          <h1>
            <Link to="/">Product Manager</Link>
          </h1>
          {isAuthenticated && (
            <span className="welcome-message">Welcome, {user?.username}!</span>
          )}
        </div>
        <div className="right-section">
          {isAuthenticated ? (
            <>
              <Link to="/products" className="hover:underline">
                Products
              </Link>
              <Link to="/checkout" className="hover:underline">
                Checkout
              </Link>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
              <div className="cart-link">
                <Link to="/cart" className="cart-link">
                  Cart
                  {cartItems.length > 0 && (
                    <div className="cart-count">{cartItems.length}</div>
                  )}
                </Link>
              </div>
              <button onClick={handleLogout} className="logout-button">
                Logout
              </button>
            </>
          ) : (
            <div className="auth-links">
              <Link to="/login" className="hover:underline">
                Login
              </Link>
              <Link to="/register" className="hover:underline">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
