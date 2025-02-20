// components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import "../styles/components/footer.css";

const Footer = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>{t("footer.aboutUs")}</h4>
          <img
            src="src/images/radiator-logo.jpg"
            alt="Company Logo"
            className="footer-image"
          />
          <p
            dangerouslySetInnerHTML={{
              __html: t("footer.description"),
            }}
          ></p>
        </div>

        {isAuthenticated && (
          <div className="footer-section">
            <h4>{t("footer.quickLinks")}</h4>
            <ul>
              <li>
                <Link to="/">{t("footer.home")}</Link>
              </li>
              <li>
                <Link to="/products">{t("footer.products")}</Link>
              </li>
              <li>
                <Link to="/about">{t("footer.about")}</Link>
              </li>
              <li>
                <Link to="/contact">{t("footer.contact")}</Link>
              </li>
            </ul>
          </div>
        )}

        <div className="footer-section">
          <h4>{t("footer.followUs")}</h4>
          <div className="social-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("footer.facebook")}
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("footer.twitter")}
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("footer.instagram")}
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
