// pages/Register.jsx
import React from "react";
import "../styles/pages/register.css";

const Register = () => {
  return (
    <div>
      <div className="register-form">
        <h1>Register</h1>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone Number" required />
          <input type="text" placeholder="Address" required />
          <input type="text" placeholder="City" required />
          <input type="text" placeholder="State" required />
          <input type="text" placeholder="Postal Code" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit">Register</button>
        </form>
        <div className="already-registered">
          <p>Already have an account? <a href="/login">Login here</a></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
