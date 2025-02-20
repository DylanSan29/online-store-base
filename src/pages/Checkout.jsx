// pages/Checkout.jsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/pages/checkout.css";

const Checkout = () => {
  const { t } = useTranslation();
  
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
    alert(t("checkout.orderSuccess"));
  };

  return (
    <div className="checkout">
      <h1>{t("checkout.title")}</h1>
      <form onSubmit={handleSubmit}>
        <h2>{t("checkout.shippingDetails")}</h2>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder={t("checkout.fullName")}
          required
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder={t("checkout.address")}
          required
        />
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder={t("checkout.city")}
          required
        />

        <h2>{t("checkout.paymentOptions")}</h2>
        <input
          type="text"
          name="creditCard"
          value={formData.creditCard}
          onChange={handleChange}
          placeholder={t("checkout.creditCard")}
          required
        />

        <button type="submit">{t("checkout.placeOrder")}</button>
      </form>
    </div>
  );
};

export default Checkout;
