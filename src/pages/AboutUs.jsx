import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/pages/about.css";

const About = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="about">
      <section className="intro">
        <h1>{t("aboutUs.title")}</h1>
        <p>{t("aboutUs.intro")}</p>
      </section>

      <section className="mission">
        <h2>{t("aboutUs.missionTitle")}</h2>
        <p>{t("aboutUs.missionText")}</p>
      </section>

      <section className="history">
        <h2>{t("aboutUs.historyTitle")}</h2>
        <p>{t("aboutUs.historyText")}</p>
      </section>

      <section className="team">
        <h2>{t("aboutUs.teamTitle")}</h2>
        <div className="team-members">
          {t("aboutUs.teamMembers", { returnObjects: true }).map((member, index) => (
            <div className="team-member" key={index}>
              <img src={member.img} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials">
        <h2>{t("aboutUs.testimonialsTitle")}</h2>
        {t("aboutUs.testimonials", { returnObjects: true }).map((testimonial, index) => (
          <div className="testimonial" key={index}>
            <p>"{testimonial.text}" - {testimonial.author}</p>
          </div>
        ))}
      </section>

      <section className="cta">
        <h2>{t("aboutUs.ctaTitle")}</h2>
        <p>{t("aboutUs.ctaText")}</p>
        <button className="cta-button" onClick={() => navigate("/contact")}>
          {t("aboutUs.contactButton")}
        </button>
      </section>
    </div>
  );
};

export default About;
