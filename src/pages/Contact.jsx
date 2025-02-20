// pages/Contact.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/pages/contact.css";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="contact">
      <h1>{t("contact.title")}</h1>
      <form>
        <input type="text" placeholder={t("contact.namePlaceholder")} required />
        <input type="email" placeholder={t("contact.emailPlaceholder")} required />
        <textarea placeholder={t("contact.messagePlaceholder")} required></textarea>
        <button type="submit">{t("contact.submitButton")}</button>
      </form>
    </div>
  );
};

export default Contact;
