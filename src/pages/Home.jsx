import React from 'react';
import '../styles/pages/home.css';

const Home = () => {
  return (
    <div>
      <section className="hero">
        <h1>Welcome to Radiator World</h1>
        <p>Your trusted source for high-quality radiators.</p>
      </section>
      
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
        </div>
      </section>
      
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div>
          <blockquote>"Best radiators ever!" - John Doe</blockquote>
          <blockquote>"Great quality and fast delivery." - Jane Smith</blockquote>
        </div>
      </section>
    </div>
  );
};

export default Home;
