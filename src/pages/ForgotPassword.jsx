// pages/ForgotPassword.jsx
import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import '../styles/pages/forgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your password reset logic here
    console.log('Reset link sent to:', email);
  };

  return (
    <div className="forgot-password-container">
      <section className="forgot-password-hero">
        <h1>{t("forgotPassword.title")}</h1>
        <p>{t("forgotPassword.description")}</p>
      </section>

      <section className="forgot-password-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">{t("forgotPassword.emailLabel")}</label>
          <input
            type="email"
            id="email"
            placeholder={t("forgotPassword.emailPlaceholder")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">{t("forgotPassword.resetButton")}</button>
        </form>
      </section>
    </div>
  );
};

export default ForgotPassword;
