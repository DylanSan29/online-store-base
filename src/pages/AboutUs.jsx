import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/pages/about.css";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="about">
      <section className="intro">
        <h1>About Us</h1>
        <p>
          We specialize in high-quality radiators for all your heating needs.
        </p>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          To deliver the best heating solutions with exceptional service. We are
          committed to providing our customers with reliable, energy-efficient,
          and long-lasting heating products.
        </p>
      </section>

      <section className="history">
        <h2>Our History</h2>
        <p>
          Established in 1995, we started as a small family-owned business. Over
          the years, we’ve grown into a trusted name in the heating industry,
          serving thousands of happy customers worldwide.
        </p>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="path/to/team-member1.jpg" alt="John Doe" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="path/to/team-member2.jpg" alt="Jane Smith" />
            <h3>Jane Smith</h3>
            <p>Chief Engineer</p>
          </div>
          <div className="team-member">
            <img src="path/to/team-member3.jpg" alt="Alex Johnson" />
            <h3>Alex Johnson</h3>
            <p>Customer Support Lead</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial">
          <p>
            "These radiators transformed our home. Efficient, beautiful, and
            reliable!" - Sarah L.
          </p>
        </div>
        <div className="testimonial">
          <p>
            "Exceptional customer service and an amazing product. Highly
            recommended!" - David P.
          </p>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Transform Your Heating Experience?</h2>
        <p>
          Contact us today to learn more about our products or place your order.
          We’re here to help you find the perfect solution for your needs.
        </p>
        <button className="cta-button" onClick={() => navigate("/contact")}>
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default About;
