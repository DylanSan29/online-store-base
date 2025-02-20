// pages/Register.jsx
import React from "react";
import "../styles/pages/register.css";
import { useTranslation } from "react-i18next";

const Register = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="register-form">
        <h1>{t("signUpScreen.title")}</h1>
        <form>
          <input
            type="text"
            placeholder={t("signUpScreen.fullName")}
            required
          />
          <input type="email" placeholder={t("signUpScreen.email")} required />
          <input type="tel" placeholder={t("signUpScreen.phone")} required />
          <input type="text" placeholder={t("signUpScreen.address")} required />
          <input type="text" placeholder={t("signUpScreen.city")} required />
          <input type="text" placeholder={t("signUpScreen.state")} required />
          <input
            type="text"
            placeholder={t("signUpScreen.postalCode")}
            required
          />
          <input
            type="password"
            placeholder={t("signUpScreen.password")}
            required
          />
          <input
            type="password"
            placeholder={t("signUpScreen.confirmPassword")}
            required
          />
          <button type="submit">{t("signUpScreen.registerButton")}</button>
        </form>
        <div className="already-registered">
          <p>
            {t("signUpScreen.alreadyRegistered")}{" "}
            <a href="/login">{t("signUpScreen.loginHere")}</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
