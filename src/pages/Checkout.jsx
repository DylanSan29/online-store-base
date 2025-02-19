// pages/Checkout.jsx
import React, { useState } from "react";
import "../styles/pages/checkout.css";

const Checkout = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    creditCard: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert("Order placed successfully!");
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <h2>Shipping Details</h2>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          required
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          required
        />
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="City"
          required
        />

        <h2>Payment Options</h2>
        <input
          type="text"
          name="creditCard"
          value={formData.creditCard}
          onChange={handleChange}
          placeholder="Credit Card Number"
          required
        />

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
