// pages/Home.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/pages/home.css';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <section className="hero">
        <h1>{t("home.heroTitle")}</h1>
        <p>{t("home.heroDescription")}</p>
      </section>

      <section className="featured-products">
        <h2>{t("home.featuredProducts")}</h2>
        <div className="product-grid">
        </div>
      </section>

      <section className="testimonials">
        <h2>{t("home.testimonials")}</h2>
        <div>
          <blockquote>{t("home.testimonial1")}</blockquote>
          <blockquote>{t("home.testimonial2")}</blockquote>
        </div>
      </section>
    </div>
  );
};

export default Home;
